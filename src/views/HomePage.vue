<template>
    <div class="column_center_start home_page">
        <div class="row_center_between navbar">
            <text class="title">myfitnesspal-plus</text>
        </div>

        <ul class="nav" style="width: 100%; padding: 0 4%">
            <li class="nav-item" :class="{ 'active': currentTabIndex === index }" v-for="(item, index) in nav" :key="index"
                @click="changeTab(index)">
                <a class="nav-link">{{ item.name }}</a>
            </li>
        </ul>
        <div :class="isLogin ? 'row_start_between' : 'row_start_center'" style="width: 90%; margin-top: 20px;">
            <userInfo v-if="currentTabIndex === 0" />
            <PhysicalStatsForm v-if="currentTabIndex === 0 && !isLogin" />
            <reLogin v-if="currentTabIndex === 0 && isLogin" />
        </div>
    </div>
</template>
<script>
import PhysicalStatsForm from '@/components/PhysicalStatsForm.vue';
import userInfo from '@/components/userInfo.vue';
import reLogin from '@/components/reLogin.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        PhysicalStatsForm,
        userInfo,
        reLogin
    },
    data() {
        return {
            nav: [
                { name: '我的首頁', link: '/' },
                { name: '食品', link: '/food' },
                { name: '運動', link: '/exercise' },
                { name: '報告', link: '/report' }
            ],
            currentTabIndex: 0,
            testData: ''
        }
    },
    computed: {
        ...mapGetters('user', [
            'isLogin',
        ]),
    },
    methods: {
        changeTab(index) {
            console.log(index);
            this.currentTabIndex = index;
        },
    },
}
</script>
<style lang="scss">
.home_page {
    width: 100%;
    height: 100%;
}

.navbar {
    width: 100%;
    height: 60px;
    padding: 5px 4% 5px 4%;
    background-color: #fff;

    .title {
        font-size: 30px;
        font-weight: 900;
        color: #0072BC;
        font-family: 'Noto Sans JP', sans-serif;
        cursor: pointer;
    }
}
</style>