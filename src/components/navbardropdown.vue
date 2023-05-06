<template>
  <div class="d-flex flex-row" :class="dNone == true ? 'd-none' : ''" v-if="categories != null"
    style=" overflow-x: scroll">
    <div class="col-2 m-0 border-left scrollBarStyleSmall"
      style="height: 500px !important; overflow: hidden; overflow-y: scroll">
      <div
        v-show="!(data.hide_product && textPage == 'محصولات') && !(data.hide_stock && textPage == 'استوک') && !(data.hide_people_product && textPage == 'محصولات مشتریان') && !(data.hide_price && textPage == 'لیست قیمت') && !(data.hide_catalog && textPage == 'کاتالوگ')"
        class="px-2 text-center fw-bold py-3" v-for="data in categories" v-bind:key="data"
        @mouseover="indexActive = data.id" v-bind:class="
          indexActive == data.id
            ? ' mx-2 ml-0 btn w-100 border-none  fs-5 nabz-gradient'
            : ' mx-2 ml-0 '
        ">
        {{ data.title }}
      </div>
    </div>
    <div class="col-7 scrollBarStyleSmallHidden" style="height: 500px !important; overflow: hidden; overflow: scroll">
      <div class="fw-bold fs-4 p-4 d-flex">
        <div style="width: 2.5px" class="rounded-pill py-2 mx-2 nabz-gradient"></div>
        <div class="py-2">{{ textPage }}</div>
        <router-link to="/peopleProduct" @click="unHover()" class="btn-gradient py-2 mx-3 px-3 rounded-10"
          v-if="textPage == 'محصولات مشتریان'">
          افزودن محصول
        </router-link>
      </div>

      <div class="w-100 d-flex flex-row flex-wrap" v-for="data in categories" v-bind:key="data">
        <button class="m-3 p-2 border-bottom btn button-active" v-for="data2 in data.main_category" v-bind:key="data2"
          v-show="data.id == indexActive && !(data2.hide_product && textPage == 'محصولات') && !(data2.hide_stock && textPage == 'استوک') && !(data2.hide_people_product && textPage == 'محصولات مشتریان') && !(data2.hide_price && textPage == 'لیست قیمت') && !(data2.hide_catalog && textPage == 'کاتالوگ')"
          @click="
  unHover();
goPage(data2.id);
          ">
          {{ data2.title }}
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ["categories", "textPage", "goPage", "modal", "modalFunction"],

  data() {
    return {
      indexActive: null,
      dNone: false,
    };
  },
  methods: {
    unHover() {
      this.dNone = true;
      setTimeout(() => {
        this.dNone = false;
      }, 1);
    },
  },
};
</script>

<style>
.hover-bg-grey:hover {
  background-color: rgb(238, 238, 238);
}

.button-active:focus {
  background-color: blue;
  color: white !important;
}
</style>