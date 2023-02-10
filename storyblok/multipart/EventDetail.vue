<template>
  <div class="container event-details-wrap">
    <div class="event-info pad-bottom-30">
      <h4>{{blok.title}}</h4>
      <p class="" v-for="item in blok.item">
        <span class="event-subtitle"><strong>{{item.title}} : </strong></span>
        <a :href="item.value" v-if="item.is_link" class="event-organizer-designation"> {{item.value}}</a>
        <span v-else class="event-organizer-designation"> {{item.value}}</span>
       </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>

<style scoped>

</style>
