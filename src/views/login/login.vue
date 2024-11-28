<script setup>
import { ref, reactive, computed, onMounted, inject } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/stores/index';
import Top from '@/views/login/components/Top.vue';
import { UserFilled, Lock } from '@element-plus/icons-vue'

//API
const Api = inject('Api');

const router = useRouter();
const store = useStore(); 

//用户名
const userName = ref('');
//密码
const password = ref('');

//前往首页
const goHome = () =>{
  router.push({
    name: 'Home'
  })
}

//前往注册
const goRegister = () =>{
  router.push({
    name: 'Register'
  })
}

onMounted(() => {
  
})

</script>

<template>
  <div class="login">
    <Top/>
    <div class="box">
      <div class="title">
        <h5>帐号登录</h5>
        <p>总有一款适合您</p>
      </div>
      <div class="input">
        <el-input
          v-model="userName"
          placeholder="用户名"
          :prefix-icon="UserFilled"
        />
      </div>
      <div class="input">
        <el-input
          v-model="password"
          placeholder="密码"
          :prefix-icon="Lock"
        />
      </div>
      <div class="btn">
        登录
      </div>
      <div class="tips">
        <span @click="goHome">暂不登录</span>
        <span @click="goRegister">注册账号</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.login{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #c6cbd1;
  .box{
    width: 560px;
    border-radius: 30px;
    background-color: #f6f6f6;
    position: absolute;
    right: 120px;
    top: 50%;
    padding: 50px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    .title{
      text-align: center;
      margin-bottom: 20px;
      h5{
        font-size: 32px;
        color: #000;
        font-weight: 500;
        margin-bottom: 5px;
      }
      p{
        font-size: 12px;
        color: #707070;
      }
    }
    .input{
      margin-bottom: 20px;
      background-color: #fff;
    }
    .btn{
      line-height: 60px;
      background-color: #0059a6;
      font-size: 20px;
      font-weight: 500;
      color: #fff;
      text-align: center;
      margin-top: 70px;
      border-radius: 8px;
    }
    .tips{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 30px 0;
      span{
        font-size: 14px;
        color: #707070;
        line-height: 1.2;
        cursor: pointer;
      }
    }
  }
}
</style>

<style lang="less">
.login{
  .input{
    .el-input__inner{
      line-height: 42px;
      height: 44px;
      font-size: 15px;
      color: #000;
    }
    .el-icon svg{
      color: #0059a6;
    }
  }
}
</style>