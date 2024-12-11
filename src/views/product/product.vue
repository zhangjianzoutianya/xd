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
</script>

<template>
  <div class="prodTop">
    <Top/>
    
      <div class="product">
      <h5>SmartFit选型系统<span>(网页版)</span></h5>
      <div class="prodList">
         <div class="listbox">
          <div class="list">
            <img src="@/assets/images/pro1.png"/>
            <p>四通换向阀</p>
          </div>
         </div>
         <div class="listbox">
          <div class="list">
            <img src="@/assets/images/pro2.png"/>
            <p>电子膨胀阀（EEV）</p>
          </div>
         </div>
         <div class="listbox">
          <div class="list">
            <img src="@/assets/images/pro3.png"/>
            <p>热力膨胀阀</p>
          </div>
         </div>
         <div class="listbox">
          <div class="list">
            <img src="@/assets/images/pro4.png"/>
            <p>电磁阀</p>
          </div>
         </div>
         <div class="listbox">
          <div class="list">
            <img src="@/assets/images/pro5.png"/>
            <p>球阀</p>
          </div>
         </div>
         <div class="listbox">
          <div class="list">
            <img src="@/assets/images/pro6.png"/>
            <p>止回阀</p>
          </div>
         </div>
         <div class="listbox">
          <div class="list">
            <img src="@/assets/images/pro7.png"/>
            <p>充气阀</p>
          </div>
         </div>
         <div class="listbox">
          <div class="list">
            <img src="@/assets/images/pro8.png"/>
            <p>二氧化碳（R744）产品</p>
          </div>
         </div>
         <div class="listbox">
          <div class="list">
            <img src="@/assets/images/pro9.png"/>
            <p>检修阀</p>
          </div>
         </div>
         <div class="listbox">
          <div class="list">
            <img src="@/assets/images/pro10.png"/>
            <p>管翅式热交换器</p>
          </div>
         </div>
         <div class="listbox">
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