<template>
    <div class="column_center_start physical_state_form">
        <div class="row_center_start form_title">
            <text>您的每日摘要</text>
        </div>

        <el-form class="column_start_start" :model="form" label-width="120px" style="margin: 15px 0; text-align: left;">
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
                    <el-radio-button label="left">男</el-radio-button>
                    <el-radio-button label="right">女</el-radio-button>
                    <el-radio-button label="top">其他</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="每日攝取熱量">
                <el-input v-model="form.intake" />
            </el-form-item>
            <el-form-item label="運動類型" style="width: 240px; height: 40px;"> 
                <el-select v-model="form.exerciseType" placeholder="Select" size="large" style="width: 100%; height: 100%; position: unset;">
                    <el-option v-for="(item, index) in exerciseType" :key="index" :label="item.label" :value="item.id" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">設定</el-button>
                <!-- <el-button>Cancel</el-button> -->
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dropdownItems: [
                { name: '有氧運動' },
                { name: '重量訓練' },
                { name: '球類運動' }
            ],
            form: {
                height: null,
                weight: null,
                age: null,
                gender: null,
                intake: null,
                exerciseType: ''
            },
            exerciseType: [
                { id: 1, label: '有氧運動' },
                { id: 2, label: '重量訓練' },
                { id: 3, label: '球類運動' }
            ],
            selectedItemIndex: null
        }
    },
    methods: {
        selectItem(index) {
            this.selectedItemIndex = index;
        }
    }
}
</script>
<style lang="scss">
.physical_state_form {
    margin-top: 20px;
    width: 80%;
    padding: 0px;
    background-color: #fff;
}

.form_title {
    width: 100%;
    padding: 5px 4% 5px 4%;
    background-color: #0A5282;
    color: #fff;
}

.state_form {
    margin: 10px 0;
    width: 90%;
    padding: 5px 4% 5px 4%;

    input {
        margin: 10px 0;
    }
}

.dropdown {
    margin: 10px 0;
}
</style>