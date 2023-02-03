<template>
  <section id="team-section" class="team-section pad-top-95 pad-bottom-90">
    <div class="container">
      <!-- Row -->
      <div class="row">
        <div class="offset-md-2 col-md-8">
          <div class="title-wrap text-center">
            <div class="section-title">
              <span class="sub-title theme-color text-uppercase">{{blok.category}}</span>
              <h2 class="section-title margin-top-5">{{blok.title}}</h2>
              <span class="border-bottom center"></span>
            </div>
          </div>
        </div>
        <!--Team Main Slider-->
        <div v-html="html"/>
      </div>
    </div>

  </section>
</template>

<script setup>
let props = defineProps({ blok: Object });

const html = ref("")
html.value += "<div class=\"owl-carousel team-main-wrapper\"\n" +
    "             data-loop=\"1\" data-nav=\"0\"\n" +
    "             data-dots=\"1\" data-autoplay=\"1\"\n" +
    "             data-autoplaypause=\"1\" data-autoplaytime=\"5000\"\n" +
    "             data-smartspeed=\"1000\" data-margin=\"30\"\n" +
    "             data-items=\"3\" data-items-tab=\"2\"\n" +
    "             data-items-mob=\"1\">"

props.blok.team.forEach(elem => {
  html.value += "          <div class=\"item\">\n" +
      "            <div class=\"team-style-1\">\n" +
      "              <div class=\"team-inner margin-bottom-20\">\n" +
      "                <div class=\"team-thumb mb-0 relative\">\n" +
      "                  <img src=\" "+ elem.image +"\" class=\"img-fluid thumb w-100\" style='height: 350px' width=\"480\" height=\"485\" alt=\"team-img\" />\n" +
      "                </div>\n" +
      "                <div class=\"team-details text-center pad-20\">\n" +
      "                  <div class=\"team-name\">\n" +
      "                    <h3 class=\"mb-0\"><a href=\"#\" class=\"client-name typo-white\">" +  elem.name +"</a></h3>\n" +
      "                  </div>\n" +
      "                  <div class=\"team-designation\"><p class=\"mb-0\">" + elem.occupation +"</p></div>\n" +
      "                </div>\n" +
      "              </div>\n" +
      "            </div>\n" +
      "          </div>"
})
html.value += "</div>"
</script>

<style scoped>

</style>
