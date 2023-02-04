<template>
  <MobileHeader/>
  <div class="page-wrapper">
    <div class="page-wrapper-inner">
      <Header/>
      <slot/>
      <CarrouselWrapperDown v-if="carousel" :blok="carousel" />
    </div>
  </div>
  <Footer/>
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/', {
  version: 'draft',
  starts_with : 'readmore'
})

const carousel = ref(null)

if(data)
  carousel.value  = data.stories[0].content.caroussel[0]

</script>

<style scoped>

</style>
