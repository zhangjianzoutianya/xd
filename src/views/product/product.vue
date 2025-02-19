<script setup>
import { ref, reactive, computed, inject } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/stores/index';
import Top from '@/components/Top.vue';
import Foot from '@/components/Foot.vue';
//API
const Api = inject('Api');

const router = useRouter();
const store = useStore(); 

const page = ref(1);
const pageCount = ref(0);
const pageSizes = ref(10);

const productCate = reactive({list:[]});

//跳转详情
const goProductList = (id) =>{
  router.push({
    name: 'ProductDetails',
    params: {
      id: id,
    },
  })
}

//获取产品大类
const getProductCateList = async () => {
  const res = await Api.getProductCateList({
    page: page.value,
  });
  if(res.status === 1){
    pageCount.value = res.lastPage;
    pageSizes.value = res.perPage;
    productCate.list = res.list;
  }
}

//created
const onCreated = async () => {
  //获取产品大类
  getProductCateList();
}
onCreated();
</script>

<template>
  <div class="prodTop">
    <Top/>
    
      <div class="product">
      <h5>SmartFit选型系统<span>(网页版)</span></h5>
      <div class="prodList">
        <div class="listbox" v-for="item in productCate.list" :key="item.cateId" @click="goProductList(item.cateId)">
          <div class="list">
            <img :src="item.pic"/>
            <p>{{item.title}}</p>
          </div>
         </div>
       </div>
      <el-pagination
        size="small"
        background
        layout="prev, pager, next"
        :page-count="pageCount"
        :page-size="pageSizes"
        class="mt-4"/>    
    </div>
    <Foot/>   
  </div>
</template>

<style scoped lang="less">
.prodTop{
  background-color: #f0f0f0;
  padding: 95px 40px 0 40px;
  .product{
  background-color: #cad8e5;
  padding: 80px 100px;
  border-radius: 5px;
  h5{
    font-size: 55px;
    color: #2b2c2e;
    margin-bottom: 40px;
    span{
      font-size: 30px
    };
  }
  .prodList{
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    align-content: flex-start; 
    flex-wrap: wrap;
    .listbox{
      width: 25%;
      padding: 10px 8px;
      cursor: pointer;
      .list{    
        text-align: center; 
        border: 1px solid #ffffff;
        background-color: #ffffff;
        border-radius: 5px;
        transition: all 0.3s ease; 
        padding: 20px;
        p{
          font-size: 15px;
        }
      }
      .list:hover{
        background: #f0f0f0;
        border: 1px solid #3ea3ef;
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