

const header = document.querySelector('#header');
header.innerHTML =  ` <!-- Navbar -->
    <nav class="navbar  navbar-expand-lg  navbar-dark  d-block p-0  ">

    <div class="bg-info  fixed-top ">
      <div class="container mx-auto">

        <!-- Brand -->


        <!-- Collapse -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader"
          aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Links -->
        <div class=" navbar-collapse" id="navbarHeader">

          <!-- Left -->
          <ul class="navbar-nav mr-auto">
             </li>
            <li class="nav-item">
               <a href=""
                class="nav-link waves-effect text-center" target="_blank">
                 <div class="text-center">
               <i class="fa-solid fa-house-user fa-lg"></i>
               </div>
                    <span>home page</span>
              </a>


            </li>
            <li class="nav-item">
               <a href=""
                class="nav-link waves-effect text-center" target="_blank">
                 <div class="text-center">
                <i class="fa-solid fa-pager fa-lg"></i>
               </div>
                    <span>filter page</span>
              </a>



          <li class="nav-item">
              <a href=""
                class="nav-link waves-effect  text-center "  target="_blank">
                 <div class="text-center">
                <i class="fa-solid fa-clock-rotate-left fa-lg"></i></i>
               </div>
                    <span>history buy</span>
              </a>
            </li>
 <li class="nav-item dropdown">
            <a class="nav-link  waves-effect text-center" href="#" id="notiDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
             <div class="text-center">  <i class="fa-regular fa-bell fa-lg"></i> <span class="badge badge-danger ">4</span></div>
           <span>thong bao</span>
            </a>

            <div class="dropdown-menu dropdown-primary " aria-labelledby="notiDropdown">
              <a class="dropdown-item waves-effect waves-light " href="#">
                <i class="far fa-money-bill-alt mr-2" aria-hidden="true"></i>
                <span>New order received</span>
                <span class="float-right"><i class="far fa-clock" aria-hidden="true"></i> 13 min</span>
              </a>
              <a class="dropdown-item waves-effect waves-light" href="#">
                <i class="far fa-money-bill-alt mr-2" aria-hidden="true"></i>
                <span>New order received</span>
                <span class="float-right"><i class="far fa-clock" aria-hidden="true"></i> 33 min</span>
              </a>
              <a class="dropdown-item waves-effect waves-light" href="#">
                <i class="fas fa-chart-line mr-2" aria-hidden="true"></i>
                <span>Your campaign is about to end</span>
                <span class="float-right"><i class="far fa-clock" aria-hidden="true"></i> 53 min</span>
              </a>
            </div>
          </li>

</li>
            <!-- Dropdown -->
<style>.dropdown-submenu {
    position: relative;
}

.dropdown-submenu>.dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: 1px;
    -webkit-border-radius: 0 6px 6px 6px;
    -moz-border-radius: 0 6px 6px;
    border-radius: 0 6px 6px 6px;
}

.dropdown-submenu:hover>.dropdown-menu {
    display: block;
}

.dropdown-submenu>a:after {
    display: block;
    content: " ";
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-left-color: #ccc;
    margin-top: 5px;
    margin-right: -5px;
}

.dropdown-submenu:hover>a:after {
    border-left-color: #fff;
}

.dropdown-submenu.pull-left {
    float: none;
}

.dropdown-submenu.pull-left>.dropdown-menu {
    left: 100%;
    margin-left: 10px;
    -webkit-border-radius: 6px 0 6px 6px;
    -moz-border-radius: 6px 0 6px 6px;
    border-radius: 6px 0 6px 6px;
}
</style>

<li class="nav-item dropdown ">
    <a href="#"  id="dropdown" data-toggle="dropdown"
      class=" nav-link text-center" aria-haspopup="true"
      aria-expanded="false"><div class="text-center"> <i class="fa-regular fa-rectangle-list fa-lg"></i></div>
           <span>category</span></a>

    <ul style="list-style-type:none" class="dropdown-menu mt-2 rounded-0 white border-0 z-depth-1">
      <li class="dropdown-item dropdown-submenu p-0">
        <a href="#" data-toggle="dropdown" class="dropdown-toggle  dropdown-item w-100 nav-link">Click Me! </a>
        <ul class="dropdown-menu  rounded-0 white border-0 z-depth-1">
          <li class="dropdown-item p-0">
            <a href="#" class="nav-link dropdown-item w-100">Hey</a>
          </li>
          <li class="dropdown-item p-0">
            <a href="#" class="nav-link dropdown-item w-100">Hi</a>
          </li>
          <li class="dropdown-item p-0">
            <a href="#" class="nav-link dropdown-item w-100">Hello</a>
          </li>
        </ul>
      </li>
      <li class="dropdown-item dropdown-submenu p-0">
        <a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle dropdown-item w-100">Click Me Too! </a>
        <ul class="dropdown-menu mr-2 rounded-0  white border-0 z-depth-1 r-100">
          <li class="dropdown-item p-0">
            <a href="#" class=" nav-link dropdown-item w-100">How</a>
          </li>
          <li class="dropdown-item p-0">
            <a href="#" class=" nav-link dropdown-item w-100">are</a>
          </li>
          <li class="dropdown-item dropdown-submenu p-0">
            <a href="#" data-toggle="dropdown" class="dropdown-toggle nav-link dropdown-item w-100">Click Me Too! </a>
            <ul style="list-style-type:none"
              class="dropdown-menu mr-2 rounded-0 white border-0 z-depth-1 r-100 ">
              <li class="dropdown-item p-0">
                <a href="#" class="nav-link dropdown-item w-100">How</a>
              </li>
              <li class="dropdown-item p-0">
                <a href="#" class="nav-link dropdown-item w-100">are</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
</li>
          </ul>


            <div class="mx-auto d-block w-25">
        <form class="form-inline mx-auto  ">
  <input class="form-control form-control-md mr-3 w-75" type="text" placeholder="Search"
    aria-label="Search">
  <i class="fas fa-search fa-lg" aria-hidden="true"></i>
</form>
</div>
          <!-- Right -->
          <ul class="navbar-nav nav-flex-icons ml-auto justify-content-center">


 <li class="nav-item">
              <a href=""
                class="nav-link waves-effect text-center" target="_blank">
                 <div class="text-center">
               <i class="fa-regular fa-heart fa-lg"></i>
                <span class="badge badge-danger ">4</span></div>
                    <span>yeu thich</span>
              </a>
            </li>


<li class="nav-item">
 <a href=""
                class="nav-link waves-effect text-center " target="_blank">
           <div class="text-center"> <i class="fa-solid fa-cart-arrow-down fa-lg"></i> <span class="badge badge-danger ">4</span></div>
           <span>gio hang</span>

              </a>
</li>

      <li class="nav-item dropdown">
            <a class="nav-link  waves-effect text-center" href="#" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
             <div class="text-center"> <i class="fa-regular fa-user fa-lg"></i></div>
           <span>tai khoan cua toi</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="userDropdown">
            <a class="dropdown-item waves-effect waves-light" href="#">log in</a>
            <a class="dropdown-item waves-effect waves-light" href="#">Log Out</a>
            </div>
          </li>

</li>


          </ul>

        </div>
</div>
      </div>
<div class="bg-default " style="margin-top:4rem">
<div class="container mx-auto  ">


    <div class=" navbar-collapse pt-1" id="navbarHeader">
  <ul class="navbar-nav mr-auto">
            <li class="nav-item">
               <a href=""
                class="nav-link " target="_blank">
             <div class="text-center text-uppercase">
<i class="fa-solid fa-mobile-screen"></i>
                    <span  >filter page</span>
                    </div>
              </a>


            </li>
             <li class="nav-item">
               <a href=""
                class="nav-link waves-effect" target="_blank">
  <div class="text-center text-uppercase">
               <i class="fa-solid fa-mobile-screen"></i>

                    <span>filter page</span>
                    </div>
              </a>


            </li>
             <li class="nav-item">
               <a href=""
                class="nav-link waves-effect" target="_blank">
  <div class="text-center text-uppercase">
               <i class="fa-solid fa-mobile-screen"></i>

                    <span>filter page</span>
                    </div>
              </a>


            </li>
             <li class="nav-item">
               <a href=""
                class="nav-link waves-effect" target="_blank">
  <div class="text-center text-uppercase">
               <i class="fa-solid fa-mobile-screen"></i>

                    <span>filter page</span>
                    </div>
              </a>


            </li>
             <li class="nav-item">
               <a href=""
                class="nav-link waves-effect" target="_blank">
  <div class="text-center text-uppercase">
               <i class="fa-solid fa-mobile-screen"></i>

                    <span>filter page</span>
                    </div>
              </a>


            </li>
             <li class="nav-item">
               <a href=""
                class="nav-link waves-effect" target="_blank">
  <div class="text-center text-uppercase">
               <i class="fa-solid fa-mobile-screen"></i>

                    <span>filter page</span>
                    </div>
              </a>


            </li>
</div>
</div>
</div>
    </nav>

    <!-- Navbar -->


`;
