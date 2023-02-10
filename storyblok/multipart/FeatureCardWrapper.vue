<template>
  <section id="feature-section" class="feature-section padding-top-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-wrap">
            <div class="section-title text-center">
              <span class="sub-title theme-color text-uppercase">{{blok.subtitle}}</span>
              <h2 class="section-title margin-top-5">{{blok.title}}</h2>
              <span class="border-bottom center"></span>
            </div>
          </div>
        </div>

        <div class="col-lg-4" v-for="elem  in blok.cards">
          <div class="feature-box-wrap f-box-style-4 relative">
            <div class="feature-box-details">
              <div class="feature-img margin-bottom-25">
                <img class="img-fluid" :src="elem.image" width="1280" height="853" alt="feature img">
              </div>
              <div class="feature-icon mb-1">
                <span class="theme-color b-radius-50" :class="elem.icon"></span>
              </div>
              <div class="feature-content">
                <div class="feature-title text-center relative margin-bottom-10">
                  <h5>{{elem.title}}</h5>
                </div>
                <p class="mb-0 text-center">{{elem.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
let props = defineProps({ blok: Object });
</script>

<style scoped>
.padding-top-0{
  padding-top: 0 !important;
}
</style>
