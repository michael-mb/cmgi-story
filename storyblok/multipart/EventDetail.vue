<template>
  <div class="container event-details-wrap">
    <div class="event-info pad-bottom-30">
      <h4>{{blok.title}}</h4>
      <p class="" v-for="item in blok.item">
        <span class="event-subtitle"><strong>{{item.title}} : </strong></span> <span class="event-organizer-designation"> {{item.value}}</span>
      </p>

    </div><!-- .event-info -->
    <!-- contact-form-7 -->
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>

<style scoped>

</style>
