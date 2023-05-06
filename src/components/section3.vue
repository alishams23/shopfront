<template>
  <div class="my-bg-gradient1">
    <div class="container mt-5 pb-5">
      <div class="ecome-heading style2">
        <h1>محصولات ما</h1>
        <div class="btn-show d-none d-sm-block" @click="go_category()">
          <div class="">محصولات بیشتر</div>
        </div>
      </div>
      <p class="ecome-info"></p>

      <ul class="nav nav-pills my-5 justify-content-center d-flex flex-wraps" id="pills-tab">
        <li class="" v-for="item in category" v-bind:key="item.id">
          <button
            class="bg-white py-3 m-2  px-5 text-muted border rounded-10"
            v-bind:class="indexActive == item.id ? 'active' : ''"
            @click="tabChange(item.id)"
          >
            {{ item.title }}
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div v-for="(item, index) in data" v-bind:key="item.id">
          <div
            class="product-tab-pd container owl-carousel owl-theme v3 owl-cate"
            v-show="indexActive == index"
            v-bind:class="'js-multiple-row' + index"
          >
            <router-link
              tag="div"
              v-for="productData in item"
              v-bind:key="productData.title"
              v-bind:to="`/product/${productData.id}`"
              class="product-item section2-item"
            >
              <Product v-bind:data="productData" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Product from "../components/product.vue";
export default {
  components: { Product },
  data() {
    return {
      category: [],
      data: {},
      indexActive: null,
    };
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    async getCategory() {
      let mydata = await axios
        .get("https://redico.ir/api/shop/main_page/")
        .then((response) => (this.category = response.data));
      for (let index = 0; index < this.category.length; index++) {
        if (this.indexActive == null)
          this.indexActive = this.category[index].id;
        let mydata = await axios
          .get(
            `https://redico.ir/api/shop/category_retrieve/${this.category[index].id}`
          )
          .then(
            (response) =>
              (this.data[this.category[index].id] = response.data.results)
          );
        let $owl = $(`.js-multiple-row${this.category[index].id}`).owlCarousel({
          margin: 30,
          padding: 10,
          autoplay: true,
          autoplayTimeout: 5000,
          dots: false,
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
              items: 2,
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
      }
    },
    go_category() {
      this.$router.push({
        name: "Search",
        params: { isStockName: false },
      });
    },
    tabChange(id) {
      this.indexActive = id;
    },
  },
};
</script>

<style>
</style>