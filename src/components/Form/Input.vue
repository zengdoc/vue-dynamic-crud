<template>
    <el-input
            :value="value"
            @input="onChange"
            :placeholder="placeholder"
            :maxlength="item.maxLength"
            :clearable="!item.disable"
            :type="item.type"
            :disabled="item.disable">
    </el-input>
</template>
<script lang="ts">
    import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

    @Component
    export default class GInput extends Vue {
        @Prop({ required: true })
        item!: FormType.InputItem;
        @Prop()
        value!: number | string;

        get placeholder() {
            return this.item.placeholder || '请输入';
        }

        @Emit('change')
        onChange(value: string): FormType.Change {
            return {
                prop: this.item.prop,
                value: this.item.type === 'number'
                    ? parseInt(value, 10)
                    : value,
            };
        }
    }
</script>

<style lang="less" scoped>

</style>

