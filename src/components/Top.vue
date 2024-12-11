<script setup>
import { ref , inject } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/stores/index';
import { Search ,ArrowRight,StarFilled} from '@element-plus/icons-vue'
import { fa } from 'element-plus/es/locales.mjs';

//API
const Api = inject('Api');

const router = useRouter();
const store = useStore(); 

//搜索
const searchKey = ref('')
//语言
const ezType = ref('0');
const ezTypeOption = [{
  value: '0',
  label: '中文',
},{
  value: '1',
  label: '英文',
}]
//地区
const country = ref('0');
const ezCountry= [{
  value: '0',
  label: '中国',
},{
  value: '1',
  label: '美国',
}]
//控制弹窗是否显示
const showLang=ref(false)
//取消选择语言
const cancleLang=()=>{
  showLang.value=false
}
//选择语言弹窗
const showClick=()=>{
  showLang.value=true
}

//弹窗认证证书
const showCert=ref(false)
const cancelCert=()=>{
  showCert.value=false
}
//认证证书弹窗
const  clickCert=()=>{
  showCert.value=true
}
//选择制冷剂弹窗
const showRefrig=ref(false)
const openRefrig=()=>{
  showRefrig.value=true
}
const cancelRefrig=()=>{
  showRefrig.value=false
}


//产品大类跳转
const goProduct = () =>{
  router.push({
    name: 'Product'
  })
}
//系统应用跳转
const goApplicat = () =>{
  router.push({
    name: 'Applicat'
  })
}
//logo
const goHome = () =>{
  router.push({
    name: 'Product'
  })
}
  //登陆页面
  const goLogin = () =>{
    router.push({
      name: 'Login'
    })
  }

</script>

<template>
  <div class="loginTop">
    <div class="logo">
      <img src="@/assets/images/logo2.png" @click="goHome"/>
      <div class="menuTop">
        <span @click="goProduct">产品大类</span>
        <span @click="goApplicat">系统应用</span>
        <span @click="openRefrig">请选择制冷剂<el-icon><ArrowRight /></el-icon></span>
        <span @click="clickCert">认证证书<el-icon><ArrowRight /></el-icon></span>
      </div>
      <el-input
          v-model="searchKey" size="large"  
          placeholder="请输入搜索内容"
          :prefix-icon="Search"
        />
    </div>
    <div class="lang">
      <span @click="goLogin">登入</span>
      <span>｜</span>
      <span @click="showClick">中国</span>
    </div> 
  </div>

  <div class="language"  v-if="showLang">   
     <div class="langText">
      <h5>提示</h5>
      <p>Tips：请选择国家和语言</p>
      <div class="input">
        <span>语言</span>
        <el-select 
          v-model="ezType" 
          size="large">
          <el-option
            v-for="item in ezTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="input">
        <span>国家或地区</span>
        <el-select 
          v-model="ezType" 
          size="large">
          <el-option
            v-for="item in ezCountry"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="btn"> 
        <span @click="cancleLang">取消</span>
        <span class="btnSure">确定</span>
      </div>
     </div>

  </div>

  <div class="certificate" v-if="showCert">
     <div class="ficate">
      <h5>认证证书</h5>
      <div class="input">
        <el-input
          v-model="userName"
          placeholder="CE"
        />
      </div>
      <div class="input">
        <el-input
          v-model="userName"
          placeholder="CE"
        />
      </div>
      <div class="input">
        <el-input
          v-model="userName"
          placeholder="CE"
        />
      </div>
      <div class="input">
        <el-input
          v-model="userName"
          placeholder="CE"
        />
      </div>
      <div class="input">
        <el-input
          v-model="userName"
          placeholder="CE"
        />
      </div>
      <div class="input">
        <el-input
          v-model="userName"
          placeholder="CE"
        />
      </div>
      <div class="input">
        <el-input
          v-model="userName"
          placeholder="CE"
        />
      </div>
      <div class="input">
        <el-input
          v-model="userName"
          placeholder="CE"
        />
      </div>
      <div class="btn"> 
        <span @click="cancelCert" class="cancel">取消</span>
        <span class="clear"> 清除设置</span>
        <span>选定</span>
        <span>确定</span>
      </div>


     </div>
  </div>

  <div class="refrigerant" v-if="showRefrig">
     <div class="gerant">
      <h5>请选择制冷剂</h5>
          <div class="gerantList">        
              <div class="gerantLeft">
              <div class="input">
                <el-input
                v-model="searchKey"
                placeholder="搜索型号"
                :prefix-icon="Search"
              />
              </div>
              <div class="collect">
                <div class="collectList">
                  <span>R22</span>
                  <span>收藏<el-icon><StarFilled /></el-icon></span>
                </div>
                <div class="collectList">
                  <span>R22</span>
                  <span>收藏<el-icon><StarFilled /></el-icon></span>
                </div>
                <div class="collectList">
                  <span>R22</span>
                  <span>收藏<el-icon><StarFilled /></el-icon></span>
                </div>
                <div class="collectList">
                  <span>R22</span>
                  <span>收藏<el-icon><StarFilled /></el-icon></span>
                </div>
                <div class="collectList">
                  <span>R22</span>
                  <span>收藏<el-icon><StarFilled /></el-icon></span>
                </div>
                <div class="collectList">
                  <span>R22</span>
                  <span>收藏<el-icon><StarFilled /></el-icon></span>
                </div>
                <div class="collectList">
                  <span>R22</span>
                  <span>收藏<el-icon><StarFilled /></el-icon></span>
                </div>
                <div class="collectList">
                  <span>R22</span>
                  <span>收藏<el-icon><StarFilled /></el-icon></span>
                </div>
                <div class="collectList">
                  <span>R22</span>
                  <span>收藏<el-icon><StarFilled /></el-icon></span>
                </div>
              </div>
              </div>
              <div class="gerantRight">
                <h5>我的收藏</h5>
                <img src="@/assets/images/shoucang.png">
                <p>暂无收藏</p>
                <div class="gerantBtn">
                    <span @click="cancelRefrig" >取消</span>
                    <span class="clearBtn">清除设置</span>
                    <span class="sureBtn">确认</span>
                </div>
              </div>
        

        </div>
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
  z-index: 10;
  .logo{
    display: flex;
    align-items: center;
    position: relative;
    >img{
      width: 127px;
      margin-right: 40px;
      cursor: pointer;
    }
   
  }
  .menuTop{
    display: flex;
    span{
      height: 55px;
      line-height: 55px;
      background-color: #9799a6;
      color: #ffffff;
      width: 190px;
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
  z-index: 12;
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

.certificate{
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 11;
  .ficate{
    background: #ffffff;
    width: 1100px;
    height: 650px;
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
    .input{
      margin-bottom: 15px;
    }
    .btn{
      display: flex;
      justify-content: flex-end;
      margin-top: 70px;
      span{
        width: 80px;
        height: 30px;
        line-height: 30px;  
        font-size: 15px;
        color: #fff;
        text-align: center;  
        border-radius: 5px;
        margin-left: 15px;   
        background-color: #0059a6;
      }
      .cancel{
        color: #080808;
        background-color: #ededed;
      }
      .clear{
        background-color: #3ea3ef;
      }
    }
  }
}
.refrigerant{
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 11;
  .gerant{
    background: #ffffff;
    width: 900px;
    height: 650px;
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
    .input{
      margin-bottom: 20px;
    }
    h5{
      margin-bottom: 50px;
      font-size: 25px;
      color: #080808;
    }
    .gerantList{
      display: flex;
      justify-content: space-between;
      .gerantLeft{
        width: 400px;
        .collect{
          .collectList{
            border: 1px solid #666666;
            border-radius: 10px;
            display: flex;
            justify-content:space-between;
            align-items: center; 
            padding: 0 10px;
            height: 30px;
            line-height: 28px;
            margin-bottom: 10px;
            span{
              color: #666666;
              font-size: 17px;
              i{
                font-size: 20px;
                vertical-align: text-bottom;
              }
            }
          }
        }
    }
    .gerantRight{
      h5{
        color: #666666;
        font-size: 16px;
      }
      p{
        color: #666666;
        font-size: 16px;
        text-align: center;
        margin-top: 20px;
      }
      .gerantBtn{
        display: flex;
        justify-content: flex-end;
        margin-top: 120px;
        span{
          padding: 0 20px;
          height: 30px;
          line-height: 30px;
          background-color: #ededed;
          color: #606060;
          display: inline-block;
          border-radius: 5px;
          margin-left: 10px;
          font-size: 16px;
          cursor: pointer;
        }
        .clearBtn{
          background-color: #3ea3ef;
          color: #fff;
        }
        .sureBtn{
          background-color: #0059a6;
          color: #fff;
        }
      }
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