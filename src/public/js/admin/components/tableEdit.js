const tableEdit = document.querySelector('#tableEdit');
tableEdit.innerHTML =`<div class="d-flex justify-content-end mb-4">
  <div class="form-outline">
    <input
      data-mdb-search
      data-mdb-target="#table_confirm_delete"
      type="text"
      id="search_confirm_delete"
      class="form-control"
    />
    <label class="form-label" for="search_confirm_delete">Search</label>
  </div>
  <button
    class="btn btn-primary btn-sm ms-3"
    data-mdb-add-entry
    data-mdb-target="#table_confirm_delete"
  >
    <i class="fa fa-plus"></i>
  </button>
</div>
<hr />
<div id="table_confirm_delete"></div>
`;
