<template>
  <div class="my-bg-gradient1">
    <div class="container">
      <div class="ecome-heading style2 px-4 my-4">
        <h1>محصولات مشتریان</h1>
        <div class="btn-show" @click="go_people_main()">
          <div class="">محصولات بیشتر</div>
        </div>
      </div>
      <div class="about-brand">
        <div class="d-flex flex-row align-self-stretch flex-wrap">
          <div
            style="margin-bottom: 60px"
            class="
              bg-white
              col-lg-4 col-md-4 col-sm-12 col-xs-12
              about-brand-info
              text-center
              d-flex
              flex-column
              align-items-center
            "
          >
            <div class="brand-info">
              <p class="fs-2 fw-bold pb-5">محصولات خودتو خیلی سریع بفروش</p>
              <p>نمایش محصولات الکترونیکی شما در کنار سایر محصولات وبسایت</p>
            </div>
            <router-link
              to="/peopleProduct"
              class="btn-gradient btn-brand rounded-10 mt-auto"
              >شروع <i class="ion-ios-arrow-forward"></i
            ></router-link>
          </div>

          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div class="row engoc-equal-row" v-if="data1.length != 0">
              <router-link v-bind:to="`/product/${data1[index -1].id}`" class="col-xs-6 col-sm-6 col-md-6 product-item" v-for="index in indexRange" v-bind:key="index">
                <div class="pd-bd product-inner v2 bg-white">
                  <div class="flex align-center">
                    <div class="product-img">
                      <a href="#"
                        ><img
                          v-bind:src="data1[index -1].image[0].photo"
                          alt=""
                          class="img-reponsive w-100 h-100 cover"
                      /></a>
                    </div>
                    <div class="product-info">
                      <div class="color-group"></div>
                      <div class="element-list element-list-left"></div>
                      <div class="element-list element-list-middle rtl">
                        <p class="product-cate max-line max-line-title">{{data1[index -1].description}}</p>
                        <h3 class="product-title">
                          <a href="#">{{data1[index -1].title}} </a>
                        </h3>
                        <div class="product-bottom v2">
                          <div class="product-price">
                            <span>{{data1[index -1].price}}</span>
                          </div>
                          
                        </div>
                      </div>
                      <div class="product-button-group hidden-xs hidden-sm">
                        <a href="#" class="btn-icon">
                          <span class="icon-bg icon-cart"></span>
                        </a>
                        <a href="#" class="btn-icon">
                          <span class="icon-bg icon-wishlist"></span>
                        </a>
                        <a href="#" class="btn-icon">
                          <span class="icon-bg icon-compare"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="product-button-group hidden-md hidden-lg">
                    <a href="#" class="btn-icon">
                      <span class="icon-bg icon-cart"></span>
                    </a>
                    <a href="#" class="btn-icon">
                      <span class="icon-bg icon-wishlist"></span>
                    </a>
                    <a href="#" class="btn-icon">
                      <span class="icon-bg icon-compare"></span>
                    </a>
                  </div>
                </div>
              </router-link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data1: [],
      indexRange:4
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let mydata = await axios
        .get("https://redico.ir/api/shop/searchlistview/?search&page=1&is_people=true")
        .then((response) => {if( response.data.results.length < 4)this.indexRange = response.data.results.length; this.data1 = response.data.results;});
    },go_people_main() {
      

      this.$router.push({
        name: "Search",
        params: { isStockName: false, is_peopleName: true },
      });
    },
  }
};
</script>

<style>
</style>