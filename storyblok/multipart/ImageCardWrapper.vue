<template>

  <section id="contact-section" class="contact-section pad-bottom-none">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-lg-0 mb-4" v-for="(item, index) in blok.cards" :class="index !== blok.cards.length ? 'mb-lg-0 mb-4' : ''">
          <div class="div-bg-img b-radius-20 relative" :data-bg="item.image">
            <div style='position: absolute;width: 100%;height: 100%;background: #0000009e; z-index: 1; top: 0; left:0; border-radius: 20px'></div>
            <div class="f-box c-page text-center typo-white" style="z-index: 2;position: relative;">
              <div class="feature-icon margin-bottom-10">
                <i :class="item.icon"></i>
              </div>
              <div class="feature-content">
                <div class="feature-title">
                  <h5 class="mb-2">{{item.title}}</h5>
                </div>
                <p class="mb-0">{{item.info}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br><br>
</template>

<script setup>
let props = defineProps({ blok: Object });
</script>

<style scoped>

</style>
