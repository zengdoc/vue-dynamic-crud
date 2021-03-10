export const TOOLBAR_PROP = {
    CREATE: 'CREATE',
    EDIT: 'EDIT',
    DELETE: 'DELETE',
    REFRESH: 'REFRESH',
    FULL_SCREEN: 'FULL_SCREEN',
    EXIT_FULL_SCREEN: 'EXIT_FULL_SCREEN',
};

export const TOOLBAR_CONFIG = {
    [TOOLBAR_PROP.CREATE]: {
        tooltip: {
            effect: 'dark',
            content: '新增',
            placement: 'top',
        },
        button: {
            icon: 'el-icon-plus',
            circle: true,
        },
    },
    [TOOLBAR_PROP.EDIT]: {
        tooltip: {
            effect: 'dark',
            content: '编辑',
            placement: 'top',
        },
        button: {
            icon: 'el-icon-edit',
            circle: true,
        },
    },
    [TOOLBAR_PROP.DELETE]: {
        tooltip: {
            effect: 'dark',
            content: '删除',
            placement: 'top',
        },
        button: {
            icon: 'el-icon-delete',
            circle: true,
        },
    },
    [TOOLBAR_PROP.REFRESH]: {
        tooltip: {
            effect: 'dark',
            content: '刷新',
            placement: 'top',
        },
        button: {
            icon: 'el-icon-refresh',
            circle: true,
        },
    },
    [TOOLBAR_PROP.FULL_SCREEN]: {
        tooltip: {
            effect: 'dark',
            content: '全屏',
            placement: 'top',
        },
        button: {
            icon: 'el-icon-full-screen',
            circle: true,
        },
    },
    [TOOLBAR_PROP.EXIT_FULL_SCREEN]: {
        tooltip: {
            effect: 'dark',
            content: '退出全屏',
            placement: 'top',
        },
        button: {
            icon: 'el-icon-close',
            circle: true,
        },
    },
};

export const TABLE_OPERATION_CONFIG = [
    {
        label: '编辑',
        event: TOOLBAR_PROP.EDIT,
    },
    {
        label: '删除',
        event: TOOLBAR_PROP.DELETE,
    },
];
