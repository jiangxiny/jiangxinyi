<template>
  <el-container class="home-container">
    <!--头部-->
    <el-header>
      <div>
        <img src="../assets/logo.png" alt="">
        <span>welcom</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!--主体-->
    <el-container>
      <!--侧面-->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <!--折叠按钮-->
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!--侧面菜单-->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff" unique-opened :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath">
          <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
            <!--一级菜单-->
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <!--二级菜单-->
              <el-menu-item :index="'/'+subItem.path" v-for ="subItem in item.children" :key="subItem.id" @click="saveNavState('/'+subItem.path)">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!--右侧主体-->
      <el-main>
        <!--路由占位符-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
    
</template>

<script>
    export default {
      data(){
        return{
          menulist:[],
          iconsObj:{
            '125':'iconfont icon-ai-users',
            '103':'iconfont icon-tiji',
            '101':'iconfont icon-shangpin',
            '102':'iconfont icon-danju',
            '145':'iconfont icon-baobiao'
          },
          // 是否折叠
          isCollapse:false,
          //被激活的链接地址
          activePath:''

        }
      },
      created(){
        this.getMenuList()
        this.activePath=window.sessionStorage.getItem('activePath')
      },
      methods:{
        logout(){
          window.sessionStorage.clear();
          this.$router.push("/login");
        },
        // 获取所有菜单
        async getMenuList() {
          const {data:res}=await this.$http.get('menus')
          if (res.meta.status !==200) return this.$message.error(res.meta.msg)
          this.menulist=res.data
          console.log(res)
        },
        // 折叠菜单
        toggleCollapse(){
          this.isCollapse=!this.isCollapse
        },
        //保存链接激活状态
        saveNavState(activePath){
          window.sessionStorage.setItem('activePath',activePath)
          this.activePath=activePath
        }
      }
    }
</script>

<style lang="less" scoped>
  .home-container{
    height: 100vh;
  }

  .el-header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #ffff;
    font-size: 20px;
    >div{
      display: flex;
      align-items: center;
      sapn{
        margin-left: 15px;
      }
    }
  }
  .el-aside{
    background-color: #333744;
    .el-menu{
      border-right: none;
    }
  }
  .el-main{
    background-color: #EAEDF1;
  }
  .iconfont{
    margin-right: 10px;
  }
  .toggle-button{
    background-color: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing:0.2em ;
    cursor: pointer;
  }





</style>
