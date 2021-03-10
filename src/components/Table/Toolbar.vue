<script lang="tsx">
    import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
    import { TOOLBAR_CONFIG, TOOLBAR_PROP } from './config';

    @Component
    export default class Toolbar extends Vue {
        @Prop()
        config!: TableType.Toolbar;
        @Prop({ default: () => []})
        selection!: TableType.Data;

        @Emit('command')
        onClick(e) {
            return e;
        }

        render(h) {
            return (
                <div class='m-table-toolbar'>
                    {
                        this.config
                            .filter(name => name !== TOOLBAR_PROP.EDIT)
                            .map(name => h(
                                'el-tooltip',
                                {
                                    props: TOOLBAR_CONFIG[name].tooltip,
                                },
                                [
                                    h(
                                        'el-button',
                                        {
                                            props: {
                                                ...TOOLBAR_CONFIG[name].button,
                                                disabled: name === TOOLBAR_PROP.DELETE && this.selection.length === 0,
                                            },
                                            on: {
                                               click: () => this.onClick(name),
                                            },
                                        },
                                    ),
                                ],
                        ))
                    }
                </div>
            );
        }
    }
</script>

<style lang="less" scoped>
    .m-table-toolbar {
        text-align: right;
        height: 64px;
        line-height: 64px;
    }
</style>
