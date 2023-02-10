<template>

  <section class="blog-section pad-top-10 pad-bottom-20">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title-wrap text-center">
            <div class="section-title">
              <span class="sub-title theme-color text-uppercase">{{blok.category}}</span>
              <h2 class="section-title margin-top-5">{{blok.title}}</h2>
              <span class="border-bottom center"></span>
            </div>
          </div>
          <div class="row">
            <div v-html="html"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
let props = defineProps({ blok: Object });

const html = ref("")
html.value = "<div class=\"owl-carousel blog-main-wrapper blog-style-1\"\n" +
    "                 data-loop=\"1\" data-nav=\"0\" data-dots=\"1\"\n" +
    "                 data-autoplay=\"0\" data-autoplaypause=\"1\" \n" +
    "                 data-autoplaytime=\"5000\" data-smartspeed=\"1000\" \n" +
    "                 data-margin=\"30\" data-items=\"3\" \n" +
    "                 data-items-tab=\"2\" data-items-mob=\"1\">"
props.blok.items.forEach(item => {
  html.value += "              <div class=\"item\">\n" +
      "                <!--Blog Inner-->\n" +
      "                <div class=\"blog-inner\">\n" +
      "                  <div class=\"blog-thumb relative\">\n" +
      "                    <img src=\""+item.image+"\" class=\"img-fluid\" style='width: 360px; height: 300px' width=\"768\" height=\"600\" alt=\"blog-img\" />\n" +
      "                    <div class=\"top-meta\">\n" +
      "                      <ul class=\"top-meta-list\">\n" +
      "                        <li><div class=\"post-date\"><a href=\""+item.button_link+"\"><i class=\"ti-calendar\"></i>"+ parseDate(item.date) +"</a></div></li>\n" +
      "                      </ul>\n" +
      "                    </div>\n" +
      "                  </div>\n" +
      "                  <div class=\"blog-details\">\n" +
      "                    <div class=\"blog-title\">\n" +
      "                      <h4 class=\"margin-bottom-10\"><a href=\""+item.button_link+"\" class=\"blog-name\">" + item.title + "</a></h4>\n" +
      "                    </div>\n" +
      "                    <div class=\"post-desc mt-2\">\n" +
      "                      <div class=\"blog-link\">\n" +
      "                        <a target=\"_blank\" href=\" "+item.button_link+"\" class=\"link font-w-500\">"+ item.button_name +"</a>\n" +
      "                      </div>\n" +
      "                    </div>\n" +
      "                  </div>\n" +
      "                </div>\n" +
      "                <!--Blog Inner Ends-->\n" +
      "              </div>"

})

html.value += "</div>"


function parseDate(dateEntry){
  let months = [ "Jan", "Feb", "Mar", "Apr", "Mai", "Juni",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

  let date = new Date(dateEntry);
  let day = date.getDate()
  if(day < 10)
    day = '0' + day
  let month = date.getMonth()
  date = day+ '. ' +  months[month] + ' '+ date.getFullYear()
  return date
}
</script>

<style scoped>

</style>
