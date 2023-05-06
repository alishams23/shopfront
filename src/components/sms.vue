<template>
  <div>
    <div class="mymodal rtl" :class="modal ? 'open' : ''">
      <div class="mymodal-overlay"></div>
      <div class="mymodal-card">
        <form class="mymodal-body" @submit.prevent="sendNumber">
          <div class="mymodal-content fs-5">
            <div>
              <div class="fs-4">
                {{ errorData }}
                کد تایید ارسال شده به شماره تلفنتان را وارد نمایید
              </div>
              <div class="py-3 px-5 text-danger" v-if="statusCheck == true">
                خطایی رخ داد ممکن است کد را اشتباه وارد کرده باشید
              </div>
            </div>
            <input v-model="code" type="text" required name="alt" maxlength="200" class="form-control border-10 mt-3"
              id="id_alt" />
          </div>
          <div class="mymodal-footer">
            <div class="d-flex">
              <button type="submit" class="px-4 py-2 rounded-10 py-2 text-white btn btn-gradient">
                <div v-if="loadingSMS == false">ارسال</div>
                <div class="d-flex flex-column align-items-center" v-if="loadingSMS == true">
                  <div class="loader-light"></div>
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="mymodal rtl" :class="modalError ? 'open' : ''">
      <div class="mymodal-overlay"></div>
      <div class="mymodal-card">
        <form class="mymodal-body">
          <div class="mymodal-content fs-5">
            <div>
              <div class="fs-4 mt-5 px-3">
                خطایی در ارسال پیامک رخ داده لطفا با پشتیبانی جهت رفع مشکل تماس برقرار کنید
              </div>

            </div>

          </div>
          <div class="mymodal-footer">
            <div class="d-flex">

            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="mymodal rtl" :class="loadingSend ? 'open' : ''">
      <div class="mymodal-overlay"></div>
      <div class="mymodal-card">
        <form class="mymodal-body">
          <div class="mymodal-content fs-5">
            <div>
              <div class="d-flex justify-content-canter flex-row pt-5 mt-5">
                <div class="col-12 text-center">
                  <img src="@/assets/loading.gif" height="30" />
                </div>
              </div>

            </div>

          </div>
          <div class="mymodal-footer">
            <div class="d-flex">

            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingSMS: false,
      modal: false,
      modalError: false,
      code: null,
      loadingSend: false,
      statusCheck: false,
      idToken: "",


    };
  },
  methods: {
    async SendSms() {
      this.loadingSend = true;
      try {
        await fetch("https://redico.ir/api/shop/Send_code/", {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.$store.state.token}`,
        },
      }).then((response) => response.json()).then((response) => {
        if (response.result.recId) { this.modal = true } else { this.modalError = true }
      });
      } catch (error) {
        
      }
      
      this.loadingSend = false;
    },
    async sendNumber() {
      this.loadingSMS = true;

      try {
        if (this.code != null) {
          this.statusCheck = false;
          let statusCheckApi = await fetch(
            `https://redico.ir/api/shop/Code_check/?code=${this.code}`,
            {
              headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                Authorization: `Token ${this.$store.state.token}`,
              },
            }
          );
          console.log(statusCheckApi.status); // returns 200
          this.statusCheck = true;
          if (statusCheckApi.ok) {
            this.modal = false;
          }
        }
      } catch (error) {
        this.statusCheck = true;
      }
      this.loadingSMS = false;
    },
  }, mounted() {
    this.SendSms()
  }
};
</script>

<style>
</style>
