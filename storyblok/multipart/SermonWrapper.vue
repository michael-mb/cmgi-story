<template>
  <section id="section-sermon" class="sermon-section">
    <div class="container">
      <div class="sermon-main-wrap sermon-grid sermon-grid-2">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-md-4" v-for="item in blok.sermons">
                <div class="sermon-inner mb-5">
                  <div class="sermon-thumb">
                    <img :src="item.image" class="img-fluid" style="width: 360px; height: 281px" alt="sermon-img" />
                  </div>
                  <div class="sermon-details relative">
                    <div class="sermon-play-list margin-bottom-20">
                      <ul>
                        <li>
                          <a v-if="item.video_link" :href="item.video_link" class="popup-video" title="Video"><i class="ti-control-play"></i></a>
                        </li>
                        <li>
                          <a v-if="item.pdf" :href="item.pdf" class="sermon-pdf" title="PDF" target="_blank"><i class="ti-book"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div class="sermon-title">
                      <h4 class="margin-bottom-10">{{item.title}}</h4>
                    </div>
                    <div class="sermon-info mt-2 pb-1">
                      <ul>
                        <li>
                          <span class="title">Predigt von: </span> {{item.by}}
                        </li>
                        <li>
                          <span class="title">Categories:</span> <a href="#">{{item.categories}}</a>
                        </li>
                        <li class="ms-2">
                          <a href="#"><i class="ti-time me-2"></i>{{item.date}}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

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

</style>
