
const fileUpload = document.querySelector('#fileUpload');
fileUpload.innerHTML =
  `<div class="file-upload-wrapper">
  <input
    id="dnd-multiple-with-file-limit"
    type="file"
    class="file-upload-input"
    data-mdb-multiple="true"
    data-mdb-max-file-quantity="3"
    data-mdb-file-upload="file-upload"
  />
</div>`;

