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
//下拉框
const ezType = ref('');
const ezTypeOption = [{
  value: '0',
  label: '空调/风管机组',
},{
  value: '1',
  label: '商用制冷',
},{
  value: '2',
  label: '冷却器',
},{
  value: '3',
  label: '特种空调',
},{
  value: '4',
  label: '热泵',
}]

//跳转产品列表
const goProductList = () =>{
  router.push({
    name: 'ProductList'
  })
}

</script>

<template>
  <div class="prodTop">
    <Top/>
    
      <div class="product">
      <h5>SmartFit选型系统<span>(网页版)</span></h5>
      <div class="classification">
         <div class="fication">
            <img src="@/assets/images/pico5.png"/>
            <p>空调/风管机组</p>
            <div class="type">
              <span>返回</span>
        <el-select
            v-model="ezType"
            placeholder="请选择类型"
            size="large"
            style="width: 115px">
            <el-option
            v-for="item in ezTypeOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
      />
      </el-select>
      </div>           
         </div>
      </div>
      <div class="prodList">
         <div class="listbox" @click="goProductList">
          <div class="list">
            <img src="@/assets/images/pro1.png"/>
            <p>四通换向阀</p>
          </div>
         </div>
         <div class="listbox" @click="goProductList">
          <div class="list">
            <img src="@/assets/images/pro2.png"/>
            <p>电子膨胀阀（EEV）</p>
          </div>
         </div>
        <div class="listbox" @click="goProductList">
          <div class="list">
            <img src="@/assets/images/pro3.png"/>
            <p>热力膨胀阀</p>
          </div>
         </div>
         <div class="listbox" @click="goProductList">
          <div class="list">
            <img src="@/assets/images/pro4.png"/>
            <p>电磁阀</p>
          </div>
         </div>
         <div class="listbox" @click="goProductList">
          <div class="list">
            <img src="@/assets/images/pro5.png"/>
            <p>球阀</p>
          </div>
         </div>
         <div class="listbox" @click="goProductList">
          <div class="list">
            <img src="@/assets/images/pro11.png"/>
            <p>微通道热交换器</p>
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
  .fication{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
    p{
      margin-left: 15px;
      font-size: 30px;
    }
    .type{
      position: absolute;
      bottom: 0px;
      right: 10px;
      display: flex;
      span{
        font-size: 20px;
        background-color: #ffffff;
        width: 100px;
        height: 40px;
        line-height: 40px;
        display: inline-block;
        text-align: center;
        border-radius: 3px;
        margin-right: 10px;
        color: #333;
      }
  }
  }
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
  .type {
      .el-select{
      height: 40px;
      .el-select__wrapper{
        background: #0059a6;
        height: 40px;
      }
    }
    .el-select__placeholder.is-transparent{
    color: #fff;
    }
    .el-select__placeholder{
      color: #fff;
    }
    }
 
  .el-pagination{
    margin-top: 15px;
  }
</style>