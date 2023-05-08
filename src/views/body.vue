<template>
  <div>
    <div>
<Section1 />
<Section2 />
<Section3 />
<Section4 />
<Section5 />
<Section6 />

    </div>
    
  </div>
</template>

<script>
import Section1 from "../components/section1.vue" 
import Section2 from "../components/section2.vue" 
import Section3 from "../components/section3.vue" 
import Section4 from "../components/section4.vue" 
import Section5 from "../components/section5.vue" 
import Section6 from "../components/section6.vue" 
import Section7 from "../components/section7.vue" 
import Footer from "../components/footer.vue" 

export default {
components:{Section1,Section2,Section3,Section4,Section5,Footer,Section6,Section7},mounted(){
 
}
}
</script>


<style>
.body-bg {
  background: #f0f0f1;
}
.body-bg2 {
  background: #ff2146;
  /* max-height: 540px; */
}
.h-469 {
  height: 469px;
}

.rounded-20 {
  border-radius: 20px;
}
.zoom-out {
  transition: transform 0.5s;
}

.zoom-out:hover {
  transform: scale(0.96);
}
.zoom-in {
  transition: transform 0.5s;
}
.zoom-in:hover {
  transform: scale(1.2);
}

.h-213 {
  height: 225px !important;
}
.cover {
  object-fit: cover;
}
.owl-dots{
  background: white;
}
/* --------------------------------------------------------- */

.row::-webkit-scrollbar {background-color:rgba(255, 255, 255, 0);height:12px}
/* .row::-webkit-scrollbar-track {background-color:#fff} */
.row::-webkit-scrollbar-thumb {background-color:#babac0;border-radius:12px}
</style>