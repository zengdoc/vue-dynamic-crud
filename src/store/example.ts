import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import store from './index';

@Module({ dynamic: true, store, name: 'example' })
export default class ExampleModule extends VuexModule {
    message: string = 'vue-typescript';

    get getMsg(): string {
        return this.message;
    }

    @Mutation
    setMsg(n: string) {
        this.message = n;
    }
}
