<template>

  <section id="section-about" class="section-about pad-top-90">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 align-self-center">
          <div class="about-wrap relative">
            <div class="about-wrap-inner">
              <div class="about-wrap-details">
                <div class="text-center">
                  <div class="about-img bf-pattern mb-5 mb-xl-0">
                    <img :src="blok.image" class="" alt="about-img">
                  </div>
                  <!-- .col -->
                </div>
              </div>
              <!-- about details End-->
            </div>
          </div>
          <!-- about wrap end -->
        </div>
        <!-- .col -->
        <!-- Col -->
        <div class="col-xl-6 px-3 ps-xl-0">
          <div class="title-wrap margin-bottom-30">
            <div class="section-title">
              <span class="sub-title theme-color text-uppercase">{{blok.theme}}</span>
              <h2 class="section-title margin-top-5">{{blok.title}}</h2>
              <span class="border-bottom"></span>
            </div>
            <div class="pad-top-15">
              <p class="margin-bottom-20">{{blok.common_description}}</p>
              <p class="styled-text">{{blok.curved_description}}</p>
            </div>
          </div>
          <div class="row">
            <!-- Feature Box -->

            <div class="col-md-6" v-for="item in blok.cases">
              <div class="feature-box-wrap f-box-style-1 mb-md-0 mb-sm-4 relative">
                <div class="feature-box-details">
                  <div class="feature-icon margin-bottom-25">
                    <span class="b-radius-50 d-block" :class="item.icon"></span>
                  </div>
                  <div class="feature-content">
                    <div class="feature-title relative margin-bottom-15">
                      <h4>{{item.title}}</h4>
                    </div>
                    <p class="mb-0">{{item.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="blok.button_text" class="button-section margin-top-35">
            <a class="btn btn-default" :href="blok.button_link" :title="blok.button_text">{{blok.button_text}}</a>
          </div>
        </div>
        <!-- Col -->
      </div>
      <!-- Row -->
    </div>
    <!-- Container -->
  </section>
</template>

<script setup>
let props = defineProps({ blok: Object });
</script>

<style scoped>

</style>
