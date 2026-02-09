function getRandomInteger(min, max) {
    min = Math.ceil(min); // Ensure min is an integer
    max = Math.floor(max); // Ensure max is an integer
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min); 
}

document.addEventListener("DOMContentLoaded", function () {
  const seekers = ["animate__bounce", "animate__flash", "animate__pulse", "animate__rubberBand", "animate__shakeX", "animate__shakeY", "animate__headShake", "animate__swing", "animate__tada", "animate__wobble", "animate__jello", "animate__heartBeat"]
  const num = getRandomInteger(0, seekers.length)
  console.log(num)
  document.getElementById('greeting').classList.add("animate__animated", seekers[num] );
  const elem = document.getElementById('dob');
      const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });
  // uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
    // event listener for check/uncheck
  document.getElementById('checkbox-card').addEventListener('change', function(e){
    if (e.target.classList.contains('form-check-input')) {
            const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });
  document.getElementById('submit').addEventListener('click', function (e){
    // if (e.target.classList.contains('form-check-input')){
    //   bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();

    // }
    let selected = false
    document.querySelectorAll('.form-check-input').forEach(c => c.checked ? selected = true : null);
    if(e.target.classList.contains('btn') && selected == false)
    {
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    }
  });
  document.getElementById('all').addEventListener('click', function (e){
      document.querySelectorAll('.form-check-input').forEach(c => {
        c.checked = true;
        const elem = document.getElementById(c.id + 'Img');
        elem.style.visibility = "visible";
        elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
        // c.checked ?
          elem.classList.add("animate__animated", "animate__bounceInDown") //:
          // elem.classList.add("animate__animated", "animate__bounceOutUp");
      });
  });
  document.getElementById('none').addEventListener('click', function (e){
    document.querySelectorAll('.form-check-input').forEach(c => {
        c.checked = false;
        const elem = document.getElementById(c.id + 'Img');
        elem.style.visibility = "visible";
        elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
        // c.checked ?
          // elem.classList.add("animate__animated", "animate__bounceInDown") :
          elem.classList.add("animate__animated", "animate__bounceOutUp");
      });
  })
  document.getElementById('checkbox-card').addEventListener('mouseover', function (e){
    if (e.target.classList.contains('form-check-label')){
      // console.log(e.target.dataset["color"]);
      document.getElementById("greeting").style.color = e.target.dataset["color"];
    }
  });
    document.getElementById('checkbox-card').addEventListener('mouseout', function (e){
    if (e.target.classList.contains('form-check-label')){
      // console.log(e.target.dataset["color"]);
      document.getElementById("greeting").style.color = "slategray"
    }
  });
});