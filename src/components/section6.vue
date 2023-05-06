<template>
  <div>
    <div class="gradient-animation-1 pb-5">
      <div class="pt-4 container">
        <div class="d-flex justify-content-between mb-4"><div class="border text-white px-5 rounded-pill py-2 fw-bold mt-3" @click="go_stocks()"> بیشتر</div>  <div class="text-white px-5  py-2 fw-bold mt-3 fs-3">محصولات استوک اخیر </div> </div>

        <div class="owl-carousel owl-carousel-section6 owl-theme v3 owl-cate " id="owl-demo">
          
          <router-link tag="div" v-bind:to="`/product/${data.id}`"  class="product-item section2-item " v-for="data in data1" v-bind:key="data.title">
            <Product v-bind:data="data" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Product from "../components/product.vue" 
export default {
   components:{Product},
  data() {
    return {
      data1: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
  
    async getData() {
      
      let mydata = await axios
        .get("https://redico.ir/api/shop/Stock_api/")
        .then((response) => (this.data1 = response.data.results));
      // console.log(this.data1);
      this.$nextTick(() => {
        let $owl = $(".owl-carousel-section6").owlCarousel({
          margin: 30,
          padding:10,
          autoplay: true,
          autoplayTimeout: 5000,
          loop: true,

          nav: true,
          navText: [
            '<div class="px-2 py-5 border bg-white rounded-10 shadow"><svg  width="21" height="21" fill="black" class="bi bi-arrow-left-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/></svg><div/>',
            '<div class="px-2 py-5 border bg-white rounded-10 shadow"><svg  width="21" height="21" fill="black" class="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></svg><div/>',
          ],
          responsive: {
            0: {
              items: 2,
               padding:1,
               margin: 7,
               
            },
            480: {
              items: 2,
             
            },
            1024: {
              items: 3,
         
            },
            1200: {
              items: 4,
    
              
            },
            1600: {
              items: 4,
              margin: 40,
         
            
            },
          },
        });
      
        // $owl.trigger("refresh.owl.carousel");
      });
      // setTimeout(() => {
      //   $(".owl-nav").removeClass("disabled")
      // }, 1);
      
      console.log("sdvsdv")
      
    
    },go_stocks() {
      

      this.$router.push({
        name: "Search",
        params: { isStockName: true },
      });
    },
  },
};
</script>

<style>


</style>