<template>
  <div>
    <el-menu :router='true' class="el-menu-demo" mode="horizontal">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
      <el-menu-item index="/sub-vue">vue 子应用</el-menu-item>
      <el-menu-item index="/html">html 子应用</el-menu-item>
      <el-menu-item index="/purehtml1">purehtml 子应用</el-menu-item>
    </el-menu>

    <router-view/>

    <div id="sub-vue"></div>
    <div id="subapp-view"></div>
    <div id="subapp-viewport"></div>
  </div>
</template>
