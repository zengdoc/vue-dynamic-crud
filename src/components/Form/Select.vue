<template>
    <el-select
            :value="value"
            @change="onChange"
            :placeholder="placeholder"
            :clearable="!item.disable"
            :disabled="item.disable">
        <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </el-option>
    </el-select>
</template>


<script lang="ts">
    import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

    @Component
    export default class GSelect extends Vue {
        @Prop({ required: true })
        item!: FormType.SelectItem;
        @Prop()
        value!: number | string;

        get options() {
            return this.item.options || [];
        }

        get placeholder() {
            return this.item.placeholder || '请选择';
        }

        @Emit('change')
        onChange(value: string): FormType.Change {
            return {
                prop: this.item.prop,
                value,
            };
        }
    }
</script>

<style lang="less" scoped>
    .el-select {
        width: 100%;
    }
</style>
