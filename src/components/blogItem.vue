<template>
  <div class="product-item">
    <div class="pd-bd bg-white">
      <div class="product-img">
        <div v-if="data.imageBlog.photo">
          <img
            v-bind:src="data.imageBlog.photo"
            
            alt=""
            class="cover h-213 cover"
          />
        </div>
      </div>
      <div class="product-info rtl">
        <div class="color-group"></div>
        <div class="element-list element-list-left"></div>
        <div class="element-list element-list-middle">
          <p class="product-cate max-line max-line-title" v-if="data.body">
            {{ data.body }}
          </p>
          <h3 class="product-title row">
            <p class="col-12" style="white-space: initial" v-if="data.title">
              {{ data.title }}
            </p>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
</style>