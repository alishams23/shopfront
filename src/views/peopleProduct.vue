<template>
  <div class="container my-5">
 

    <div class="rtl px-5 mx-5 mb-5 alert alert-warning d-flex align-items-center" role="alert" v-if="error == true">
      <svg class="bi flex-shrink-0 mx-4" width="24" height="24" role="img" aria-label="Warning:">
        <use xlink:href="#exclamation-triangle-fill"></use>
      </svg>
      <div>تمامی فیلد ها باید تکمیل شود</div>
    </div>
    <div class="row flex pd mt-5 mb-5 mx-5">
      <div class="account-element bd-7 rtl my-5">
        <div class="cmt-title text-center abs">
          <h1 class="page-title v6">فرم افزودن آگهی محصول شما</h1>
        </div>
        <div class="page-content">
          <p>پس از پر کردن فیلم و تایید ، محصول شما در سایت قرار خواهد گرفت</p>
          <form class="login-form px-5" @submit.prevent="sendData">
            <div class="form-group">

              <label class="pt-4">نام محصول</label>
              <input type="text" class="form-control border-10 mt-3" v-model="title" required />
              <label class="pt-4">توضیحات</label>

              <input type="text" class="form-control border-10 mt-3" v-model="description" required />
              <label class="pt-4">استان</label>
              <SimpleTypeahead id="typeahead_id" class="form-control border-10 mt-3" :items="cityData"
                :minInputLength="1" @onInput="onInputEventHandlerState">
              </SimpleTypeahead>
              <label class="pt-4">شهر</label>
              <input class="form-control border-10 mt-3" v-model="city" required />
              <label class="pt-4">قیمت</label>
              <input class="form-control border-10 mt-3" type="number" v-model="price" required />
              <label class="pt-4" for="photo">انخاب عکس محصول</label>
              <input type="file" required id="photo" accept="image/*" multiple @change="sendPhoto($event)"
                class="form-control border-10 mt-3" name="photo" />
              <div v-if="loading == true" class="d-flex justify-content-canter flex-row pt-5">
                <div class="col-12 text-center">
                  <img src="@/assets/loading.gif" height="30" />
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <button type="submit" class="btn btn-submit btn-gradient mt-4 rounded-10 px-5" v-if="loading == false">
                ثبت درخواست
              </button>

              <div class="mymodal mymodal-people">
                <div class="mymodal-overlay"></div>
                <div class="mymodal-card">
                  <div class="mymodal-body">
                    <div class="mymodal-content">
                      درخواست شما موفقیت آمیز بود

                    </div>
                    <div class="mymodal-footer">
                      <div class="d-flex">
                        <button class="btn-gradient py-2 mx-2 border rounded-10 px-5" @click="closeMyModal()">
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
  data() {
    return {
      data1: [],
      title: null,
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
      price: null,
      description: null,
      city: null,
      state: null,
      image: null,
      error: false,
      loading: false,
      imageId: [],
    };
  },
  mounted() {
    this.scrollToTop()

  },
  methods: {
scrollToTop() {
  setTimeout(() => {
     window.scrollTo(0, 0);
  }, 100);
     
    },
    async sendData() {
      if (
        this.state != null &&
        this.state != ""
      ) {

  
        
        let mydata = await axios
          .post(
            `https://redico.ir/api/shop/cerate_Product_of_people/`,
            {
              title: this.title,
              price: this.price,
              description: this.description,
              state: this.state,
              city: this.city,
              image: this.imageId,
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
            document.querySelector(".mymodal-people").classList.add("open");
          });
      } else {
        this.error = true;
      }
    },

    onInputEventHandlerState(value) {
      if (value.items.length != 1) {
        this.state = value.input;
      }
      if (value.items.length == 1) {
        this.state = value.items[0];
      }
    },
    closeMyModal() {
      this.$router.push("/");
    }, async sendPhoto(event) {
      this.image = event.target.files
      this.loading = true
      for (let index = 0; index < this.image.length; index++) {
        let element = this.image[index];

        let fd = new FormData()

        fd.append('photo', element)
        let mydata = await axios
          .post(
            `https://redico.ir/api/shop/cerate_Product_image/`,
            fd,
            {
              headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                Authorization: `Token ${this.$store.state.token}`,
              },
            }
          ).then((response) => {
            this.imageId.push(response.data.id)
          }).catch(function (error) {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
          })



      }

      this.loading = false


    }
  },
};
</script>

<style>
#typeahead_id {
  border: solid 1px white !important;
  width: 100% !important;
}
</style>