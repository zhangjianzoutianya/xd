<script setup>
import { ref, reactive, computed, inject } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/stores/index';
import { Search} from '@element-plus/icons-vue'
//API
const Api = inject('Api');

const router = useRouter();
const store = useStore(); 

//语言
const language = ref(store.language || 1);
const languageValue = ref(store.languageOption.find(item => item.value === language.value).label);

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


//单位设置弹窗是否显示
const showUnit=ref(false)
const unitClick=()=>{
  showUnit.value=true
}
const cancelRefrig=()=>{
  showUnit.value=false
}


//基础单位制
const jcType = ref('');
const jcTypeOption = [{
  value: '0',
  label: '选项1',
},{
  value: '1',
  label: '选项2',
}]
//自定义单位制
const zdyType = ref('');
const zdyTypeOption = [{
  value: '0',
  label: '选项1',
}]
//新增单位制
const addType = ref('');
const addTypeOption = [{
  value: '0',
  label: '选项1',
}]
//过冷/过热
const coolType = ref('');
const coolTypeOption = [{
  value: '0',
  label: '选项1',
}]
//压力
const barType = ref('');
const barTypeOption = [{
  value: '0',
  label: '选项1',
}]
//制冷量
const refirgType = ref('');
const refirgTypeOption = [{
  value: '0',
  label: '选项1',
}]  
//制热量
const heatType = ref('');
const heatTypeOption = [{
  value: '0',
  label: '选项1',
}]  
//速度
const speedType = ref('');
const speedTypeOption = [{
  value: '0',
  label: '选项1',
}]  
//体积流量
const volumeType = ref('');
const volumeTypeOption = [{
  value: '0',
  label: '选项1',
}]    
//质量流量
const qualType = ref('');
const qualTypeOption = [{
  value: '0',
  label: '选项1',
}]    
//尺寸
const dimenType = ref('');
const dimenTypeOption = [{
  value: '0',
  label: '选项1',
}]    
//密度
const denType = ref('');
const denTypeOption = [{
  value: '0',
  label: '选项1',
}]      
//焓
const hanType = ref('');
const hanTypeOption = [{
  value: '0',
  label: '选项1',
}]          
//流量系数
const flowType = ref('');
const flowTypeOption = [{
  value: '0',
  label: '选项1',
}]     


//换算工具弹窗是否显示
const showConver=ref(false)
const clickCert=()=>{
  showConver.value=true
}
const cancelConver=()=>{
  showConver.value=false
}
const yxzljType = ref('');
const yxzljTypeOption = [{
  value: '0',
  label: '选项1',
}]
const value1 = ref(false)
//温度
const wdType = ref('');
const wdTypeOption = [{
  value: '0',
  label: '选项1',
}]
//压力
const yaliType = ref('');
const yaliTypeOption = [{
  value: '0',
  label: '选项1',
}]



const textarea1 = ref('')
const textarea2 = ref('')

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
//产品选型
const goProductClass = () =>{
  router.push({
    name: 'Applicat'
  })
}

//created
const onCreated = async () => {
  
}
onCreated();

</script>

<template>
 <div class="loginTop">
    <div class="logo">
      <img src="@/assets/images/logo2.png" @click="goHome"/>
      <div class="menuTop">
        <span @click="goHome">首页</span>
        <span @click="goProductClass">产品选型</span>
        <!-- <span @click="goProductList">选型清单</span> -->
        <span @click="unitClick">单位设置</span>
        <!-- <span @click="clickCert">换算工具</span> -->
      </div>
      <el-input
          v-model="searchKey" size="large"  
          placeholder="请输入搜索内容"
          :prefix-icon="Search"
        />
    </div>
    <div class="lang">
      <!-- <span @click="goLogin">登入</span>
      <span>｜</span> -->
      <span @click="showClick">{{ languageValue }}</span>
    </div> 
  </div>
  <div class="language"  v-if="showLang">   
     <div class="langText">
      <h5>提示</h5>
      <p>Tips：请选择语言</p>
      <div class="input">
        <span>语言</span>
        <el-select 
          v-model="language" 
          size="large">
          <el-option
            v-for="item in store.languageOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="btn"> 
        <span @click="cancleLang">取消</span>
        <span class="btnSure" @click="changeLanguage">确定</span>
      </div>
     </div>

  </div>
  <div class="unit" v-if="showUnit">
    <div class="unitBox">
      <h5>请选择单位制 </h5>
      <div class="unitList">
        <span>基础单位制</span>
        <el-select 
          v-model="jcType" 
          placeholder="国际通用单位制">
          <el-option
            v-for="item in jcTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>自定义单位制</span>
        <el-select 
          v-model="zdyType" 
          placeholder="请选择">
          <el-option
            v-for="item in zdyTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>新增单位制</span>
        <el-select 
          v-model="addType"          
          placeholder="请选择">
          <el-option
            v-for="item in addTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span><i>*</i>名称</span>
        <el-input v-model="userName"/>
      </div>
      <div class="unitList">
        <span>温度</span>
        <el-select 
          v-model="zdyType" 
          placeholder="℃">
          <el-option
            v-for="item in zdyTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>过冷/过热度吧</span>
        <el-select 
          v-model="coolType" 
          placeholder="℃">
          <el-option
            v-for="item in coolTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>压力bar</span>
        <el-select 
          v-model="barType" 
          placeholder="bar">
          <el-option
            v-for="item in barTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>制冷量kw</span>
        <el-select 
          v-model="refirgType" 
          placeholder="kw">
          <el-option
            v-for="item in refirgTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>制热量kw</span>
        <el-select 
          v-model="heatType" 
          placeholder="kw">
          <el-option
            v-for="item in heatTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>速度</span>
        <el-select 
          v-model="speedType" 
          placeholder="m/s">
          <el-option
            v-for="item in speedTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div> 
      <div class="unitList">
        <span>体积流量</span>
        <el-select 
          v-model="volumeType" 
          placeholder="℃">
          <el-option
            v-for="item in volumeTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div> 
      <div class="unitList">
        <span>质量流量</span>
        <el-select 
          v-model="qualType" 
          placeholder="kg/h">
          <el-option
            v-for="item in qualTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div> 
      <div class="unitList">
        <span>尺寸</span>
        <el-select 
          v-model="dimenType" 
          placeholder="mm">
          <el-option
            v-for="item in dimenTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div> 
      <div class="unitList">
        <span>密度</span>
        <el-select 
          v-model="denType" 
          placeholder="kg/m³">
          <el-option
            v-for="item in denTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div> 
      <div class="unitList">
        <span>焓</span>
        <el-select 
          v-model="hanType" 
          placeholder="kJ/kg">
          <el-option
            v-for="item in hanTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div> 
      <div class="unitList">
        <span>熇</span>
        <el-input v-model="userName2"/>
      </div> 
      <div class="unitList">
        <span>流量系数</span>
        <el-select 
          v-model="flowType" 
          placeholder="℃">
          <el-option
            v-for="item in flowTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="save">
        <span>保存</span>
      </div>
      <div class="btn">
        <span class="btnSure">确定</span>
        <span @click="cancelRefrig">取消</span>
      </div>
    </div>
  </div>
  <div class="conversion" v-if="showConver">
    <div class="coverBox">
      <h5>换算工具</h5>
      <div class="coverList">
        <span>预选制冷剂和认证 R22</span>
        <el-select 
          v-model="yxzljType" 
          placeholder="请选择">
          <el-option
            v-for="item in yxzljTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="coverList2">
        <span>预选制冷剂和认证</span>
        <el-switch v-model="value1" />
        </div>
      <div class="select">
        <el-select 
          v-model="wdType" placeholder="温度/℃">
          <el-option
            v-for="item in wdTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div class="input">
        <el-input
        v-model="textarea1"
        style="width: 100%"
        :rows="4"
        type="textarea"
        placeholder="请输入"
        />
      </div>
      <div class="img">
        <img src="@/assets/images/jiantou.png"/>
      </div>
      <div class="select">
        <el-select 
          v-model="yaliType" placeholder="压力/(bar)">
          <el-option
            v-for="item in yaliTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="input">
        <el-input
        v-model="textarea2"
        style="width: 100%"
        :rows="4"
        type="textarea"
        placeholder="请输入"
        />
      </div>
      <div class="btn">
        <span @click="cancelConver"> 取消</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.loginTop{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  background-color: #f0f0f0;
  padding: 30px  7% 10px 7%;
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
.unit{
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 12;
  .unitBox{
    width: 500px;
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
      font-size: 20px;
      color: #080808;
    }
    .unitList{
      display: flex;
      justify-content: center ;
      align-items: center;
      margin-top: 10px;
      span{
        flex: 0 0 100px;
        font-size: 14px;
        color: #666;
        margin-right: 20px;
        text-align: right;
        i{
          color: #ff7070;
        }
      }
    }
    .save{
      margin-top: 15px;
      span{
        font-size: 16px;
        width: 65px;
        color: #ffffff;
        height: 33px;
        line-height: 33px;
        background-color: #0059a6;
        border-radius: 10px;
        width: 100px;
        text-align: center;
        cursor: pointer; 
        display: inline-block; 
      }
    }
    .btn{
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
      span{
        margin-left: 10px;
        width: 65px;
        color: #080808;
        height: 33px;
        line-height: 33px;
        background-color: #d4d4d4;
        border-radius: 10px;
        width: 100px;
        text-align: center;
        cursor: pointer; 
        display: inline-block; 
        font-size: 16px;
      }
      .btnSure{
        background-color: #0059a6;
        color: #ffffff;
      }
    }
  }
}
.conversion{
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 12;
  .coverBox{
    width: 520px;
    background-color: #ffffff;
    border-radius: 10px;
    position: absolute;
    padding: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%); 
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    h5{
      margin-bottom: 30px;
      font-size: 25px;
      color: #080808;
    }
    .coverList{
      display: flex;
      justify-content:space-between ;
      align-items: center;
      margin-bottom: 10px;
      span{
        font-size: 14px;
        color: #666;
      }

    }
    .coverList2{
      display: flex;
      margin-bottom: 10px;
      span{
        font-size: 14px;
        color: #666;
      }
    }
    .select{
      margin-bottom: 10px;
    }
    .img{
      text-align: center;
      margin: 15px 0;
    }
    .btn{
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
      span{
        width: 65px;
        text-align: center;
        font-size: 16px;
        color: #080808;
        height: 33px;
        line-height: 33px;
        background-color: #d4d4d4;
        border-radius: 10px;
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

.unitList .el-select__wrapper,.coverList .el-select__wrapper,.select .el-select__wrapper{
  background-color: #e7e7e7;
}
.coverList  .el-select{
  width: 150px;
}
</style>