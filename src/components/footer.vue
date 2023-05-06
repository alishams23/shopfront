<template>
  <div class="w-100 footer-bg px-5 bg-white" :class="hide == true ? 'd-none' : ''"
    v-if="currentRouteName() != 'Search' && currentRouteName() != 'blogSearch' && currentRouteName() != 'catalog' && currentRouteName() != 'application' && currentRouteName() != 'learn' && currentRouteName() != 'categories' && currentRouteName() != 'stocks' && currentRouteName() != 'repairs' && currentRouteName() != 'service'">
    <div>
      <div class="rtl mb-4 mt-5 mx-3 d-flex justify-content-between">
        <div>
          <img src="@/assets/logo.png" height="70" class="rtl" alt="logo" />
        </div>
        <div>
          <button class="border px-4 py-3 rounded-10 bg-white" @click="scrollToTop()">
            بازگشت به بالا
          </button>
        </div>
      </div>
      <div class="rtl mb-5 d-flex flex-wrap">
        <div>تلفن پشتیبانی:</div>
        <div class="px-2">0353*****</div>
        <div>|</div>
        <div class="px-2">0913******</div>
        <div>|</div>
        <div class="px-5">هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.</div>
      </div>
    </div>
    <div>
      <div class="d-flex justify-content-around pt-3 border-bottom">
        <a class="d-flex flex-column align-items-center">
          <div>
            <img src="@/assets/2.jpeg" height="46" alt="" />
          </div>
          <div class="py-4">ضمانت هفت روز بازگشت کالا</div>
        </a><a class="d-flex flex-column align-items-center">
          <div>
            <img src="@/assets/3.jpeg" height="46" alt="" />
          </div>
          <div class="py-3">پرداخت امن اینترنتی</div>
        </a><a class="d-flex flex-column align-items-center">
          <div>
            <img src="@/assets/4.jpeg" height="46" alt="" />
          </div>
          <div class="py-4">ضمانت کیفیت کالا</div>
        </a><a class="d-flex flex-column align-items-center">
          <div>
            <img src="@/assets/1.jpeg" height="46" alt="" />
          </div>
          <div class="py-4">ارسال رایگان بالای ۱ میلیون</div>
        </a>
      </div>
    </div>
    <div class="row rtl">
      <div class="mt-5">
        <div class="px-3">
          <h3 class="rtl">درباره  </h3>
          <p class="about-us-p text-right mt-5">
            کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

          </p>

          <div class="blog-post-social d-flex flex-row justify-content-end   p-5">
            <a href=""
              class="align-items-center d-flex justify-content-center"><svg xmlns="http://www.w3.org/2000/svg"
                width="18" height="18" fill="currentColor" class="fa bi bi-instagram" viewBox="0 0 16 16">
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg></a>
            <!-- <a href="" class="align-items-center d-flex justify-content-center"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                /></svg
            ></a> -->
          </div>
          <div class="d-flex flex-column align-items-end ms-4 mb-3 ">
              <a href="https://redico.ir/api/shop/enamad/" class=" d-flex flex-column align-items-center border rounded-10 p-2" style="">
                <img src="@/assets/enamad.png" style="width:70px">
                <div class="d-flex flex-column align-items-center pt-2">
               
                </div>
              </a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide: false,
    };
  },
  mounted() {
    // setTimeout(() => {
    //   let myEle = document.getElementById("hideFooter");
    //   console.log(myEle)
    //   if (myEle) {
    //     this.hide = true;
    //   } else {
    //     this.hide = false;
    //   }
    // }, 100);
  },
  methods: {
    scrollToTop() {
       setTimeout(() => {
     window.scrollTo(0, 0);
  }, 100);
    }, currentRouteName() {
      return this.$route.name;
    },
  },

  updated() {
    // setTimeout(() => {
    //   let myEle = document.getElementById("hideFooter");

    //   if (myEle) {
    //     this.hide = true;
    //   } else {
    //     this.hide = false;
    //   }
    // }, 100);
  },
};
</script>

<style>
.footer-bg {
  /* background: -webkit-linear-gradient(to right, #05ce91, #06dd6f);  /* Chrome 10-25, Safari 5.1-6 */
  /* background: linear-gradient(to right, #000000, #3d3d3d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 450px;
  border-top: solid 1px rgb(238, 238, 238);
}

.rtl {
  direction: rtl;
}

.d-l {
  direction: ltr;
}

.f-c {
  color: #3a3a3a;
}

.f-c2 {
  color: #727272 !important;
}

.aa {
  margin-top: 18px;
}

.bb {
  padding-right: 179px !important;
}

.about-us-p {
  color: rgb(48, 48, 48);
  line-height: 28px;
}

.about-us-t {
  padding-bottom: 25px !important;
  border-bottom: 2px solid rgb(255, 51, 51);
  width: 60%;
}

.p-right {
  padding-right: 120px !important;
}

.m-container {
  padding-right: 80px;
  padding-left: 80px;
}
</style>