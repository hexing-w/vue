<template>
  <el-container class="container">
    <el-header style="text-align:right;font-size:12px" class="header">

        <el-button  style="margin-right:20px;"  type="success" @click="loginOut"> 退出</el-button>
        <span v-if="user">{{user}}</span>
        <el-button  v-else type="primary" @click="login"> 请先登录</el-button>
    </el-header>
    <el-container class="container">
      <el-aside class="aside" width="200px">
        <el-menu
          default-active="2"
          class="nav-menu"
          unique-opened
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">角色列表</el-menu-item>
            <el-menu-item index="2-2">权限列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">商品列表</el-menu-item>
            <el-menu-item index="3-2">分类参数</el-menu-item>
            <el-menu-item index="3-3">商品分类</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">订单列表</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="5-1">数据报表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
  <!--     <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
<script>
export default {
  name: 'Home',
  data(){
  const spans = window.localStorage.getItem('username');
  const  item = {
        date: '2016-05-02',
        name: '2楞砸',
        address: '哈哈哈哈ASJJ'
      };
      return {
      user:spans,
     // tableData : Array(10).fill(item)
      };
  },
  methods:{
      login(){
        this.$router.replace('/login');
      },
      loginOut(){
        this.$confirm("确认退出嘛？","退出提示",{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(res=>{
          //请求服务端代码
          window.localStorage.removeItem('token')
          this.$router.push('/login')
          this.$message({
            type:"success",
            message:"退出成功"
          })
        })
      },
      handleOpen(){

      },
      handleClose(){

      },
  },


    //这个也可以渲染用户名
  //  computed:{
  //     user(){
  //       return window.localStorage.getItem('username');
  //     }
  // }

}
</script>