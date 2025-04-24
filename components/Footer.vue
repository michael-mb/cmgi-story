<template>
  <footer v-html="footerHTML"></footer>
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const footerMenu = ref(null)
const footerHTML = ref("")

const { data } = await storyblokApi.get('cdn/stories/', {
  version: 'draft',
  starts_with : 'config/configfooter'
})

footerMenu.value = data.stories[0].content

let footerParam = footerMenu.value.footer_menu[0]
let footerLinks = ""

footerMenu.value.header_menu.forEach( item => {
  footerLinks += "<li class=\"menu-item\"><a href=\""+  item.url +"\">" + item.linkname + "</a></li>"
})

footerHTML.value = "<footer id=\"footer\" class=\"footer footer-1 footer-bg-img\" data-bg=\" "+ footerParam.image+" \">\n" +
    "    <div class=\"footer-widgets\">\n" +
    "      <div class=\"footer-middle-wrap footer-overlay-dark\">\n" +
    "        <div class=\"color-overlay\"></div>\n" +
    "        <div class=\"container\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-5 widget text-widget\">\n" +
    "              <div class=\"widget-title\">\n" +
    "                <h3 class=\"title typo-white\"> "+ footerParam.description_title+" </h3>\n" +
    "              </div>\n" +
    "              <div class=\"widget-text margin-bottom-30\">\n" +
    "                <p> "+ footerParam.description_text +"</p>\n" +
    "              </div>\n" +
    "              <div class=\"social-icons\">\n" +
    "                <a href=\"https://de-de.facebook.com/people/CMGI-Deutschland/100075513084542/\" class=\"social-fb\"><span class=\"ti-facebook\"></span></a>\n" +
    "                <a href=\"https://www.instagram.com/cmgifrankfurt/\" class=\"social-instagram\"><span class=\"ti-instagram\"></span></a>\n" +
    "                <a href=\"https://www.youtube.com/@cmgimediagermany\" class=\"social-youtube\"><span class=\"ti-youtube\"></span></a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-5 widget text-widget\">\n" +
    "              <div class=\"widget-title\">\n" +
    "                <h3 class=\"title typo-white\">Quick Links</h3>\n" +
    "              </div>\n" +
    "              <div class=\"menu-quick-links\">\n" +
    "                <ul class=\"menu\">\n" +
                     footerLinks +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"footer-copyright\">\n" +
    "      <div class=\"footer-bottom-wrap pad-tb-20 typo-white\">\n" +
    "        <div class=\"container\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "              <ul class=\"footer-bottom-items pull-left\">\n" +
    "                <li class=\"nav-item\">\n" +
    "                  <div class=\"nav-item-inner\">\n" +
    "                    Copyrights  © 2025 <a href=\"https://michael-mb.github.io/Michael-CV/\">CMGI Media</a>. Designed with ❤️ by <a href=\"https://michael-mb.github.io/Michael-CV/\">michael-mb</a>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "              <ul class=\"footer-bottom-items footer-menu pull-right\">\n" +
    "                <li class=\"nav-item\">\n" +
    "                  <a href=\"/contact\">kontakt</a>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </footer>"
</script>

<style scoped>

</style>
