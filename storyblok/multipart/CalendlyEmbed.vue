<template>
  <section v-editable="blok" class="calendly-section pad-top-60 pad-bottom-60">
    <div class="container">
      <h2 v-if="blok.title" class="text-center margin-bottom-30">
        <span class="theme-color">{{ blok.title }}</span>
      </h2>
      <div
        class="calendly-inline-widget"
        :data-url="blok.url"
        :style="{ minWidth: '320px', height: widgetHeight }"
      ></div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })

const widgetHeight = computed(() => {
  const h = Number(props.blok?.height)
  return (Number.isFinite(h) && h > 0 ? h : 700) + 'px'
})

useHead({
  script: [
    {
      src: 'https://assets.calendly.com/assets/external/widget.js',
      async: true,
    },
  ],
})
</script>
