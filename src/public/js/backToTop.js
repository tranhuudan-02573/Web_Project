
const backToTop = document.querySelector('#backToTop');
backToTop.innerHTML = `
    <style>#btn-back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
}</style>
<button
        type="button"
        class="btn btn-danger btn-floating btn-lg"
        id="btn-back-to-top"
        >
  <i class="fas fa-arrow-up"></i>
</button> 
`;
