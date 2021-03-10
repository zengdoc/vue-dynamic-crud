<template>
    <el-form label-position="left" label-width="80px" :model="form">
        <el-row :gutter="20">
            <el-col
                    v-for="item in config"
                    :key="item.prop"
                    :xs="8" :sm="8" :md="8" :lg="6" :xl="6">
                <el-form-item :label="item.label">
                    <component
                            :is="item.component"
                            :item="item"
                            :value="form[item.prop]"
                            @change="onChange">
                    </component>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Provide, Emit } from 'vue-property-decorator';

    @Component
    export default class Search extends Vue {
        searchDebounce = _.debounce(this.search, 300);
        @Prop({ required: true })
        config!: TableType.SearchConfig;

        @Provide()
        form: object = {};

        created() {
            if (this.config.length) {
                this.config.forEach(i => {
                    Vue.set(this.form, i.prop, i.value);
                });
            }
        }

        mounted() {
            this.search();
        }

        onChange({ prop, value }: FormType.Change) {
            this.form[prop] = value;
            this.searchDebounce();
        }

        @Emit()
        search() {
            return this.form;
        }
    }
</script>

<style lang="less" scoped>

</style>
