<template>
    <el-container class="main-container" direction="horizontal">
        <el-aside class="main-menu" width="230px">
            <h3 class="menu-title">Vue Dynamic CRUD</h3>
            <el-menu
                    default-active="1">
                <el-menu-item
                        v-for="(item, index) in menus"
                        :key="index"
                        :index="`${index + 1}`">
                    <router-link
                            slot="title"
                            class="menu-item"
                            :to="item.path"
                    >{{item.name}}
                    </router-link>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script lang="ts">
    import { Component, Vue, Provide } from 'vue-property-decorator';
    import { RouteConfig } from 'vue-router';
    import { crudRoute } from '@/router';


    @Component
    export default class Main extends Vue {
        @Provide()
        menus: RouteConfig[] = crudRoute;
    }
</script>

<style lang="less" scoped>
    .main-container {
        .main-menu {
            min-height: 100vh;
            background-color: #fff;
            box-shadow: 2px 0 16px 0 rgba(0, 0, 0, 0.07);
            .menu-title {
                text-align: center;
            }
            .menu-item {
                display: block;
                text-decoration: none;
                color: inherit;
            }
        }
    }
</style>
