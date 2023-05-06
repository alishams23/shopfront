<template>
  <div>
    <div class="wrappage">
      <!-- /header -->
      <!--content-->
      <div class="shop-collection" style="">
        <div class="d-flex flex-row shop-colect ">
          <div
            class="
              col-md-9 col-sm-12 col-xs-12
              bg-white
              collection-list
              pt-5
              px-5
              scrollBarStyle
            "
            style="
              position: fixed;
              height: 100%;
              overflow-y: auto;
              right: 0px;
              padding-bottom: 200px;
            "
          >
            <div class="hidden-lg hidden-md">
              <a
                class="border px-4 py-2 rounded-10"
                @click="filter == false ? (filter = true) : (filter = false)"
                >درخواست خارج از لیست</a
              >
            </div>
            <div class="">
              <div class="border col-12 rounded-10 rtl p-4 mt-5 bg-white">
                <div class="d-flex flex-column center align-items-center">
                  <div class="px-5 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="rgb(192 189 189)"
                      class="bi bi-layout-wtf"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5 1v8H1V1h4zM1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm13 2v5H9V2h5zM9 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9zM5 13v2H3v-2h2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3zm12-1v2H9v-2h6zm-6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9z"
                      />
                    </svg>
                  </div>
                  <h1 class="display-5 p-3 entry-title spc">تعمیرات غیر حضوری</h1>
                </div>
                <div class="p-3">
               
                </div>
              </div>
              <div class="" v-for="item in data" v-bind:key="item">
                <div class="pb-5 rtl">
                  <div class="ecome-heading style4 my-3 py-5">
                    <div class="btn-show title-division">
                      <p>{{ item.title }}</p>
                    </div>
                  </div>
                </div>
                <div class="">
                  <div
                    class="owl-carousel owl-theme v3 owl-cate ltr"
                    v-bind:class="'owl-carousel-repair-' + item.id"
                  >
                    <router-link
                      :to="{
                        name: 'service_item',
                        params: {
                          id: child.id,
                          dataMain: child.title,
                          dataDescription: child.description,
                        },
                      }"
                      tag="div"
                      class="product-item"
                      v-for="child in item.child"
                      v-bind:key="child"
                    >
                      <Repair v-bind:data="child" />
                    </router-link>
                  </div>
                </div>
              </div>
              <div
      v-if="loading == true"
      class="d-flex justify-content-canter flex-row py-5"
    >
      <div class="col-12 text-center">
        <img src="@/assets/loading.gif" height="30" />
      </div>
    </div>
            </div>
          </div>
          <div
            class="
              col-md-3 col-sm-3 col-xs-12
              
              collection-sidebar
              bg-white
              pt-5
              scrollBarStyle
            "
            v-bind:class="filter == false ? 'hidden-sm hidden-xs' : ''"
            style="
              position: fixed;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;
              left: 0px;
              padding-bottom: 200px;
            "
            id="filter-sidebar"
          >
            <div class="hidden-lg hidden-md mb-5 px-4 rtl">
              <a
                class="border px-4 py-2 rounded-10"
                @click="filter == false ? (filter = true) : (filter = false)"
                >درخواست از لیست پیشنهادی </a
              >
            </div>
            <div
              class="
                rtl
                px-5
                mx-5
                mb-5
                alert alert-warning
                d-flex
                align-items-center
              "
              role="alert"
              v-if="error == true"
            >
              <svg
                class="bi flex-shrink-0 mx-4"
                width="24"
                height="24"
                role="img"
                aria-label="Warning:"
              >
                <use xlink:href="#exclamation-triangle-fill"></use>
              </svg>
              <div>تمامی فیلد ها باید تکمیل شود</div>
            </div>
            <div class="row flex pd mt-5 mb-5 mx-2 rtl">
              <div class="account-element bd-7 rtl my-5">
                <div class="cmt-title text-center abs">
                  <h1 class="page-title v6">فرم درخواست خارج از لیست</h1>
                </div>
                <div class="page-content">
                  <p>
                    پس از پر کردن و ثبت فرم زیر با شما جهت هماهنگی تماس گرفته
                    خواهد شد.
                  </p>
                  <form class="login-form px-5" @submit.prevent="sendData">
                    <div class="form-group">
                      <label class="pt-4">برند دستگاه</label>
                      <SimpleTypeahead
                        id="typeahead_id"
                        placeholder="برند دستگاه"
                        class="form-control border-10 mt-3"
                        :items="data1"
                        :minInputLength="1"
                        @onInput="onInputEventHandler"
                      >
                      </SimpleTypeahead>
                      <label class="pt-4">مدل دستگاه</label>
                      <input
                        type="text"
                        class="form-control border-10 mt-3"
                        v-model="Device_model"
                        placeholder="مدل و شماره سال ساخت دستگاه"
                        required
                      />
                      <label class="pt-4">توضیحات</label>

                      <input
                        type="text"
                        class="form-control border-10 mt-3"
                        v-model="Malfunction_information"
                        placeholder="توضیحات خرابی"
                        required
                      />
                      <label class="pt-4">استان</label>
                      <SimpleTypeahead
                        id="typeahead_id"
                        placeholder="استان"
                        class="form-control border-10 mt-3"
                        :items="cityData"
                        :minInputLength="1"
                        @onInput="onInputEventHandlerState"
                      >
                      </SimpleTypeahead>
                      <label class="pt-4">شهر</label>
                      <input
                        class="form-control border-10 mt-3"
                        v-model="city"
                        required
                      />
                      
                    </div>
                    <div class="flex justify-center">
                      <button
                        type="submit"
                        class="btn btn-submit btn-gradient mt-4 rounded-10 px-5"
                      >
                        ثبت درخواست
                      </button>

                      <div class="mymodal mymodal-page-check">
                        <div class="mymodal-overlay"></div>
                        <div class="mymodal-card">
                          <div class="mymodal-body">
                            <div class="border-bottom px-3 fs-3 py-3">
                              افزودن نظر
                            </div>
                            <div class="mymodal-content">
                              درخواست شما موفقیت آمیز بود با شما در اولین فرصت
                              تماس گرفته خواهد شد
                            </div>
                            <div class="mymodal-footer">
                              <div class="d-flex">
                                <button
                                  class="
                                    btn-gradient
                                    py-2
                                    mx-2
                                    border
                                    rounded-10
                                    px-5
                                  "
                                  @click="closeMyModal()"
                                >
                                  تایید
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";import SimpleTypeahead from "vue3-simple-typeahead";
import Repair from "../components/repairItem.vue";
export default {
  components: { Repair,   SimpleTypeahead, },

  data() {
    return {
      data1: [],
      brandData: null,
      cityData: [
        "آذربایجان شرقی",
        "آذربایجان غربی",
        "اردبیل",
        "اصفهان",
        "البرز	",
        "ایلام	",
        "بوشهر	",
        "تهران	",
        "چهارمحال و بختیاری	",
        "خراسان جنوبی	",
        "خراسان رضوی	",
        "خراسان شمالی	",
        "خوزستان	",
        "زنجان	",
        "سمنان	",
        "سیستان و بلوچستان	",
        "فارس	",
        "قزوین	",
        "قم	",
        "کردستان	",
        "کرمان	",
        "کرمانشاه	",
        "کهگیلویه وبویراحمد	",
        "گلستان	",
        "گیلان	",
        "لرستان	",
        "مازندران	",
        "مرکزی	",
        "هرمزگان	",
        "همدان	",
        "یزد	",
      ],
      data: [],
      repairs_smartphone: null,
      Device_model: null,
      Malfunction_information: null,
      city: null,
      address: null,
      State: null,
      Device_company: null,
      error: false,
      loading:true,
      filter :false
    };
  },
  mounted() {
    this.getData();
    this.getDataSuggestion();
  },
  methods: {
    async getData() {
      this.loading=true
      let mydata = await axios
        .get("https://redico.ir/api/Services/get_Services/")
        .then((response) => (this.data = response.data));
        this.loading=false
      for (let index = 0; index < this.data.length; index++) {
        $(`.owl-carousel-repair-${this.data[index].id}`).owlCarousel({
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
              items: 1,
            },
            480: {
              items: 2,
            },
            1024: {
              items: 3,
            },
            1200: {
              items: 4,
            },
            1600: {
              items: 4,
            },
          },
        });
      }
    },async getDataSuggestion() {
      let mydata = await axios
        .get("https://redico.ir/api/Services/get_Service_suggestion/")
        .then((response) =>
          response.data.forEach((element) => {
            if (typeof element.Name == "string") this.data1.push(element.Name);
          })
        );
    },
    async sendData() {
       if (this.$store.state.token == "") {
           this.$router.push("/login")

      }
      if (
        this.Device_company != null &&
        this.Device_company != "" &&
        this.State != null &&
        this.State != ""
      ) {
        let mydata = await axios
          .post(
            `https://redico.ir/api/Services/cerate_Services/0/`,
            {
              Device_model: this.Device_model,
              Malfunction_information: this.Malfunction_information,
              city: this.city,
              State: this.State,
              Device_company: this.Device_company,
            },
            {
              headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                Authorization: `Token ${this.$store.state.token}`,
              },
            }
          )
          .then((response) => {
            document.querySelector(".mymodal-page-check").classList.add("open");
          });
      } else {
        this.error = true;
      }
    },
    onInputEventHandler(value) {
      if (value.items.length != 1) {
        this.Device_company = value.input;
      }
      if (value.items.length == 1) {
        this.Device_company = value.items[0];
      }
    },
    onInputEventHandlerState(value) {
      if (value.items.length != 1) {
        this.State = value.input;
      }
      if (value.items.length == 1) {
        this.State = value.items[0];
      }
    },
    closeMyModal() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.title-division {
  color: black !important;
}
.title-division:hover {
  color: white !important;
}
</style>