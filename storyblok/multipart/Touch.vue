<template>
  <section class="contact-form-section typo-white section-bg-img o-visible pad-top-80 pad-bottom-160 relative" :data-bg="blok.image">
    <div style='position: absolute;width: 100%;height: 100%;background: #0000009e; z-index: 1; top: 0'></div>
    <div class="shape-bottom" data-negative="false">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path class="shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
        <path class="shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
        <path class="shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
      </svg>		</div>

    <div class="container">
      <div class="row">
        <!-- col -->

        <div style="z-index: 2" class="col-xl-4 pe-xl-4 pb-5 pb-xl-0 z">
          <div class="flip-box broken-top-115 verticalMove">
            <div class="flip-box-inner imghvr-flip-3d-horz">
              <div class="flip-box-front">
                <div class="flip-box-icon margin-bottom-40"><span class="text-center flip-icon-middle" :class="blok.card_icon"></span></div>
                <h3 class="flip-box-title margin-bottom-30">{{blok.card_title}}</h3>
                <div class="flip-content">
                  <p>{{blok.card_adress}}</p>
                  <p><a :href="blok.card_number">{{blok.card_number}}</a></p>
                  <p><a :href="blok.card_email">{{blok.card_email}}</a></p>
                </div>
              </div>
              <div class="flip-box-back">
                <h3 class="flip-box-title">{{blok.card_title}}</h3>
                <div class="flip-content">
                  <p>{{blok.card_adress}}</p>
                  <p><a :href="blok.card_number">{{blok.card_number}}</a></p>
                  <p><a :href="blok.card_email">{{blok.card_email}}</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- col -->
        <div style="z-index: 2" class="col-xl-8 ps-xl-4">
          <div class="section-title-wrapper">
            <div class="title-wrap mb-0">
              <div class="section-title">
                <span class="sub-title theme-color text-uppercase">{{blok.category}}</span>
                <h2 class="section-title margin-top-5">{{blok.title}}</h2>
                <span class="border-bottom"></span>
              </div>
              <div class="pad-top-15">
                <p class="margin-bottom-10">{{blok.description}}</p>
              </div>
            </div>
            <div class="button-section margin-top-25">
              <a class="btn btn-default" :href="blok.button_link" title="Learn More">{{blok.button_name}}</a>
            </div>
          </div>
        </div>
        <!-- .col -->
      </div>
    </div>
  </section>
</template>

<script setup>
let props = defineProps({ blok: Object });
</script>

<style scoped>

</style>
