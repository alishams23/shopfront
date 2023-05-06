import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import "@vueform/slider/themes/default.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import "./assets/css/slick.css"
import "./assets/css/slick-theme.css"
import "./assets/css/style.css"
import "./assets/css/owl.carousel.min.css"
import "./assets/css/owl.theme.default.min.css"
import "./assets/css/WebFonts/css/fontiran.css"
import "./assets/css/WebFonts/css/style.css"





import "./assets/js/jquery.js"
import "./assets/js/slick.js"
 
// import "./assets/js/main.js"
// import "owl.carousel";
// import "./assets/js/owl.carousel.min.js"

window.$ = window.jQuery = require('jquery');
let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;
createApp(App).use(store).use(router).mount('#app')