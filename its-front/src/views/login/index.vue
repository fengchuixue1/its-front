<template>
  <div class="login-container">
    <div style="width:950px;height:455px;padding-top:155px;margin-left:296px;">
      <div style="float:left;width:60%;height:100%;"></div>
      <div style="float:left;width:35%;height:100%;">
        <div>
          <span class="title">系统平台</span>
        </div>
        <div>
          <span class="title2">一切让设计更美好的智能AI平台</span>
        </div>
        <div>
          <el-input
            class="el-input__inner"
            style="width:75%;margin-top:50px;"
            prefix-icon="el-icon-user"
            placeholder="请输入用户名"
            v-model="username"
          ></el-input>
        </div>
        <div>
          <el-input
            class="el-input__inner"
            style="width:75%;margin-top:20px;"
            prefix-icon="el-icon-key"
            placeholder="请输入密码"
            v-model="password"
          ></el-input>
        </div>
        <div>
          <el-checkbox style="margin-left:5px;margin-top:20px;" v-model="checked">
            <span style="color:#d3d3d3">保存用户名密码</span>
          </el-checkbox>
        </div>
        <div>
          <el-button @click="userLogin" size="medium" round type="success" style="margin-top:20px;" plain>登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import login from 'src/api/common';

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      checked:false
    };
  },
  created() {
    window.x = this;
  },
  methods: {
    userLogin(){
      // login({username:this.username,password:this.password}).then(response => {
      //   console.log(response)
      // })
    }
  }
};
</script>
<style lang="scss">
.login-container {
  width: 100%;
  height: 97vh;
  background-size: 100% 100%;
  background-image: url("../../../static/img/login.png");
}
.title {
  font-size: 44px;
  letter-spacing: 2px;  
  line-height: 90px;
  color: #333333;
  font-family: "Alibaba PuHuiTi B";
  font-weight: 700;
}
.title2 {
  font-size: 18px;
  line-height: 36px;
  color: #a9a9a9;
  font-family: "Ping Fang SC";
}
.el-input__inner {
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
}
</style>
