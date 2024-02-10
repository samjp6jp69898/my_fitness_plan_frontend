<template>
    <div style="background-color: #fff;">
        <div class="row_center_start form_title">
            <text>這不是您的帳號？</text>
        </div>
        <div class="column_center_start" style="text-align: left; width: 90%; padding: 20px 0;">
            <div class="column_start_start" style="width: 80%;">
                <el-form-item label="使用者名稱">
                    <el-input v-model="name" />
                </el-form-item>
            </div>
            <div class="row_center_between" style="width: 80%; margin: 20px 0 10px;">
                <el-button style="margin: 0 auto;" type="primary" @click="onSubmit">重新登錄</el-button>
                <el-button style="margin: 0 auto;" type="default" @click="logout">登出</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import commonUtils from '@/utils/common.utils'
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        async logout() {
            commonUtils.createLoading('登出中...')
            await commonUtils.delay(1000)
            this.$store.dispatch('user/logout')
            commonUtils.closeLoading()
        },
        async onSubmit() {
            try {
                if (!this.name) {
                    commonUtils.createToast('error', '請輸入使用者名稱')
                    return
                }
                commonUtils.createLoading('登錄中...')
                await this.$store.dispatch('user/getUserInfoByName', this.name)
                await commonUtils.delay(1000)
                commonUtils.closeLoading()
                commonUtils.createToast('success', '登錄成功')
                this.name = ''
            } catch (e) {
                await commonUtils.delay(1000)
                commonUtils.closeLoading()
                commonUtils.createToast('error', e)
            }

        }
    }
}
</script>
<style lang="">
    
</style>