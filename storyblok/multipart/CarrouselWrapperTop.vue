<template>
  <section id="ministries-section" class="ministries-section pad-top-95 pad-bottom-70">
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

        <div v-html="html"></div>

        <!--Ministries Owl Slider-->
      </div>
      <!-- Row -->
    </div>
    <!-- Container -->
  </section>

</template>

<script setup>
let props = defineProps({ blok: Object });

const html = ref("")

html.value =
    "        <div class=\"owl-carousel ministries-main-wrapper\"\n" +
    "             data-loop=\"1\"\n" +
    "             data-nav=\"1\" data-dots=\"0\"\n" +
    "             data-autoplay=\"0\"\n" +
    "             data-autoplaypause=\"1\"\n" +
    "             data-autoplaytime=\"5000\"\n" +
    "             data-smartspeed=\"1000\"\n" +
    "             data-margin=\"30\"\n" +
    "             data-items=\"3\"\n" +
    "             data-items-tab=\"2\"\n" +
    "             data-items-mob=\"1\">\n"


props.blok.items.forEach( item => {
  html.value += "<div class=\"item\">\n" +
      "            <div class=\"ministries-box-style-2\">\n" +
      "              <!-- Ministries Inner -->\n" +
      "              <div class=\"ministries-inner\">\n" +
      "                <div class=\"ministries-thumb\">\n" +
      "                  <img class=\"img-fluid squared w-100\" src=\""+ item.image + "\" width=\"360\" height=\"240\" alt=\"\">\n" +
      "                </div>\n" +
      "                <!-- Ministries Content -->\n" +
      "                <div class=\"ministries-content pad-30\">\n" +
      "                  <div class=\"ministries-title margin-bottom-15\">\n" +
      "                    <h4><a href=\""+item.button_link+"\" class=\"ministries-link\">"+item.title+"</a></h4>\n" +
      "                  </div>\n" +
      "                  <div class=\"ministries-desc\">\n" +
      "                    <p>"+item.description+"</p>\n" +
      "                  </div>\n" +
      "                  <div class=\"ministries-link margin-top-20\">\n" +
      "                    <a target=\"_blank\" href=\""+item.button_link+"\" class=\"link\">"+item.button_name+"</a>\n" +
      "                  </div>\n" +
      "                </div>\n" +
      "              </div>\n" +
      "              <!-- Ministries Inner Ends -->\n" +
      "            </div>\n" +
      "          </div>"
})

html.value += "</div>"

</script>

<style scoped>

</style>
