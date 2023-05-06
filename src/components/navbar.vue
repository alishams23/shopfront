<template>
  <header id="header" class="sticky-top header-v1">
    <div class="bg-white">
      <!-- --------------------------navbar--------------------------- -->
      <div class="px-4 pb-5 pt-4">
        <nav class="d-flex flex-row-reverse flex-wrap">
          <div class="col-lg-9 col-md-9 col-sm-12 col-xm-12 col-12">
            <div class="d-flex flex-row-reverse">
              <router-link to="/" class="
                  col-lg-1 col-md-3 col-sm-3 col-xm-3 col-3
                  justify-content-start
                  rtl
                " @click="scrollToTop()">
                <img src="@/assets/logo.png" height="45" class="rtl" alt="logo" />
              </router-link>
              <input v-on:keyup.enter="search()" v-model="searchText" class="
                  col-lg-9 col-md-9 col-sm-9 col-xm-9 col-9
                  t-search
                  rounded-10
                  p-3
                  rtl
                " type="search" placeholder="جستجو ..." />
            </div>
          </div>
          <div class="
              col-lg-3 col-md-3 col-sm-12 col-xm-12 col-12
              mt-3
              d-none d-md-block
            ">
            <div class="d-inline mx-2 px-4 py-2 border rounded-10 pointer">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="#485460" class="bi bi-person"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg></span>
              <router-link @click="scrollToTop()" class="d-inline" to="/login"
                v-if="this.$store.state.isAuthenticated == false">
                <span class="px-3">ورود</span>
              </router-link>
              <router-link @click="scrollToTop()" class="d-inline" to="/register"
                v-if="this.$store.state.isAuthenticated == false">
                <span class="px-3" style="border-right: 1px solid grey">ثبت نام
                </span>
              </router-link>

              <div class="d-inline" @click="logout" v-if="this.$store.state.isAuthenticated == true">
                <span class="px-3">خروج</span>
              </div>
            </div>
          </div>
          <!-- <div class="col-3 d-block"></div> -->
        </nav>
      </div>
      <!-- ----------------------------under navbar----------------------------- -->
      <a class="rtl d-flex flex-row mt-2 flex-wrap mx-3 one-edge-shadow pointer"
        style="overflow-x: auto; overflow-y: visible !important">
        <div class="nav-items-t d-flex">
          <div>
            <div class="nav-item-t px-5 level1 dropdown hassub">
              <li class="">
                <a @click="
                    go_product();
                    productModal = true;
                  " class="d-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="rgb(192 189 189)"
                    class="bi bi-shop-window" viewBox="0 0 16 16">
                    <path
                      d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                  <p class="fs-13 d-inline fc-1 ml-10 me-2">
                    <strong>محصولات</strong>
                  </p>
                </a>
                <navbar-modal v-bind:categories="categories" textPage="محصولات" :goPage="go_category_sub"
                  :modal="productModal" :modalFunction="productModalFunction" />

                <div class="menu-level-1 me-3 navbar-category p-0 mx-3" style="width: 80%">
                  <NavbarDropDownScroll v-bind:categories="categories" textPage="محصولات" :goPage="go_category_sub"
                    :modal="productModal" :modalFunction="productModalFunction" />

                  <div class="clearfix"></div>
                </div>
              </li>
            </div>
          </div>
          <div>
            <div class="nav-item-t px-5 level1 dropdown hassub">
              <li>
                <a @click="
                    go_stocks_main();
                    stockModal = true;
                  " class="d-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="rgb(192 189 189)"
                    class="bi bi-tags" viewBox="0 0 16 16">
                    <path
                      d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
                    <path
                      d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
                  </svg>
                  <p class="fs-13 d-inline fc-1 ml-10 me-2">
                    <strong>استوک</strong>
                  </p>
                </a>
                <navbar-modal v-bind:categories="categories" :modal="stockModal" :modalFunction="stockModalFunction"
                  textPage="استوک" :goPage="go_stocks_sub" />
                <div class="menu-level-1 me-3 navbar-category p-0 mx-3" style="width: 80%">
                  <NavbarDropDownScroll v-bind:categories="categories" :modal="stockModal"
                    :modalFunction="stockModalFunction" textPage="استوک" :goPage="go_stocks_sub" />
                  <!-- <ul class="level1">
                    <li
                      class="level2 col-4"
                      v-for="data in categories"
                      v-bind:key="data"
                    >
                      <a>{{ data.title }}</a>
                      <ul class="menu-level-2">
                        <li
                          class="level3"
                          v-for="data2 in data.main_category"
                          v-bind:key="data2"
                        >
                          <a @click="go_stocks(data2.id)">{{ data2.title }}</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div class="clearfix"></div> -->
                </div>
              </li>
            </div>
          </div>
     
          <div>
            <div class="nav-item-t px-5 level1 dropdown hassub">
              <li class="">
                <a @click="
                    go_catalog();
                    catalogModal = true;
                  " class="d-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="rgb(192 189 189)"
                    class="bi bi-layout-three-columns" viewBox="0 0 16 16">
                    <path
                      d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H5V1H1.5zM10 15V1H6v14h4zm1 0h3.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11v14z" />
                  </svg>
                  <p class="fs-13 d-inline fc-1 ml-10 me-2">
                    <strong>کاتالوگ</strong>
                  </p>
                </a>
                <navbar-modal v-bind:categories="categoriesBlog" textPage="کاتالوگ" :goPage="go_blog_sub"
                  :modal="catalogModal" :modalFunction="catalogModalFunction" />
                <div class="menu-level-1 me-3 navbar-category p-0 mx-3" style="width: 80%">
                  <NavbarDropDownScroll v-bind:categories="categoriesBlog" textPage="کاتالوگ" :goPage="go_blog_sub"
                    :modal="catalogModal" :modalFunction="catalogModalFunction" />
                </div>
              </li>
            </div>
          </div>
       
         

          <div class="nav-item-t" @click="scrollToTop()">
            <router-link to="/Cart" class="nav-item-t mx-3 px-2 d-flex" style="width: 100px">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="rgb(192 189 189)" class="bi bi-cart2"
                viewBox="0 0 16 16">
                <path
                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
              <p class="fs-13 fc-1 ml-10 me-2">
                <strong> سبد خرید </strong>
              </p>
            </router-link>
          </div>
        </div>
      </a>
      <a class="rtl row mt-2 d-block d-sm-none mx-3 one-edge-shadow pointer">
        <div class="mx-2 px-4 py-2 d-flex justify-content-around rounded-10">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="#485460" class="bi bi-person"
              viewBox="0 0 16 16">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg></span>
          <router-link @click="scrollToTop()" class="d-inline" to="/login"
            v-if="this.$store.state.isAuthenticated == false">
            <span class="px-3">ورود</span>
          </router-link>
          <router-link @click="scrollToTop()" class="d-inline" to="/register"
            v-if="this.$store.state.isAuthenticated == false">
            <span class="px-3">ثبت نام </span>
          </router-link>

          <div class="d-inline" @click="logout" v-if="this.$store.state.isAuthenticated == true">
            <span class="px-3">خروج</span>
          </div>
        </div>
      </a>
    </div>
    <div class="mymodal mymodal-check">
      <div class="mymodal-overlay" @click="closemymodalNavbar()"></div>
      <div class="mymodal-card">
        <div class="mymodal-body rtl">
          <div class="d-flex justify-content-around">
            <router-link to="/repairs" @click="closemymodalNavbar()" class="text-center">
              <div class="fw-bold fs-3">خدمات حضوری</div>
              <div class="level1">تنها در استان یزد</div>
            </router-link>

            <router-link to="/service" @click="closemymodalNavbar()" class="text-center">
              <div class="fw-bold fs-3">تعمیرات غیر حضوری</div>
              <div class="level1">در تمامی استان ها</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";
import NavbarDropDownScroll from "../components/navbardropdown.vue";
import NavbarModal from "../components/navbarModal.vue";
export default {
  components: { NavbarDropDownScroll, NavbarModal },
  data() {
    return {
      home: false,
      searchText: "",
      categories: [],
      categoriesBlog: [],
      productModal: false,
      stockModal: false,
      peopleProductModal: false,
      catalogModal: false,
      priceListModal: false,

    };
  },
  mounted() {
    let scroll = document.querySelector(".t-scroll");
    console.log(scroll);
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
      } else {
        document.getElementById("header").style.top = "-75px";
      }
      prevScrollpos = currentScrollPos;
    };
    this.getCategories();
    this.getCategoriesBlog();
  },
  methods: {
    scrollToTop() {
       setTimeout(() => {
     window.scrollTo(0, 0);
  }, 100);
    },
    async getCategories() {
      let mydata = await axios
        .get("https://redico.ir/api/shop/Category_main_api/")
        .then((response) => (this.categories = response.data));
    },
    async getCategoriesBlog() {
      let mydata = await axios
        .get("https://redico.ir/api/blog/Category_main_api/")
        .then((response) => (this.categoriesBlog = response.data));
    },
    search() {
      this.scrollToTop();

      this.$router.push({
        name: "Search",
        params: { searchText: this.searchText },
      });
    },
    go_category(value) {
      this.scrollToTop();

      this.$router.push({
        name: "categories",
        params: { idCategory: value, isStockName: false, is_peopleName: false },
      });
    },
    go_stocks(value) {
      this.scrollToTop();

      this.$router.push({
        name: "stocks",
        params: { idCategory: value, isStockName: true, is_peopleName: false },
      });
    },
    go_catalog() {
      this.scrollToTop();

      this.$router.push({
        name: "catalog",
        params: {
          is_application_route: false,
          is_learn_route: false,
          is_list_price_route:false,
          is_catalogName: true,
        },
      });
    },
    go_list_price() {
      this.scrollToTop();

      this.$router.push({
        name: "catalog",
        params: {
          is_application_route: false,
          is_learn_route: false,
          is_list_price_route:true,
          is_catalogName: false,
        },
      });
    },
    go_application() {
      this.scrollToTop();

      this.$router.push({
        name: "application",
        params: {
          is_catalogName: false,
          is_learn_route: false,
          is_list_price_route:false,
          is_application_route: true,
        },
      });
    },
    go_learn() {
      this.scrollToTop();

      this.$router.push({
        name: "learn",
        params: {
          is_application_route: false,
          is_catalogName: false,
          is_learn_route: true,
          is_list_price_route:false,

        },
      });
    },

    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
      location.reload();
    },
    go_product() {
      this.scrollToTop();

      this.$router.push({
        name: "Search",
        params: { isStockName: false, is_peopleName: false },
      });
    },
    go_stocks_main() {
      this.scrollToTop();

      this.$router.push({
        name: "Search",
        params: { isStockName: true, is_peopleName: false },
      });
    },
    go_people_main(value) {
      this.scrollToTop();

      this.$router.push({
        name: "Search",
        params: { idCategory: value, isStockName: false, is_peopleName: true },
      });
    },
    closemymodalNavbar() {
      document.querySelector(".mymodal-check").classList.remove("open");
    },
    openmymodalNavbar() {
      document.querySelector(".mymodal-check").classList.add("open");
    },
    go_category_sub(value) {
      window.scrollTo(0, 0);

      this.$router.push({
        name: "categories",
        params: { idCategory: value, isStockName: false, is_peopleName: false },
      });
    },
    go_stocks_sub(value) {
      window.scrollTo(0, 0);

      this.$router.push({
        name: "stocks",
        params: { idCategory: value, isStockName: true, is_peopleName: false },
      });
    },
    go_peopleProduct() {
      window.scrollTo(0, 0);

      this.$router.push({
        name: "Search",

        params: {  isStockName: false, is_peopleName: true },
      });
    },
    go_blog_sub(value) {
      window.scrollTo(0, 0);
      this.$router.push({
        name: "catalog",
        params: {
          is_application_route: false,
          is_learn_route: false,
          is_list_price_route:false,
          is_catalogName: true,
          idCategory: value,
        },
      });
    },
    go_blog_list_product_sub(value) {
      window.scrollTo(0, 0);
      this.$router.push({
        name: "catalog",
        params: {
          is_application_route: false,
          is_learn_route: false,
          is_list_price_route:true,
          is_catalogName: false,
          idCategory: value,
        },
      });
    },
    productModalFunction() {
      this.productModal = false;
    },
    stockModalFunction() {
      this.stockModal = false;
    },
    peopleProductModalFunction() {
      this.peopleProductModal = false;
    },
    catalogModalFunction() {
      this.catalogModal = false;
    },priceListModalFunction() {
      this.priceListModal = false;
    },
  },
};
</script>

<style>
.rtl {
  direction: rtl !important;
}

.bi-list {
  margin-right: 11px;
}

.t-search {
  background: rgb(231 230 230/ 60%);
  border: rgb(228 228 228 / 82%);
  transition: all 0.2s ease-in-out;
  padding: 5px;
}

.t-search:focus {
  background: rgb(255, 255, 255);
  border: rgb(228 228 228 / 82%) !important;
  box-shadow: rgb(163 162 255 / 3%) 0px 3px 6px, rgb(7 0 118 / 10%) 0px 3px 6px;
}

::placeholder {
  /* Firefox, Chrome, Opera */
  color: rgb(82, 82, 82/ 60%);
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgb(82, 82, 82/ 60%);
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: rgb(82, 82, 82/ 60%);
}
.shadow-sp {
  box-shadow: rgb(17 17 26 / 10%) 0px 0px 16px;
}
.fs-13 {
  font-size: 13px;
  font-weight: inherit;
}
.ml-10 {
  margin-left: 10px;
}
.fc-1 {
  color: #616161;
}
.one-edge-shadow {
  -webkit-box-shadow: 0 8px 6px -6px rgb(17 17 26 / 10%);
  -moz-box-shadow: 0 8px 6px -6px rgb(17 17 26 / 10%);
  box-shadow: 0 12px 13px -8px rgb(17 17 26 / 10%);
  height: 37px;
}
input {
  font-size: 15px !important;
}

.nav-item-t:after {
  padding-bottom: 16.5px;

  display: block;
  content: "";
  border-bottom: solid 2px #000288;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}
.nav-items-t div:hover:after {
  transform: scaleX(1);
}
/* .nav-items-t div .nav-item-t:after {
  transform-origin: 100% 50%;
} */

.active-navbar {
  border-bottom: solid 2px #ff1616;
}

.navbar-category {
  flex-direction: revert !important;
}
.pointer {
  cursor: pointer;
}
</style>