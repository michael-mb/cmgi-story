<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' })

if(story){
  const meta = story.value.content.meta[0]

  useHead({
    title: meta.title,

    meta: [
      {
        name: "charset",
        content: "UTF-8"
      },
      {
        name: "google-site-verification",
        content: "ov4VVYYOkPhs5XbORs0sbTDbYZgzu4QPIaOZsgyWCiQ"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        name: "description",
        content: meta.description
      },
      {
        name: "keywords",
        content: meta.keywords
      },
      {
        name: "author",
        content: meta.author
      },
    ]
  })
}
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
