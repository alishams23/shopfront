<template>
  <div  class="pd-bd product-inner bg-white border-2">
                <div class="product-img" >
                  <div>
                    <img v-bind:src="data.image" alt="" class="img-reponsive h-213 cover"/>
                  </div>
               
                </div>
                <div class="product-info">
                  <div class="color-group"></div>
                  <div class="element-list element-list-left"></div>
                  <div class="element-list element-list-middle">
                    <p class="product-cate max-line max-line-title rtl" v-if="data.description">
                      {{ data.description }}
                    </p>
                    <div v-else >
                      <br>
                    </div>
                    <h3 class="product-title row">
                      <p class="col-12 rtl" style="white-space: initial">
                        {{ data.title }}
                      </p>
                    </h3>
                    <div class="product-bottom d-flex align-items-center">
                      
                     
                    </div>
                  </div>
                 
                </div>
             
            </div>
</template>

<script>
export default {
props:["data"]
}
</script>

<style>

</style>