<template>
    <div class="login_container">
      <div class="login_box">
        <!--头像区域-->
        <div class="avatar_box">
          <img src="../assets/logo.jpg" alt="">
        </div>
        <!--登录表单区域-->
        <el-form ref="longinFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" prefix-icon="iconfont icon-yonghu"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" prefix-icon="iconfont icon-jichutubiao_Lock" type="password"></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登陆</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        //登录表单的数据绑定对象
        loginForm: {
          username:'admin ',
          password:'123456'
        },
        loginFormRules:{
          username:[
            {required: true, message: '请输入登录名称', trigger: 'blur'},
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
          password:[
            {required: true, message: '请输入登录密码', trigger: 'blur'},
            { min:6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods:{
      // 点击重置
      resetLoginForm(){
       this.$refs.longinFormRef.resetFields();
      },
      login(){
        this.$refs.longinFormRef.validate(async valid=>{
          if(!valid)return
          // console.log(valid);
          const {data:res}= await this.$http.post("login",this.loginForm);
          if (res.meta.status !=200) return this.$message.error('登录失败！')
          this.$message.success('登录成功！')
          console.log(res);
          //登录成功之后的token保存客户端的sessionStorage
          window.sessionStorage.setItem("token",res.data.token);
          //通过编程式导航跳转到后台主页，路由地址是/home
          this.$router.push('/home');
        })
      }
    }
  };


  // import Mock from "mockjs"
  // export default {
  //   name: "FunctionsDbSource",
  //   methods:{
  //     // 接口测试
  //     init(){
  //       // 请求后端数据,查询数据源
  //       this.axios({
  //         method: "get",
  //         url:"data/index",
  //       })
  //         .then((response)=> {
  //           console.log(response);
  //         })
  //         .catch((error)=> {
  //           console.log(error);
  //         });
  //     }
  //   },
  //   created(){
  //     this.init();
  //   }
  // }


</script>

<style  lang="less" scoped>
  .login_container{
    background: linear-gradient(#ccfbff, #ef96c5);
    height: 100vw;

  }
  .login_box{
    width: 450px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
  }
  .avatar_box{
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #ffffff;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color:#eee;

    }
  }
  .login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btns{
    display: flex;
    justify-content: flex-end;

  }

</style>
