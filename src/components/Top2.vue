<script setup>
import { ref, reactive, computed, inject } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/stores/index";
import { Search } from "@element-plus/icons-vue";
//API
const Api = inject("Api");

const router = useRouter();
const store = useStore();

//语言
const language = ref(store.language || 1);
const languageValue = ref(
  store.languageOption.find((item) => item.value === language.value).label
);

//控制弹窗是否显示
const showLang = ref(false);
//取消选择语言
const cancleLang = () => {
  showLang.value = false;
};
//选择语言弹窗
const showClick = () => {
  showLang.value = true;
};

//单位设置弹窗是否显示
const showUnit = ref(false);
const unitClick = () => {
  showUnit.value = true;
};
const cancelRefrig = () => {
  showUnit.value = false;
};

//基础单位制
const baseUnit = ref("");
const baseUnitList = reactive({ list: [] });
const unitList = ref("");

//换算工具弹窗是否显示
const showConver = ref(false);
const clickCert = () => {
  showConver.value = true;
};
const cancelConver = () => {
  showConver.value = false;
};
const yxzljType = ref("");
const yxzljTypeOption = [
  {
    value: "0",
    label: "选项1",
  },
];
const value1 = ref(false);
//温度
const wdType = ref("");
const wdTypeOption = [
  {
    value: "0",
    label: "选项1",
  },
];
//压力
const yaliType = ref("");
const yaliTypeOption = [
  {
    value: "0",
    label: "选项1",
  },
];

const textarea1 = ref("");
const textarea2 = ref("");

//logo
const goHome = () => {
  router.push({
    name: "Product",
  });
};

//登陆页面
const goLogin = () => {
  router.push({
    name: "Login",
  });
};
//产品选型
const goProductClass = () => {
  router.push({
    name: "Applicat",
  });
};

//获取单位
const getUnitList = async () => {
  const res = await Api.getUnitList();
  if (res.status === 1) {
    baseUnitList.list = res.baseUnit[0].Options;
    baseUnit.value = res.baseUnit[0].Options.find(
      (item) => item.title === res.baseUnit[0].value
    ).value;
    unitList.value = res.unitList;
  }
};

//切换基础单位
const changeBaseUnit = async () => {
  console.log(baseUnit.value);
  const res = await Api.getBaseUnitList({
    baseUnit: baseUnit.value,
  });
  if (res.status === 1) {
    const unitKeys = [
      "Area",
      "Coolingcapacity",
      "Density",
      "Enthalpy",
      "Heatingcapacity",
      "Length",
      "Mass",
      "MassFlowRate",
      "Pressure",
      "Temperature",
      "TemperatureDelta",
      "Velocity",
      "Volume",
      "VolumeFlowRate",
    ];
    unitKeys.forEach((key) => {
      unitList.value[key].value = res.baseUnitList[key];
    });
  }
};

//保存单位
const goUsingUnitSave = async () => {
  const res = await Api.goUsingUnitSave({
    Temperature: unitList.value.Temperature.value,
    TemperatureDelta: unitList.value.TemperatureDelta.value,
    Density: unitList.value.Density.value,
    Pressure: unitList.value.Pressure.value,
    Volume: unitList.value.Volume.value,
    VolumeFlowRate: unitList.value.VolumeFlowRate.value,
    Mass: unitList.value.Mass.value,
    MassFlowRate: unitList.value.MassFlowRate.value,
    Enthalpy: unitList.value.Enthalpy.value,
    Coolingcapacity: unitList.value.Coolingcapacity.value,
    Heatingcapacity: unitList.value.Heatingcapacity.value,
    Velocity: unitList.value.Velocity.value,
    Length: unitList.value.Length.value,
    Area: unitList.value.Area.value,
  });
  if (res.stauts === 1) {
    ElMessage({
      message: "保存成功",
      type: "success",
    });
    setTimeout(() => {
      cancelRefrig();
    }, 1000);
  }
};

//created
const onCreated = async () => {
  //获取单位
  getUnitList();
};
onCreated();
</script>

<template>
  <div class="loginTop">
    <div class="logo">
      <img src="@/assets/images/logo2.png" @click="goHome" />
      <div class="menuTop">
        <span @click="goHome">首页</span>
        <span @click="goProductClass">产品选型</span>
        <!-- <span @click="goProductList">选型清单</span> -->
        <span @click="unitClick">单位设置</span>
        <!-- <span @click="clickCert">换算工具</span> -->
      </div>
      <el-input
        v-model="searchKey"
        size="large"
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
  <div class="language" v-if="showLang">
    <div class="langText">
      <h5>提示</h5>
      <p>Tips：请选择语言</p>
      <div class="input">
        <span>语言</span>
        <el-select v-model="language" size="large">
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
      <h5>请选择单位制</h5>
      <div class="unitList">
        <span>基础单位制</span>
        <el-select v-model="baseUnit" @change="changeBaseUnit">
          <el-option
            v-for="item in baseUnitList.list"
            :key="item.value"
            :label="item.title"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>{{ unitList.Temperature.title }}</span>
        <el-select v-model="unitList.Temperature.value">
          <el-option
            v-for="item in unitList.Temperature.Options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>{{ unitList.TemperatureDelta.title }}</span>
        <el-select v-model="unitList.TemperatureDelta.value">
          <el-option
            v-for="item in unitList.TemperatureDelta.Options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>{{ unitList.Pressure.title }}</span>
        <el-select v-model="unitList.Pressure.value">
          <el-option
            v-for="item in unitList.Pressure.Options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>{{ unitList.Coolingcapacity.title }}</span>
        <el-select v-model="unitList.Coolingcapacity.value">
          <el-option
            v-for="item in unitList.Coolingcapacity.Options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>{{ unitList.Heatingcapacity.title }}</span>
        <el-select v-model="unitList.Heatingcapacity.value">
          <el-option
            v-for="item in unitList.Heatingcapacity.Options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>{{ unitList.Velocity.title }}</span>
        <el-select v-model="unitList.Velocity.value">
          <el-option
            v-for="item in unitList.Velocity.Options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>{{ unitList.VolumeFlowRate.title }}</span>
        <el-select v-model="unitList.VolumeFlowRate.value">
          <el-option
            v-for="item in unitList.VolumeFlowRate.Options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>{{ unitList.MassFlowRate.title }}</span>
        <el-select v-model="unitList.MassFlowRate.value">
          <el-option
            v-for="item in unitList.MassFlowRate.Options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>{{ unitList.Length.title }}</span>
        <el-select v-model="unitList.Length.value">
          <el-option
            v-for="item in unitList.Length.Options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>{{ unitList.Mass.title }}</span>
        <el-select v-model="unitList.Mass.value">
          <el-option
            v-for="item in unitList.Mass.Options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>{{ unitList.Area.title }}</span>
        <el-select v-model="unitList.Area.value">
          <el-option
            v-for="item in unitList.Area.Options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>{{ unitList.Volume.title }}</span>
        <el-select v-model="unitList.Volume.value">
          <el-option
            v-for="item in unitList.Volume.Options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>{{ unitList.Density.title }}</span>
        <el-select v-model="unitList.Density.value">
          <el-option
            v-for="item in unitList.Density.Options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="unitList">
        <span>{{ unitList.Enthalpy.title }}</span>
        <el-select v-model="unitList.Enthalpy.value">
          <el-option
            v-for="item in unitList.Enthalpy.Options"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="btn">
        <span @click="goUsingUnitSave" class="btnSure">确定</span>
        <span @click="cancelRefrig">取消</span>
      </div>
    </div>
  </div>
  <div class="conversion" v-if="showConver">
    <div class="coverBox">
      <h5>换算工具</h5>
      <div class="coverList">
        <span>预选制冷剂和认证 R22</span>
        <el-select v-model="yxzljType" placeholder="请选择">
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
        <el-select v-model="wdType" placeholder="温度/℃">
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
        <img src="@/assets/images/jiantou.png" />
      </div>
      <div class="select">
        <el-select v-model="yaliType" placeholder="压力/(bar)">
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
.loginTop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  background-color: #f0f0f0;
  padding: 30px 7% 10px 7%;
  .logo {
    display: flex;
    align-items: center;
    position: relative;
    > img {
      width: 127px;
      margin-right: 40px;
      cursor: pointer;
    }
  }
  .menuTop {
    display: flex;
    span {
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
  .lang {
    display: flex;
    align-items: center;
    background-color: #494a52;
    border-radius: 10px;
    height: 55px;
    line-height: 55px;
    width: 180px;
    border-radius: 10px;
    justify-content: center;
    span {
      font-size: 15px;
      color: #ffffff;
      line-height: 1.5;
      cursor: pointer;
    }
  }
}
.language {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 12;
  .langText {
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
    h5 {
      margin-bottom: 50px;
      font-size: 25px;
      color: #080808;
    }
    p {
      font-size: 25px;
      color: #080808;
    }
    .input {
      display: flex;
      align-items: center;
      margin-top: 25px;
      span {
        flex: 0 0 110px;
        font-size: 20px;
        color: #080808;
        text-align: right;
        margin-right: 20px;
      }
    }
    .btn {
      display: flex;
      justify-content: flex-end;
      margin-top: 70px;
      span {
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
      .btnSure {
        background-color: #0059a6;
        border: 1px solid #0059a6;
        color: #ffffff;
      }
    }
  }
}
.unit {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 12;
  .unitBox {
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
    h5 {
      font-size: 20px;
      color: #080808;
    }
    .unitList {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      span {
        flex: 0 0 100px;
        font-size: 14px;
        color: #666;
        margin-right: 20px;
        text-align: right;
        i {
          color: #ff7070;
        }
      }
    }
    .save {
      margin-top: 15px;
      span {
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
    .btn {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
      span {
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
      .btnSure {
        background-color: #0059a6;
        color: #ffffff;
      }
    }
  }
}
.conversion {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 12;
  .coverBox {
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
    h5 {
      margin-bottom: 30px;
      font-size: 25px;
      color: #080808;
    }
    .coverList {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      span {
        font-size: 14px;
        color: #666;
      }
    }
    .coverList2 {
      display: flex;
      margin-bottom: 10px;
      span {
        font-size: 14px;
        color: #666;
      }
    }
    .select {
      margin-bottom: 10px;
    }
    .img {
      text-align: center;
      margin: 15px 0;
    }
    .btn {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
      span {
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
.loginTop {
  .logo {
    .el-input {
      width: 580px;
      margin-right: 10px;
      .el-input__wrapper {
        border-radius: 8px;
        .el-input__inner {
          line-height: 55px;
          height: 55px;
          text-align: center;
          font-size: 15px;
        }
      }
    }
  }
}

.unitList .el-select__wrapper,
.coverList .el-select__wrapper,
.select .el-select__wrapper {
  background-color: #e7e7e7;
}
.coverList .el-select {
  width: 150px;
}
</style>
