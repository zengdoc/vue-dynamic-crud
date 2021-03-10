interface OptionsType {
   [index: number]: {
       label: string;
       value: string;
   };
}

interface TableProvideType {
    config: TableType.Config;
    searchConfig: TableType.SearchConfig;
    data: TableType.Data;
    total: TableType.Total;
    pageSize: TableType.PageSize;
    pageNo: TableType.PageNo;
}

interface FormDialogProvideType {
    visible: boolean;
    config: FormDialogType.FormDialogConfig;
    data: object;
}

