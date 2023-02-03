<template>
  <div v-html="html"></div>
</template>

<script setup>
let props = defineProps({ blok: Object });
let items = ""
const html = ref("")
html.value = "  <rs-module-wrap id=\"rev_slider_1_1_wrapper\" data-alias=\"zegen-home-1\"\n" +
    "                  data-source=\"gallery\" style=\"visibility:hidden;\n" +
    "                  background:#000000;padding:0;margin:0px auto;margin-top:0;margin-bottom:0;\">\n" +
    "    <rs-module id=\"rev_slider_1_1\" style=\"\" data-version=\"6.5.31\">\n" +
    "      <rs-slides>"


let index = 1
props.blok.contents.forEach( item => {
  html.value += "<rs-slide  style=\"position: absolute;\" data-key=\"rs-"+index+"\" data-title=\"Web Show\"\n" +
      "                  data-thumb=\""+ item.image+ "\"\n" +
      "                  data-anim=\"adpr:false;e:slidingoverlay;ms:2000;\"\n" +
      "                  data-in=\"o:1;x:(100%);\" data-out=\"a:false;\">"

  html.value += "<img src=\"rs-plugin/assets/dummy.png\"\n" +
      "               alt=\"Non Profit Wordpress Theme\"\n" +
      "               title=\"zmain-slider-1.jpg\"\n" +
      "               width=\"1536\" height=\"864\"\n" +
      "               class=\"rev-slidebg tp-rs-img rs-lazyload\"\n" +
      "               data-lazyload=\""+ item.image+"\"\n" +
      "               data-parallax=\"5\" data-no-retina>"

  html.value += "<h1\n" +
      "              id=\"slider-1-slide-" + index + "-layer-2\"\n" +
      "              class=\"rs-layer Concept-Title\"\n" +
      "              data-type=\"text\"\n" +
      "              data-color=\"#ffffff||rgba(255, 255, 255, 1)||rgba(255, 255, 255, 1)||rgba(255, 255, 255, 1)\"\n" +
      "              data-rsp_ch=\"on\"\n" +
      "              data-xy=\"x:c;y:m;yo:10px,-26px,-10px,-33px;\"\n" +
      "              data-text=\"w:normal,nowrap,nowrap,normal;s:54,50,45,30;l:52,55,50,40;ls:3px;fw:700;a:center;\"\n" +
      "              data-dim=\"w:754px,699px,auto,400px;\"\n" +
      "              data-padding=\"b:10;\"\n" +
      "              data-frame_0=\"sX:2;sY:2;\"\n" +
      "              data-frame_0_mask=\"u:t;\"\n" +
      "              data-frame_1=\"e:power2.out;st:2110;sp:1270;sR:2110;\"\n" +
      "              data-frame_1_mask=\"u:t;\"\n" +
      "              data-frame_999=\"x:left;e:power3.in;st:w;sp:1000;sR:5620;\"\n" +
      "              data-frame_999_reverse=\"x:true;\"\n" +
      "              style=\"z-index:10;font-family:'Poppins';text-transform:uppercase;\"\n" +
      "          >"+item.big_title +
      "          </h1>"


  html.value += "<rs-layer\n" +
      "              id=\"slider-1-slide-" + index + "-layer-4\"\n" +
      "              class=\"Concept-SubTitle\"\n" +
      "              data-type=\"text\"\n" +
      "              data-color=\"#3498db\"\n" +
      "              data-rsp_ch=\"on\"\n" +
      "              data-xy=\"x:c;y:m;yo:-42px,-83px,-64px,-71px;\"\n" +
      "              data-text=\"w:normal,nowrap,nowrap,nowrap;s:21,20,20,15;l:21,25,20,20;fw:700;a:center,left,left,left;\"\n" +
      "              data-dim=\"w:408px,auto,auto,auto;\"\n" +
      "              data-padding=\"b:10;\"\n" +
      "              data-frame_0=\"o:1;\"\n" +
      "              data-frame_0_chars=\"d:5;y:100%;o:0;rZ:-35deg;\"\n" +
      "              data-frame_0_mask=\"u:t;\"\n" +
      "              data-frame_1=\"st:640;sp:1200;sR:640;\"\n" +
      "              data-frame_1_chars=\"e:power4.inOut;d:10;rZ:0deg;\"\n" +
      "              data-frame_1_mask=\"u:t;\"\n" +
      "              data-frame_999=\"x:left;e:power3.in;st:w;sp:1000;sR:4960;\"\n" +
      "              data-frame_999_reverse=\"x:true;\"\n" +
      "              style=\"z-index:11;font-family:'Open Sans';text-transform:uppercase;\"\n" +
      "          > "+ item.small_title  +
      "          </rs-layer>"

  html.value += "          <rs-layer\n" +
      "              id=\"slider-1-slide-" + index + "-layer-14\"\n" +
      "              data-type=\"text\"\n" +
      "              data-rsp_ch=\"on\"\n" +
      "              data-xy=\"x:c;y:m,t,t,t;yo:78px,286px,271px,233px;\"\n" +
      "              data-text=\"w:normal;s:18,18,16,15;l:31,30,30,27;a:center;\"\n" +
      "              data-dim=\"w:806px,805px,689px,388px;h:auto,auto,auto,89px;\"\n" +
      "              data-frame_0=\"y:100%;\"\n" +
      "              data-frame_0_mask=\"u:t;\"\n" +
      "              data-frame_1=\"st:2680;sp:1360;sR:2680;\"\n" +
      "              data-frame_1_mask=\"u:t;\"\n" +
      "              data-frame_999=\"o:0;st:w;sR:4960;\"\n" +
      "              style=\"z-index:9;font-family:'Open Sans';\"\n" +
      "          >"+ item.description +
      "          </rs-layer>"

  html.value += "<rs-layer\n" +
      "              id=\"slider-1-slide-" + index + "-layer-16\"\n" +
      "              class=\"res-slide-btn pop rev-btn\"\n" +
      "              data-type=\"button\"\n" +
      "              data-color=\"rgba(255,255,255,1)\"\n" +
      "              data-xy=\"x:c;y:m;yo:162px,130px,128px,117px;\"\n" +
      "              data-text=\"s:16,16,14,14;l:17;fw:500;a:center;\"\n" +
      "              data-rsp_bd=\"off\"\n" +
      "              data-padding=\"t:15,15,10,10;r:35,35,25,25;b:15,15,10,10;l:35,35,25,25;\"\n" +
      "              data-border=\"bor:3px,3px,3px,3px;\"\n" +
      "              data-frame_0=\"rX:-70deg;oZ:-50;\"\n" +
      "              data-frame_1=\"oZ:-50;e:power4.inOut;st:3160;sp:1750;\"\n" +
      "              data-frame_999=\"o:0;st:w;sR:4640;\"\n" +
      "              data-frame_hover=\"bgc:#000;boc:#000;bor:3px,3px,3px,3px;bos:solid;oX:50;oY:50;sp:0;\"\n" +
      "              style=\"z-index:8;background-color:#3498db;font-family:'Poppins';cursor:pointer;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;\"\n" +
      "          >"+ item.button_name +
      "          </rs-layer>"

  html.value += "<rs-layer\n" +
      "              id=\"slider-1-slide-" + index + "-layer-21\"\n" +
      "              data-type=\"image\"\n" +
      "              data-rsp_ch=\"on\"\n" +
      "              data-xy=\"x:c;yo:228px,95px,91px,90px;\"\n" +
      "              data-text=\"w:normal;s:20,16,12,7;l:0,20,15,9;\"\n" +
      "              data-dim=\"w:67px,60px,56px,45px;h:67px,60px,56px,45px;\"\n" +
      "              data-frame_0=\"x:100%;\"\n" +
      "              data-frame_0_mask=\"u:t;\"\n" +
      "              data-frame_1=\"st:210;sp:1000;sR:210;\"\n" +
      "              data-frame_1_mask=\"u:t;\"\n" +
      "              data-frame_999=\"o:0;st:w;sR:7790;\"\n" +
      "              style=\"z-index:12;\"\n" +
      "          ><img src=\"rs-plugin/assets/dummy.png\" alt=\"Non Profit Wordpress Theme\" " +
      "class=\"tp-rs-img rs-lazyload\" width=\"80\" height=\"80\" " +
      "data-lazyload=\"rs-plugin/assets/"+  item.icon + ".png\" data-no-retina>\n" +
      "          </rs-layer>\n"

  html.value += "</rs-slide>"
  index++
})

html.value += "</rs-slides>\n" +
    "\n" +
    "      <rs-static-layers></rs-static-layers>\n" +
    "    </rs-module>\n" +
    "  </rs-module-wrap>"
</script>

<style scoped>
h1{
  color: red;
}
</style>
