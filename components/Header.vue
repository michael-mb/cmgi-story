<template>
  <header>
    <!--Mobile Header-->
    <div class="mobile-header bg-white typo-dark">
      <div class="mobile-header-inner">
        <div class="sticky-outer">
          <div class="sticky-head">
            <div class="basic-container clearfix">
              <ul class="nav mobile-header-items pull-left">
                <li class="nav-item"><a href="#" class="zmm-toggle img-before"><i class="ti-menu"></i></a></li>
              </ul>
              <ul class="nav mobile-header-items pull-center">
                <li>
                  <a href="/" class="img-before"><img src="/images/logo/logo-mini.png" style="z-index: 10;" class="img-fluid" width="70" height="45" alt="Logo"></a>
                </li>
              </ul>
              <ul class="nav mobile-header-items pull-right">
                <li class="nav-item"><a href="#" class="img-before overlay-search-switch"><i class="icon-magnifier icons"></i></a></li>
              </ul>
            </div>
            <!-- .basic-container -->
          </div>
          <!-- .sticky-head -->
        </div>
        <!-- .sticky-outer -->
      </div>
      <!-- .mobile-header-inner -->
    </div>
    <!-- .mobile-header -->
    <!--Header-->
    <div class="header-inner header-1 header-absolute">
      <!--Topbar-->
      <div class="topbar relative">
        <div class="basic-container clearfix">
          <ul class="nav topbar-items pull-left">
            <li class="nav-item">
              <ul class="nav header-info">
                <li>
                  <div class="header-address typo-white"><span class="ti-location-pin"></span> Bernerstr.107, 60437 Frankfurt am Main</div>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="nav topbar-items pull-right">
            <li class="nav-item">
              <div class="social-icons typo-white">
                <a href="https://de-de.facebook.com/people/CMGI-Deutschland/100075513084542/" class="social-fb"><span class="ti-facebook"></span></a>
                <a href="https://www.instagram.com/youthchallenge_int/" class="social-instagram"><span class="ti-instagram"></span></a>
                <a href="https://www.youtube.com/@cmgimediagermany" class="social-youtube"><span class="ti-youtube"></span></a>
              </div>
            </li>
            <li><a href="#" class="full-view-switch text-center"><i class="ti-search typo-white"></i></a></li>
          </ul>
        </div>
      </div>
      <!--Topbar-->
      <!--Sticky part-->
      <div class="sticky-outer">
        <div class="sticky-head">
          <!--Navbar-->
          <nav class="navbar nav-shadow">
            <div class="basic-container clearfix">
              <div class="navbar-inner">
                <!--Overlay Menu Switch-->
                <ul class="nav navbar-items pull-left">
                  <li class="list-item">
                    <a href="/" class="logo-general"><img src="/images/logo/logo-mini.png" class="img-fluid" width="100" height="50" alt="Logo" /></a>
                  </li>
                </ul>
                <!-- Menu -->
                <ul class="nav navbar-items pull-right">
                  <!--List Item-->
                  <li class="list-item">
                    <ul class="nav navbar-main menu-white">
                      <li class="dropdown cus-img-menu"><a href="/">Startseite</a>
                      </li>

                      <li class="dropdown dropdown-sub"><a href="#">Aktuelles</a>
                        <ul class="dropdown-menu">
                          <li>
                            <a href="/events/destiny-camp-5">Destiny Camp 5</a>
                          </li>
                          <li>
                            <a href="/events/auszeit-paare">Auszeit für Ehepaare</a>
                          </li>
                          <li>
                            <a href="/events/auszeit-single">Auszeit für Single</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown "><a href="/sermon">Predigten</a>
                      </li>

                      <li><a href="/about">Über uns</a></li>
                      <li><a href="/contact">Kontakt</a></li>
                    </ul>
                  </li>
                  <li class="list-item">
                    <div class="header-navbar-text-1"><a href="/" class="h-donate-btn">Donate</a></div>
                  </li>
                </ul>
                <!-- Menu -->
              </div>
            </div>
          </nav>
        </div>

      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
