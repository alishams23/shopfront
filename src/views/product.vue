<template>
  <!-- push menu-->

  <!-- end push menu-->
  <div class="wrappage">
    <!-- /header -->
    <!--content-->
    <div v-if="loading == false">
      <div class="container container-240" v-if="loading == false">
        <div class="single-product-detail product-bundle product-aff mt-5 pt-5">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="flex product-img-slide">
                <div class="product-images">
                  <div class="main-img js-product-slider">
                    <a
                      href="#"
                      class="hover-images effect"
                      v-for="data in data1.image"
                      v-bind:key="data.id"
                    >
                      <img
                        v-bind:src="data.photo"
                        alt="photo"
                        class="img-reponsive w-100 h-100 cover"
                    /></a>
                  </div>
                </div>
                <div class="multiple-img-list-ver2 js-click-product">
                  <div
                    class="product-col"
                    v-for="data in data1.image"
                    v-bind:key="data.id"
                  >
                    <div class="img active">
                      <img
                        v-bind:src="data.photo"
                        alt="photo"
                        class="img-reponsive w-100 h-100 cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="single-flex">
                <div
                  class="single-product-info product-info product-grid-v2 s-50"
                >
                  <div class="">
                    <div @click="shareLink(data1.id)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
</svg>
                    </div>
                    <h3 class="product-title display-4 rtl px-5">
                      <strong>{{ data1.title }}</strong>
                    </h3>
                    
                    <div class="product-price rtl px-5">
                      <span>{{ price(data1.price - (data1.price * data1.discount) / 100) }} تومان</span>
                      <div
              v-if="data1.discount != 0"
              class="rtl old text-decoration-line-through"
            >
              {{ data1.price }}
            </div>
                    </div>
                    
                    <div class="availability px-5">
                      <div class="rtl d-flex">
                        <p
                          class="
                            px-3
                            rounded-10
                            m-3
                            py-2
                            bg-dark
                            text-white
                            rtl
                          "
                          v-if="data1.is_stock"
                        >
                          استوک
                        </p>
                        <p
                          class="
                            px-3
                            rounded-10
                            m-3
                            py-2
                            bg-dark
                            text-white
                            rtl
                          "
                          v-if="data1.is_people"
                        >
                          آگهی مشتریان
                        </p>
                        <p
                          class="
                            px-3
                            rounded-10
                            m-3
                            py-2
                            bg-danger
                            text-white
                            rtl
                          "
                          v-if="data1.discount != 0"
                        >
                          - {{ data1.discount }}%
                        </p>
                      </div>
                      <p
                        class="product-inventory rtl"
                        v-if="data1.is_people != true"
                      >
                        <label>وضعیت : </label
                        ><span v-if="data1.amount != 0">
                          موجود {{ data1.amount }} عدد </span
                        ><span class="text-danger" v-if="data1.amount == 0">
                          ناموجود
                        </span>
                      </p>
                      <p
                        class="product-inventory rtl"
                        v-if="data1.is_people == true"
                      >
                        <label class="px-2">استان : </label
                        ><span v-if="data1.people_product.state">
                          {{ data1.people_product.state }}
                        </span>
                        <label class="px-2">شهر : </label
                        ><span v-if="data1.people_product.city">
                          {{ data1.people_product.city }}
                        </span>
                      </p>
                      <p
                        class="product-inventory rtl py-3"
                        v-if="data1.is_people == true"
                      >
                        <label class="px-2">شماره تماس : </label
                        ><span v-if="data1.people_product.author">
                          {{ data1.people_product.author.username }}
                        </span>
                      </p>
                    </div>
                    <div class="short-desc rtl">
                      <p class="px-5">{{ data1.description }}</p>
                    </div>
                    <div
                      class="
                        single-product-button-group
                        d-flex
                        justify-content-end
                        flex-column
                      "
                    >
                      <div class=""></div>
                    </div>
                  </div>
                </div>
                <div class="hidden-xs hidden-sm text-right">
                  <div class="overflow-auto h-512">
                    <div
                      class="bg-5 rounded-20 me-2 py-3 px-5 mb-2"
                      v-for="spec in data1.Specification"
                      v-bind:key="spec.id"
                    >
                      <strong>{{ spec.title }}</strong>
                      <p class="pt-3">{{ spec.body }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-5 mx-3 pt-5" v-if="data1.blog && data1.blog.length != 0">
        <div class="blog-comment-content container mt-5 rtl">
          <div class="cmt-title text-center abs">
            <h1 class="oval-bd">بلاگ های متصل</h1>
          </div>
          <ul>
            <li v-for="result in data1.blog" v-bind:key="result.id">
              <router-link
                v-bind:to="`/blog/${result.id}/`"
                class="blog-comment-item text-right"
              >
                <div class="cmt-content text-right">
                  <h4 class="">{{ result.title }}</h4>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="gradient-animation-1 py-5" v-if="data1.is_people == false">
        <div class="d-flex justify-content-around align-items-center">
          <div class="d-flex align-items-center">
            <div class="bg-white px-4 py-4 rounded-10 fw-bold">
              {{ number }}
            </div>
            <p class="text-white fw-bold fs-4 px-3">تعداد محصول در سبد خرید</p>
          </div>

          <div class="d-flex flex-column align-items-center pointer">
            <div class="d-flex">
              <div @click="addToCard()" v-if="data1.amount > number">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  class="bi bi-caret-up-fill pb-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                  />
                </svg>
              </div>

              <a v-if="data1.amount > number" @click="addToCard()" class="text-white fw-bold fs-4 px-3"
                >افزودن به سبد خرید
              </a>
            </div>
            <div class="d-flex" v-if="number > 0">
              <div @click="deleteToCard()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  class="bi bi-caret-down-fill mx-3 pt-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </div>

              <a @click="deleteToCard()" class="text-white fw-bold fs-4 px-3"
                >کاستن از سبد خرید
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- --------------------------------------------------------COMMENTS-------------------------------------------------------- -->
      <div class="my-5 mx-3 pt-5" v-if="data1.comment">
        <div class="blog-comment-content container mt-5 rtl">
          <div class="cmt-title text-center abs">
            <h1 class="oval-bd">نظرات</h1>
          </div>
          <ul>
            <li v-for="result in data1.comment" v-bind:key="result.id">
              <div class="blog-comment-item text-right">
                <div class="cmt-content text-right">
                  <h4 class="">
                    {{ result.author.first_name }} {{ result.author.last_name }}
                  </h4>
                  <p>{{ result.title }}</p>
                </div>
              </div>
            </li>
            <div v-if="data1.comment.length == 0" class="pb-5">
              <div class="text-center">نظری وجود ندارد</div>
            </div>
            <div
              v-if="this.$store.state.isAuthenticated == true"
              class="d-flex justify-content-center"
            >
              <button
                @click="openmymodal()"
                class="px-5 fw-bold m-5 py-2 border rounded-pill"
              >
                افزودن کامنت جدید
              </button>
            </div>

            <div class="mymodal mymodal-product-check">
              <div class="mymodal-overlay" @click="closemymodal()"></div>
              <div class="mymodal-card">
                <div class="mymodal-body">
                  <div class="border-bottom px-3 fs-3 py-3">افزودن نظر</div>
                  <div class="mymodal-content">
                    <input
                      placeholder="نظر شما ..."
                      type="text"
                      id="author"
                      v-model="comment"
                      class="form-control rounded-10 mt-3"
                    />
                  </div>
                  <div class="mymodal-footer">
                    <div class="d-flex">
                      <button
                        class="btn-gradient py-2 mx-2 border rounded-10 px-5"
                        @click="sendComment()"
                      >
                        ثبت نظر
                      </button>
                      <button
                        class="bg-white py-2 border rounded-10 px-4"
                        @click="closemymodal()"
                      >
                        بستن
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
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

    <Js_code />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";

import axios from "axios";
import Js_code from "../store/js.vue";

export default {
  components: { Js_code, Footer },

  data() {
    return {
      loading: true,
      data1: [],
      comment: "",
      number: 0,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let header =
        this.$store.state.isAuthenticated == false
          ? {}
          : {
              headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                Authorization: `Token ${this.$store.state.token}`,
              },
            };
      let mydata = await axios
        .get(
          `https://redico.ir/api/shop/retrieveProduct/${this.$route.params.id}/`,
          header
        )
        .then((response) => (this.data1 = response.data));
      this.number = this.data1.order_count.count;
      this.loading = false;

      console.log(this.data1);

      this.doSlider();
    },
    closemymodal() {
      document.querySelector(".mymodal-product-check").classList.remove("open");
    },
    openmymodal() {
      document.querySelector(".mymodal-product-check").classList.add("open");
    },
    async sendComment() {
      if (this.comment != "") {
        let mydata = await axios
          .post(
            `https://redico.ir/api/shop/comment/${this.$route.params.id}/`,
            { title: this.comment },
            {
              headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                Authorization: `Token ${this.$store.state.token}`,
              },
            }
          )
          .then((response) => {
            this.closemymodal();
            this.getData();
          });
      }
      this.closemymodal();
    },
    async addToCard() {
      if (this.$store.state.isAuthenticated == false)
        this.$router.push("/login");

      try {
        await axios
          .get(`https://redico.ir/api/shop/order_add/${this.data1.id}/`, {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${this.$store.state.token}`,
            },
          })
          .then((response) => {
            this.number++;
          });
      } catch (error) {}
    },
    async deleteToCard() {
      try {
        await axios
          .get(
            `https://redico.ir/api/shop/order_remove/${this.data1.id}/`,
            {
              headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                Authorization: `Token ${this.$store.state.token}`,
              },
            }
          )
          .then((response) => {
            this.number--;
          });
      } catch (error) {}
    },shareLink(dataValue) {
      let input = document.body.appendChild(document.createElement("input"));
      input.value = `https://redico.ir/product/${dataValue}`;
      input.focus();
      input.select();
      document.execCommand("copy");
      input.parentNode.removeChild(input);
      alert(`https://redico.ir/product/${dataValue} کپی شد.`);
    },
    price(value){
      let text
      let chars = Array.from(`${value}`)
      for (let index = 1; index <= chars.length; index++) {
         
         if(index % 3==0){
           if (chars.length != index) {
           chars[chars.length-index] = `,${chars[chars.length-index]}`;
             
           }
         }

      }
      return chars.join("");;
    },
    doSlider() {
      jQuery(document).ready(function ($) {
        "use strict";
        // Ajax search
        $('.ajax-search input[type="text"]').on("blur", function () {
          $(".list-product-search").removeClass("active");
        });
        $('.ajax-search input[type="text"]').on("keydown", function () {
          if ($(this).val() == "") {
            $(".list-product-search").removeClass("active");
          } else {
            $(".list-product-search").addClass("active");
          }
        });
        // close quickview

        $(".quickview-close").on("click", function () {
          $(".quickview-wrapper").hide();
          $(".quickview-wrapper").removeClass("open");
          $(".quick-mymodal").removeClass("show");
        });
        // open Vertical menu
        $(".js-vertical-menu").on("click", function () {
          $(".vertical-wrapper").slideToggle(200);
          $(this).toggleClass("active");
        });
        //menu change icon and dropdown
        $(".icon-mobile").on("click", function () {
          $(this).toggleClass("active");
        });
        //menu change icon and dropdown
        $(".js-menubar li .js-plus-icon").on("click", function () {
          $(this).toggleClass("minus");
          $(this)
            .parent()
            .find(".dropdown-menu")
            .slideToggle(function () {
              $(this)
                .next()
                .stop(true)
                .toggleClass("open", $(this).is(":visible"));
            });
        });

        $(".js-filter-menu li .js-plus-icon").on("click", function () {
          $(this).toggleClass("minus");
          $(this)
            .parent()
            .find(".filter-menu")
            .slideToggle(function () {
              $(this)
                .next()
                .stop(true)
                .toggleClass("open", $(this).is(":visible"));
            });
        });

        $(".filter .js-drop").on("click", function () {
          $(this)
            .parent()
            .find(".ion-ios-arrow-down")
            .toggleClass("ion-ios-arrow-up");
          $(this)
            .parent()
            .find("ul")
            .slideToggle(function () {
              $(this)
                .next()
                .stop(true)
                .toggleClass("open", $(this).is(":visible"));
            });
          $(this)
            .parent()
            .find(".sidebar-product-list")
            .slideToggle(function () {
              $(this)
                .next()
                .stop(true)
                .toggleClass("open", $(this).is(":visible"));
            });
        });

        $(".checkout-page .js-drop").on("click", function () {
          $(this).toggleClass("active");

          $(this)
            .parent()
            .find(".filter-content")
            .slideToggle(function () {
              $(this)
                .next()
                .stop(true)
                .toggleClass("open", $(this).is(":visible"));
            });
        });
        // Product detail
        $(".js-close-tab").on("click", function () {
          $(this).removeClass("open");
          $(".detail-content").removeClass("active");
          $(".detail-tab").removeClass("open");
        });
        $(".js-tabs a").on("click", function () {
          $(".js-close-tab").addClass("open");
          $(".detail-tab").addClass("open");
          $(".detail-content").addClass("active");
        });
        if ($(".js-tabs > li").hasClass("active")) {
          $(".js-close-tab").addClass("open");
          $(".detail-tab").addClass("open");
          $(".detail-content").addClass("active");
        }

        // Product Grid
        $(".js-filter-menu li .js-plus-icon").on("click", function () {
          $(".js-filter-menu > li > a").toggleClass("active");
          $(this).toggleClass("minus");
          $(this)
            .parent()
            .find(".filter-menu")
            .slideToggle(function () {
              $(this)
                .next()
                .stop(true)
                .toggleClass("open", $(this).is(":visible"));
            });
        });
        // Open menu dropdown home 5
        $(".js-menubar li .icon-sub-menu").on("click", function () {
          $(this).toggleClass("up-icon");
          $(this)
            .parent()
            .find(".js-open-menu")
            .slideToggle("fast", function () {
              $(this)
                .next()
                .stop(true)
                .toggleClass("open", $(this).is(":visible"));
            });
        });
        // Open menu other page. Header-v2
        $(".js-menu").on("click", function () {
          $(this).toggleClass("active");
          $(".js-open-menu").toggleClass("open");
        });

        // Push menu home 5
        var menuLeft = $(".pushmenu-left");
        var menuHome6 = $(".menu-home5");
        var nav_list = $(".open-cart");
        var nav_click = $(".icon-pushmenu");
        nav_list.on("click", function (event) {
          event.stopPropagation();
          $(this).toggleClass("active");
          $("body").toggleClass("pushmenu-push-toright-cart");
          menuLeft.toggleClass("pushmenu-open");
          $(".container").toggleClass("canvas-container");
        });
        nav_click.on("click", function (event) {
          event.stopPropagation();
          $(this).toggleClass("active");
          $("body").toggleClass("pushmenu-push-toleft");
          menuHome6.toggleClass("pushmenu-open");
        });
        $(".wrappage").on("click", function () {
          $(this).removeClass("active");
          $("body")
            .removeClass("pushmenu-push-toright-cart")
            .removeClass("pushmenu-push-toleft");
          menuLeft.removeClass("pushmenu-open");
          menuHome6.removeClass("pushmenu-open");
        });
        $(".close-left").on("click", function () {
          $(this).removeClass("active");
          $("body").removeClass("pushmenu-push-toright-cart");
          menuLeft.removeClass("pushmenu-open");
        });
        $(".close-left").on("click", function () {
          $("body").removeClass("pushmenu-push-toleft");
          menuHome6.removeClass("pushmenu-open");
        });
        // SHOPPING CART Quantity increment buttons

        var quantitiy = 0;
        $(".js-plus").on("click", function (e) {
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          var quantity = parseInt($(".js-number").val(), 10);

          // If is not undefined

          $(".js-number").val(quantity + 1);

          // Increment
        });

        $(".js-minus").on("click", function (e) {
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          var quantity = parseInt($(".js-number").val(), 10);

          // If is not undefined

          // Increment
          if (quantity > 0) {
            $(".js-number").val(quantity - 1);
          }
        });
        // Js product single slider
        $(".js-click-product").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: ".js-product-slider",
          dots: false,
          focusOnSelect: true,
          infinite: true,
          arrows: false,
          vertical: true,
          responsive: [
            {
              breakpoint: 1367,
              settings: {
                vertical: false,
              },
            },
          ],
        });
        $(".js-product-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          asNavFor: ".js-click-product",
        });
        //SHOP LISTING FILTER
        // Price Slider
        if ($(".price-slider").length > 0) {
          $(".price-slider").slider({
            min: 100,
            max: 700,
            step: 10,
            value: [100, 400],
          });
        }
        //SHOP GRID
        $(".view-mode > a").on("click", function () {
          $(this).addClass("active").siblings().removeClass("active");

          if ($(this).hasClass("col2")) {
            $(".product-grid").addClass("product-grid-v2");
            $(".product-grid").removeClass("product-list");
          }
          if ($(this).hasClass("col")) {
            $(".product-grid").removeClass("product-grid-v2 product-list");
          }
          if ($(this).hasClass("list")) {
            $(".product-grid").addClass("product-list product-grid-v2");
          }
        });
        // Open zipcode
        $(".calculate").on("click", function () {
          $(this).next().slideToggle();
          $(this).toggleClass("active");
        });
        // Checkout : open login box
        $(".js-showlogin").on("click", function () {
          $(".js-openlogin").slideToggle();
          $(this).toggleClass("active");
        });
        // Checkout : open coupon
        $(".js-showcp").on("click", function () {
          $(".js-opencp").slideToggle();
          $(this).toggleClass("active");
        });
        //Open filter menu mobile
        $(".filter-collection-left > a").on("click", function () {
          $(".wrappage").addClass("show-filter");
        });
        $(document).bind("mouseup touchend", function (e) {
          var container = jQuery("#filter-sidebar");
          if (
            !container.is(e.target) && // if the target of the click isn't the container...
            container.has(e.target).length === 0
          ) {
            // ... nor a descendant of the container
            $(".wrappage").removeClass("show-filter");
          }
        });
        $(".close-sidebar-collection").click(function () {
          $(".wrappage").removeClass("show-filter");
        });

        // Scroll slider

        $(".scroll-down").on("click", function () {
          $("html, body").animate(
            { scrollTop: $("section#main-content").offset().top },
            "slow"
          );
          return false;
        });
        // Scroll to TOP
        $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
            $(".scroll_top").fadeIn();
          } else {
            $(".scroll_top").fadeOut();
          }
        });

        $(".scroll_top").on("click", function () {
          $("html, body").animate(
            {
              scrollTop: 0,
            },
            600
          );
          return false;
        });
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();

          if (scroll > 500) {
            $(".intro").hide();
            $(".scroll_down").hide();
          }
        });
        // scroll down
        $(".scroll_down").on("click", function (e) {
          e.preventDefault();
          $(".intro").hide();
          $(this).hide();
          return false;
        });

        // owl category
        $(".js-owl-cate").owlCarousel({
          margin: 30,
          autoplay: false,
          autoplayTimeout: 3000,
          loop: true,
          dots: false,
          nav: true,
          navText: [
            "<span class='fa fa-angle-left'></span>",
            "<span class='fa fa-angle-right'></span>",
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
              nav: false,
              dots: true,
            },
            1600: {
              items: 4,
              margin: 40,
              nav: false,
              dots: true,
            },
          },
        });
        $(".js-owl-team").owlCarousel({
          margin: 30,
          autoplay: false,
          autoplayTimeout: 3000,
          loop: true,
          dots: false,
          nav: true,
          navText: [
            "<span class='fa fa-angle-left'></span>",
            "<span class='fa fa-angle-right'></span>",
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
              margin: 40,
            },
          },
        });
        $(".js-owl-cate2").owlCarousel({
          margin: 30,
          autoplay: false,
          autoplayTimeout: 3000,
          loop: true,
          dots: true,
          nav: false,
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
              items: 3,
            },
            1600: {
              items: 3,
              margin: 40,
            },
          },
        });

        // owl brand
        $(".js-owl-brand").owlCarousel({
          margin: 30,
          autoplay: false,
          autoplayTimeout: 3000,
          loop: true,
          dots: false,
          nav: true,
          navText: [
            "<span class='fa fa-angle-left'></span>",
            "<span class='fa fa-angle-right'></span>",
          ],
          responsive: {
            0: {
              items: 1,
            },
            480: {
              items: 3,
            },
            1024: {
              items: 5,
            },
            1200: {
              items: 7,
            },
          },
        });
        $(".js-owl-brand2").owlCarousel({
          margin: 30,
          autoplay: false,
          autoplayTimeout: 3000,
          loop: true,
          dots: false,
          nav: true,
          navText: [
            "<span class='fa fa-angle-left'></span>",
            "<span class='fa fa-angle-right'></span>",
          ],
          responsive: {
            0: {
              items: 1,
            },
            480: {
              items: 3,
            },
            1024: {
              items: 4,
            },
            1200: {
              items: 6,
            },
          },
        });

        // product carousel
        $(".js-owl-product").owlCarousel({
          margin: 30,
          autoplay: true,
          autoplayTimeout: 3000,
          loop: true,
          dots: false,
          nav: true,
          navText: [
            "<span class='fa fa-angle-left'></span>",
            "<span class='fa fa-angle-right'></span>",
          ],
          responsive: {
            0: {
              items: 1,
            },
            480: {
              items: 2,
            },
            1024: {
              items: 2,
            },
            1200: {
              items: 3,
            },
          },
        });
        $(".js-owl-product2").owlCarousel({
          margin: 30,
          autoplay: false,
          autoplayTimeout: 3000,
          loop: true,
          dots: false,
          nav: true,
          navText: [
            "<span class='fa fa-angle-left'></span>",
            "<span class='fa fa-angle-right'></span>",
          ],
          responsive: {
            0: {
              items: 1,
            },
            480: {
              items: 2,
            },
            1200: {
              items: 3,
            },
            1600: {
              items: 3,
              margin: 40,
            },
          },
        });

        $(".js-owl-blog").owlCarousel({
          margin: 30,
          autoplay: false,
          autoplayTimeout: 3000,
          loop: true,
          dots: true,
          nav: true,
          navText: [
            "<span class='fa fa-angle-left'></span>",
            "<span class='fa fa-angle-right'></span>",
          ],
          responsive: {
            0: {
              items: 1,
            },
            480: {
              items: 2,
            },
            1200: {
              items: 3,
            },
            1600: {
              items: 3,
              margin: 40,
            },
          },
        });

        $(".js-quickview-slide  .slick-arrow").on("click", function () {
          $(this).addClass("active");
        });
        $(".js-owl-post").owlCarousel({
          nav: true,
          navText: [
            "<span class='fa fa-angle-left'></span>",
            "<span class='fa fa-angle-right'></span>",
          ],
          items: 1,
          dots: false,
        });
        $(".js-owl-quote").owlCarousel({
          nav: false,
          items: 1,
          dots: true,
          singleItem: true,
        });
        $(".js-oneitem").owlCarousel({
          nav: false,
          items: 1,
          dots: true,
          singleItem: true,
        });
        $(".js-oneitem2").owlCarousel({
          nav: false,
          items: 1,
          singleItem: true,
          dots: true,
        });
        // Instagram carousel
        $(".js-owl-instagram").owlCarousel({
          margin: 0,
          autoplay: true,
          autoplayTimeout: 3000,
          loop: true,
          nav: false,
          navText: ["", ""],
          dots: false,
          responsive: {
            0: {
              items: 1,
            },
            480: {
              items: 2,
            },
            1000: {
              items: 5,
            },
          },
        });

        $(".js-multiple-row2").slick({
          dots: true,
          arrows: false,
          slidesPerRow: 4,
          rows: 2,
          responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesPerRow: 3,
              },
            },
            {
              breakpoint: 813,
              settings: {
                slidesPerRow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                prevArrow:
                  '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
                nextArrow:
                  '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
                infinite: true,
                dots: false,
                slidesPerRow: 1,
                rows: 1,
              },
            },
          ],
        });

        $(".js-multiple-row").slick({
          dots: true,
          arrows: false,
          slidesPerRow: 3,
          rows: 2,
          responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesPerRow: 3,
              },
            },
            {
              breakpoint: 813,
              settings: {
                slidesPerRow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                prevArrow:
                  '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
                nextArrow:
                  '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
                infinite: true,
                dots: false,
                slidesPerRow: 1,
                rows: 1,
              },
            },
          ],
        });
        $(".js-multiple-row3").slick({
          dots: true,
          arrows: false,
          slidesPerRow: 2,
          rows: 2,
          responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesPerRow: 2,
              },
            },
            {
              breakpoint: 813,
              settings: {
                slidesPerRow: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                prevArrow:
                  '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
                nextArrow:
                  '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
                infinite: true,
                dots: false,
                slidesPerRow: 1,
                rows: 1,
              },
            },
          ],
        });

        // js slick one item homepage 3

        // Slider collectiion full
        var $status = $(".pagingInfo");
        var $slickElement = $(".js-slider-collectionf");
        $slickElement.on(
          "init reInit afterChange",
          function (event, slick, currentSlide, nextSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text("0" + i);
          }
        );
        $(".js-slider-collectionf").on(
          "afterChange",
          function (event, slick, currentSlide) {
            $(".slick-active").append('<div class="pagingInfo"');
          }
        );
        $(".js-slider-collectionf").slick({
          autoplay: true,
          dots: true,
          centerMode: true,
          infinite: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          appendDots: $(".post-fade"),
          dotsClass: "custom_paging",
          customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a class="dots"></a>';
          },
        });

        // Slider collectiion full
        var $status = $(".pagingInfo");
        var $slickElement = $(".js-slider-home4");
        $slickElement.on(
          "init reInit afterChange",
          function (event, slick, currentSlide, nextSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text("0" + i);
          }
        );
        $(".js-slider-home4").on(
          "afterChange",
          function (event, slick, currentSlide) {
            $(".slick-active").append('<div class="pagingInfo"');
          }
        );
        $(".js-slider-home4").slick({
          autoplay: true,
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          appendDots: $(".post-fade"),
          dotsClass: "custom_paging",
          customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a class="dots"></a>';
          },
        });
        // Slider collection detail
        $(".js-slider-collectiond").slick({
          autoplay: true,
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          appendDots: $(".post-fade"),
          dotsClass: "custom_paging",
          customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a class="dots"></a>';
          },
        });
        //  Show more

        // slider home 3 and home 2
        $(".js-slider-3items").slick({
          autoplay: false,
          infinite: false,
          arrows: false,
          dots: true,
        });
        // js blogpost
        $(".js-single-post").slick({
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        });
        // js quickview
        $(".js-quickview-slide").slick({
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          prevArrow:
            '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
          nextArrow:
            '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
          dots: true,
        });
        // slider home 1
        $(".js-slider-home2").slick({
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: true,
          prevArrow:
            '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
          nextArrow:
            '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        });

        // JS owl team Carousel
        $(".js-owl-test").owlCarousel({
          items: 1,
          singleItem: true,
          nav: true,
          navText: [
            "<span class='fa fa-angle-left'></span>",
            "<span class='fa fa-angle-right'></span>",
          ],
          dots: false,
        });
        // Scroll slide homepage 2

        $(".slide-scroll").on("click", function () {
          $("html, body").animate(
            { scrollTop: $("section#contenthome2").offset().top },
            "slow"
          );
          return false;
        });
        var handleScrollTop = function (e) {
          e.preventDefault();
          $("html, body").animate({ scrollTop: 0 }, 250);
        };
        // Footer to top
        $("footer > .scroll-top").on("click", function (e) {
          handleScrollTop(e);
        });

        $(".backto.vow-top").on("click", function (e) {
          handleScrollTop(e);
        });
        // Read more
        $(function () {
          var $header = $(".entry-content");
          var $half = parseInt($(".img-cal").height()) / 2;
          var $window = $(window)
            .on("resize", function () {
              var height = $header.height() - $half;
              $header.height(height);
            })
            .trigger("resize"); //on page load
        });
        $(function () {
          var $el, $ps, $up, $p, totalHeight;

          $(".entry-content .btn-show").click(function () {
            // IE 7 doesn't even get this far. I didn't feel like dicking with it.

            totalHeight = 0;

            $el = $(this);
            $p = $el.parent();
            $up = $p.parent();
            $ps = $up.find(".e-text");

            // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
            $ps.each(function () {
              totalHeight += $(this).outerHeight();
              // FAIL totalHeight += $(this).css("margin-bottom");
            });

            $up
              .css({
                // Set height to prevent instant jumpdown when max height is removed
                height: $up.height(),
                "max-height": 9999,
                "margin-bottom": 30,
              })
              .animate({
                height: totalHeight,
              });

            // fade out read-more
            $up.removeClass("active");
            $p.fadeOut();

            // prevent jump-down
            return false;
          });
        });
      });

      /* Promotion Countdown */
      jQuery(document).ready(function ($) {
        $.fn.ENGO_CountDown = function (options) {
          return this.each(function () {
            // get instance of the ENGO_CountDown.
            new $.ENGO_CountDown(this, options);
          });
        };
        $.ENGO_CountDown = function (obj, options) {
          var ddiff, gsecs;
          this.options = $.extend(
            {
              autoStart: true,
              LeadingZero: true,
              DisplayFormat:
                "<div><span>%%D%%</span> Days</div><div><span>%%H%%</span> Hours</div><div><span>%%M%%</span> Mins</div><div><span>%%S%%</span> Secs</div>",
              FinishMessage: "Expired",
              CountActive: true,
              TargetDate: null,
            },
            options || {}
          );
          if (
            this.options.TargetDate == null ||
            this.options.TargetDate == ""
          ) {
            return;
          }
          this.timer = null;
          this.element = obj;
          this.CountStepper = -1;
          this.CountStepper = Math.ceil(this.CountStepper);
          this.SetTimeOutPeriod =
            (Math.abs(this.CountStepper) - 1) * 1000 + 990;
          var dthen = new Date(this.options.TargetDate);
          var dnow = new Date();
          if (this.CountStepper > 0) {
            ddiff = new Date(dnow - dthen);
          } else {
            ddiff = new Date(dthen - dnow);
          }
          gsecs = Math.floor(ddiff.valueOf() / 1000);
          this.CountBack(gsecs, this);
        };
        $.ENGO_CountDown.fn = $.ENGO_CountDown.prototype;
        $.ENGO_CountDown.fn.extend = $.ENGO_CountDown.extend = $.extend;
        $.ENGO_CountDown.fn.extend({
          calculateDate: function (secs, num1, num2) {
            var s = (Math.floor(secs / num1) % num2).toString();
            if (this.options.LeadingZero && s.length < 2) {
              s = "0" + s;
            }
            return "<b>" + s + "</b>";
          },
          CountBack: function (secs, self) {
            var DisplayStr;
            if (secs < 0) {
              self.element.innerHTML =
                '<div class="labelexpired"> ' +
                self.options.FinishMessage +
                "</div>";
              return;
            }
            clearInterval(self.timer);
            DisplayStr = self.options.DisplayFormat.replace(
              /%%D%%/g,
              self.calculateDate(secs, 86400, 100000)
            );
            DisplayStr = DisplayStr.replace(
              /%%H%%/g,
              self.calculateDate(secs, 3600, 24)
            );
            DisplayStr = DisplayStr.replace(
              /%%M%%/g,
              self.calculateDate(secs, 60, 60)
            );
            DisplayStr = DisplayStr.replace(
              /%%S%%/g,
              self.calculateDate(secs, 1, 60)
            );
            self.element.innerHTML = DisplayStr;
            if (self.options.CountActive) {
              self.timer = null;
              self.timer = setTimeout(function () {
                self.CountBack(secs + self.CountStepper, self);
              }, self.SetTimeOutPeriod);
            }
          },
        });

        function init_countdown() {
          /** Countdown **/
          $('[data-countdown="countdown"]').each(function (index, el) {
            var $this = $(this);
            var $date = $this.data("date").split("-");
            $this.ENGO_CountDown({
              TargetDate:
                $date[0] +
                "/" +
                $date[1] +
                "/" +
                $date[2] +
                " " +
                $date[3] +
                ":" +
                $date[4] +
                ":" +
                $date[5],
              // DisplayFormat:"<li><span>%%D%% :</span></li><li><span>%%H%% :</span></li><li><span>%%M%% :</span></li><li><span>%%S%%</span></li>",
              DisplayFormat:
                "<ul><li><p>%%D%% </p><span>days</span></li><li><p>%%H%%</p><span>Hours</span></li><li><p>%%M%% </p><span>Min</span></li><li><p>%%S%%</p><span>Sec</span></li></ul>",
              FinishMessage: "Expired",
            });
          });
        }
        init_countdown();
      });
    },
  },
};
</script>

<style>
.mymodal {
  visibility: hidden;
  transition: all 0.4s;
  opacity: 0;
}
.mymodal.open {
  visibility: visible;
  opacity: 1;
}

.mymodal,
.mymodal-overlay {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 100;
}

.mymodal,
.mymodal-card,
.mymodal-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mymodal-content {
  overflow: auto;
  flex-grow: 1;
}

.mymodal-overlay {
  background: rgba(36, 36, 36, 0.562);
  /* backdrop-filter: blur(3.2px);
-webkit-backdrop-filter: blur(3.2px); */
  translate: all 2s;
}

.mymodal-body {
  z-index: 101;
  margin: auto;
  max-height: calc(100vh - 1rem);
  max-width: calc(100vw - 1rem);
  border-radius: 10px;
  overflow: hidden;
  width: 500px;
  height: 200px;
  background: white;
}

.mymodal-header,
.mymodal-content,
.mymodal-footer {
  padding: 1rem;
}

.mymodal-header {
  background: rebeccapurple;
  text-transform: capitalize;
  font-size: 1.25rem;
  color: white;
  font-weight: bold;
}

.mymodal-footer {
  display: flex;
  justify-content: space-between;
}

.h-512 {
  max-height: 512px !important;
}
.h-512::-webkit-scrollbar {
  background-color: rgba(255, 255, 255, 0.349) 255, 255, 0;
  height: 5px;
  width: 5px;
}
/* .row::-webkit-scrollbar-track {background-color:#fff} */
.h-512::-webkit-scrollbar-thumb {
  background-color: #b4b4b42c;
  border-radius: 12px;
}
/* .blog-comment-content{
    background: #e2e2e225;
    transition: all 0.3s ease-in-out;
} */
/* .blog-comment-content:hover{
    box-shadow:0px 0px 18px #273c7518 ;
        transition: all 0.3s ease-in-out;
} */
.bg-5 {
  background: -webkit-linear-gradient(
    to right,
    #f0f0f0,
    #f0f0f0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f0f0f0, #f0f0f0);
}
</style>