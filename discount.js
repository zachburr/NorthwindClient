document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('discount-row').addEventListener('click', function (e) {
    if (e.target.classList.contains('discount')) {
      e.preventDefault();
      document.getElementById('product').innerHTML = e.target.dataset['product'];
      document.getElementById('title').innerHTML = e.target.dataset['title'];
      document.getElementById('code').innerHTML = e.target.dataset['code'];
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    }
  });
  //https://coreui.io/answers/how-to-detect-escape-key-in-javascript/#:~:text=The%20most%20reliable%20approach%20is,Check%20for%20event.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).hide();
    }
  })
});