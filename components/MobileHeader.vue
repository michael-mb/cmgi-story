<template>
  <!--Page Loader-->
  <div class="page-loader"></div>
  <!--Zmm Wrapper-->
  <div class="zmm-wrapper">
    <a href="#" class="zmm-close close"></a>
    <div class="zmm-inner bg-white typo-dark">
      <div class="text-center mobile-logo-part margin-bottom-30">
        <a href="index.html" class="img-before"><img src="images/logo/logo-mini.png" class="img-fluid" width="70" height="51" alt="Logo"></a>
      </div>
      <div class="zmm-main-nav">
      </div>
      <div class="search-form-wrapper margin-top-30">
        <form class="search-form" role="search">
          <div class="input-group add-on">
            <input class="form-control" placeholder="Search for.." name="srch-term" type="text">
            <div class="input-group-btn">
              <button class="btn btn-default search-btn" type="submit"><i class="ti-arrow-right"></i></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Overlay Search -->
  <div class="overlay-search text-center hide">
    <a href="#" class="close close-light overlay-search-close"></a>
  </div>
  <!-- main wrapper-->
</template>

<script>
export default {
  name: "SocialBar"
}
</script>

<style scoped>

</style>
