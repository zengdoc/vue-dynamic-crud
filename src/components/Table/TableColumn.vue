<script lang="tsx">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class TableColumn extends Vue {
        @Prop({ required: true })
        item!: TableType.Item;

        render() {
            return (
                <el-table-column
                    label={this.item.label}
                    width={this.item.width}
                    scopedSlots={
                        {
                            default: ({ row }) => <span>
                                {
                                    this.item.format
                                        ? Vue.filter(this.item.format)(row[this.item.prop])
                                        : row[this.item.prop]
                                }
                            </span>,
                        }
                    }>
                </el-table-column>
            );
        }
    }
</script>

<style lang="less" scoped>

</style>
