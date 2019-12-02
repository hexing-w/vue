<template>
<div>
  <el-row>
  	<el-col :span=2>
  	<el-button type="primary" @click="dialogFormVisible = true">添加用户</el-button>
  </el-col>
    <el-col :span="6" style="float:right">
      <el-input placeholder="请输入内容"  class="input-with-select">
        <el-button slot="append" icon="el-icon-search"  ></el-button>
      </el-input>
    </el-col>
  </el-row>
  </div>
  </template>

  export default {
  name:"test"
  }