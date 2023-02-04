<template>
  <NuxtLayout name="error">
    <section id="error-404" class="error-404 pad-top-90">
      <div class="container">
        <!-- Row -->
        <div class="row pt-4">
          <!-- Col -->
          <div class="col-md-12 text-center">
            <div class="error-wrap">
              <div class="error-content">
                <div class="error-page">
                  <h1>404</h1>
                </div>
                <div class="error-description">
                  <p>Oops! Seite nicht gefunden</p>
                </div>
                <div class="error-btn mt-5">
                  <a class="btn btn-default text-uppercase b-radius-0" href="/" title="Home">Zurück auf die Hauptseite<i class="fa fa-home ms-3"></i></a>
                </div>
              </div>
            </div>
          </div>
          <!-- Col -->
        </div>
        <!-- Row -->
      </div>
      <!-- Container -->
    </section>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "CMGI / 404",
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    },
    {
      name: "description",
      content: "keine Seite gefunden 404"
    }
  ]
})
</script>

<style scoped>

</style>
