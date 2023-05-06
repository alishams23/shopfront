<template>
  <div>
    <div class="gradient-animation-1 my-4 pb-5">
      <div class="pt-4 container">
        <div class="d-flex justify-content-between mb-4"> <div class="text-white px-5  py-2 fw-bold mt-3 fs-3 rtl">پیشنهاد های شگفت انگیز </div> </div>
        <div class="owl-carousel owl-carousel-section2 owl-theme v3 owl-cate " id="owl-demo">
          
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
        .get("https://redico.ir/api/shop/category_discount/")
        .then((response) => (this.data1 = response.data.results));
      // console.log(this.data1);
      this.$nextTick(() => {
        let $owl = $(".owl-carousel-section2").owlCarousel({
          margin: 30,
          padding:10,
          autoplay: true,
          autoplayTimeout: 5000,
          loop: true,
          dots:true,

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
      
    
    },
  },
};
</script>

<style>

.owl-next, .owl-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
}
.owl-next {
    right: 0;
    display: flex;
}
.owl-prev{
    left: 0;
    display: flex;
}
.max-line {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.max-line-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

.gradient-animation-1 {
  background: linear-gradient(-45deg, #ee7752, #ff0263, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


 .pd-bd:hover{
   transform: scale(1.03);

}


 .pd-bd{
   transition: transform 0.5s;
      margin-top: 10px;
   margin-bottom: 10px;
}

</style>