const breadcrumb = document.querySelector('#breadcrumb');
breadcrumb.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page"><a href="#">Data</a></li>
      </ol>
    </nav>
  </div>
</nav>`
