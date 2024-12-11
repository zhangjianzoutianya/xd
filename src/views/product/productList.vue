<script setup>
import { ref, reactive, computed, inject } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/stores/index';
import { Search} from '@element-plus/icons-vue'

import Top from '@/components/Top2.vue';


//API
const Api = inject('Api');

const router = useRouter();
const store = useStore(); 

const items = [
  { name: '四通换向阀', image: '/src/assets/images/pro1.png' },
  { name: '电子膨胀阀（EEV）', image: '/src/assets/images/pro2.png ' },
  { name: '热力膨胀阀', image: '/src/assets/images/pro3.png ' },
  { name: '电磁阀', image: '/src/assets/images/pro4.png' },
  { name: '球阀', image: '/src/assets/images/pro5.png' },
  { name: '止回阀', image: '/src/assets/images/pro6.png'  },
  { name: '充气阀', image: '/src/assets/images/pro7.png'  },
  { name: '二氧化碳R744产品', image: '/src/assets/images/pro8.png'  },
  { name: '检修阀', image: '/src/assets/images/pro9.png' },
  { name: '管翅式热交换器', image: '/src/assets/images/pro10.png'  },
  { name: '微通道热交换器', image: '/src/assets/images/pro11.png'  },
];

// 将产品分组，每组显示4个
const groupedItems = computed(() => {
  const chunkSize = 11; // 每页展示的产品数量
  const groups = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    groups.push(items.slice(i, i + chunkSize));
  }
  return groups;
});

//选择产品型号
const handleProductDataChange = (param) => {
  console.log(param);
  currentProductData.value = param;
}
//数据类型切换
const handleDadaType = (param) =>{
  console.log(param);
}
//数据类型
const dadaType = ref('1');

//添加至清单
const checked1 = ref(false)

// 多选框数据
const checkboxes = ref([
  { label: "MDF", value: "MDF", checked: false },
  { label: "FDF", value: "FDF", checked: false },
  { label: "LDF", value: "LDF", checked: false },
  { label: "KDF", value: "KDF", checked: false },
  { label: "MDF(sleeve 011 mm)", value: "MDF(sleeve 011 mm)", checked: false },
]);
// 排序后的多选框
const sortedCheckboxes = ref([...checkboxes.value]);

//跳转产品详情
const goProductDetails = () =>{
  router.push({
    name: 'ProductDetails',
    params: {
      id: 0,
    },

  })
}
</script>

<template>
  <div class="prodList">
    <Top/>
  <div class="box">
    <div class="menuList">
      <h5>MAIN MENU</h5>
          <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#ffffff"
        text-color="#333333"
        active-text-color="#409EFF"
      >
        <!-- 一级菜单项 -->
        <el-menu-item index="1">
          <span>电磁阀</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span>热力膨胀阀</span>
        </el-menu-item>

        <!-- 含有二级菜单的项 -->
        <el-sub-menu index="3">
          <template #title>
            <span>电子膨胀阀</span>
          </template>
          <el-menu-item index="3-1">选项 1</el-menu-item>
          <el-menu-item index="3-2">选项 2</el-menu-item>
          <el-menu-item index="3-3">选项 3</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="4">
          <span>四通换向阀</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span>干燥过滤器</span>
        </el-menu-item>
        <el-menu-item index="6">
          <span>机械式压力调节阀</span>
        </el-menu-item>
        <el-menu-item index="7">
          <span>电子式压力调节阀</span>
        </el-menu-item>
        <el-menu-item index="8">
          <span>单向阀 </span>
        </el-menu-item>
        <el-menu-item index="9">
          <span>球阀</span>
        </el-menu-item>
        <el-menu-item index="10">
          <span>截止阀</span>
        </el-menu-item>
        <el-menu-item index="11">
          <span>视液镜</span>
        </el-menu-item>
        <el-menu-item index="12">
          <span>压力变送器</span>
        </el-menu-item>
        <el-menu-item index="13">
          <span>压力开关</span>
        </el-menu-item>
        <el-menu-item index="14">
          <span>压力控制器-单压</span>
        </el-menu-item>
        <!-- 更多一级菜单 -->
        <el-menu-item index="15">
          <span>压力控制器-双压</span>
        </el-menu-item>
      </el-menu>
      
    </div>
    <div class="list">
      <div class="list_a">
        <h5>
          四通换向阀
            <span>
              返回
              <el-icon><ArrowRight /></el-icon>
            </span>
          </h5>
          <el-carousel height="150px" arrow="always" :autoplay="true" :interval="3000" :loop="true">
          <el-carousel-item v-for="(group, index) in groupedItems" :key="index">
            <div class="carousel-group">
              <div class="product-item" v-for="(item, idx) in group" :key="idx" @click="goProductDetails">
                <img :src="item.image" alt="Product Image" />
                <p>{{ item.name }}</p >
              </div>
            </div>
          </el-carousel-item>
          </el-carousel>



      </div>
      <div class="list_b">
        <div class="box_input">
                     <label>名称</label>
                      <el-input
                        v-model="searchKey"  
                        placeholder="请输入"
                        :prefix-icon="Search"
                      />
                      <span>查询</span>
                </div>
          <el-tabs 
            v-model="dadaType" 
            class="dadaType" 
            @tab-click="handleDadaType">
            <el-tab-pane label="全部" name="1">
             
              <div class="dadaTypeBox">
               
                <div class="table_data1">
                  <div class="title">
                    <h5>
                    产品系列 
                  </h5>
                  <div class="chose_box">
                    <el-checkbox v-for="item in sortedCheckboxes" :key="item.value" v-model="item.checked">
                    {{ item.label }}
                  </el-checkbox>
                  </div>
                 
                  </div>
                  <div class="list_box">
                    <div class="img" @click="goProductDetails">
                      <img src="/src/assets/images/plist.png" alt="" width="100%">
                    </div>
                    <div class="text">
                        <div class="box_top">
                          <span>系列和DSF(S)系列 </span>
                          <span>螺纹x螺纹，1/4"x 1/4"</span>
                          <span>冷量范围：无</span>
                        </div>
                        <div class="btn">
                          <span>文档和视觉效果</span>
                          <span>前往商城</span>
                        </div>
                        <div class="my_check" >
                          <el-checkbox v-model="checked1" label="添加至清单" size="large" />
                        </div>
                    </div>
                  </div>
                  <div class="list_box">
                    <div class="img" @click="goProductDetails">
                      <img src="/src/assets/images/plist.png" alt="" width="100%">
                    </div>
                    <div class="text">
                        <div class="box_top">
                          <span>系列和DSF(S)系列 </span>
                          <span>螺纹x螺纹，1/4"x 1/4"</span>
                          <span>冷量范围：无</span>
                        </div>
                        <div class="btn">
                          <span>文档和视觉效果</span>
                          <span>前往商城</span>
                        </div>
                        <div class="my_check" >
                          <el-checkbox v-model="checked1" label="添加至清单" size="large" />
                        </div>
                    </div>
                  </div>
                  <div class="list_box">
                    <div class="img" @click="goProductDetails">
                      <img src="/src/assets/images/plist.png" alt="" width="100%">
                    </div>
                    <div class="text">
                        <div class="box_top">
                          <span>系列和DSF(S)系列 </span>
                          <span>螺纹x螺纹，1/4"x 1/4"</span>
                          <span>冷量范围：无</span>
                        </div>
                        <div class="btn">
                          <span>文档和视觉效果</span>
                          <span>前往商城</span>
                        </div>
                        <div class="my_check" >
                          <el-checkbox v-model="checked1" label="添加至清单" size="large" />
                        </div>
                    </div>
                  </div>
                  <el-pagination
        size="small"
        background
        layout="prev, pager, next"
        :total="50"
        class="mt-4"
      />

                </div>
         
              </div>
            </el-tab-pane>
            <el-tab-pane label="已添加产品" name="2">
              <div class="dadaTypeBox">
              
                <div class="table_data1">
                  <div class="title">
                    <h5>
                    产品系列 
                  </h5>
                  <div class="chose_box">
                    <el-checkbox v-for="item in sortedCheckboxes" :key="item.value" v-model="item.checked">
                    {{ item.label }}
                  </el-checkbox>
                  </div>
                 
                  </div>
                  <div class="list_box">
                    <div class="img" @click="goProductDetails">
                      <img src="/src/assets/images/plist.png" alt="" width="100%">
                    </div>
                    <div class="text">
                        <div class="box_top">
                          <span>系列和DSF(S)系列 </span>
                          <span>螺纹x螺纹，1/4"x 1/4"</span>
                          <span>冷量范围：无</span>
                        </div>
                        <div class="btn">
                          <span>文档和视觉效果</span>
                          <span>前往商城</span>
                        </div>
                        <div class="my_check" >
                          <el-checkbox v-model="checked1" label="添加至清单" size="large" />
                        </div>
                    </div>
                  </div>
                  <div class="list_box">
                    <div class="img" @click="goProductDetails">
                      <img src="/src/assets/images/plist.png" alt="" width="100%">
                    </div>
                    <div class="text">
                        <div class="box_top">
                          <span>系列和DSF(S)系列 </span>
                          <span>螺纹x螺纹，1/4"x 1/4"</span>
                          <span>冷量范围：无</span>
                        </div>
                        <div class="btn">
                          <span>文档和视觉效果</span>
                          <span>前往商城</span>
                        </div>
                        <div class="my_check" >
                          <el-checkbox v-model="checked1" label="添加至清单" size="large" />
                        </div>
                    </div>
                  </div>
                  <div class="list_box">
                    <div class="img" @click="goProductDetails">
                      <img src="/src/assets/images/plist.png" alt="" width="100%">
                    </div>
                    <div class="text">
                        <div class="box_top">
                          <span>系列和DSF(S)系列 </span>
                          <span>螺纹x螺纹，1/4"x 1/4"</span>
                          <span>冷量范围：无</span>
                        </div>
                        <div class="btn">
                          <span>文档和视觉效果</span>
                          <span>前往商城</span>
                        </div>
                        <div class="my_check" >
                          <el-checkbox v-model="checked1" label="添加至清单" size="large" />
                        </div>
                    </div>
                  </div>
                  <el-pagination
        size="small"
        background
        layout="prev, pager, next"
        :total="50"
        class="mt-4"
      />

                </div>
         
              
              </div>
            </el-tab-pane>
            <el-tab-pane label="未添加产品" name="3">
              <div class="dadaTypeBox">
                
                <div class="table_data1">
                  <div class="title">
                    <h5>
                    产品系列 
                  </h5>
                  <div class="chose_box">
                    <el-checkbox v-for="item in sortedCheckboxes" :key="item.value" v-model="item.checked">
                    {{ item.label }}
                  </el-checkbox>
                  </div>
                 
                  </div>
                  <div class="list_box">
                    <div class="img" @click="goProductDetails">
                      <img src="/src/assets/images/plist.png" alt="" width="100%">
                    </div>
                    <div class="text">
                        <div class="box_top">
                          <span>系列和DSF(S)系列 </span>
                          <span>螺纹x螺纹，1/4"x 1/4"</span>
                          <span>冷量范围：无</span>
                        </div>
                        <div class="btn">
                          <span>文档和视觉效果</span>
                          <span>前往商城</span>
                        </div>
                        <div class="my_check" >
                          <el-checkbox v-model="checked1" label="添加至清单" size="large" />
                        </div>
                    </div>
                  </div>
                  <div class="list_box">
                    <div class="img" @click="goProductDetails">
                      <img src="/src/assets/images/plist.png" alt="" width="100%">
                    </div>
                    <div class="text">
                        <div class="box_top">
                          <span>系列和DSF(S)系列 </span>
                          <span>螺纹x螺纹，1/4"x 1/4"</span>
                          <span>冷量范围：无</span>
                        </div>
                        <div class="btn">
                          <span>文档和视觉效果</span>
                          <span>前往商城</span>
                        </div>
                        <div class="my_check" >
                          <el-checkbox v-model="checked1" label="添加至清单" size="large" />
                        </div>
                    </div>
                  </div>
                  <div class="list_box">
                    <div class="img" @click="goProductDetails">
                      <img src="/src/assets/images/plist.png" alt="" width="100%">
                    </div>
                    <div class="text">
                        <div class="box_top">
                          <span>系列和DSF(S)系列 </span>
                          <span>螺纹x螺纹，1/4"x 1/4"</span>
                          <span>冷量范围：无</span>
                        </div>
                        <div class="btn">
                          <span>文档和视觉效果</span>
                          <span>前往商城</span>
                        </div>
                        <div class="my_check" >
                          <el-checkbox v-model="checked1" label="添加至清单" size="large" />
                        </div>
                    </div>
                  </div>
                  <el-pagination
        size="small"
        background
        layout="prev, pager, next"
        :total="50"
        class="mt-4"
      />

                </div>
         
              </div>
            </el-tab-pane>
          </el-tabs>
         
        </div>
    </div>
  </div>
  </div>
</template>

<style scoped lang="less">
.prodList {
  width: 100%;
  background-color: #f0f0f0;
  padding: 95px 25px 25px 25px;
  .box{
    display: flex;
    .menuList {
      flex: 0 0 330px;
      margin-right: 5px;
      border-radius: 6px;
      background-color: #fff;
      padding: 16px;
      h5{
        font-size: 15px;
        color: #080808;
        font-weight: 500;
      }
  }
  .list{
    width: 100%;
    .list_a{
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
      .carousel-group {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .product-item {
            text-align: center;
            width: 100px; /* 每个产品的宽度 */
            img{
              width: 100%;
              height: auto;
              display: block;
              margin: 0 auto;
            }
            p{
            margin: 15px 0 ;
            font-size: 15px;
            color: #333;
            text-align: center;
            }
      }
      .product-item:hover{
        cursor: pointer;
        background-color: #f0fafc;
      }
      } 

   

          }
    .list_b{
        background-color: #ffffff;
        border-radius: 6px;
        padding: 12px 15px 25px 25px;
        position: relative;
        .box_input{
            position: absolute;
            top: 12px;
            right: 15px;
            display: flex;
            align-items: center;
            label{
              font-size: 15px;
              color: #080808;
              width: 65px;
            }
            span{
              margin-left: 10px;
              font-size: 15px;
              color: #ffffff;
              background-color: #0059a6;
              padding: 5px 10px;
              border-radius: 5px;
              width: 65px;
              text-align: center;
            }
          }
        .dadaTypeBox{
          display: flex;
          align-items: center;
          position: relative;
          font-size: 20px;
          label{
            font-size: 15px;
            color: #080808;
            width: 65px;
          }
         
          .table_data1{
            padding-bottom: 10px;
            width: 100%;
            .title{
              display: flex;
              align-content: center;
              >h5{              
              font-size: 15px;
              margin-right: 30px;
              line-height: 30px;          
            }
             }

        }
        .list_box{
              display: flex;
              width: 100%;
              border-bottom: 1px solid #707070;
              padding: 20px 0;
              .img{
                width: 237px;
                cursor: pointer;
              }
              .text{
                width: calc(100% - 237px);
                position: relative;
                padding: 0 0 0 20px;
                .box_top{
                  display: flex;
                  flex-wrap: wrap; 
                  border-bottom: 1px solid #707070;
                  span{
                    font-size: 15px;
                    flex: 1 1 calc(50% - 20px);
                    color: #080808;
                    line-height: 30px;
                  }
                }
                .btn{
                  margin-top: 40px;
                  span{
                    font-size: 15px;
                    color: #ffffff;
                    background-color: #0059a6;
                    padding: 5px 10px;
                    border-radius: 5px;
                    margin-right: 20px;
                  }
                }
                .my_check{
                  position: absolute;
                  top: 10px;
                  right: 0px;
                  width: 100px;
                }
              }
            }
      }
    }
        }
        }
  
}
</style>


<style  lang="less">
  .el-pagination{
    margin-top: 15px;
  }
</style>