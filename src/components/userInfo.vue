<template>
    <div v-if="isLogin" class="column_center_start" style="flex-grow: 1; margin-right: 30px; background-color: #fff; height: 100%;">
        <div class="row_center_start form_title">
            <text>您的每日摘要</text>
        </div>
        <div class="row_start_around" style="width: 100%; padding: 20px 5%;">
            <el-descriptions title="使用者資訊" direction="horizontal" :column="2" size="default" border>
                <el-descriptions-item label="使用者名稱">{{ name }}</el-descriptions-item>
                <el-descriptions-item label="年齡">{{ age }}</el-descriptions-item>
                <el-descriptions-item label="身高 (cm)">{{ height }}</el-descriptions-item>
                <el-descriptions-item label="體重 (kg)">{{ weight }}</el-descriptions-item>
                <el-descriptions-item label="運動頻率 (週)">{{ exerciseFrequency }}</el-descriptions-item>
                <el-descriptions-item label="性別">{{ gender }}</el-descriptions-item>
                <el-descriptions-item label="BMI">{{ BMI }}</el-descriptions-item>
                <el-descriptions-item label="TEDD">{{ TDEE }}</el-descriptions-item>
            </el-descriptions>

            <el-descriptions title="每日營養素" direction="horizontal" :column="1" size="default" border>
                <el-descriptions-item label="蛋白質 (g)">{{ protein }}</el-descriptions-item>
                <el-descriptions-item label="碳水 (g)">{{ carbohydrate }}</el-descriptions-item>
                <el-descriptions-item label="脂肪 (g)">{{ fat }}</el-descriptions-item>
            </el-descriptions>
        </div>

    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('user', [
            'name',
            'height',
            'weight',
            'age',
            'gender',
            'exerciseFrequency',
            'protein',
            'carbohydrate',
            'fat',
            'BMI',
            'TDEE',
            'isLogin'
        ]),
    }
}
</script>
<style lang="">
    
</style>