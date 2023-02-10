<template>
  <section class="events-section pad-tb-0 broken-top-50 pt-sm-5 pt-xl-0 pad-bottom-md-none">
    <div class="container">
      <div class="row">
        <div v-html="html"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
let props = defineProps({ blok: Object });


const html = ref("")
html.value = "<div class=\"owl-carousel events-main-wrapper events-style-1\" \n" +
    "                 data-loop=\"1\" data-nav=\"0\" data-dots=\"1\"\n" +
    "                 data-autoplay=\"0\" data-autoplaypause=\"1\" \n" +
    "                 data-autoplaytime=\"5000\" data-smartspeed=\"1000\"\n" +
    "                 data-margin=\"30\" data-items=\"2\" data-items-tab=\"1\"\n" +
    "                 data-items-mob=\"1\">\n"


props.blok.events.forEach( item => {

  html.value += "<div class=\"item\">\n" +
      "            <div class=\"events-inner\">\n" +
      "              <div class=\"events-item\">\n" +
      "                <div class=\"media\">\n" +
      "                  <div class=\"event-date me-4\">"+ parseDate(item.date) + "<span class=\"event-time\"> " + parseHour(item.date) + "</span>\n" +
      "                  </div>\n" +
      "                  <div class=\"media-body\">\n" +
      "                    <div class=\"event-content\">\n" +
      "                      <div class=\"event-title\"><h5><a href=\" " +item.link+ "\"> " + item.title + "</a></h5></div>\n" ;

    if(item.link)
      html.value += "<div class=\"read-more\"><a href=\" " + item.link + "\">Event Details</a></div>\n"

    html.value +=
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n"
})

html.value +="</div>"

function parseDate(dateEntry){
  let months = [ "Jan", "Feb", "Mar", "Apr", "Mai", "Juni",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

  let date = new Date(dateEntry);
  let day = date.getDate()
  if(day < 10)
    day = '0' + day
  let month = date.getMonth()
  date = day+ '. ' +  months[month]
  return date
}

function parseHour(dateEntry){
  let date = new Date(dateEntry);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  return hours + ':' + minutes + ' ' + ampm;
}
</script>

<style scoped>

</style>
