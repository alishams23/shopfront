<template>
  <div>
    <!-- end push menu-->
    <div class="wrappage">
      <!-- /header -->
      <!--content-->
      <div class="shop-collection" style="">
        <div class="d-flex flex-row shop-colect ">
          <div class="
              col-md-9 col-sm-12 col-xs-12
              bg-white
              collection-list
              pt-5
              px-5
              scrollBarStyle
            " style="
              position: fixed;
              height: 100%;
              overflow-y: auto;
              right: 0px;
              padding-bottom: 200px;
            ">
            <div class="hidden-lg hidden-md rtl">
              <a class="border px-4 py-2 rounded-10" @click="filter == false ? (filter = true) : (filter = false)">فیلتر
                کردن</a>
            </div>
            <div class="e-product rtl">
              <div class="product-collection-grid product-grid" v-if="loading == false">
                <div class="row">
                  <router-link v-bind:to="`/blog/${data.id}`" class="
                      product-item
                      col-xs-6 col-sm-6 col-md-4 col-lg-3
                      product-item
                    " v-for="data in data1.results" v-bind:key="data.title">
                    <BlogItem v-bind:data="data" class="border-3" />
                  </router-link>
                </div>
              </div>
              <div v-if="loading == true" class="d-flex justify-content-canter flex-row pt-5">
                <div class="col-12 text-center">
                  <img src="@/assets/loading.gif" height="30" />
                </div>
              </div>
              <div v-if="
                  loading == false && data1 != [] && data1.results.length == 0
                " class="d-flex justify-content-canter flex-row">
                <div class="col-12 text-center pt-9">
                  محصولی برای نمایش وجود ندارد
                </div>
              </div>
              <div class="pd-middle space-v1">
                <ul class="pagination">
                  <li v-if="data1.previous != null">
                    <a @click="page -= 1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                          d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                      </svg></a>
                  </li>

                  <li v-if="data1.next != null">
                    <a @click="page += 1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black"
                        class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                      </svg></a>
                  </li>
                </ul>

                <div class="pd-sort"></div>
              </div>
            </div>
          </div>
          <div class="
              col-md-3 col-sm-3 col-xs-12
              
              collection-sidebar
              bg-white
              pt-5
              scrollBarStyle
            " v-bind:class="filter == false ? 'hidden-sm hidden-xs' : ''" style="
              position: fixed;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;
              left: 0px;
              padding-bottom: 200px;
            " id="fixedScrollId">
            <div class="hidden-lg hidden-md mb-5 px-4 rtl">
              <a class="border px-4 py-2 rounded-10" @click="filter == false ? (filter = true) : (filter = false)">بستن
                فیلتر</a>
            </div>
            <div class="px-5 rtl">
              <div class="filter filter-group">
                <h1 class="widget-blog-title px-3">فیلتر محصولات</h1>
                <div class="filter-price filter-inside pe-3">
                  <div class="filter-content pt-4">
                    <div data-role="rangeslider"></div>
                    <div class="form-check pb-4 pt-4">
                      <input class="form-check-input pointer" type="checkbox" v-model="is_application" id="is_application"
                        checked />
                      <label class="form-check-label" for="is_application">
                        فقط اپلیکیشن های کاربردی
                      </label>
                    </div>
                    <div class="form-check pb-4 pt-4">
                      <input class="form-check-input pointer" type="checkbox" v-model="is_catalog" id="is_catalog" checked />
                      <label class="form-check-label" for="is_catalog">
                        فقط کاتالوگ ها
                      </label>
                    </div>
                    <div class="form-check pb-4 pt-4">
                      <input class="form-check-input pointer" type="checkbox" v-model="is_video" id="is_video" checked />
                      <label class="form-check-label" for="is_video">
                        مقالات و فیلم های آموزشی
                      </label>
                    </div>
                    <div class="form-check pb-4 pt-4">
                      <input class="form-check-input pointer" type="checkbox" v-model="is_list_price" id="is_list_price" checked />
                      <label class="form-check-label" for="is_list_price">
                        لیست های قیمت
                      </label>
                    </div>
                    <a @click="searchData()" class="btn-filter rounded-10 nabz-gradient pointer">فیلتر کردن</a>
                  </div>
                </div>
              </div>
              <div class="filter filter-cate">
                <h1 class="widget-blog-title py-4 px-3">دسته بندی ها</h1>

                <ul class="wiget-content v2">
                  <li v-bind:class="
                      data.id == currentCategory ? 'btn-gradient' : ''
                    " v-for="data in categories" v-bind:key="data" @click="
                      currentCategory == data.id
                        ? (currentCategory = null)
                        : (currentCategory = data.id);
                      searchData();
                    " class="pointer">
                    <a>{{ data.title }}</a>
                  </li>
                </ul>
              </div>
              <div class="fixed-scroll-top" @mouseenter="mouseScrollTop = true" @mouseleave="mouseScrollTop = false">
              </div>
              <div class="fixed-scroll" @mouseenter="mouseScroll = true" @mouseleave="mouseScroll = false"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="hideFooter"></div>

  </div>
</template>

<script>
import Slider from "@vueform/slider";
import axios from "axios";
import Product from "../components/product.vue";
import BlogItem from "../components/blogItem.vue";

export default {
  components: {
    Slider,
    Product,
    BlogItem,
  },
  props: [
    "searchText",
    "is_catalogName",
    "is_application_route",
    "is_learn_route",
    "is_list_price_route",

    "idCategory",
  ],
  data() {
    return {
      data1: [],
      is_application: null,
      is_video: null,
      is_list_price: null,

      categories: [],
      currentCategory: null,
      loading: true,
      page: 1,
      is_catalog: null,
      nameRoute: this.$route.name,
      mouseScroll: false,
      mouseScrollTop: false,
      filter: false,
    };
  },
  mounted() {
    if (this.idCategory != null) {
      this.currentCategory = this.idCategory;
    }
    if (this.is_application_route == "true") this.is_application = true;
    if (this.is_application_route == "false") this.is_application = false;
    if (this.is_catalogName == "false") this.is_catalog = false;
    if (this.is_catalogName == "true") this.is_catalog = true;
    if (this.is_learn_route == "false") this.is_video = false;
    if (this.is_learn_route == "true") this.is_video = true;
      if (this.is_list_price_route == "false") this.is_list_price = false;
    if (this.is_list_price_route == "true") this.is_list_price = true;

    this.searchData();
    this.getCategories();
    this.fixedScroll();
  },
  methods: {
    async searchData() {
      this.data1 = [];
      this.loading = true;

      let urlAddress = `https://redico.ir/api/blog/searchlistview/?search`;
      if (this.searchText != null) urlAddress += `=${this.searchText}`;
      if (this.currentCategory != null)
        urlAddress += `&category=${this.currentCategory}`;
      urlAddress += `&page=${this.page}`;

      if (this.is_application == true) urlAddress += `&is_application=true`;
      if (this.is_video == true) urlAddress += `&is_video=true`;
      if (this.is_list_price == true) urlAddress += `&is_list_price=true`;

      if (this.is_catalog == true)
        urlAddress += `&is_catalog=${this.is_catalog}`;
      let mydata = await axios
        .get(urlAddress)
        .then((response) => (this.data1 = response.data));
      this.loading = false;
    },
    async getCategories() {
      let mydata = await axios
        .get(`https://redico.ir/api/blog/List_category/`)
        .then((response) => (this.categories = response.data));
    },
    fixedScroll() {
      setInterval(() => {
        if (this.mouseScroll == true) {
          document.getElementById("fixedScrollId").scrollTop += 10;
        }
        if (this.mouseScrollTop == true) {
          document
            .getElementById("fixedScrollId")
            .scrollTo({ top: 10, behavior: "smooth" });
        }
      }, 25);
    },
  },
  watch: {
    searchText: function (val) {
      this.page = 1;
      this.searchData();
    },
    page: function (val) {
      this.searchData();
    },
    is_application: function (val) {
      this.page = 1;
    },
    is_application_route: function (val) {
      if (this.is_application_route == "false") this.is_application = false;
      if (this.is_application_route == "true") {
        this.is_application = true;
        this.searchData();
      }
    },
    is_video: function (val) {
      this.page = 1;
    },
    is_list_price: function (val) {
      this.page = 1;
    },
    categories: function (val) {
      this.page = 1;
    },
    currentCategory: function (val) {
      this.page = 1;
    },
    is_catalog: function (val) {
      this.page = 1;
    },

    is_catalogName: function (val) {
      if (this.is_catalogName == "false") this.is_catalog = false;
      if (this.is_catalogName == "true") {
        this.is_catalog = true;
        this.searchData();
      }
    },
    is_learn_route: function (val) {
      if (this.is_learn_route == "false") this.is_video = false;
      if (this.is_learn_route == "true") {
        this.is_video = true;
        this.searchData();
      }
    },
    is_list_price_route: function (val) {
      if (this.is_list_price_route == "false") this.is_list_price = false;
      if (this.is_list_price_route == "true") {
        this.is_list_price = true;
        this.searchData();
      }
    },
    idCategory: function (val) {
      this.page = 1;
      if (this.idCategory != null) this.currentCategory = this.idCategory;
      this.searchData();
    },
  },
};
</script>

<style>
.fixed-scroll {
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  /* Height of the footer*/
  height: 40px;
}
.fixed-scroll-top {
  position: fixed;
  /* padding: 10px 10px 0px 10px; */
  top: 0;
  margin-top: 130px;
  width: 100%;
  /* Height of the footer*/
  height: 40px;
}
.slider-blue {
  --slider-connect-bg: #3b82f6;
  --slider-tooltip-bg: #3b82f6;
  --slider-handle-ring-color: #3b82f630;
}

.scrollBarStyle::-webkit-scrollbar {
  width: 0.85em;
}

.scrollBarStyle {
  scrollbar-color: darkgrey rgb(241, 241, 241);
}

.scrollBarStyleSmall {
  scrollbar-color: darkgrey rgb(241, 241, 241);
}

.scrollBarStyle::-webkit-scrollbar-track {
  background-color: rgb(241, 241, 241);
}

.scrollBarStyle::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 5px;
}
.scrollBarStyleSmall::-webkit-scrollbar {
  width: 0.4em;
}

.scrollBarStyleSmall::-webkit-scrollbar-track {
  background-color: rgb(245, 245, 245);
}

.scrollBarStyleSmall::-webkit-scrollbar-thumb {
  background-color: rgb(207, 207, 207);
  border-radius: 5px;
}
.scrollBarStyleSmallHidden::-webkit-scrollbar {
  width: 0.4em;
}



.scrollBarStyleSmallHidden::-webkit-scrollbar-thumb {
  background-color: rgb(207, 207, 207);
  border-radius: 5px;
}
</style>