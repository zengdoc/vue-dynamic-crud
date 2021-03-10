<template>
    <el-dialog
            :title="dialogTitle"
            class="rop-dialog"
            :visible="dialogVisible"
            width="570px"
            :append-to-body="true"
            :close-on-click-modal="false"
            :before-close="onCancel"
            v-loading="dialogLoading">
        <el-form ref="formEl" :model="form" :rules="rules" label-width="90px">
            <el-form-item
                    v-for="(item, index) in formConfigClone"
                    :key="index"
                    :label="item.label"
                    :prop="item.prop">
                <component
                        :is="item.component"
                        :item="item"
                        :value="form[item.prop]"
                        @change="onChange"
                />
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="onCancel">取 消</el-button>
            <el-button type="primary" @click="onSubmit">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script lang="ts">
    import { Component, Emit, Prop, Provide, Ref, Vue } from 'vue-property-decorator';
    import { ElForm } from 'element-ui/types/form';

    @Component
    export default class GFormDialog extends Vue {
        @Prop()
        data!: FormDialogType.FormDialogData;
        @Prop({ default: () => []})
        config!: FormDialogType.FormDialogConfig;

        @Ref() readonly formEl!: ElForm;

        @Provide()
        formConfigClone: FormDialogType.FormDialogConfig = _.cloneDeep(this.config);
        @Provide()
        dialogVisible: boolean = true;
        @Provide()
        dialogLoading: boolean = false;
        @Provide()
        form: object = {};
        @Provide()
        rules: object = {};

        get isEdited() {
            return !!(this.data && this.data.id);
        }

        get dialogTitle() {
            return this.isEdited ? '编辑' : '新建';
        }

        @Emit('close')
        onCancel() {
            this.dialogVisible = false;
        }

        created() {
            if (this.formConfigClone.length) {
                this.formConfigClone.forEach(i => {
                    Vue.set(this.form, i.prop, this.getPropValue(i.prop) || i.value);
                    this.rules[i.prop] = i.rules ? i.rules : [];
                });
            }
        }

        onChange({ prop, value }: FormType.Change) {
            this.form[prop] = value;
        }

        onSubmit() {
            this.formEl.validate(valid => {
                if (valid) {
                    this.$emit('submit', this.form, this.data);
                }
            });
        }

        getPropValue(prop) {
            if (this.isEdited && this.data[prop]) {
                return this.data[prop];
            }
            return false;
        }
    }
</script>

<style lang="less" scoped>

</style>
