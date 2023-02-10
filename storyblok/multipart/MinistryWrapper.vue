<template>
  <section id="ministries-section" class="ministries-section pad-bottom-70">
    <div class="container">
      <div class="ministries-main-wrap ministries-grid">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-4" v-for="item in blok.ministries">
                <div class="ministries-box-style-2">
                  <div class="ministries-inner">
                    <div class="ministries-thumb">
                      <img class="img-fluid squared w-100" :src="item.background"  style="width: 360px; height: 270px" width="360" height="240" alt="image">
                    </div>
                    <div class="ministries-icon-img-wrap">
                      <img decoding="async" :src="'images/ministries/'+item.icon" class="img-fluid ministries-icon-img" width="80" height="80" alt="icon">
                    </div>
                    <div class="ministries-content pad-lr-30 pad-top-20">
                      <div class="ministries-title margin-bottom-15">
                        <h4 class="text-center"><a href="#" class="ministries-link"> {{item.title}}</a></h4>
                      </div>
                      <div class="ministries-desc text-center">
                        <div v-html="marked(item.description)"></div>
                      </div>
                      <div class="ministries-link margin-top-15 margin-bottom-30 text-center">
                        <a v-if="item.button_name" target="_blank" :href="item.button_link" class="link">{{item.button_name}}</a>
                      </div>
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
import {marked} from 'marked';
const props = defineProps({ blok: Object });
</script>

<style scoped>

</style>
