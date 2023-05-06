<template>
  <div class="container my-5">
    <div class="border rounded-10 rtl mb-5" v-if="dataMain != null">
      <div class="fw-bold px-5 pt-5">{{ dataMain }}</div>
      <div class="p-4" v-if="dataDescription != null">
        {{ dataDescription }}
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol
        id="exclamation-triangle-fill"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </symbol>
    </svg>

    <div
      class="rtl px-5 mx-5 mb-5 alert alert-warning d-flex align-items-center"
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
    <div class="row flex pd mt-5 mb-5 mx-5">
      <div class="account-element bd-7 rtl my-5">
        <div class="cmt-title text-center abs">
          <h1 class="page-title v6">فرم تکمیل درخواست خدمات</h1>
        </div>
        <div class="page-content">
          <p>
            پس از پر کردن و ثبت فرم زیر با شما جهت هماهنگی تماس گرفته خواهد شد.
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
              <label class="pt-4">آدرس کامل</label>
              <input
                class="form-control border-10 mt-3"
                v-model="address"
                placeholder="مکان دستگاه جهت تعمیر"
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
                    <div class="border-bottom px-3 fs-3 py-3">افزودن نظر</div>
                    <div class="mymodal-content">
                      درخواست شما موفقیت آمیز بود با شما در اولین فرصت تماس
                      گرفته خواهد شد
                    </div>
                    <div class="mymodal-footer">
                      <div class="d-flex">
                        <button
                          class="btn-gradient py-2 mx-2 border rounded-10 px-5"
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
</template>

<script>
import axios from "axios";

import SimpleTypeahead from "vue3-simple-typeahead";
import "vue3-simple-typeahead/dist/vue3-simple-typeahead.css";
export default {
  name: "my-vue-component",
  components: {
    SimpleTypeahead,
  },
  props: ["dataMain", "dataDescription"],

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
      repairs_smartphone: null,
      Device_model: null,
      Malfunction_information: null,
      city: null,
      address: null,
      State: null,
      Device_company: null,
      error: false,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let mydata = await axios
        .get("https://redico.ir/api/Services/get_Service_suggestion/")
        .then((response) =>
          response.data.forEach((element) => {
            if (typeof element.Name == "string") this.data1.push(element.Name);
          })
        );
    },
    async sendData() {
      if (
        this.Device_company != null &&
        this.Device_company != "" &&
        this.State != null &&
        this.State != ""
      ) {
        let mydata = await axios
          .post(
            `https://redico.ir/api/Services/cerate_Services/${this.$route.params.id}/`,
            {
              Device_model: this.Device_model,
              Malfunction_information: this.Malfunction_information,
              city: this.city,
              State: this.State,
              address: this.address,
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
#typeahead_id {
  border: solid 1px white !important;
  width: 100% !important;
}
</style>