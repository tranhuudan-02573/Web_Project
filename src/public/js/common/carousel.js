const carousel = document.querySelector("#carousel");
carousel.innerHTML = `<div class="container">
      <!--Section: Featured-->
      <section class="mb-4">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-3 mb-4 mb-md-0">
                <div class="list-group list-group-naked mb-3">
                  <h5 class="ms-3">My markets</h5>
                  <hr>

                  <a href="#" class="list-group-item list-group-item-action d-flex align-items-center ripple">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/001.jpg" class="rounded me-3" style="height: 27px" alt="">
                    <strong>Electronics</strong>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action d-flex align-items-center ripple">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/020.jpg" class="rounded me-3" style="height: 27px" alt="">
                    <strong>Apparel</strong>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action d-flex align-items-center ripple">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/002.jpg" class="rounded me-3" style="height: 27px" alt="">
                    <strong>Vehicles &amp; accessories</strong>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action d-flex align-items-center ripple">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/016.jpg" class="rounded me-3" style="height: 27px" alt="">
                    <strong>Sports &amp; entertainment</strong>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action d-flex align-items-center ripple">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/062.jpg" class="rounded me-3" style="height: 27px" alt="">
                    <strong>Machinery</strong>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action d-flex align-items-center ripple">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/084.jpg" class="rounded me-3" style="height: 27px" alt="">
                    <strong>Home &amp; garden</strong>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action d-flex align-items-center ripple">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/027.jpg" class="rounded me-3" style="height: 27px" alt="">
                    <strong>Beauty &amp;personal care</strong>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action d-flex align-items-center ripple">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/024.jpg" class="rounded me-3" style="height: 27px" alt="">
                    <strong>All categories</strong>
                  </a>
                </div>
              </div>

              <div class="col-lg-9 mb-4 mb-md-0">
                <!-- Carousel wrapper -->
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
                        <img src="https://mdbootstrap.com/img/new/slides/167.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Epic daily deal</h5>
                        </div>
                      </a>
                    </div>
                    <div class="carousel-item active">
                      <a href="#!" class="ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbootstrap.com/img/new/slides/143.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Huge discounts</h5>
                        </div>
                      </a>
                    </div>
                    <div class="carousel-item">
                      <a href="#!" class="ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbootstrap.com/img/new/slides/161.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Up to 70% cheaper</h5>
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
                <!-- Carousel wrapper -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Featured-->

      <!--Section: Content-->
      <section class="mb-4">
        <div class="row">
          <div class="col-md-6 mb-4 mb-md-0">
            <div class="card">
              <div class="card-body">
                <a href="#!" class="text-reset mb-3 d-block"><i class="fas fa-box me-2"></i><strong>New
                    arrivals</strong></a>

                <div class="row text-center">
                  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/004.jpg" class="w-100" alt="">
                    </a>

                    <small class="d-block"><strong>$14</strong></small>
                    <small class="d-block text-muted">Trending now</small>
                  </div>

                  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/014.jpg" class="w-100" alt="">
                    </a>

                    <small class="d-block"><strong>$53</strong></small>
                    <small class="d-block text-muted">Trending now</small>
                  </div>

                  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/059.jpg" class="w-100" alt="">
                    </a>

                    <small class="d-block"><strong>$92</strong></small>
                    <small class="d-block text-muted">Trending now</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-4 mb-md-0">
            <div class="card">
              <div class="card-body">
                <a href="#!" class="text-reset mb-3 d-block"><i class="fas fa-globe-asia me-2"></i><strong>Global
                    original sources</strong></a>

                <div class="row text-center">
                  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/080.jpg" class="w-100" alt="">
                    </a>

                    <small class="d-block"><strong> Sweaters </strong></small>
                    <small class="d-block text-muted"><i class="fas fa-map-marker-alt me-1"></i>Yiwu,
                      China</small>
                  </div>

                  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/079.jpg" class="w-100" alt="">
                    </a>

                    <small class="d-block"><strong>Jumpsuits</strong></small>
                    <small class="d-block text-muted"><i class="fas fa-map-marker-alt me-1"></i>Guangzhou,
                      China</small>
                  </div>

                  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/081.jpg" class="w-100" alt="">
                    </a>

                    <small class="d-block"><strong>Jeans</strong></small>
                    <small class="d-block text-muted"><i class="fas fa-map-marker-alt me-1"></i>Yiwu,
                      China</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Content-->

      <!--Section: Content-->
      <section class="mb-5">
        <div class="row">
          <div class="col-md-6 mb-4 mb-md-0">
            <div class="card">
              <div class="card-body">
                <div class="row mb-3">
                  <div class="col-10 mb-4 mb-md-0">
                    <h5><strong>Customized products</strong></h5>
                    <p>
                      Partner with one of 60,000 experienced manufacturers
                      with design &amp; production capabilities and on-time
                      delivery.
                    </p>
                  </div>

                  <div class="col-2 mb-4 mb-md-0">
                    <i class="fas fa-drafting-compass fa-4x" style="color: rgb(224, 216, 224)"></i>
                  </div>
                </div>

                <div class="row text-center">
                  <div class="col-md-6 mb-4 mb-md-0">
                    <p><strong>Premium OEM factories</strong></p>

                    <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/slides/309.jpg" class="w-100" alt="">
                    </a>
                  </div>

                  <div class="col-md-6 mb-4 mb-md-0">
                    <p><strong>Top-ranginkg suppliers</strong></p>

                    <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/slides/311.jpg" class="w-100" alt="">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-4 mb-md-0">
            <div class="card">
              <div class="card-body">
                <div class="row mb-3">
                  <div class="col-10 mb-4 mb-md-0">
                    <h5><strong>Ready-to-ship products</strong></h5>
                    <p>
                      Source from 15 million products that are ready to ship,
                      and leave the facility within 15 days.
                    </p>
                  </div>

                  <div class="col-2 mb-4 mb-md-0">
                    <i class="fas fa-plane fa-4x" style="color: rgb(224, 216, 224)"></i>
                  </div>
                </div>

                <div class="row text-center">
                  <div class="col-md-6 mb-4 mb-md-0">
                    <p><strong>Top-ranking products</strong></p>

                    <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/slides/086.jpg" class="w-100" alt="">
                    </a>
                  </div>

                  <div class="col-md-6 mb-4 mb-md-0">
                    <p><strong>Weekly deals</strong></p>

                    <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/slides/013.jpg" class="w-100" alt="">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Content-->

      <!--Section: Content-->
      <section class="mb-5">
        <h5 class="mb-4 text-uppercase"><strong>Clothes</strong></h5>

        <div class="shadow-1">
          <div class="row">
            <div class="col-lg-4 mb-4 mb-md-0">
              <div class="bg-image ripple hover-zoom rounded" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/117.jpg" class="w-100">
                <a href="#!">
                  <div class="mask" style="background-color: rgba(0, 0, 0, 0.4)">
                    <div class="d-flex justify-content-center align-items-start h-100">
                      <div class="text-center">
                        <h5 class="text-white mt-3">
                          Fashionable this season
                        </h5>
                        <button type="button" class="btn btn-outline-white btn-rounded btn-sm">
                          Source now
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-lg-8 mb-4 mb-md-0">
              <div class="row text-center">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 p-3">
                  <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/106.jpg" class="w-100" alt="">
                  </a>
                  <p class="mb-1 small">Discounts of the week</p>
                  <p class="mb-0"><strong>$1.98 - $2.52</strong></p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0 p-3">
                  <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/073.jpg" class="w-100" alt="">
                  </a>
                  <p class="mb-1 small">Discounts of the month</p>
                  <p class="mb-0"><strong>$1.98 - $2.52</strong></p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0 p-3">
                  <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/082.jpg" class="w-100" alt="">
                  </a>
                  <p class="mb-1 small">Deals of the day</p>
                  <p class="mb-0"><strong>$1.98 - $2.52</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Content-->

      <!--Section: Content-->
      <section class="mb-5">
        <h5 class="mb-4 text-uppercase"><strong>Electronics</strong></h5>

        <div class="shadow-1">
          <div class="row">
            <div class="col-lg-4 mb-4 mb-md-0">
              <div class="bg-image hover-zoom ripple rounded" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/008.jpg" class="w-100">
                <a href="#!">
                  <div class="mask" style="background-color: rgba(0, 0, 0, 0.4)">
                    <div class="d-flex justify-content-center align-items-start h-100">
                      <div class="text-center">
                        <h5 class="text-white mt-3">New design</h5>
                        <button type="button" class="btn btn-outline-white btn-rounded btn-sm">
                          Source now
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-lg-8 mb-4 mb-md-0">
              <div class="row text-center">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 p-3">
                  <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/019.jpg" class="w-100" alt="">
                  </a>
                  <p class="mb-1 small">Discounts of the week</p>
                  <p class="mb-0"><strong>$1.98 - $2.52</strong></p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0 p-3">
                  <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/014.jpg" class="w-100" alt="">
                  </a>
                  <p class="mb-1 small">Discounts of the month</p>
                  <p class="mb-0"><strong>$1.98 - $2.52</strong></p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0 p-3">
                  <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/058.jpg" class="w-100" alt="">
                  </a>
                  <p class="mb-1 small">Deals of the day</p>
                  <p class="mb-0"><strong>$1.98 - $2.52</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Content-->

      <!--Section: Content-->
      <section>
        <h5 class="mb-4 text-uppercase">
          <strong>Explore by Trending 2020</strong>
        </h5>

        <div class="row text-center">
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/132.jpg" class="w-100 rounded" alt="">
            </a>

            <p><strong>New arrivals</strong></p>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded" alt="">
            </a>

            <p><strong>Hot items</strong></p>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/071.jpg" class="w-100 rounded" alt="">
            </a>

            <p><strong>Best deals</strong></p>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/029.jpg" class="w-100 rounded" alt="">
            </a>

            <p><strong>Trending design</strong></p>
          </div>
        </div>

        <div class="row text-center">
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/001.jpg" class="w-100 rounded" alt="">
            </a>

            <p><strong>New arrivals</strong></p>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/007.jpg" class="w-100 rounded" alt="">
            </a>

            <p><strong>Hot items</strong></p>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/018.jpg" class="w-100 rounded" alt="">
            </a>

            <p><strong>Best deals</strong></p>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <a href="#!" class="ripple bg-image hover-zoom d-block mb-2" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/055.jpg" class="w-100 rounded" alt="">
            </a>

            <p><strong>Trending design</strong></p>
          </div>
        </div>
      </section>
      <!--Section: Content-->
    </div>

<div class="container">
      <!--Section: Featured-->
      <section>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Coming soon from The Drop</strong>
                </p>

                <a href="#!" class="ripple" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/041.jpg" class="w-100" alt="">
                </a>
              </div>
              <div class="card-footer border-0 text-center">
                <a class="btn btn-link ripple-surface-dark" href="#!" role="button" data-mdb-ripple-color="dark" style="">Learn more</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Discounts of the week</strong>
                </p>

                <div class="row">
                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/042.jpg" class="w-100" alt="">
                    </a>
                    <small>Watches</small>
                  </div>

                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/043.jpg" class="w-100" alt="">
                    </a>
                    <small>Photo cameras</small>
                  </div>

                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/044.jpg" class="w-100" alt="">
                    </a>
                    <small>Backpacks</small>
                  </div>

                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/045.jpg" class="w-100" alt="">
                    </a>
                    <small>Shoes</small>
                  </div>
                </div>
              </div>

              <div class="card-footer border-0 text-center">
                <a class="btn btn-link ripple-surface-dark" href="#!" role="button" data-mdb-ripple-color="dark" style="">Shop all</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Drones</strong>
                </p>

                <a href="#!" class="ripple" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/001.jpg" class="w-100" alt="">
                </a>
              </div>
              <div class="card-footer border-0 text-center">
                <a class="btn btn-link ripple-surface-dark" href="#!" role="button" data-mdb-ripple-color="dark" style="">See more details</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Discounts of the month</strong>
                </p>

                <div class="row">
                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/022.jpg" class="w-100" alt="">
                    </a>
                    <small>Food</small>
                  </div>

                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/023.jpg" class="w-100" alt="">
                    </a>
                    <small>Glasses</small>
                  </div>

                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/014.jpg" class="w-100" alt="">
                    </a>
                    <small>Headphones</small>
                  </div>

                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/025.jpg" class="w-100" alt="">
                    </a>
                    <small>Oldschool</small>
                  </div>
                </div>
              </div>

              <div class="card-footer border-0 text-center">
                <a class="btn btn-link ripple-surface-dark" href="#!" role="button" data-mdb-ripple-color="dark" style="">Shop all</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Deals of the day</strong>
                </p>

                <div class="row">
                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/052.jpg" class="w-100" alt="">
                    </a>
                    <small>Trousers</small>
                  </div>

                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/053.jpg" class="w-100" alt="">
                    </a>
                    <small>Headphones</small>
                  </div>

                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/054.jpg" class="w-100" alt="">
                    </a>
                    <small>T shirts</small>
                  </div>

                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/055.jpg" class="w-100" alt="">
                    </a>
                    <small>Smartphones</small>
                  </div>
                </div>
              </div>

              <div class="card-footer border-0 text-center">
                <a class="btn btn-link" href="#!" role="button" data-mdb-ripple-color="dark">Shop all</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Dressed to chill</strong>
                </p>

                <a href="#!" class="ripple" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/013.jpg" class="w-100" alt="">
                </a>
              </div>
              <div class="card-footer border-0 text-center">
                <a class="btn btn-link" href="#!" role="button" data-mdb-ripple-color="dark">Learn more</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Customers' most-loved</strong>
                </p>

                <div class="row">
                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/062.jpg" class="w-100" alt="">
                    </a>
                    <small>Bicycles</small>
                  </div>

                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/063.jpg" class="w-100" alt="">
                    </a>
                    <small>Clothes</small>
                  </div>

                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/064.jpg" class="w-100" alt="">
                    </a>
                    <small>Smartphones</small>
                  </div>

                  <div class="col-md-6 mb-4 mb-md-0">
                    <a href="#!" class="ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/065.jpg" class="w-100" alt="">
                    </a>
                    <small>Cosmetics</small>
                  </div>
                </div>
              </div>

              <div class="card-footer border-0 text-center">
                <a class="btn btn-link" href="#!" role="button" data-mdb-ripple-color="dark">Shop all</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Surprise?</strong>
                </p>

                <a href="#!" class="ripple" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/002.jpg" class="w-100" alt="">
                </a>
              </div>
              <div class="card-footer border-0 text-center">
                <a class="btn btn-link" href="#!" role="button" data-mdb-ripple-color="dark">See more details</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Featured-->

      <!--Section: Categories-->
      <section class="mb-4">
        <div class="card">
          <div class="card-body">
            <p><strong>All you need to get holiday ready</strong></p>

            <div class="multi-carousel text-center">
              <div class="multi-carousel-inner">
                <div class="multi-carousel-item" style="width: 33.3333%;">
                  <a href="#!" class="ripple text-reset" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/003.jpg" class="d-block w-100 mb-2" alt="...">
                    <span>Shoes</span>
                  </a>
                </div>
                <div class="multi-carousel-item" style="width: 33.3333%;">
                  <a href="#!" class="ripple text-reset" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/010.jpg" class="d-block w-100 mb-2" alt="...">
                    <span>Glasses</span>
                  </a>
                </div>
                <div class="multi-carousel-item" style="width: 33.3333%;">
                  <a href="#!" class="ripple text-reset" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/048.jpg" class="d-block w-100 mb-2" alt="...">
                    <span>Watches</span>
                  </a>
                </div>
                <div class="multi-carousel-item" style="width: 33.3333%;">
                  <a href="#!" class="ripple text-reset" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/118.jpg" class="d-block w-100 mb-2" alt="...">
                    <span>Socks</span>
                  </a>
                </div>
              </div>
              <a class="carousel-control-prev" tabindex="0" role="button" data-mdb-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a class="carousel-control-next" tabindex="0" role="button" data-mdb-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Categories-->

      <!--Section: Recommended-->
      <section class="mb-4">
        <div class="card">
          <div class="card-body">
            <p><strong>Recommended items</strong></p>

            <div class="multi-carousel text-center">
              <div class="multi-carousel-inner">
                <div class="multi-carousel-item" style="width: 33.3333%;">
                  <a href="#!" class="ripple text-reset" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/004.jpg" class="d-block w-100 mb-2" alt="...">
                    <span>Sneakers</span>
                  </a>
                </div>
                <div class="multi-carousel-item" style="width: 33.3333%;">
                  <a href="#!" class="ripple text-reset" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/005.jpg" class="d-block w-100 mb-2" alt="...">
                    <span>Autumn</span>
                  </a>
                </div>
                <div class="multi-carousel-item" style="width: 33.3333%;">
                  <a href="#!" class="ripple text-reset" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/006.jpg" class="d-block w-100 mb-2" alt="...">
                    <span>Books</span>
                  </a>
                </div>
                <div class="multi-carousel-item" style="width: 33.3333%;">
                  <a href="#!" class="ripple text-reset" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/017.jpg" class="d-block w-100 mb-2" alt="...">
                    <span>Smartphones</span>
                  </a>
                </div>
              </div>
              <a class="carousel-control-prev" tabindex="0" role="button" data-mdb-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a class="carousel-control-next" tabindex="0" role="button" data-mdb-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Recommended-->

      <!--Section: Trending-->
      <section class="mb-4">
        <div class="card">
          <div class="card-body">
            <p><strong>Trending deals</strong></p>

            <div class="multi-carousel text-center">
              <div class="multi-carousel-inner">
                <div class="multi-carousel-item" style="width: 33.3333%;">
                  <a href="#!" class="ripple text-reset" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/021.jpg" class="d-block w-100 mb-2" alt="...">
                    <span>Natural cosmetics</span>
                  </a>
                </div>
                <div class="multi-carousel-item" style="width: 33.3333%;">
                  <a href="#!" class="ripple text-reset" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/028.jpg" class="d-block w-100 mb-2" alt="...">
                    <span>Plants</span>
                  </a>
                </div>
                <div class="multi-carousel-item" style="width: 33.3333%;">
                  <a href="#!" class="ripple text-reset" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/029.jpg" class="d-block w-100 mb-2" alt="...">
                    <span>Suits</span>
                  </a>
                </div>
                <div class="multi-carousel-item" style="width: 33.3333%;">
                  <a href="#!" class="ripple text-reset" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/horizontal/031.jpg" class="d-block w-100 mb-2" alt="...">
                    <span>Tablets</span>
                  </a>
                </div>
              </div>
              <a class="carousel-control-prev" tabindex="0" role="button" data-mdb-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a class="carousel-control-next" tabindex="0" role="button" data-mdb-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Trending-->

      <!--Section: MSC-->
      <section>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Holiday Deals</strong>
                </p>

                <a href="#!" class="ripple" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/041.jpg" class="w-100" alt="">
                </a>
              </div>
              <div class="card-footer border-0 text-center">
                <a class="btn btn-link" href="#!" role="button" data-mdb-ripple-color="dark">Learn more</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Deals 4 stars and up</strong>
                </p>

                <a href="#!" class="ripple" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/001.jpg" class="w-100" alt="">
                </a>
              </div>
              <div class="card-footer border-0 text-center">
                <a class="btn btn-link" href="#!" role="button" data-mdb-ripple-color="dark">Learn more</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Shop beauty gifts</strong>
                </p>

                <a href="#!" class="ripple" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/025.jpg" class="w-100" alt="">
                </a>
              </div>
              <div class="card-footer border-0 text-center">
                <a class="btn btn-link" href="#!" role="button" data-mdb-ripple-color="dark">Learn more</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Gift ideas</strong>
                </p>

                <a href="#!" class="ripple" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/018.jpg" class="w-100" alt="">
                </a>
              </div>
              <div class="card-footer border-0 text-center">
                <a class="btn btn-link" href="#!" role="button" data-mdb-ripple-color="dark">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: MSC-->

      <!--Section: Banner-->
      <section class="mb-4">
        <div class="bg-image ripple shadow-1-strong rounded" data-mdb-ripple-color="light" style="max-height: 250px">
          <img src="https://mdbootstrap.com/img/new/slides/311.jpg" class="w-100">
          <a href="#!">
            <div class="mask" style="background-color: rgba(0, 0, 0, 0.4)">
              <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-center">
                  <h2 class="text-white mb-3">Grant a few birthday wishes</h2>
                  <button type="button" class="btn btn-outline-light">
                    Shop gift cards
                  </button>
                </div>
              </div>
            </div>
            <div class="hover-overlay">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
            </div>
          </a>
        </div>
      </section>
      <!--Section: Banner-->

      <!--Section: MSC-->
      <section>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Deals on top brands</strong>
                </p>

                <a href="#!" class="ripple" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/031.jpg" class="w-100" alt="">
                </a>
              </div>
              <div class="card-footer border-0 text-center">
                <a class="btn btn-link" href="#!" role="button" data-mdb-ripple-color="dark">Learn more</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Artistic deals</strong>
                </p>

                <a href="#!" class="ripple" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/067.jpg" class="w-100" alt="">
                </a>
              </div>
              <div class="card-footer border-0 text-center">
                <a class="btn btn-link" href="#!" role="button" data-mdb-ripple-color="dark">Learn more</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Original offers</strong>
                </p>

                <a href="#!" class="ripple" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/084.jpg" class="w-100" alt="">
                </a>
              </div>
              <div class="card-footer border-0 text-center">
                <a class="btn btn-link" href="#!" role="button" data-mdb-ripple-color="dark">Learn more</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body text-center pb-0">
                <p class="card-title mb-3">
                  <strong>Fashionable this season</strong>
                </p>

                <a href="#!" class="ripple" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/085.jpg" class="w-100" alt="">
                </a>
              </div>
              <div class="card-footer border-0 text-center">
                <a class="btn btn-link" href="#!" role="button" data-mdb-ripple-color="dark">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: MSC-->
    </div>
    `;
