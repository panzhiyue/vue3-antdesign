<template>
  <div class="main">
    <div class="login-container">
      <header><img src="@/assets/logo.png" />登录</header>
      <Form
        style="padding: 4px"
        :model="formData"
        :rules="formRules"
        ref="formRef"
      >
        <FormItem name="username">
          <Input size="large" :placeholder="'账号'" />
        </FormItem>
        <FormItem name="password">
          <InputPassword size="large" :placeholder="'密码'" visibilityToggle />
        </FormItem>
        <ARow>
          <ACol :span="12">
            <FormItem>
              <Checkbox size="small"> 记住我 </Checkbox>
            </FormItem>
          </ACol>
          <ACol :span="12">
            <FormItem :style="{ 'text-align': 'right' }">
              <Button type="link" size="small"> 忘记密码? </Button>
            </FormItem>
          </ACol>
        </ARow>
        <FormItem class="enter-x">
          <Button
            type="primary"
            size="large"
            block
            :loading="loading"
            @click="login"
          >
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script setup>
console.log(333);
import { reactive, ref, computed, unref } from "vue";
import { useRouter } from "vue-router";
import {
  Checkbox,
  Form,
  Input,
  Row,
  Col,
  Button,
  Divider,
  message,
} from "ant-design-vue";
const ACol = Col;
const ARow = Row;
const FormItem = Form.Item;
const InputPassword = Input.Password;

// const router = useRouter();

// const formData = reactive({
//   username: "panzhiyue",
//   password: "123456",
// });

// const formRules = {
//   username: {
//     required: true,
//     message: "请输入账号",
//     trigger: "change",
//   },
//   password: {
//     required: true,
//     message: "请输入密码",
//     trigger: "change",
//   },
// };

// const rememberMe = ref(true);

// const loading = ref(false); //登录按钮加载

// const login = () => {};
</script>
<style lang="less" scoped>
.main {
  height: 100%;
  position: absolute;
  align-items: center;
  padding-top: 0px;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding: 0;
  margin: 0;
  background-color: rgba(242, 242, 242, 1);

  .login-container {
    background-color: rgba(255, 255, 255, 1);
    padding: 24px 24px 12px 24px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 22px 50px #d9e0fd5c;
  }

  input {
    width: 312px;
  }

  header {
    display: flex;
    height: 50px;
    justify-content: space-between;
    margin-top: 10px;
    margin-right: 16px;
    margin-left: 16px;
    margin-bottom: 10px;
    line-height: 50px;
    font-size: 20px;
    font-weight: bold;

    // .logo{
    //   width:100px;
    //   height:100px;
    //   background-image: url("../assets/logo.png");
    //   background-size: cover;
    //   background-position: center center;
    // }
  }
}
</style>