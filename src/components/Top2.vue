<script setup>
import { ref , inject } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/stores/index';
import { Search} from '@element-plus/icons-vue'
</script>

<template>
 <div class="loginTop">
    <div class="logo">
      <img src="@/assets/images/logo2.png"/>
      <div class="menuTop">
        <span @click="">首页</span>
        <span @click="">产品选型</span>
        <span @click="">选型清单</span>
        <span @click="openRefrig">单位设置</span>
        <span @click="clickCert">换算工具</span>
      </div>
      <el-input
          v-model="searchKey" size="large"  
          placeholder="请输入搜索内容"
          :prefix-icon="Search"
        />
    </div>
    <div class="lang">
      <span>登入</span>
      <span>｜</span>
      <span @click="showClick">中国</span>
    </div> 
  </div>

</template>

<style scoped lang="less">
.loginTop{
  position: fixed;
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
      width: 127px;
      margin-right: 40px;
    }
   
  }
  .menuTop{
    display: flex;
    span{
      height: 55px;
      line-height: 55px;
      background-color: #9799a6;
      color: #ffffff;
      width: 130px;
      text-align: center;
      border-radius: 10px;
      margin-right: 10px;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .lang{
    display: flex;
    align-items: center;
    background-color: #494a52;
    border-radius: 10px;
    height: 55px;
    line-height: 55px;
    width: 180px;
    border-radius: 10px;
    justify-content: center;
    span{
      font-size: 15px;
      color: #ffffff;
      line-height: 1.5;
      cursor: pointer;
    }
  }
}
.language{
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 5;
  .langText{
    width: 1100px;
    height: 520px;
    background-color: #ffffff;
    border-radius: 10px;
    position: absolute;
    padding: 30px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%); 
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    h5{
      margin-bottom: 50px;
      font-size: 25px;
      color: #080808;
    }
    p{
      font-size: 25px;
      color: #080808;
    }
    .input{
      display: flex;
      align-items: center;
      margin-top: 25px;
      span{
        flex: 0 0 110px;
        font-size: 20px;
        color: #080808;
        text-align: right;
        margin-right: 20px;
      }
    }
    .btn{
      display: flex;
      justify-content: flex-end;
      margin-top: 70px;
      span{
        width: 105px;
        height: 50px;
        line-height: 48px;  
        border: 1px solid #080808;
        color: #080808;
        text-align: center;  
        border-radius: 5px;
        margin-left: 15px;  
        font-size: 15px; 
      }
      .btnSure{
        background-color: #0059a6;
        border: 1px solid #0059a6;
        color: #ffffff;
      }
    }
  }
  
}

</style>
<style lang="less">
.loginTop{
  .logo{
    .el-input{
      width: 580px;
      margin-right: 10px;
      .el-input__wrapper{
        border-radius: 8px;
        .el-input__inner{
          line-height: 55px;
          height: 55px;
          text-align: center;
          font-size: 15px;
        }
      }
    }
  }
}
</style>