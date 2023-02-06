<template>

  <div class="page-title-wrap typo-white">
    <div class="page-title-wrap-inner section-bg-img" :data-bg="blok.image">
      <span class="theme-overlay"></span>
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <div class="page-title-inner">
              <div id="breadcrumb" class="breadcrumb margin-bottom-10">
                <a href="/" class="theme-color">Startseite</a>
                <span class="current">{{blok.title}}</span>
              </div>
              <h1 class="page-title mb-0">{{blok.title}}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-editable="blok">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
.page-title-wrap-inner {
  min-height: 370px;
}

@media only screen and (min-width: 717px) {
  .page-title-inner {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 120%);
  }
}

</style>
