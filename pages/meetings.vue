<script setup>
const story = await useAsyncStoryblok('meetings', { version: 'draft' })
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<style scoped>

</style>
