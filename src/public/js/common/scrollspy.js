`<div class="row">
  <div class="col-md-8">
    <!-- Spied element -->
    <div
      data-mdb-spy="scroll"
      data-mdb-target="#scrollspy-collapsible"
      data-mdb-offset="0"
      class="scrollspy-example"
    >
      <section id="example-1-collapsible">
        <h3>Section 1</h3>
        ...
      </section>
      <section id="example-2-collapsible">
        <h3>Section 2</h3>
        ...
      </section>
      <section id="example-3-collapsible">
        <h3>Section 3</h3>
        ...
        <section id="example-sub-A-collapsible">
          <h3>Subsection A</h3>
          ...
        </section>
        <section id="example-sub-B-collapsible">
          <h3>Subsection B</h3>
          ...
        </section>
      </section>
      <section id="example-4-collapsible">
        <h3>Section 4</h3>
        ...
      </section>
    </div>
    <!-- Spied element -->
  </div>

  <div class="col-md-4">
    <!-- Scrollspy -->
    <div id="scrollspy-collapsible" class="sticky-top">
      <ul class="nav flex-column nav-pills menu-sidebar">
        <li class="nav-item">
          <a class="nav-link" href="#example-1-collapsible">Section 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#example-2-collapsible">Section 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsible-scrollspy" href="#example-3-collapsible">Section 3</a>
          <ul class="nav flex-column ps-3">
            <li class="nav-item">
              <a class="nav-link" href="#example-sub-A-collapsible">Subsection A</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#example-sub-B-collapsible">Subsection B</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#example-4-collapsible">Section 4</a>
        </li>
      </ul>
    </div>
    <!-- Scrollspy -->
  </div>
</div>
<style>/* Styles required only for the example above */
.scrollspy-example-collapsible {
  position: relative;
  height: 200px;
  overflow: auto;
}</style>

`
