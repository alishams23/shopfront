<template>
  <div class="my-bg-gradient1">
    <div class="pt-5 border-top container">
      <div class="ecome-heading style2 px-4">
        <h1>مقالات آموزشی</h1>
        <div class="btn-show" @click="go_learn()">
          <div class="">مقالات بیشتر</div>
        </div>
      </div>
      <div class="ecome-info spc2"></div>

      <div class="row align-items-start">
        <div
          class=" col-lg-3 col-md-3 col-sm-12 col-sm-12 col-12 nav flex-column nav-pills px-5"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            class="border bg-white my-4 py-4 px-5 text-muted rounded-10"
            v-for="item in category"
            v-bind:key="item"
            type="button"
            v-bind:class="item.id == indexActive ? ' active' : ''"
            @click="tabChange(item.id)"
          >
            {{ item.title }}
          </button>
        </div>

        <div
          class="col-lg-9 col-md-9 col-sm-12 col-sm-12 col-12"
          v-for="(item, index) in data"
          v-bind:key="item"
          v-show="indexActive == index"
        >
        
          <div
            class="product-tab-pd owl-carousel owl-theme v3 owl-cate"
            v-bind:class="'js-multiple-section2' + index"
          >
          
            <router-link
              tag="div"
              class="product-item section2-item"
              v-for="dataBlog in item"
              v-bind:key="dataBlog.title"
              v-bind:to="`/blog/${dataBlog.id}/`"
              @click="scrollToTop()"
            >
            
              <div class="product-item">
                <div class="pd-bd bg-white">
                  <div class="product-img">
                    <div>
                      <img
                        v-bind:src="dataBlog.imageBlog.photo"
                        alt=""
                        class="cover h-213 cover"
                      />
                    </div>
                  </div>
                  <div class="product-info rtl">
                    <div class="color-group"></div>
                    <div class="element-list element-list-left"></div>
                    <div class="element-list element-list-middle">
                      <p class="product-cate max-line max-line-title">
                        {{ dataBlog.body }}
                      </p>
                      <h3 class="product-title row">
                        <p class="col-12" style="white-space: initial">
                          {{ dataBlog.title }}
                        </p>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <!-- -------------------------------------------------------------------------------------------------------------------------------------- -->
</template>

<script>
import axios from "axios";
export default {
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
        .get("https://redico.ir/api/blog/category_in_main_page/")
        .then((response) => (this.category = response.data));

      for (let index = 0; index < this.category.length; index++) {
        if (this.indexActive == null)
          this.indexActive = this.category[index].id;

        let mydata = await axios
          .get(
            `https://redico.ir/api/blog/blog_retrieve_category/${this.category[index].id}/`
          )
          .then(
            (response) =>
              (this.data[this.category[index].id] = response.data.results)
          );
        let $owl = $(
          `.js-multiple-section2${this.category[index].id}`
        ).owlCarousel({
          margin: 30,
          padding: 10,
          autoplay: true,
          autoplayTimeout: 5000,
          loop: true,
          dots: false,
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
              items: 3,
            },
            1600: {
              items: 3,
              margin: 40,
            },
          },
        });
      }
    },
    tabChange(id) {
      this.indexActive = id;
    },
    scrollToTop() {
       setTimeout(() => {
     window.scrollTo(0, 0);
  }, 100);
    }, go_learn() {
      this.scrollToTop();

      this.$router.push({
        name: "learn",
        params: { is_application_route: false, is_catalogName: false,is_learn_route:true },
      });
    },
  },
};
</script>

<style>
.nav-pills .active {
  color: white !important;
  background: #0c0074 !important; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #001aff,
    #0c0074
  ) !important; /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #001aff,
    #0c0074
  ) !important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: #8d8fff 0px 0px 5px;
  /* font-size: 14px; */
  font-weight: 500;
  /* transition:shadow(0.5s) ; */
}
.my-bg-gradient1 {
  background: -webkit-linear-gradient(
    #ffffff,
    #f5f5f5,
    #f5f5f5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    #ffffff,
    #f5f5f5,
    #f5f5f5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.nav-pills .nav-link {
  width: 210px !important;
  /* border: solid 1px rgb(231, 231, 231) !important; */
}
</style>