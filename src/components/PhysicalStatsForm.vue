<template>
    <div class="column_center_start login_register_form">
        <div class="flip-card" style="width: 100%;" :class="{ flipped: loginPage }">
            <div class="flip-card-inner" style="width: 100%;">
                <div class="flip-card-front" style="width: 100%;">
                    <createUser @changeFormType="loginPage = true" />
                </div>
                <div class="flip-card-back" style="width: 100%;">
                    <loginForm @toRegister="loginPage = false" />
                </div>
            </div>
        </div>
        <!-- <createUser v-if="!loginPage" @changeFormType="loginPage = true"/>
        <loginForm v-else @toRegister="loginPage = false" /> -->
    </div>
</template>
<script>
// import commonUtils from '@/utils/common.utils'
import createUser from '@/components/createUser.vue'
import loginForm from '@/components/loginForm.vue'
import { mapGetters } from 'vuex'
export default {
    components: {
        createUser,
        loginForm
    },
    data() {
        return {
            loginPage: false
        }
    },
    computed: {
        ...mapGetters('user',[
            'name'
        ]),
    },
    methods: {
    }
}
</script>
<style lang="scss">
.login_register_form {
    width: 30%;
    padding: 0px;
    background-color: #fff;
    border-radius: 0 0 4px 4px;
}

.form_title {
    width: 100%;
    padding: 5px 5%;
    background-color: #0A5282;
    color: #fff;
    border-radius: 4px 4px 0 0;
}

.flip-card {
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.flip-card-back {
    transform: rotateY(180deg);
}
</style>