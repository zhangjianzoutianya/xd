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
const { id } = router.currentRoute.value.params;

//产品详情数据
const details = reactive({});

const type = ref('A');
const typeOptions = [{
  value: 'A',
  label: 'A',
},{
  value: 'B',
  label: 'B',
},{
  value: 'C',
  label: 'C',
},{
  value: 'D',
  label: 'D',
},{
  value: 'E',
  label: 'E',
}]

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


//选择产品型号
const handleProductDataChange = (param) => {
  console.log(param);
  currentProductData.value = param;
}

//数据类型切换
const handleDadaType = (param) =>{
  console.log(param);
}

onMounted(() => {
  initChart();
});

</script>

<template>
  <Top/>
  <div class="productDetails">
    <div class="box">
      <div class="preview">
        <h5>
          <span>首页</span>
          <el-icon><ArrowLeft/></el-icon>
          <span>电磁阀</span>
          <el-icon><ArrowLeft/></el-icon>
          <span>MDF</span>
        </h5>
        <div class="name">
          <p>安装位置：液体管路A</p>
          <img src="@/assets/images/productDetails_1.jpg"/>
        </div>
        <div class="type">
          <div class="img">
            <img src="@/assets/images/productDetails_2.png"/>
          </div>
          <div class="select">
            <p>型号</p>
            <el-select
              v-model="type">
              <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div class="txt">
          适用介质温度:-30℃/+70℃
          <br/>
          最高工作压力:4.3MPa
          <br/>
          ·适用机型:家用空调、热泵热水器、商用制冷
          <br/>
          ·外塑封线圈，耐候性强
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
            <div class="item">
              <p>制冷剂</p>
              <el-input
                value="R407"/>
            </div>
            <div class="item">
              <p>选择标准</p>
              <el-input
                value="R407"/>
            </div>
            <div class="item">
              <span>查询</span>
            </div>
          </div>
          <div class="con">
            <div class="item">
              <h5>能力</h5>
              <div class="list">
                <p>制冷量</p>
                <el-input
                  value="R407"/>
                <el-select
                  value="kW">
                </el-select>
              </div>
              <div class="list">
                <p>流量质量</p>
                <el-input
                  value="30.0"/>
                <el-input
                  value="kg/s"/>  
              </div>
            </div>
            <div class="item">
              <h5>蒸发</h5>
              <div class="list">
                <p>蒸发温度</p>
                <el-input
                  value="7"/>
                <el-select
                  value="C">
                </el-select>
              </div>
              <div class="list">
                <p>额外过热度</p>
                <el-input
                  value="5"/>
                <el-input
                  value="K"/>  
              </div>
              <div class="list">
                <p>额外过冷度</p>
                <el-input
                  value="0"/>
                <el-input
                  value="K"/>  
              </div>
            </div>
            <div class="item">
              <h5>冷凝</h5>
              <div class="list">
                <p>冷凝温度</p>
                <el-input
                  value="45"/>
                <el-select
                  value="C">
                </el-select>
              </div>
              <div class="list">
                <p>过冷度</p>
                <el-input
                  value="5"/>
                <el-input
                  value="K"/>  
              </div>
              <div class="list">
                <p>额外过冷度</p>
                <el-input
                  value="5"/>
                <el-input
                  value="K"/>  
              </div>
            </div>
          </div>
        </div>
        <div class="data_b">
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
              :data="productData"
              highlight-current-row
              @current-change="handleProductDataChange">
              <el-table-column property="o" label="选择">
                <span class="dataRow"></span>
              </el-table-column>
              <el-table-column property="a" label="型号"/>
              <el-table-column property="b" label="口径[mm]"/>
              <el-table-column property="c" label="标称制冷量[kW]"/>
              <el-table-column property="d" label="负荷%"/>
              <el-table-column property="e" label="压降[bar]"/>
              <el-table-column property="f" label="流速[m/s]"/>
              <el-table-column property="g" label="全开步数"/>
              <el-table-column property="h" label="提示"/>
            </el-table>
          </div>
        </div>
        <div class="data_c">
          <el-tabs 
            v-model="dadaType" 
            class="dadaType" 
            @tab-click="handleDadaType">
            <el-tab-pane label="选择产品" name="1">
              <div class="dadaTypeBox">
                <div class="table_data1">
                  <h5>
                    产品型号 <span>DPF0.8A-001</span> <i>三维简图</i>
                  </h5>
                  <el-table
                    :data="productData"
                    border
                    highlight-current-row
                    @current-change="handleProductDataChange">
                    <el-table-column property="o" label="选择">
                      <span class="dataRow"></span>
                    </el-table-column>
                    <el-table-column property="a" label="型号"/>
                    <el-table-column property="b" label="口径[mm]"/>
                    <el-table-column property="c" label="标称制冷量[kW]"/>
                    <el-table-column property="d" label="负荷%"/>
                    <el-table-column property="e" label="压降[bar]"/>
                    <el-table-column property="f" label="流速[m/s]"/>
                    <el-table-column property="g" label="全开步数"/>
                    <el-table-column property="h" label="提示"/>
                  </el-table>
                </div>
                <div class="table_data1">
                  <h5>
                    线圈型号 <span>DPFX06-055</span>
                  </h5>
                  <el-table
                    :data="productData"
                    border
                    highlight-current-row
                    @current-change="handleProductDataChange">
                    <el-table-column property="o" label="选择">
                      <span class="dataRow"></span>
                    </el-table-column>
                    <el-table-column property="a" label="型号"/>
                    <el-table-column property="b" label="口径[mm]"/>
                    <el-table-column property="c" label="标称制冷量[kW]"/>
                    <el-table-column property="d" label="负荷%"/>
                    <el-table-column property="e" label="压降[bar]"/>
                    <el-table-column property="f" label="流速[m/s]"/>
                    <el-table-column property="g" label="全开步数"/>
                    <el-table-column property="h" label="提示"/>
                  </el-table>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="系统参数" name="2">
              <div class="dadaTypeBox">
                <div class="table_data2">
                  <h5>电子膨胀阀</h5>
                  <div class="line-chart" ref="chartContainer"></div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="性能曲线" name="3">
              <div class="dadaTypeBox">
                <div class="table_data1">
                  <h5>压缩机效率:72.5% 系统参数仅供参考</h5>
                  <div class="table_data3">
                    <el-table
                      :data="productData"
                      border
                      highlight-current-row
                      @current-change="handleProductDataChange">
                      <el-table-column property="o" label="选择">
                        <span class="dataRow"></span>
                      </el-table-column>
                      <el-table-column property="a" label="型号"/>
                      <el-table-column property="b" label="口径[mm]"/>
                      <el-table-column property="c" label="标称制冷量[kW]"/>
                      <el-table-column property="d" label="负荷%"/>
                      <el-table-column property="e" label="压降[bar]"/>
                      <el-table-column property="f" label="流速[m/s]"/>
                      <el-table-column property="g" label="全开步数"/>
                      <el-table-column property="h" label="提示"/>
                    </el-table>
                    <img src="@/assets/images/productDetails_1.jpg"/>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="btn">
            <span>添加至选型清单</span>
            <span>文档和视觉效果</span>
            <span>附件及备份</span>
          </div>
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
        p{
          font-size: 15px;
          color: #393939;
          margin-bottom: 15px;
        }
        img{
          display: block;
          width: 96%;
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
        .txt{
          p{
            font-size: 15px;
            color: #080808;
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
                width: 90px;
                margin-bottom: 0px;
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