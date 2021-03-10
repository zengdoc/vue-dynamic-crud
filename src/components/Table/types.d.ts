declare namespace TableType {
    // table
    type Data = object[];
    interface Item {
        prop: string;
        label: string;
        width?: string;
        format?: 'dateTimeFormat' | 'dateFormat';
    }
    type Config = Item[];
    type Total = number;
    type PageSize = number;
    type PageNo = number;
    // toolbar
    type Toolbar = string[];
    // search
    interface SearchItem {
        component: 'GInput'| 'GSelect';
    }
    type SearchInputItem = SearchItem & FormType.InputItem;
    type SearchSelectItem = SearchItem & FormType.SelectItem;
    type SearchConfig = Array<SearchInputItem | SearchSelectItem>;
}
