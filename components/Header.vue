<template>
  <header>
    <div v-html="headerHTML"></div>
  </header>
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const headerMenu = ref(null)
const headerHTML = ref("")

const { data } = await storyblokApi.get('cdn/stories/', {
  version: 'draft',
  starts_with : 'config/configheader'
})

headerMenu.value = data.stories[0].content.header_menu

let globalLinkHTML = ""
let currentLinkHTML = ""
headerMenu.value.forEach(link => {
  if(link.category === 'current'){
    currentLinkHTML += "<li><a href=\" "+ link.url +  "\"> " + link.linkname +"</a></li>"
  } else {
    globalLinkHTML += "<li><a href=\" "+ link.url +  "\"> " + link.linkname +"</a></li>"
  }
})

headerHTML.value = "<div class=\"mobile-header bg-white typo-dark\">\n" +
    "      <div class=\"mobile-header-inner\">\n" +
    "        <div class=\"sticky-outer\">\n" +
    "          <div class=\"sticky-head\">\n" +
    "            <div class=\"basic-container clearfix\">\n" +
    "              <ul class=\"nav mobile-header-items pull-left\">\n" +
    "                <li class=\"nav-item\"><a href=\"#\" class=\"zmm-toggle img-before\"><i class=\"ti-menu\"></i></a></li>\n" +
    "              </ul>\n" +
    "              <ul class=\"nav mobile-header-items pull-center\">\n" +
    "                <li>\n" +
    "                  <a href=\"/\" class=\"img-before\"><img src=\"/images/logo/logo-mini.png\" style=\"z-index: 10; position: relative\" class=\"img-fluid\" width=\"70\" height=\"45\" alt=\"Logo\"></a>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"header-inner header-1 header-absolute\">\n" +
    "      <div class=\"topbar relative\">\n" +
    "        <div class=\"basic-container clearfix\">\n" +
    "          <ul class=\"nav topbar-items pull-left\">\n" +
    "            <li class=\"nav-item\">\n" +
    "              <ul class=\"nav header-info\">\n" +
    "                <li>\n" +
    "                  <div class=\"header-address typo-white\"><span class=\"ti-location-pin\"></span> Bernerstr.107, 60437 Frankfurt am Main</div>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "          <ul class=\"nav topbar-items pull-right\">\n" +
    "            <li class=\"nav-item\">\n" +
    "              <div class=\"social-icons typo-white\">\n" +
    "                <a href=\"https://de-de.facebook.com/people/CMGI-Deutschland/100075513084542/\" class=\"social-fb\"><span class=\"ti-facebook\"></span></a>\n" +
    "                <a href=\"https://www.instagram.com/cmgifrankfurt/\" class=\"social-instagram\"><span class=\"ti-instagram\"></span></a>\n" +
    "                <a href=\"https://www.youtube.com/@cmgimediagermany\" class=\"social-youtube\"><span class=\"ti-youtube\"></span></a>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"sticky-outer\">\n" +
    "        <div class=\"sticky-head\">\n" +
    "          <nav class=\"navbar nav-shadow\">\n" +
    "            <div class=\"basic-container clearfix\">\n" +
    "              <div class=\"navbar-inner\">\n" +
    "                <ul class=\"nav navbar-items pull-left\">\n" +
    "                  <li class=\"list-item\">\n" +
    "                    <a href=\"/\" class=\"logo-general\"><img src=\"/images/logo/logo-mini.png\" class=\"img-fluid\" width=\"100\" height=\"50\" alt=\"Logo\" /></a>\n" +
    "                  </li>\n" +
    "                </ul>\n" +
    "                <ul class=\"nav navbar-items pull-right\">\n" +
    "                  <li class=\"list-item\">\n" +
    "                    <ul class=\"nav navbar-main menu-white\">\n" +
    "                      <li class=\"dropdown cus-img-menu\"><a href=\"/\">Startseite</a>\n" +
    "                      </li>\n" +
    "                      <li class=\"dropdown dropdown-sub\"><a href=\"#\">Aktuelles</a>\n" +
    "                        <ul class=\"dropdown-menu\">\n" +
                        currentLinkHTML +
    "                        </ul>\n" +
    "                      </li>\n" +
                        globalLinkHTML +
    "                    </ul>\n" +
    "                  </li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </nav>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>"
</script>

<style scoped>

</style>
