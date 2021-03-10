import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/index.less';

Vue.config.productionTip = false;
// register component
import '@/components/global-component';
// register filter
import * as filters from '@/utils/filter';
for (const name in filters) {
    if (name) {
        Vue.filter(name, filters[name]);
    }
}

if (process.env.VUE_APP_MOCK === 'true') {
    import('@/mock/index')
        .then(({ default: mock }) => {
            mock();
            init();
        });
} else {
    init();
}

function init() {
    new Vue({
        router,
        render: h => h(App),
    }).$mount('#app');
}
