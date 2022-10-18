

const header = document.querySelector('#header');
header.innerHTML =  `<!--Main Navigation-->
  <!-- Animated navbar-->
  <!--Main Navigation-->
<header>
  <!-- Jumbotron -->
  <div class="p-3 text-center bg-dark border-bottom">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
          <a href="#!" class="ms-md-2">
            <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" />
          </a>
        </div>

        <div class="col-md-4">
           <form class="d-flex align-items-center w-100 form-search">
        <div class="input-group">
          <button class="btn btn-light dropdown-toggle shadow-0" type="button" data-mdb-toggle="dropdown"
            aria-expanded="false" style="padding-bottom: 0.4rem;">
            All
          </button>
          <ul class="dropdown-menu dropdown-menu-dark fa-ul">
            <li>
              <a class="dropdown-item" href="#"><span class="fa-li pe-2"><i class="fas fa-search"></i></span>All</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><span class="fa-li pe-2"><i
                    class="fas fa-film"></i></span>Titles</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><span class="fa-li pe-2"><i class="fas fa-tv"></i></span>TV
                Episodes</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><span class="fa-li pe-2"><i
                    class="fas fa-user-friends"></i></span>Celebs</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><span class="fa-li pe-2"><i
                    class="fas fa-building"></i></span>Companies</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><span class="fa-li pe-2"><i
                    class="fas fa-key"></i></span>Keywords</a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#"><span class="fa-li pe-2"><i
                    class="fas fa-search-plus"></i></span>Advanced
                search<i class="fas fa-chevron-right ps-2"></i></a>
            </li>
          </ul>
          <input type="search" class="form-control" placeholder="Search" aria-label="Search" />
        </div>
        <a href="#!" class="text-white"><i class="fas fa-search ps-3"></i></a>
      </form>
        </div>

        <div class="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
          <div class="d-flex">
            <!-- Cart -->
            <a class="text-reset me-3" href="#">
              <span><i class="fas fa-shopping-cart"></i></span>
              <span class="badge rounded-pill badge-notification bg-danger">1</span>
            </a>

            <!-- Notification -->
            <div class="dropdown">
              <a class="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
                role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-bell"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Some news</a></li>
                <li><a class="dropdown-item" href="#">Another news</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>

            <!-- Languages -->
            <div class="dropdown">
              <a class="text-reset dropdown-toggle me-3 hidden-arrow" href="#" id="navbarDropdown" role="button"
                data-mdb-toggle="dropdown" aria-expanded="false">
                <i class="united kingdom flag m-0"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#"><i class="united kingdom flag"></i>English
                    <i class="fa fa-check text-success ms-2"></i></a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#"><i class="poland flag"></i>Polski</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"><i class="china flag"></i>中文</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"><i class="japan flag"></i>日本語</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"><i class="germany flag"></i>Deutsch</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"><i class="france flag"></i>Français</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"><i class="spain flag"></i>Español</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"><i class="russia flag"></i>Русский</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#"><i class="portugal flag"></i>Português</a>
                </li>
              </ul>
            </div>

            <!-- User -->
            <div class="dropdown">
              <a class="text-reset dropdown-toggle d-flex align-items-center hidden-arrow" href="#"
                id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" class="rounded-circle" height="22"
                  alt="" loading="lazy" />
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">My profile</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Jumbotron -->

  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <!-- Container wrapper -->
    <div class="container-fluid justify-content-center justify-content-md-between">
      <!-- Left links -->
      <ul class="navbar-nav flex-row">
        <li class="nav-item me-2 me-lg-0">
          <a class="nav-link" href="#" role="button" data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1"
            class="btn shadow-0 p-0 me-3" aria-controls="#sidenav-1" aria-haspopup="true">
            <i class="fas fa-bars me-1"></i>
            <span>Categories</span>
          </a>
        </li>
        <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <a class="nav-link" href="#">Bestsellers</a>
        </li>
        <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <a class="nav-link" href="#">Inspirations</a>
        </li>
        <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <!-- Left links -->

      <button class="btn btn-outline-primary" data-mdb-ripple-color="dark" type="button">
        Download app<i class="fas fa-download ms-2"></i>
      </button>
    </div>
    <!-- Container wrapper -->
  </nav>

  <!-- Sidenav -->
  <div id="sidenav-1" class="sidenav" role="navigation" data-mdb-hidden="true" data-mdb-accordion="true">
    <ul class="sidenav-menu">
      <li class="sidenav-item">
        <a class="sidenav-link"><i class="fas fa-layer-group pe-3"></i><span>Categories</span></a>
        <ul class="sidenav-collapse show">
          <li class="sidenav-item">
            <a class="sidenav-link">Dresses</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Shirts</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Jeans</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Shoes</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Accessories</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Jewelry</a>
          </li>
        </ul>
      </li>
      <li class="sidenav-item">
        <a class="sidenav-link"><i class="fas fa-gem pe-3"></i><span>Brands</span></a>
        <ul class="sidenav-collapse">
          <li class="sidenav-item">
            <a class="sidenav-link">Brand 1</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Brand 2</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Brand 3</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Brand 4</a>
          </li>
        </ul>
      </li>
      <li class="sidenav-item">
        <a class="sidenav-link"><i class="fas fa-gift pe-3"></i><span>Discounts</span></a>
        <ul class="sidenav-collapse">
          <li class="sidenav-item">
            <a class="sidenav-link">-70%</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">-50%</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Any</a>
          </li>
        </ul>
      </li>
      <li class="sidenav-item">
        <a class="sidenav-link"><i class="fas fa-fire-alt pe-3"></i><span>Popular</span></a>
        <ul class="sidenav-collapse">
          <li class="sidenav-item">
            <a class="sidenav-link">Jewelry</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Snickers</a>
          </li>
        </ul>
      </li>
      <li class="sidenav-item">
        <a class="sidenav-link"><i class="fab fa-hotjar pe-3"></i><span>Today's bestseller</span></a>
        <div class="card mx-3">
          <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).jpg"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-danger ms-2">-10%</span></h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <p class="mb-2">Pink snickers</p>
            </a>
            <p class="mb-0">
              <s>$61.99</s><strong class="ms-2 text-danger">$50.99</strong>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- Sidenav -->

</header>
<!--Main Navigation-->

<div id="intro-carousel" class="carousel slide carousel-fade" data-mdb-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="0" class=""></li>
        <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1" class="active" aria-current="true"></li>
        <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="2" class=""></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item">
          <a href="#!" class="ripple" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/lab/amazon-homepage/assets/assets/slide-1.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Epic daily deal</h5>
            </div>
          </a>
        </div>
        <div class="carousel-item active">
          <a href="#!" class="ripple ripple-surface-light" data-mdb-ripple-color="light" style="">
            <img src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/lab/amazon-homepage/assets/assets/slide-2.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Huge discounts</h5>
            </div>
          </a>
        </div>
        <div class="carousel-item">
          <a href="#!" class="ripple" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/lab/amazon-homepage/assets/assets/slide-3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>
                <span class="bg-dark p-2 rounded">Up to 70% cheaper</span>
              </h5>
            </div>
          </a>
        </div>
      </div>
      <a class="carousel-control-prev" href="#intro-carousel" role="button" data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#intro-carousel" role="button" data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
`;
