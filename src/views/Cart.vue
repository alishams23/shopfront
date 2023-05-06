<template>
  <div>
    <form class="container container-240" @submit.prevent="pay">
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
      </svg>
      <div class="border w-100 my-5 rounded-10 d-flex flex-column align-items-center">
        <div class="d-flex justify-content-around w-100 my-5">
          <div class="d-flex flex-column align-items-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="grey" class="bi bi-wallet2 my-3"
                viewBox="0 0 16 16">
                <path
                  d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
              </svg>
            </div>
            <p class="fw-bold py-3" style="color: grey">پرداخت</p>
          </div>

          <div class="d-flex flex-column align-items-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" class="bi bi-postcard my-3"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5ZM10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM13 8h-2V6h2v2Z" />
              </svg>
            </div>
            <p class="fw-bold py-3" style="color: red">زمان و نحوه ارسال</p>
          </div>
        </div>
      </div>
      <div class="w-100 border rounded-10 p-4 rtl">
        <div class="row px-3">
          <div class="col-6">
            <label class="pt-4">استان</label>
            <input class="form-control border-10 my-2" v-model="state" required />
          </div>
          <div class="col-6">
            <label class="pt-4">شهر</label>
            <input class="form-control border-10 my-2" v-model="city" required />
          </div>
        </div>
        <div class="row px-3">
          <div class="col-4">
            <label class="pt-4">خیابان</label>
            <input class="form-control border-10 my-2" v-model="street" required />
          </div>
          <div class="col-4">
            <label class="pt-4">کوچه</label>
            <input class="form-control border-10 my-2" v-model="alley" required />
          </div>
          <div class="col-4">
            <label class="pt-4">کدپستی</label>
            <input class="form-control border-10 my-2" v-model="zipCode" required />
          </div>
        </div>

        <div class="rtl px-5 mt-4 rounded-10 alert alert-warning d-flex align-items-center" role="alert">
          <svg class="bi flex-shrink-0 mx-4" width="24" height="24" role="img" aria-label="Warning:">
            <use xlink:href="#exclamation-triangle-fill"></use>
          </svg>
          <div>زمان ارسال بین 5 تا 10 روز میباشد</div>
        </div>
      </div>
      <div v-if="loading == true" class="d-flex justify-content-canter flex-row pt-5">
        <div class="col-12 text-center">
          <img src="@/assets/loading.gif" height="30" />
        </div>
      </div>

      <div class="checkout" v-if="loading == false">
        <div class="row">
          <div class="col-md-8 col-sm-12 col-xs-12">
            <div class="shopping-cart bd-7">
              <div class="cmt-title text-center rounded-10 abs">
                <h1 class="page-title px-3 rounded-10">سبد خرید</h1>
              </div>
              <div class="table-responsive">
                <table class="table cart-table">
                  <tbody v-if="data1 != null">
                    <tr class="item_cart" v-for="(data, index) in data1.order" v-bind:key="data">
                      <td class="product-name flex align-center" style="border: none !important">
                        <a href="#" class="btn-del"><i class="ion-ios-close-empty"></i></a>
                        <router-link v-bind:to="`/product/${data.product.id}`" class="product-img">
                          <img v-bind:src="data.product.image[0].photo" class="cover w-100 h-100" />
                        </router-link>
                        <div class="product-info">
                          <router-link v-bind:to="`/product/${data.product.id}`" title="">{{ data.product.title }}
                          </router-link>
                        </div>
                      </td>
                      <td class="bcart-quantity single-product-detail">
                        <div class="single-product-info">
                          <div class="e-quantity">
                            <div class="border px-3 py-2 rounded-10 text-center">
                              {{ data.count }}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="total-price">
                        <p class="price">
                          {{
                              (data.product.price -
                                (data.product.price * data.product.discount) /
                                100) *
                              data.count
                          }}
                        </p>
                      </td>
                      <td class="total-price">
                        <div class="pointer">
                          <div v-if="data.product.amount >= 1">
                            <div @click="addToCard(data.product, index)" v-if="data.count < data.product.amount">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"
                                class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path
                                  d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <div @click="deleteToCard(data.product, index)">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black"
                                class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path
                                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr v-if="data1.order.length == 0" class="text-center">
                      سبد خرید خالی میباشد
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <div class="cart-total bd-7">
              <div class="cmt-title text-center abs">
                <h1 class="page-title rounded-10 v3">اطلاعات سبد شما</h1>
              </div>
              <div class="table-responsive">
                <table class="shop_table">
                  <tbody>
                    <tr class="cart-subtotal">
                      <th class="fs-5">جمع اقلام شما</th>
                      <td v-if="data1 != null">{{ products }}</td>
                    </tr>

                    <tr class="order-total">
                      <th class="fs-5">جمع خرید شما</th>
                      <td>{{ total }}</td>
                      تومان
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="cart-total-bottom">
                <button v-if="loadingSubmit == false" type="submit" class="btn btn-gradient rounded-10">
                  پرداخت
                </button>
                <div v-if="loadingSubmit == true" class="d-flex justify-content-canter flex-row pt-5">
                  <div class="col-12 text-center">
                    <img src="@/assets/loading.gif" height="30" />
                  </div>
                </div>
              </div>

              <div class="cart-total-bottom pp-checkout">
                <a href="#"><img src="img/checkoutpp.jpg" alt="" class="img-responsive" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <sms />
  </div>
</template>

<script>
import axios from "axios";
import sms from '../components/sms.vue'
export default {
  components: { sms, },
  data() {
    return {
      data1: null,
      total: 0,
      products: 0,
      loading: true,
      state: null,
      city: null,
      alley: null,
      street: null,
      zipCode: null,
      loadingSubmit: false,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.loading = true;
      let mydata = await axios
        .get("https://redico.ir/api/shop/ordersList/", {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${this.$store.state.token}`,
          },
        })
        .then((response) => {
          this.data1 = response.data[0];
          this.state = response.data[0]["state"];
          this.city = response.data[0]["city"];
          this.alley = response.data[0]["alley"];
          this.street = response.data[0]["street"];
          this.zipCode = response.data[0]["zipCode"];
        });
      for (let index = 0; index < this.data1.order.length; index++) {
        this.total +=
          (this.data1.order[index].product.price -
            (this.data1.order[index].product.price *
              this.data1.order[index].product.discount) /
            100) *
          this.data1.order[index].count;

        this.products += this.data1.order[index].count
      }
      this.loading = false;
    },
    async addToCard(data, index) {
      try {
        await axios
          .get(`https://redico.ir/api/shop/order_add/${data.id}/`, {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${this.$store.state.token}`,
            },
          })
          .then((response) => {
            this.getData();
          });
      } catch (error) { }
    },
    async deleteToCard(data, index) {
      try {
        await axios
          .get(`https://redico.ir/api/shop/order_remove/${data.id}/`, {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${this.$store.state.token}`,
            },
          })
          .then((response) => {
            this.getData();
          });
      } catch (error) { }
    },
    async pay() {
      this.loadingSubmit = true;
      await axios
        .put(
          `https://redico.ir/api/shop/Address_order_update/${this.data1.id}/`,
          {
            state: this.state,
            city: this.city,
            alley: this.alley,
            street: this.street,
            zipCode: this.zipCode,
          },
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${this.$store.state.token}`,
            },
          }
        )
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        })
        .then((response) => {
          axios
            .get(
              `https://redico.ir/api/wallet/Pay_api/?pk=${this.data1.id}`,

              {
                headers: {
                  "Content-type": "application/json",
                  Accept: "application/json",
                  Authorization: `Token ${this.$store.state.token}`,
                },
              }
            )
            .catch(function (error) {
              if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              }
            })
            .then((response) => {
              window.location.href = response.data.website;
            });
        });
    },
  },
};
</script>

<style>
.btn-gradient {
  background: linear-gradient(to right, #001aff, #0c0074) !important;
}

.rounded-10 {
  border-radius: 10px !important;
}
</style>
