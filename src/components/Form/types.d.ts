declare namespace FormType {
    interface Item {
        prop: string;
        label: string;
        disable?: boolean;
        rules?: object;
    }

    interface Change {
        prop: string;
        value: any;
    }

    interface InputItem extends Item {
        value: string | number;
        type?: string;
        maxLength?: number;
        placeholder?: string;
    }

    interface SelectItem extends Item {
        value: string;
        options: OptionsType;
        placeholder?: string;
    }
}
