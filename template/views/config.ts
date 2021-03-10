export const TABLE_SEARCH_CONFIG:
    [
        TableType.SearchInputItem
        ] = [
    {
        component: 'GInput',
        prop: 'template',
        label: '模版',
        value: '',
    },
];

export const TABLE_CONFIG: TableType.Config = [
    {
        prop: 'template',
        label: '模版',
    },
];

export const FORM_DIALOG_CONFIG:
    [
        FormDialogType.InputItem
    ] = [
    {
        component: 'GInput',
        prop: 'template',
        label: '模版',
        value: '',
        rules: [
            { required: true, message: '请输入模版', trigger: 'change' },
        ],
    },
];
