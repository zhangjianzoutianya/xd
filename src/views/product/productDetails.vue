<script setup>
import { ref, reactive, computed, onMounted, inject } from 'vue';
import * as echarts from 'echarts';
import { useRouter } from 'vue-router';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
import Top from '@/components/Top2.vue';
//API
const Api = inject('Api');
const router = useRouter();

//产品id
const cateId = router.currentRoute.value.params.id;
const secondId = ref(null);
const refrigerant = ref(null);

//产品详情数据
const productLoad = ref(null);
const proCateItem = ref(null);
const selectionP = ref(null);
const productInfo = ref(null);

const typeOptions = reactive({list: []});
const refrigerantList = reactive({list: []});

const proListData = reactive({list: []});
const proList2Data = reactive({list: []});
const coilListData = reactive({list: []});
const systemParameterData = reactive({list: []});

const productData = [{
  key: '1',
  a: 'DPF0.8A-001',
  b: '0.8',
  c: '0.68',
  d: '147',
  e: '0',
  f: '135.635',
  g: '500',
  h: '超出范围',
},{
  key: '2',
  a: 'DPF0.8A-001',
  b: '0.8',
  c: '0.68',
  d: '147',
  e: '0',
  f: '135.635',
  g: '500',
  h: '超出范围',
},{
  key: '3',
  a: 'DPF0.8A-001',
  b: '0.8',
  c: '0.68',
  d: '147',
  e: '0',
  f: '135.635',
  g: '500',
  h: '超出范围',
}];
const currentProductData = ref(null);

//数据类型
const dadaType = ref('1');

//统计图
const chartContainer = ref(null);
let chartInstance = null;
const initChart = () => {
  if (!chartContainer.value) return;
  // 初始化 ECharts 实例
  chartInstance = echarts.init(chartContainer.value);
  // 配置项
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['0', '50', '100', '150', '200', '250', '300', '350', '400', '450', '500', '550'],
      name: '步数',
      splitLine: {
        show: true,
        lineStyle: {
          color: '#080808',
          type: 'solid',
        },
      }
    },
    yAxis: {
      type: 'value',
      name: '制冷量[kW]',
      splitLine: {
        show: true,
        lineStyle: {
          color: '#080808',
          type: 'solid',
        },
      }
    },
    series: [
      {
        name: '制冷量[kW]',
        type: 'line',
        data: [0.01, 0.04, 0.06, 0.11, 0.13, 0.17, 0.19, 0.21, 0.26, 0.29, 0.33, 0.45],
        smooth: true, // 平滑曲线
      },
    ],
  };
  // 设置配置项
  chartInstance.setOption(option);
}

//选择型号
const handleSecondId = (param) => {
  secondId.value = param;
  proCateItem.value = productLoad.value.proCateList.find(item => item.cateId === param);
  //获取工况参数
  getSelectionP();
}

//选择制冷剂
const handleRefrigerant = (param) => {
  refrigerant.value = param;
  //获取产品数据
  getProductInfo();
}

//选择产品型号
const handleProductDataChange = (param) => {
  currentProductData.value = param;
}

//数据类型切换
const handleDadaType = (param) =>{
  console.log(param);
}

const getProductLoad = async () => {
  const res = await Api.getProductLoad({
    cateId,
  })
  if(res.status === 1){
    productLoad.value = res;
    secondId.value = res.proCateList[0]?.cateId;
    proCateItem.value = res.proCateList[0];
    typeOptions.list = res.proCateList.map(item => ({
      key: item.cateId,
      value: item.cateId,
      label: item.title,
    }));
    refrigerant.value = res.refrigerantList[0];
    refrigerantList.list = res.refrigerantList.map(item => ({
      key: item,
      value: item,
      label: item,
    }));
    //获取工况参数
    getSelectionP();
  }
}

const getSelectionP = async () => {
  const res = await Api.getSelectionP({
    cateId,
    secondId: secondId.value,
  })
  if(res.status === 1){
    selectionP.value = res;
    //获取产品数据
    await getProductInfo();
    initChart();
  }
}

const getProductInfo = async () => {
  const res = await Api.getProductInfo({
    cateId,
    secondId: secondId.value,
    refrigerant: refrigerant.value,
  })
  if(res.status === 1){
    productInfo.value = res;
    if(res.proList.tbody.length > 0){
      proListData.list = res.proList.tbody.map(item => {
        return {
          status: item.status,
          ...item.list,
        }
      });
    }
    if(res.proList2.tbody.length > 0){
      proList2Data.list = res.proList2.tbody.map(item => {
        return {
          ...item,
        }
      });
      console.log(proList2Data.list);
    }
    if(res.coilList.tbody.length > 0){
      coilListData.list = res.coilList.tbody.map(item => {
        return {
          ...item,
        }
      });
    }
    if(res.systemParameter.tbody.length > 0){
      systemParameterData.list = res.systemParameter.tbody.map(item => {
        return {
          ...item,
        }
      });
    }
  }
}

onMounted(() => {
  //获取产品详情
  getProductLoad();
});

</script>

<template>
  <Top/>
  <div class="productDetails">
    <div class="box">
      <div class="preview" v-if="productLoad">
        <h5>
          <span>首页</span>
          <el-icon><ArrowLeft/></el-icon>
          <span>{{ productLoad.className }}</span>
          <el-icon v-if="secondId"><ArrowLeft/></el-icon>
          <span v-if="secondId">{{ proCateItem.title }}</span>
        </h5>
        <div class="name">
          <img :src="productLoad.pic1"/>
        </div>
        <div class="type">
          <div class="img">
            <img :src="proCateItem.pic"/>
          </div>
          <div class="select">
            <p>型号</p>
            <el-select
              v-model="secondId"
              @change="handleSecondId">
              <el-option
                v-for="item in typeOptions.list"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div class="txt" v-html="proCateItem.content">
        </div>
      </div>
      <div class="data">
        <div class="data_a">
          <h5>
            工况参数
            <span>
              返回
              <el-icon><ArrowRight /></el-icon>
            </span>
          </h5>
          <div class="con">
            <div class="item" v-if="proCateItem && proCateItem.is_select_refrigerant === 1">
              <p>制冷剂</p>
              <el-select
                v-model="refrigerant"
                @change="handleRefrigerant">
                <el-option
                  v-for="item in refrigerantList.list"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="item" v-if="selectionP">
              <p>选择标准</p>
              <el-input
                value="R407"/>
            </div>
            <div class="item">
              <span>查询</span>
            </div>
          </div>
          <div class="con" v-if="selectionP">
            <div class="item">
              <h5>能力</h5>
              <div 
                class="list" 
                v-for="(item, index) in selectionP?.qperatingParameter[0]?.options" :key="index">
                <p>{{ item.title }}</p>
                <el-input
                  v-model="item.value"/>
                <el-select
                  v-model="item.unit">
                  <el-option
                    v-for="items in item.unitOptions"
                    :key="items"
                    :label="items"
                    :value="items"
                  />
                </el-select>
              </div>
            </div>
            <div class="item">
              <h5>蒸发</h5>
              <div class="list" v-for="(item, index) in selectionP?.qperatingParameter.slice(1, 4)" :key="index">
                <p v-if="item.tagType === 'select'">
                  <el-select
                    v-model="item.option">
                    <el-option
                      v-for="items in item.options"
                      :key="items.name"
                      :label="items.title"
                      :value="items.name"
                    />
                  </el-select>
                </p>
                <p v-else>{{item.options[0].title}}</p>
                <el-input
                  v-model="item.options.find(items => items.name === item.option).value"
                  v-if="item.tagType === 'select'"/>
                <el-input
                  v-model="item.options[0].value"
                  v-else/>  
                <el-select
                  v-model="item.options.find(items => items.name === item.option).unit"
                  v-if="item.tagType === 'select'">
                  <el-option
                    v-for="items in item.options.find(items => items.name === item.option).unitOptions"
                    :key="items"
                    :label="items"
                    :value="items"
                  />
                </el-select>
                <el-select
                  v-model="item.options[0].unit"
                  v-else>
                  <el-option
                    v-for="items in item.options[0].unitOptions"
                    :key="items"
                    :label="items"
                    :value="items"
                  />
                </el-select>              
              </div>
            </div>
            <div class="item">
              <h5>冷凝</h5>
              <div class="list" v-for="(item, index) in selectionP?.qperatingParameter.slice(4, 7)" :key="index">
                <p v-if="item.tagType === 'select'">
                  <el-select
                    v-model="item.option">
                    <el-option
                      v-for="items in item.options"
                      :key="items.name"
                      :label="items.title"
                      :value="items.name"
                    />
                  </el-select>
                </p>
                <p v-else>{{item.options[0].title}}</p>
                <el-input
                  v-model="item.options.find(items => items.name === item.option).value"
                  v-if="item.tagType === 'select'"/>
                <el-input
                  v-model="item.options[0].value"
                  v-else/>  
                <el-select
                  v-model="item.options.find(items => items.name === item.option).unit"
                  v-if="item.tagType === 'select'">
                  <el-option
                    v-for="items in item.options.find(items => items.name === item.option).unitOptions"
                    :key="items"
                    :label="items"
                    :value="items"
                  />
                </el-select>
                <el-select
                  v-model="item.options[0].unit"
                  v-else>
                  <el-option
                    v-for="items in item.options[0].unitOptions"
                    :key="items"
                    :label="items"
                    :value="items"
                  />
                </el-select>              
              </div>
            </div>
          </div>
        </div>
        <div class="data_b" v-if="productInfo">
          <h5>
            选择产品系列
            <p>
              <i></i>
              <span>最优选</span>
              <i></i>
              <span>可选项</span>
              <i></i>
              <span>禁选项</span>
            </p>
          </h5>
          <div class="table">
            <el-table
              border
              :data="proListData.list"
              highlight-current-row
              @current-change="handleProductDataChange">
              <el-table-column property="status" label="选择">
                <template #default="{ row }">
                  <span class="dataRow" :class="{'dataRow1': row.status === 1, 'dataRow0': row.status === 0}" ></span>
                </template>
              </el-table-column>
              <el-table-column :property="index.toString()" :label="item" v-for="(item, index) in productInfo.proList.thead" :key="index"/>
            </el-table>
          </div>
        </div>
        <div class="data_c" v-if="productInfo">
          <el-tabs 
            v-model="dadaType" 
            class="dadaType" 
            @tab-click="handleDadaType">
            <el-tab-pane label="选择产品" name="1">
              <div class="dadaTypeBox">
                <div class="table_data1">
                  <h5>
                    产品型号 <span>{{ productInfo.proList2.title }}</span> <i>三维简图</i>
                  </h5>
                  <el-table
                    :data="proList2Data.list"
                    border
                    highlight-current-row
                    @current-change="handleProductDataChange">
                    <el-table-column :property="index.toString()" :label="item" v-for="(item, index) in productInfo.proList2.thead" :key="index"/>
                  </el-table>
                </div>
                <div class="table_data1">
                  <h5>
                    线圈型号 <span>{{ productInfo.coilList.title }}</span>
                  </h5>
                  <el-table
                    :data="coilListData.list"
                    border
                    highlight-current-row
                    @current-change="handleProductDataChange">
                    <el-table-column :property="index.toString()" :label="item" v-for="(item, index) in productInfo.coilList.thead" :key="index"/>
                  </el-table>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="系统参数" name="2">
              <div class="dadaTypeBox">
                <div class="table_data1">
                  <h5>压缩机效率:{{ productInfo.systemParameter.title }} 系统参数仅供参考</h5>
                  <div class="table_data3">
                    <el-table
                      :data="systemParameterData.list"
                      border
                      highlight-current-row
                      @current-change="handleProductDataChange">
                      <el-table-column :property="index.toString()" :label="item" v-for="(item, index) in productInfo.systemParameter.thead" :key="index"/>
                    </el-table>
                    <!-- <img src="@/assets/images/productDetails_1.jpg"/> -->
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="性能曲线" name="3">
              <div class="dadaTypeBox">
                <div class="table_data2">
                  <h5>电子膨胀阀</h5>
                  <div class="line-chart" ref="chartContainer"></div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
          <!-- <div class="btn">
            <span>添加至选型清单</span>
            <span>文档和视觉效果</span>
            <span>附件及备份</span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.productDetails{
  width: 100%;
  background-color: #f0f0f0;
  padding: 95px 25px 25px 25px;
  .box{
    display: flex;
    .preview{
      flex: 0 0 330px;
      margin-right: 5px;
      border-radius: 6px;
      background-color: #fff;
      padding: 16px;
      >h5{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #707070;
        padding: 4px 0 12px 0;
        margin-bottom: 30px;
        span{
          font-size: 15px;
          color: #080808;
          font-weight: 500;
        }
        span:last-child{
          font-weight: 600;
        }
        i{
          font-size: 12px;
          color: #8b8b8b;
          margin: 0 12px;
        }
      }
      .name{
        margin-bottom: 30px;
        img{
          display: block;
          width: 100%;
          margin: 0 auto;
        }
      }
      .type{
        display: flex;
        align-items: flex-start;
        margin-bottom: 30px;
        .img{
          flex: 0 0 200px;
          margin-right: 10px;
          img{
            display: block;
            width: 100%;
            background-color: #f0fafc;
          }
        }
        .select{
          width: 100%;
          p{
            font-size: 15px;
            color: #a5a5a5;
            margin-bottom: 6px;
          }
        }
      }
    }
    .data{
      width: 100%;
      .data_a{
        background-color: #ffffff;
        border-radius: 6px;
        margin-bottom: 5px;
        padding: 12px 15px 25px 25px;
        >h5{
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 16px;
          color: #080808;
          border-bottom: 1px solid #333333;
          padding-bottom: 6px;
          margin-bottom: 25px;
          span{
            display: flex;
            align-items: center;
            cursor: pointer;
            i{
              color: #808080;
              font-size: 14px;
              margin-left: 6px;
            }
          }
        }
        .con{
          display: flex;
          margin-bottom: 10px;
          .item{
            width: 25%;
            h5{
              font-size: 13px;
              color: #080808;
              margin-bottom: 20px; 
              font-weight: normal;
            }
            p{
              font-size: 13px;
              color: #080808;
              margin-bottom: 4px;
            }
            >span{
              display: inline-block;
              line-height: 2;
              background-color: #0059a6;
              padding: 0 12px;
              color: #fff;
              font-size: 13px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: 500;
            }
            .list{
              display: flex;
              align-items: center;
              margin-bottom: 8px;
              p{
                width: 100px;
                margin-bottom: 0px;
                padding-right: 10px;

              }
            }
          }
        }
        .con:nth-child(2){
          .item{
            border-bottom: 1px solid #e5e5e5;
            padding-bottom: 15px;
          }
        }
      }
      .data_b{
        background-color: #ffffff;
        border-radius: 6px;
        margin-bottom: 5px;
        padding: 12px 15px 25px 25px;
        >h5{
          display: flex;
          align-items: center;
          font-size: 16px;
          color: #080808;
          border-bottom: 1px solid #333333;
          padding-bottom: 6px;
          margin-bottom: 25px;
          p{
            display: flex;
            align-items: center;
            font-weight: normal;
            span{
              font-size: 13px;
              color: #080808;
            }
            i{
              margin-left: 40px;
              margin-right: 6px;
              width: 22px;
              height: 14px;
              border: 1px solid #787878;
            }
            i:nth-child(1){
              background-color: #83e1db;
            }
            i:nth-child(3){
              background-color: #ffffff;
            }
            i:nth-child(5){
              background-color: #7c7c7c;
            }
          }
        }
      }  
      .data_c{
        background-color: #ffffff;
        border-radius: 6px;
        padding: 12px 15px 25px 25px;
        .dadaTypeBox{
          width: 100%;
          border: 1px solid #707070;
          padding: 15px;
          .table_data1{
            h5{
              display: flex;
              align-items: center;
              font-size: 14px;
              color: #080808;
              font-weight: normal;
              margin-bottom: 10px;
              span{
                margin-left: 40px;
              }
              i{
                font-style: normal;
                font-size: 14px;
                color: #fff;
                line-height: 22px;
                padding: 0 8px;
                border-radius: 4px;
                background-color: #0059a6;
                margin-left: 20px;
              }
            }
          }
          .table_data3{
            display: flex;
            align-items: flex-start;
            >img{
              width: 300px;
              margin-left: 40px; 
            }
          }
          .table_data2{
            width: 800px;
            margin: 0 auto;
            h5{
              line-height: 30px;
              text-align: center;
              background-color: #0059a6;
              font-size: 15px;
              color: #fff;
              margin-bottom: 20px;
            }
            .line-chart {
              width: 800px;
              height: 400px;
            }
          }
          >.table_data1:nth-child(2){
            margin-top: 40px;
          }
        }
        .btn{
          display: flex;
          align-items: center;
          justify-content: flex-end;
          span{
            line-height: 36px;
            padding: 0 12px;
            background-color: #0059a6;
            font-size: 15px;
            color: #fff;
            border-radius: 6px;
            margin-top: 20px;
            margin-left: 40px;
          }
        }
      }  
    }
  }
}
</style>

<style lang="less">
.productDetails{
  .preview{
    .txt{
      p{
        font-size: 15px;
        color: #080808;
      }
    }
  }
  .data{
    .item{
      .el-input{
        width: 200px;
      }
      .el-input__wrapper{
        background-color: #e7e7e7;
        padding: 0 4px;
        .el-input__inner{
          line-height: 20px;
          height: 22px;
          font-size: 13px;
          color: #080808;
        }
      }
      .el-select{
        width: 200px;
      }
      .el-select__wrapper{
        background-color: #e7e7e7;
        padding: 0 4px;
      }
      .el-select__selected-item{
        line-height: 20px;
        height: 22px;
        font-size: 13px;
        color: #080808;
      }
      .list{
        .el-input{
          width: 120px;
          margin-right: 8px;
        }
        .el-select{
          width: 60px;
          .el-select__wrapper{
            background-color: #e7e7e7;
            padding: 0 4px;
            line-height: 20px;
            height: 20px;
            font-size: 13px;
            color: #080808;
            min-height: auto;
          }
        }
        .el-input:nth-child(3){
          width: 60px;
        }
        p{
          .el-select{
            width: 90px;
          }
        }
      }
    }
    .dataRow{
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid #b7b7b7;
      background-color: #ffffff;
    }
    .dataRow1{
      border: 1px solid #787878;
      background-color: #83e1db;
    }
    .dataRow2{
      border: 1px solid #787878;
      background-color: #ffffff;
    }
    .dataRow0{
      border: 1px solid #787878;
      background-color: #7c7c7c;
    }
    .el-table__body tr.current-row>td.el-table__cell{
      background-color: #6bc7df;
      .dataRow{
        background-color: #0058a3;
      }
    }
    .el-tabs__item{
      font-size: 14px;
      color: #080808;
    }
    .el-tabs__item.is-active, .el-tabs__item:hover{
      color: #0059a6;
    }
    .el-tabs__active-bar{
      background-color: #0059a6;
    }
    .el-table .el-table__cell{
      color: #080808;
    }
    .data_c{
      .el-table--fit{
        width: 70%;
      }
    }
  }
}
</style>