declare namespace FormDialogType {
    interface FormDialogData {
        id?: string;
        [key: string]: any;
    }
    interface FormDialogItem {
        component: 'GInput'| 'GSelect';
    }
    type InputItem = FormDialogItem & FormType.InputItem;
    type SelectItem = FormDialogItem & FormType.SelectItem;
    type FormDialogConfig = Array<InputItem | SelectItem>;
}
