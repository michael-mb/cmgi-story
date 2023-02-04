<template>
  <section id="single-event" class="single-event">
    <div class="container">
      <div class="single-event-wrap">
        <h1 class="margin-bottom-15"><span class="theme-color">{{blok.title}}</span></h1>
        <br>
        <div class="font-weight-medium margin-bottom-25 " v-html="marked(blok.text)"></div>
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
