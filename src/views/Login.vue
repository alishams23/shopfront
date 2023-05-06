<template>
    <div class="container d-flex flex-row justify-content-center loGiN mt-5 mb-5">
      
      <div class="col-lg-5 col-md-12 mt-5 pt-5">
        <div class="row flex pd">
          <div class="account-element bd-7 px-5">
            <div class="cmt-title text-center abs">
              <h1 class="page-title v1">ورود</h1>
            </div>
            <div class="page-content">
              <p>ورود به حساب کاربری</p>
              <div class="text-danger text-center">{{generalError}}</div>
              <form class="login-form" @submit.prevent="doLogin">
                <div class="form-group text-right">
                  <label for="author" class="py-4">شماره تلفن خود را وارد کنید<span class="f-red">*</span></label>
                  <input type="text" id="author" class="form-control rounded-10"   placeholder="شماره تلفن" 
                  v-model="UserName" :class="{'is-invalid':UserNameE===true, 'is-valid':UserNameE===false, }" />
                  <div class="invalid-feedback">
                    {{UserNameEM}}
                  </div>



                  <label class="py-4" for="passwordinput"> رمز عبور خود را وارد کنید <span class="f-red">*</span></label>
                  <input type="password" id="passwordinput" class="form-control rounded-10" placeholder="رمز عبور"
                  v-model="Password" :class="{ 'is-invalid':PasswordE===true, 'is-valid':PasswordE===false, }" />
                  <div class="invalid-feedback">
                    {{PasswordEM}}
                  </div>
                </div>
                <div class="flex lr">
                  <button type="submit" class="btn btn-submit  rounded-10 px-5 py-3 nabz-gradient">ورود</button>
                </div>
              </form>
              <router-link to="/register" class="btn-lostpwd spc">از قبل اکانتی ندارم</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name:'Login',
    data(){
        return{
            UserName:'',
            Password:'',
            UserNameE:null,
            PasswordE:null,
            generalError:"",
            UserNameEM:'',
            PasswordEM:'',
        }
    },
    mounted(){
        if(this.$store.state.isAuthenticated == true){
        this.$router.push("/")
      } 
    },
    methods:{
        async doLogin() {
          this.generalError=""
            let access=true
            if (this.UserName.length < 4) {
                access=false
            this.UserNameE=true
                if (this.UserName.length==0) {
                    this.UserNameEM="لطفا یوزرنیم خود را وارد کنید"
                }else{
                    this.UserNameEM="یوزرنیم باید حداقل 4 کاراکتر باشد"
                }
                }else{
                    this.UserNameE=false 
                    this.UserNameEM="" 
                }

                if (this.Password.length<8) {
                    access=false
                this.PasswordE=true
                if (this.Password.length==0) {
                    this.PasswordEM="لطفا پسورد خود را وارد کنید"
                }else{
                    this.PasswordEM="رمز عبور باید حداقل 8 کاراکتر باشد"
                }
                }else{
                    this.PasswordE=false
                    this.PasswordEM="" 
                }
            if (access) {
              
              try {
                 let mydata =await axios
                .post("https://redico.ir/api/shop/login/",{"username":this.UserName,"password":this.Password})
                .then((response) => ( this.$store.commit('login',response.data.token)));
                 this.$router.push("/")
              } catch (error) {
                 this.generalError="رمز عبور یا نام کاربری اشتباه است"
                 }
             
                
           
            }
        }
    }
}
</script>


<style>
.loGiN{
  direction: rtl;
}
</style>