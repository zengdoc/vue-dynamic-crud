/**
 * 注册全局组件
 */
import Vue from 'vue';
// element-ui component
import {
    Aside,
    Button,
    Col,
    Container,
    Dialog,
    Form,
    FormItem,
    Input,
    Loading,
    Main,
    Menu,
    MenuItem,
    Message,
    MessageBox,
    Option,
    Pagination,
    Row,
    Select,
    Table,
    TableColumn,
    Tooltip,
} from 'element-ui';
// custom component
import {
    GInput,
    GSelect,
} from './Form';
import {
    GTable,
} from './Table';
import {
    GFormDialog,
} from './FormDialog';

const components = {
    Aside,
    Button,
    Col,
    Container,
    Dialog,
    Form,
    FormItem,
    Input,
    Main,
    Menu,
    MenuItem,
    Option,
    Pagination,
    Row,
    Select,
    Table,
    TableColumn,
    Tooltip,
    GInput,
    GSelect,
    GTable,
    GFormDialog,
};
_.toPairs(components).forEach(([key, component]) => {
    Vue.component(
        _.isFunction(component) ? key : component.name,
        component,
    );
});

Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
