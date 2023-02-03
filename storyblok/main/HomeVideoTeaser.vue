<template>
  <section id="get-quote-section" class="get-quote-section section-bg-img" :data-bg="blok.image">
    <div style='position: absolute;width: 100%;height: 100%;background: #0000009e; z-index: 1; top: 0; left:0'></div>
    <div class="container" style="z-index: 2">
      <!-- Row -->
      <div class="row text-center" style="position: relative;z-index: 2">
        <!-- Col -->
        <div class="col-md-12">
          <div class="get-quote-1">
            <!-- video wrap -->
            <div class="video-wrap wrap-stretch relative margin-bottom-50" style="z-index: 2"><!-- video details -->
              <div class="video-wrap-details">
                <!-- video button -->
                <div class="video-play-btn text-center">
                  <div class="video-icon">
                    <a class="popup-youtube box-shadow1" :href="blok.video_link" >
                      <i :class="blok.icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <!-- video details End-->
            </div>
            <!-- video wrap end -->
            <div class="title-wrap mb-0" style="z-index: 2">
              <div class="section-title typo-white margin-bottom-40">
                <h2 class="title mb-3">{{blok.title}}</h2>
                <span class="dancing-text">{{blok.subtitle}}</span>
              </div>
              <div class="get-quote-btn" style="z-index: 2">
                <a class="btn btn-default" :href="blok.button_link" :title="blok.button_link">{{blok.button_name}}</a>
              </div>
            </div>
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
defineProps({ blok: Object });
</script>

<style scoped>
</style>
