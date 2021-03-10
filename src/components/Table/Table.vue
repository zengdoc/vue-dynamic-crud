<template>
    <div ref="tableEl" class="m-table">
        <Search :config="searchConfig" v-on="$listeners"/>
        <Toolbar :config="toolbarConfig" :selection="selectRows" @command="onCommand"/>
        <el-table
                :data="data"
                v-bind="$attrs"
                v-on="$listeners"
                @selection-change="onSelectionChange">
            <el-table-column
                    v-if="selectionVisible"
                    type="selection"
                    width="55">
            </el-table-column>
            <TableColumn
                    v-for="item in config"
                    :key="item.prop"
                    :item="item"
            />
            <el-table-column
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button
                            v-for="item in columnOperation"
                            :key="item.event"
                            @click="onCommand(item.event, scope.row)"
                            type="text"
                            size="small">{{item.label}}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                class="m-pagination"
                :current-page.sync="currentPage"
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="total"
                @current-change="currentPageChange">
        </el-pagination>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Provide, Emit, Vue, Watch, Ref } from 'vue-property-decorator';
    import Search from './Search.vue';
    import Toolbar from './Toolbar.vue';
    import TableColumn from './TableColumn.vue';
    import { exitFullScreen, isFullScreen, launchFullScreen } from '@/utils';
    import { TABLE_OPERATION_CONFIG, TOOLBAR_PROP } from './config';

    @Component({
        components: {
            Search,
            Toolbar,
            TableColumn,
        },
    })
    export default class GTable extends Vue {
        @Prop()
        searchConfig!: TableType.SearchConfig;
        @Prop({ default: () => [
            TOOLBAR_PROP.CREATE,
            TOOLBAR_PROP.EDIT,
            TOOLBAR_PROP.DELETE,
            TOOLBAR_PROP.REFRESH,
            TOOLBAR_PROP.FULL_SCREEN,
        ]})
        toolbarConfig!: TableType.Toolbar;
        @Prop({ default: () => [] })
        data!: TableType.Data;
        @Prop({ required: true })
        config!: TableType.Config;
        @Prop()
        total!: number;
        @Prop({ default: 10 })
        pageSize!: number;
        @Prop({ default: 1 })
        pageNo!: number;

        @Ref()
        readonly tableEl!: HTMLElement;

        get selectionVisible() {
            return this.toolbarConfig.filter(c =>
                c === TOOLBAR_PROP.CREATE ||
                c === TOOLBAR_PROP.EDIT ||
                c === TOOLBAR_PROP.DELETE).length > 0;
        }

        get columnOperation() {
            return TABLE_OPERATION_CONFIG.filter(item => _.includes(this.toolbarConfig, item.event));
        }

        @Provide()
        currentPage: number = this.pageNo;
        @Provide()
        selectRows: TableType.Data = [];

        @Watch('pageNo')
        pageNoChange(n) {
            this.currentPage = this.pageNo;
        }

        @Emit()
        currentPageChange() {
            return this.currentPage;
        }

        @Emit('command')
        onCommand(event, item?) {
            switch (event) {
                case TOOLBAR_PROP.DELETE:
                    return { event, item: this.selectRows };
                case TOOLBAR_PROP.FULL_SCREEN:
                    this.onFullScreen();
                    break;
                case TOOLBAR_PROP.EXIT_FULL_SCREEN:
                    this.onExitFullScreen();
                    break;
                default:
                    break;
            }
            return { event, item };
        }

        beforeMount() {
            this.bindEvent();
        }

        beforeDestroy() {
            this.unbindEvent();
        }

        bindEvent() {
            window.addEventListener('fullscreenchange', this.onFullScreenChange);
        }

        unbindEvent() {
            window.removeEventListener('fullscreenchange', this.onFullScreenChange);
        }

        onFullScreen() {
            try {
                launchFullScreen(this.tableEl);
            } catch (e) {
                return;
            }
        }

        onExitFullScreen() {
            try {
                exitFullScreen();
            } catch (e) {
                return;
            }
        }

        onFullScreenChange() {
            if (isFullScreen()) {
                const fullScreenIndex = this.toolbarConfig.indexOf(TOOLBAR_PROP.FULL_SCREEN);
                if (fullScreenIndex > -1) {
                    this.toolbarConfig.splice(fullScreenIndex, 1, TOOLBAR_PROP.EXIT_FULL_SCREEN);
                }
            } else {
                const exitFullScreenIndex = this.toolbarConfig.indexOf(TOOLBAR_PROP.EXIT_FULL_SCREEN);
                if (exitFullScreenIndex > -1) {
                    this.toolbarConfig.splice(exitFullScreenIndex, 1, TOOLBAR_PROP.FULL_SCREEN);
                }
            }
        }

        onSelectionChange(selection) {
            this.selectRows = selection;
            this.$emit('selection-change', selection);
        }
    }
</script>

<style lang="less" scoped>
    .m-table {
        padding: 20px;
        background-color: #FFF;
        .m-pagination {
            display: inline-block;
            margin-top: 20px;
            float: right;
        }
        &:after {
            content: '';
            display: table;
            clear: both;
        }
    }

</style>
