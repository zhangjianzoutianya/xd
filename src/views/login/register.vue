<script setup>
import { ref, reactive, computed, inject } from 'vue';
import Top from '@/views/login/components/Top.vue';
//API
const Api = inject('Api');

//用户名
const userName = ref(''); 
//密码
const password = ref('');
//密码
const password2 = ref('');
//国家
const nation = ref('');
//验证方式
const ezType = ref('0');
const ezTypeOption = [{
  value: '0',
  label: '手机号',
},{
  value: '1',
  label: '邮箱',
}]
//电话
const phone = ref('');
//验证码
const vcode = ref('');
</script>

<template>
  <div class="regist">
    <Top/>
    <div class="box">
      <div class="title">
        <h5>帐号注册</h5>
        <p>总有一款适合您</p>
      </div>
      <div class="input">
        <span><i>*</i>用户名</span>
        <el-input v-model="userName"/>
      </div>
      <div class="input">
        <span><i>*</i>密码</span>
        <el-input v-model="password"/>
      </div>
      <div class="input">
        <span><i>*</i>确认密码</span>
        <el-input v-model="password2"/>
      </div>
      <div class="input">
        <span><i>*</i>国家</span>
        <el-input v-model="password2"/>
      </div>
      <div class="input">
        <span>验证方式</span>
        <el-select 
          v-model="ezType" 
          size="large"
          placeholder="请选择">
          <el-option
            v-for="item in ezTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="input">
        <span><i>*</i>电话</span>
        <el-input v-model="phone"/>
      </div>
      <div class="input">
        <span><i>*</i>验证码</span>
        <el-input v-model="vcode"/>
      </div>
      <div class="butt">
        <span>注册</span>
        <span>发送验证码</span>
      </div>
      <div class="tips">
        <span >暂不登录</span>
        <span >忘记密码</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.regist{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #c6cbd1;
  .box{
    width: 776px;
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
      display: flex;
      align-items: center;
      span{
        flex: 0 0 90px;
        font-size: 15px;
        color: #000;
        i{
          color: #fa7e7e;
        }
      }
    }
    .butt{
      display: flex;
      justify-content: space-between;
      span{
        line-height: 60px;
        background-color: #0059a6;
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        text-align: center;
        margin-top: 70px;
        border-radius: 8px;
        width: 300px;
      }
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