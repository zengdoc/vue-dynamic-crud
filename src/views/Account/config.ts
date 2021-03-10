export const TABLE_SEARCH_CONFIG:
    [
        TableType.SearchInputItem,
        TableType.SearchInputItem
    ] = [
    {
        component: 'GInput',
        prop: 'account',
        label: '账号',
        value: '',
    },
    {
        component: 'GInput',
        prop: 'name',
        label: '姓名',
        value: '',
    },
];

export const TABLE_CONFIG: TableType.Config = [
    {
        prop: 'account',
        label: '账号',
    },
    {
        prop: 'name',
        label: '姓名',
    },
    {
        prop: 'creator',
        label: '创建人',
    },
    {
        prop: 'creationTime',
        label: '创建时间',
        format: 'dateTimeFormat',
    },
];

export const FORM_DIALOG_CONFIG:
    [
        FormDialogType.InputItem,
        FormDialogType.SelectItem
    ] = [
    {
        component: 'GInput',
        prop: 'name',
        label: '姓名',
        value: '',
        rules: [
            { required: true, message: '请输入姓名', trigger: 'change' },
            { validator: validateName, trigger: 'change' },
        ],
    },
    {
        component: 'GSelect',
        prop: 'gender',
        label: '性别',
        value: '',
        options: [
            { label: '男', value: 'MALE'},
            { label: '女', value: 'FEMALE'},
        ],
        rules: { required: true, message: '请选择性别', trigger: 'change' },
    },
];

function validateName(rule, value, callback) {
    if (!/^[\u4e00-\u9fa5]+$/.test(value)) {
        callback(new Error('请输入中文'));
    } else {
        callback();
    }
}
