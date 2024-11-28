<script setup>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'

//搜索
const searchKey = ref('')

</script>

<template>
  <div class="loginTop">
    <div class="logo">
      <img src="@/assets/images/logo.png"/>
      <el-input
        v-model="searchKey"
        placeholder="请输入搜索内容"
        :prefix-icon="Search"
      />
      <p>SmartFit选型系统(网页版)</p>
    </div>
    <div class="lang">
      <span>登入</span>
      <span>｜</span>
      <span>中国</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.loginTop{
  position: absolute;
  top: 30px;
  left: 7%;
  right: 7%;
  display: flex;
  justify-content: space-between;
  .logo{
    display: flex;
    align-items: center;
    position: relative;
    >img{
      width: 300px;
      margin-right: 24px;
    }
    p{
      position: absolute;
      left: 0;
      top: 45px;
      font-size: 15px;
      color: #000000;
      line-height: 1.5;
    }
  }
  .lang{
    display: flex;
    align-items: center;
    span{
      font-size: 15px;
      color: #000000;
      line-height: 1.5;
    }
  }
}
</style>

<style lang="less">
.loginTop{
  .logo{
    .el-input{
      width: 360px;
      .el-input__wrapper{
        border-radius: 8px;
        .el-input__inner{
          line-height: 32px;
          height: 34px;
        }
      }
    }
  }
}
</style>