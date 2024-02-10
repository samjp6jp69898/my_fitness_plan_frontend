<template>
    <div style="background-color: #fff;">
        <div class="row_center_start form_title">
            <text>尚未建立使用者？</text>
        </div>
        <el-form class="column_center_start" :model="form" style="text-align: left; width: 90%;">
            <div class="column_start_start" style="width: 60%; margin-top: 20px;">
                <el-form-item label="姓名">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="身高">
                    <el-input v-model="form.height" />
                </el-form-item>
                <el-form-item label="體重">
                    <el-input v-model="form.weight" />
                </el-form-item>
                <el-form-item label="年齡">
                    <el-input v-model="form.age" />
                </el-form-item>
                <el-form-item label="性別">
                    <el-radio-group v-model="form.gender" label="label position">
                        <el-radio-button :label="item.value" v-for="(item, index) in gender" :key="index">{{ item.label
                        }}</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="每週運動次數">
                    <el-select v-model="form.exercise_per_week" placeholder="0" size="default"
                        style="width: 60px; height: 100%;">
                        <el-option v-for="(item, index) in 7" :key="index" :label="item" :value="item" />
                    </el-select>
                </el-form-item>
            </div>
            <el-form-item style="width: 80%;">
                <el-button style="margin: 0 auto;" type="primary" @click="onSubmit">註冊</el-button>
                <el-button style="margin: 0 auto;" type="default" @click="toLogin">已經有帳號，去登錄</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import commonUtils from '@/utils/common.utils'
export default {
    data() {
        return {
            dropdownItems: [
                { name: '有氧運動' },
                { name: '重量訓練' },
                { name: '球類運動' }
            ],
            form: {
                name: '',
                height: null,
                weight: null,
                age: null,
                gender: null,
                exercise_per_week: 0
            },
            selectedItemIndex: null,
            gender: [
                { label: '男', value: 'male' },
                { label: '女', value: 'female' },
                { label: '其他', value: 'other' }
            ],
        }
    },
    computed: {
        name() {
            return this.$store.getters['user/name']
        }
    },
    methods: {
        async validator() {
            if (!this.form.name) {
                throw ('請輸入姓名')
            }
            if (!this.form.height) {
                throw ('請輸入身高')
            }
            if (this.form.height < 0 || this.form.height > 300) {
                throw ('請輸入正確的身高')
            }
            if (!this.form.weight) {
                throw ('請輸入體重')
            }
            if (this.form.weight < 0 || this.form.weight > 300) {
                throw ('請輸入正確的體重')
            }
            if (!this.form.age) {
                throw ('請輸入年齡')
            }
            if (this.form.age < 0 || this.form.age > 150) {
                throw ('請輸入正確的年齡')
            }
            if (!this.form.gender) {
                throw ('請選擇性別')
            }
        },
        async onSubmit() {
            try {
                await this.validator()
            } catch (e) {
                commonUtils.createToast('error', e)
                return
            }
            try {
                commonUtils.createLoading('註冊帳號中...')
                console.log(this.form)
                await this.$store.dispatch('user/addUser', this.form)
                await this.$store.dispatch('user/getUserInfoByName', this.name)
                await commonUtils.delay(1000)
                commonUtils.closeLoading()
                commonUtils.createToast('success', '設定成功')
            } catch (e) {
                await commonUtils.delay(1000)
                commonUtils.closeLoading()
                commonUtils.createToast('error', e)
            }
        },
        toLogin() {
            this.$emit('changeFormType')
        },
    }
}
</script>
<style lang="">
    
</style>