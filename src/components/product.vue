<template>
  <div
    tag="div"
    v-bind:to="`/product/${data.id}`"
    class="pd-bd product-inner bg-white h-product"
    
  >
    <div class="product-img">
      <div>
        <img
          v-bind:src="data.image[0].photo"
          alt=""
          class="img-reponsive h-160 w-100 cover"
        />
      </div>
      <div class="ribbon-price red" v-if="data.discount != 0">
        <span>- {{ data.discount }}% </span>
      </div>
      <div
        class="ribbon-price bg-dark border"
        style="left: -15px !important"
        v-if="data.is_stock"
      >
        <span>استوک </span>
      </div>
      <div
        class="ribbon-price bg-dark border"
        style="left: -15px !important"
        v-if="data.is_people"
      >
        <span>آگهی </span>
      </div>
    </div>
    <div class="product-info">
      <div class="color-group"></div>
      <div class="element-list element-list-left"></div>
      <div class="element-list element-list-middle">
        <p class="product-cate max-line max-line-title rtl">
          {{ data.description }}
        </p>
        <h3 class="product-title row">
          <p class="col-12 rtl" style="white-space: initial">
            {{ data.title }}
          </p>
        </h3>
        <div class="product-bottom d-flex align-items-center">
          <div class="product-price">
            {{ price(data.price - (data.price * data.discount) / 100) }}
          </div>
          <div class="">
            <div
              v-if="data.discount != 0"
              class="old text-decoration-line-through"
            >
              {{ data.price }}
            </div>
            <div>تومان</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],

  methods:{
    price(value){
      let text
      let chars = Array.from(`${value}`)
      for (let index = 1; index <= chars.length; index++) {
         
         if(index % 3==0){
           if (chars.length != index) {
           chars[chars.length-index] = `,${chars[chars.length-index]}`;
             
           }
         }

      }
      return chars.join("");;
    }
  }
};
</script>

<style>
.h-160 {
  height: 213px;
}


@media all and (min-width:321px) and (max-width: 480px) {
 .h-160 {
    height: 130px;
  }
}

@media all and (min-width:0px) and (max-width: 320px) {
  .h-160 {
    height: 130px;
  }
}


.h-product {
  height: 390px;
}


@media all and (min-width:321px) and (max-width: 480px) {
 .h-product {
    height: 300px;
  }
}

@media all and (min-width:0px) and (max-width: 320px) {
  .h-product {
    height: 300px;
  }
}
</style>