<template>
  <section class="contact-form-section typo-white section-bg-img o-visible pad-bottom-200" :data-bg="blok.background">
    <div style='position: absolute;width: 100%;height: 100%;background: rgba(0,0,0,0.79); z-index: 0; top: 0'></div>

    <div class="shape-top ct-hgt" data-negative="false" style="z-index: 2;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path class="shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
							c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
							c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
      </svg>
    </div>

    <div class="shape-bottom ct-hgt" data-negative="false" style="z-index: 2;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path class="shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
							c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
							c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
      </svg>
    </div>
    <div class="container" style="z-index: 2; position:relative;">
      <div class="row get-quote-2 mb-3 align-items-center">
        <div class="col-md-4">
          <div class="title-wrap mb-0">
            <div class="section-title typo-white mb-0">
              <span class="sub-title theme-color text-uppercase">{{blok.subtitle}}</span>
              <h2 class="section-title margin-top-5 margin-bottom-50">{{blok.title}}</h2>
              <span class="border-bottom"></span>
            </div>
            <span class="custom-heading-title relative">{{parseDate(blok.date)}} - {{blok.description}}</span>
          </div>
        </div>
        <div class="col-md-8">
          <div class="day-counter-wrapper pt-3 day-counter-2 day-counter-transparent text-center">
            <div class="day-counter day-counter-progress" :data-date="convertToDataDate(blok.date)" data-size="120">
              <div class="counter-elements counter-day rounded">
                <div class="counter-item">
                  <div class="day-count-details">
                    <h3 class="count-view theme-color mb-2">Number</h3>
                    <span>Days</span>
                  </div>
                </div>
              </div>

              <div class="counter-elements counter-hour rounded">
                <div class="counter-item">
                  <div class="day-count-details">
                    <h3 class="count-view theme-color mb-2">Number</h3>
                    <span>Hours</span>
                  </div>
                </div>
              </div>

              <div class="counter-elements counter-min rounded">
                <div class="counter-item">
                  <div class="day-count-details">
                    <h3 class="count-view theme-color mb-2">Number</h3>
                    <span>Minutes</span>
                  </div>
                </div>
              </div>

              <div class="counter-elements counter-sec rounded">
                <div class="counter-item">
                  <div class="day-count-details">
                    <h3 class="count-view theme-color mb-2">Number</h3>
                    <span>Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br><br>
</template>

<script setup>
let props = defineProps({ blok: Object });

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

function convertToDataDate(dateEntry){
  let date = new Date(dateEntry);
  let day = date.getDate()
  if(day < 10)
    day = '0' + day
  let month = date.getMonth() + 1
  date = date.getFullYear()+'/'+month+'/'+day
  return date
}
</script>

<style scoped>

</style>
