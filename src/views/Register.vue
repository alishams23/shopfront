<template>
  <div class="container d-flex flex-row justify-content-center loGiN mt-5 mb-5">
    <div class="col-lg-5 col-md-12 mt-5 pt-5">
      <div class="row flex pd">
        <div class="account-element bd-7 px-5">
          <div class="cmt-title text-center abs">
            <h1 class="page-title v1">ثبت نام</h1>
          </div>
          <div class="page-content">
            <p>ورود به حساب کاربری</p>
            <form class="login-form" @submit.prevent="doRegister">
              <div class="form-group text-right">
                <label for="author" class="py-4"
                  >شماره تلفن<span class="f-red">*</span></label
                >
                <input
                  type="text"
                  id="author"
                  class="form-control rounded-10"
                  maxlength="11"
                  minlength="11"
                  placeholder="مثال : *********0913 "
                  required
                  pattern="[0-9.]+"
                  name="comment[author]"
                  v-model="username"
                />
                <div class="invalid-feedback"></div>

                <label class="py-4">
                  رمز عبور <span class="f-red">*</span></label
                >
                <input
                  type="password"
                  id="passwordinput"
                  minlength="8"
                  class="form-control rounded-10"
                  v-model="password"
                  required
                />
                <div class="invalid-feedback"></div>

                <label class="py-4"> نام <span class="f-red">*</span></label>
                <input
                  v-model="first_name"
                 
                  class="form-control rounded-10"
                  required
                />

                <label class="py-4">
                  نام خانوادگی <span class="f-red">*</span></label
                >
                <input
                  v-model="last_name"
                  
                  class="form-control rounded-10"
                  required
                />
              </div>
              <div class="flex lr">
                <button
                  type="submit"
                  class="btn btn-submit rounded-10 px-5 py-3 nabz-gradient"
                >
                  ثبت نام
                </button>
              </div>
                <div v-if="error"  class="text-danger text-center pt-5"> شماره تلفن تکراری میباشد</div>

            </form>
            <router-link to="/login" class="btn-lostpwd spc"
              >از قبل اکانتی دارم</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      error:false,
    };
  },
  mounted() {
    if (this.$store.state.isAuthenticated == true) {
      this.$router.push("/");
    }
  },
  methods: {
    async doRegister() {
      let mydata = await axios
        .post("https://redico.ir/api/shop/UserCreate/", {
          "username": this.username,
          "password": this.password,
          "first_name": this.first_name,
          "last_name": this.last_name,
        }).catch(this.error = true)
        .then((response) => (this.$store.commit('login',response.data.token)))
        this.$router.push("/")
        


    },
  },
};
</script>


<style>
.loGiN {
  direction: rtl;
}
</style>