<template>
  
 <div class="e-contact container pt-5 mt-5">
             
                <div class="row rtl">
                    <div class="col-xs-12 col-sm-6 col-md-7">
                     
                        <div class="e-contact-address footer-about">
                            <h3 class="contact-title v2">راه های ارتباطی</h3> 
                            <ul class="footer-block-content">
                                <li class="address">
                                    <span>آدرس:..............</span>
                                </li>
                                <li class="phone">
                                    <span>شبکه های اجتماعی:</span>
                                </li>
                                <li class="email">
                                    <span>Contact@yourcompany.com</span>
                                </li>
                                <li class="time">
                                    <span>شماره تماس :............</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-5 pdl">
                        <h1 class="contact-title spc">پیامی بگذارید</h1>
                        <form class="login-form" action="#">
                            <div class="form-group">
                                  <input type="text" id="author" class="form-control bdr" name="comment[author]" value="" placeholder="نام *">
                                  <input type="email" id="email" class="form-control bdr" name="comment[email]" value="" placeholder="ایمیل *">
                                  <input type="text" id="phone" class="form-control bdr" name="comment[phone]" value="" placeholder="شماره تلفن">
                                  <textarea id="message" class="form-control bdr3" name="comment[body]" rows="10" placeholder="پیام شما..."></textarea>
                            </div>
                              <div class="form-group">
                                  <button type="submit" class="btn btn-submit nabz-gradient">
                                      ارسال پیام
                                  </button>
                              </div>
                          </form>
                    </div>
                </div>
                <div class="banner-callus image-bd effect_img2">
                    <a href="#"><img src="img/banner/h1_b7.jpg" alt="" class="img-responsive"></a>
                    <div class="box-center v2">
                        <p>Call us free : + (123) 456 789</p>
                        <a href="#" class="btn-callus">Shop now</a>
                    </div>
                </div>
            </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: true,
      loadingCategory: true,
      data1: null,
      category: null,
    };
  },
  mounted() {
    this.getData();
    this.getCategory()
  },
  methods: {
    async getData() {
      let mydata = await axios
        .get(
          `https://redico.ir/api/blog/blog_retrieve/${this.$route.params.id}/`
        )
        .then((response) => (this.data1 = response.data));
      this.loading = false;
      console.log(this.data1);
    },
    async getCategory() {
      let mydata = await axios
        .get(`https://redico.ir/api/blog/List_category/`)
        .then((response) => (this.category = response.data));
      this.loadingCategory = false;
    },
  },
};
</script>

<style>
</style>