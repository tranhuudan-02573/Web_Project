const accordion = document.querySelector('#accordion');
accordion.innerHTML = `<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne">
      <div class="accordion-body">
       <section class="mb-5">
            <!-- Single item -->
            <div class="row border-bottom mb-4">
              <div class="col-md-2 mb-4 mb-md-0">
                <div class="
                            bg-image
                            ripple
                            rounded-5
                            mb-4
                            overflow-hidden
                            d-block
                            " data-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/085.jpg" class="w-100" alt="">
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style="background-color: hsla(0, 0%, 98.4%, 0.2)"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-md-8 mb-4 mb-md-0">
                <p class="fw-bold">Sophisticated dress</p>
                <p class="mb-1">
                  <span class="text-muted me-2">Size:</span><span>8.5</span>
                </p>
                <p>
                  <span class="text-muted me-2">Color:</span><span>Gray</span>
                </p>

                <p class="mb-4">
                  <a href="" class="text-muted pe-3 border-end"><small><i class="fas fa-trash me-2"></i>Remove</small></a>
                  <a href="" class="text-muted ps-3"><small><i class="fas fa-heart me-2"></i>Move to wish
                    list</small></a>
                </p>
              </div>

              <div class="col-md-2 mb-4 mb-md-0">
                <div class="form-outline mb-4">
                  <input type="number" id="typeNumber" class="form-control active" value="1" min="1">
                  <label class="form-label" for="typeNumber" style="margin-left: 0px;">Quantity</label>
                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 55.2px;"></div><div class="form-notch-trailing"></div></div></div>

                <h5 class="mb-2">
                  <s class="text-muted me-2 small align-middle">$119</s><span class="align-middle">$101</span>
                </h5>
                <p class="text-danger"><small>You save 15%</small></p>
              </div>
            </div>
            <!-- Single item -->

            <!-- Single item -->
            <div class="row border-bottom mb-4">
              <div class="col-md-2 mb-4 mb-md-0">
                <div class="
                            bg-image
                            ripple
                            rounded-5
                            mb-4
                            overflow-hidden
                            d-block
                            " data-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/114.jpg" class="w-100" alt="">
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style="background-color: hsla(0, 0%, 98.4%, 0.2)"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-md-8 mb-4 mb-md-0">
                <p class="fw-bold">Fashionable coat</p>
                <p class="mb-1">
                  <span class="text-muted me-2">Size:</span><span>8.5</span>
                </p>
                <p>
                  <span class="text-muted me-2">Color:</span><span>Beige</span>
                </p>

                <p class="mb-4">
                  <a href="" class="text-muted pe-3 border-end"><small><i class="fas fa-trash me-2"></i>Remove</small></a>
                  <a href="" class="text-muted ps-3"><small><i class="fas fa-heart me-2"></i>Move to wish
                    list</small></a>
                </p>
              </div>

              <div class="col-md-2 mb-4 mb-md-0">
                <div class="form-outline mb-4">
                  <input type="number" id="typeNumber" class="form-control active" value="1" min="1">
                  <label class="form-label" for="typeNumber" style="margin-left: 0px;">Quantity</label>
                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 55.2px;"></div><div class="form-notch-trailing"></div></div></div>

                <h5 class="mb-2">
                  <s class="text-muted me-2 small align-middle">$119</s><span class="align-middle">$101</span>
                </h5>
                <p class="text-danger"><small>You save 15%</small></p>
              </div>
            </div>
            <!-- Single item -->

            <!-- Single item -->
            <div class="row border-bottom mb-4">
              <div class="col-md-2 mb-4 mb-md-0">
                <div class="
                            bg-image
                            ripple
                            rounded-5
                            mb-4
                            overflow-hidden
                            d-block
                            " data-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/084.jpg" class="w-100" alt="">
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style="background-color: hsla(0, 0%, 98.4%, 0.2)"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-md-8 mb-4 mb-md-0">
                <p class="fw-bold">Hot skirt</p>
                <p class="mb-1">
                  <span class="text-muted me-2">Size:</span><span>8.5</span>
                </p>
                <p>
                  <span class="text-muted me-2">Color:</span><span>Multicolour</span>
                </p>

                <p class="mb-4">
                  <a href="" class="text-muted pe-3 border-end"><small><i class="fas fa-trash me-2"></i>Remove</small></a>
                  <a href="" class="text-muted ps-3"><small><i class="fas fa-heart me-2"></i>Move to wish
                    list</small></a>
                </p>
              </div>

              <div class="col-md-2 mb-4 mb-md-0">
                <div class="form-outline mb-4">
                  <input type="number" id="typeNumber" class="form-control active" value="1" min="1">
                  <label class="form-label" for="typeNumber" style="margin-left: 0px;">Quantity</label>
                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 55.2px;"></div><div class="form-notch-trailing"></div></div></div>

                <h5 class="mb-2">
                  <s class="text-muted me-2 small align-middle">$119</s><span class="align-middle">$101</span>
                </h5>
                <p class="text-danger mb-4"><small>You save 15%</small></p>
              </div>
            </div>
            <!-- Single item -->
          </section>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
        aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
      <div class="accordion-body">
       <section class="mb-5">
            <!-- Single item -->
            <div class="row border-bottom mb-4">
              <div class="col-md-2 mb-4 mb-md-0">
                <div class="
                            bg-image
                            ripple
                            rounded-5
                            mb-4
                            overflow-hidden
                            d-block
                            " data-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/085.jpg" class="w-100" alt="">
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style="background-color: hsla(0, 0%, 98.4%, 0.2)"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-md-8 mb-4 mb-md-0">
                <p class="fw-bold">Sophisticated dress</p>
                <p class="mb-1">
                  <span class="text-muted me-2">Size:</span><span>8.5</span>
                </p>
                <p>
                  <span class="text-muted me-2">Color:</span><span>Gray</span>
                </p>

                <p class="mb-4">
                  <a href="" class="text-muted pe-3 border-end"><small><i class="fas fa-trash me-2"></i>Remove</small></a>
                  <a href="" class="text-muted ps-3"><small><i class="fas fa-heart me-2"></i>Move to wish
                    list</small></a>
                </p>
              </div>

              <div class="col-md-2 mb-4 mb-md-0">
                <div class="form-outline mb-4">
                  <input type="number" id="typeNumber" class="form-control active" value="1" min="1">
                  <label class="form-label" for="typeNumber" style="margin-left: 0px;">Quantity</label>
                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 55.2px;"></div><div class="form-notch-trailing"></div></div></div>

                <h5 class="mb-2">
                  <s class="text-muted me-2 small align-middle">$119</s><span class="align-middle">$101</span>
                </h5>
                <p class="text-danger"><small>You save 15%</small></p>
              </div>
            </div>
            <!-- Single item -->

            <!-- Single item -->
            <div class="row border-bottom mb-4">
              <div class="col-md-2 mb-4 mb-md-0">
                <div class="
                            bg-image
                            ripple
                            rounded-5
                            mb-4
                            overflow-hidden
                            d-block
                            " data-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/114.jpg" class="w-100" alt="">
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style="background-color: hsla(0, 0%, 98.4%, 0.2)"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-md-8 mb-4 mb-md-0">
                <p class="fw-bold">Fashionable coat</p>
                <p class="mb-1">
                  <span class="text-muted me-2">Size:</span><span>8.5</span>
                </p>
                <p>
                  <span class="text-muted me-2">Color:</span><span>Beige</span>
                </p>

                <p class="mb-4">
                  <a href="" class="text-muted pe-3 border-end"><small><i class="fas fa-trash me-2"></i>Remove</small></a>
                  <a href="" class="text-muted ps-3"><small><i class="fas fa-heart me-2"></i>Move to wish
                    list</small></a>
                </p>
              </div>

              <div class="col-md-2 mb-4 mb-md-0">
                <div class="form-outline mb-4">
                  <input type="number" id="typeNumber" class="form-control active" value="1" min="1">
                  <label class="form-label" for="typeNumber" style="margin-left: 0px;">Quantity</label>
                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 55.2px;"></div><div class="form-notch-trailing"></div></div></div>

                <h5 class="mb-2">
                  <s class="text-muted me-2 small align-middle">$119</s><span class="align-middle">$101</span>
                </h5>
                <p class="text-danger"><small>You save 15%</small></p>
              </div>
            </div>
            <!-- Single item -->

            <!-- Single item -->
            <div class="row border-bottom mb-4">
              <div class="col-md-2 mb-4 mb-md-0">
                <div class="
                            bg-image
                            ripple
                            rounded-5
                            mb-4
                            overflow-hidden
                            d-block
                            " data-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/084.jpg" class="w-100" alt="">
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style="background-color: hsla(0, 0%, 98.4%, 0.2)"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-md-8 mb-4 mb-md-0">
                <p class="fw-bold">Hot skirt</p>
                <p class="mb-1">
                  <span class="text-muted me-2">Size:</span><span>8.5</span>
                </p>
                <p>
                  <span class="text-muted me-2">Color:</span><span>Multicolour</span>
                </p>

                <p class="mb-4">
                  <a href="" class="text-muted pe-3 border-end"><small><i class="fas fa-trash me-2"></i>Remove</small></a>
                  <a href="" class="text-muted ps-3"><small><i class="fas fa-heart me-2"></i>Move to wish
                    list</small></a>
                </p>
              </div>

              <div class="col-md-2 mb-4 mb-md-0">
                <div class="form-outline mb-4">
                  <input type="number" id="typeNumber" class="form-control active" value="1" min="1">
                  <label class="form-label" for="typeNumber" style="margin-left: 0px;">Quantity</label>
                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 55.2px;"></div><div class="form-notch-trailing"></div></div></div>

                <h5 class="mb-2">
                  <s class="text-muted me-2 small align-middle">$119</s><span class="align-middle">$101</span>
                </h5>
                <p class="text-danger mb-4"><small>You save 15%</small></p>
              </div>
            </div>
            <!-- Single item -->
          </section>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#panelsStayOpen-collapseThree" aria-expanded="false"
        aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree">
      <div class="accordion-body">
       <section class="mb-5">
            <!-- Single item -->
            <div class="row border-bottom mb-4">
              <div class="col-md-2 mb-4 mb-md-0">
                <div class="
                            bg-image
                            ripple
                            rounded-5
                            mb-4
                            overflow-hidden
                            d-block
                            " data-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/085.jpg" class="w-100" alt="">
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style="background-color: hsla(0, 0%, 98.4%, 0.2)"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-md-8 mb-4 mb-md-0">
                <p class="fw-bold">Sophisticated dress</p>
                <p class="mb-1">
                  <span class="text-muted me-2">Size:</span><span>8.5</span>
                </p>
                <p>
                  <span class="text-muted me-2">Color:</span><span>Gray</span>
                </p>

                <p class="mb-4">
                  <a href="" class="text-muted pe-3 border-end"><small><i class="fas fa-trash me-2"></i>Remove</small></a>
                  <a href="" class="text-muted ps-3"><small><i class="fas fa-heart me-2"></i>Move to wish
                    list</small></a>
                </p>
              </div>

              <div class="col-md-2 mb-4 mb-md-0">
                <div class="form-outline mb-4">
                  <input type="number" id="typeNumber" class="form-control active" value="1" min="1">
                  <label class="form-label" for="typeNumber" style="margin-left: 0px;">Quantity</label>
                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 55.2px;"></div><div class="form-notch-trailing"></div></div></div>

                <h5 class="mb-2">
                  <s class="text-muted me-2 small align-middle">$119</s><span class="align-middle">$101</span>
                </h5>
                <p class="text-danger"><small>You save 15%</small></p>
              </div>
            </div>
            <!-- Single item -->

            <!-- Single item -->
            <div class="row border-bottom mb-4">
              <div class="col-md-2 mb-4 mb-md-0">
                <div class="
                            bg-image
                            ripple
                            rounded-5
                            mb-4
                            overflow-hidden
                            d-block
                            " data-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/114.jpg" class="w-100" alt="">
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style="background-color: hsla(0, 0%, 98.4%, 0.2)"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-md-8 mb-4 mb-md-0">
                <p class="fw-bold">Fashionable coat</p>
                <p class="mb-1">
                  <span class="text-muted me-2">Size:</span><span>8.5</span>
                </p>
                <p>
                  <span class="text-muted me-2">Color:</span><span>Beige</span>
                </p>

                <p class="mb-4">
                  <a href="" class="text-muted pe-3 border-end"><small><i class="fas fa-trash me-2"></i>Remove</small></a>
                  <a href="" class="text-muted ps-3"><small><i class="fas fa-heart me-2"></i>Move to wish
                    list</small></a>
                </p>
              </div>

              <div class="col-md-2 mb-4 mb-md-0">
                <div class="form-outline mb-4">
                  <input type="number" id="typeNumber" class="form-control active" value="1" min="1">
                  <label class="form-label" for="typeNumber" style="margin-left: 0px;">Quantity</label>
                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 55.2px;"></div><div class="form-notch-trailing"></div></div></div>

                <h5 class="mb-2">
                  <s class="text-muted me-2 small align-middle">$119</s><span class="align-middle">$101</span>
                </h5>
                <p class="text-danger"><small>You save 15%</small></p>
              </div>
            </div>
            <!-- Single item -->

            <!-- Single item -->
            <div class="row border-bottom mb-4">
              <div class="col-md-2 mb-4 mb-md-0">
                <div class="
                            bg-image
                            ripple
                            rounded-5
                            mb-4
                            overflow-hidden
                            d-block
                            " data-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/084.jpg" class="w-100" alt="">
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style="background-color: hsla(0, 0%, 98.4%, 0.2)"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-md-8 mb-4 mb-md-0">
                <p class="fw-bold">Hot skirt</p>
                <p class="mb-1">
                  <span class="text-muted me-2">Size:</span><span>8.5</span>
                </p>
                <p>
                  <span class="text-muted me-2">Color:</span><span>Multicolour</span>
                </p>

                <p class="mb-4">
                  <a href="" class="text-muted pe-3 border-end"><small><i class="fas fa-trash me-2"></i>Remove</small></a>
                  <a href="" class="text-muted ps-3"><small><i class="fas fa-heart me-2"></i>Move to wish
                    list</small></a>
                </p>
              </div>

              <div class="col-md-2 mb-4 mb-md-0">
                <div class="form-outline mb-4">
                  <input type="number" id="typeNumber" class="form-control active" value="1" min="1">
                  <label class="form-label" for="typeNumber" style="margin-left: 0px;">Quantity</label>
                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 55.2px;"></div><div class="form-notch-trailing"></div></div></div>

                <h5 class="mb-2">
                  <s class="text-muted me-2 small align-middle">$119</s><span class="align-middle">$101</span>
                </h5>
                <p class="text-danger mb-4"><small>You save 15%</small></p>
              </div>
            </div>
            <!-- Single item -->
          </section>
      </div>
    </div>
  </div>
</div>`
