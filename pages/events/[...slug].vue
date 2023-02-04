<template>
  <div class="page-title-wrap typo-white">
    <div class="page-title-wrap-inner section-bg-img" :data-bg="content.image">
      <span class="theme-overlay"></span>
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <div class="page-title-inner">
              <div id="breadcrumb" class="breadcrumb margin-bottom-10">
                <a href="/" class="theme-color">Home</a>
                <span class="current">{{content.title}}</span>
              </div>
              <h1 class="page-title mb-0">{{content.title}}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <StoryblokComponent v-for="blok in content.body" :blok="blok" />
</template>

<script setup>
let { slug } = useRoute().params

const router = useRouter()

if (slug.length > 1) slug = slug.join('/')

const storyblokApi = useStoryblokApi()
let json
try {
  const {data} = await storyblokApi.get('cdn/stories/events/' + slug, {version: 'draft'})
  json = data
} catch(e){
  router.push("/404")
}

const content =  json.story.content
const meta = content.meta[0]

useHead({
  title: meta.title,
  meta: [
    {
      name: "charset",
      content: "UTF-8"
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
