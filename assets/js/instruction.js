function myFunction1() {
  document.getElementById('foo1').setAttribute("class", "style1");
}

function myFunction2() {
  document.getElementById('foo2').setAttribute("class", "style1");
}

function myFunction3() {
  document.getElementById('foo3').setAttribute("class", "style1");
}

function myFunction4() {
  document.getElementById('foo4').setAttribute("class", "style1");
}

function myFunction5() {
  document.getElementById('foo5').setAttribute("class", "style1");
}
document.getElementById("adjunto1").innerHTML =
`<div class="dropdown">
<button class="button button2 dropdown-toggle " type="button" data-bs-toggle="dropdown"
  aria-expanded="false">
  <i class="fa fa-paperclip" aria-hidden="true"></i></button>
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Imágenes</a></li>
  <li><a class="dropdown-item" href="#">Video</a></li>
  <li><a class="dropdown-item" href="#">Documentos</a></li>
</ul>
</div>
`

document.getElementById("adjunto2").innerHTML =
`<div class="dropdown">
<button class="button button2 dropdown-toggle " type="button" data-bs-toggle="dropdown"
  aria-expanded="false">
  <i class="fa fa-paperclip" aria-hidden="true"></i></button>
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Imágenes</a></li>
  <li><a class="dropdown-item" href="#">Video</a></li>
  <li><a class="dropdown-item" href="#">Documentos</a></li>
</ul>
</div>
`

document.getElementById("adjunto3").innerHTML =
`<div class="dropdown">
<button class="button button2 dropdown-toggle " type="button" data-bs-toggle="dropdown"
  aria-expanded="false">
  <i class="fa fa-paperclip" aria-hidden="true"></i></button>
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Imágenes</a></li>
  <li><a class="dropdown-item" href="#">Video</a></li>
  <li><a class="dropdown-item" href="#">Documentos</a></li>
</ul>
</div>
`

document.getElementById("adjunto4").innerHTML =
`<div class="dropdown">
<button class="button button2 dropdown-toggle " type="button" data-bs-toggle="dropdown"
  aria-expanded="false">
  <i class="fa fa-paperclip" aria-hidden="true"></i></button>
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Imágenes</a></li>
  <li><a class="dropdown-item" href="#">Video</a></li>
  <li><a class="dropdown-item" href="#">Documentos</a></li>
</ul>
</div>
`

document.getElementById("adjunto5").innerHTML =
`<div class="dropdown">
<button class="button button2 dropdown-toggle " type="button" data-bs-toggle="dropdown"
  aria-expanded="false">
  <i class="fa fa-paperclip" aria-hidden="true"></i></button>
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Imágenes</a></li>
  <li><a class="dropdown-item" href="#">Video</a></li>
  <li><a class="dropdown-item" href="#">Documentos</a></li>
</ul>
</div>
`


document.getElementById("p1").innerHTML =
  `
    <div class="accordion-body">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" onclick="myFunction1()" type="button"
                  data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                  aria-controls="flush-collapseOne">
                  <img class="image rounded-circle" src="assets/img/foto1.jpg" alt="">
                  <p id="foo1" onclick="myFunction1()" class="boldi">Puma Rodriguez</p>
                </button>
              </h2>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" onclick="myFunction2()" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                    aria-controls="flush-collapseTwo">
                    <img class="image rounded-circle" src="assets/img/foto2.jpeg">
                    <p id="foo2" onclick="myFunction2()" class="boldi">Peter Petrelli</p>
                  </button>
                </h2>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" onclick="myFunction3()" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
                    aria-controls="flush-collapseThree">
                    <img class="image rounded-circle" src="assets/img/foto3.jpeg" alt="">
                    <p id="foo3" onclick="myFunction3()" class="boldi">Sean Lennon</p>
                  </button>
                </h2>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" onclick="myFunction4()" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false"
                    aria-controls="flush-collapseFour">
                    <img class="image rounded-circle" src="assets/img/foto4.jpeg" alt="">
                    <p id="foo4" onclick="myFunction4()" class="boldi">Pedro Machuca</p>
                  </button>
                </h2>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" onclick="myFunction5()" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false"
                    aria-controls="flush-collapseFive">
                    <img class="image rounded-circle" src="assets/img/foto5.jpeg" alt="">
                    <p id="foo5" onclick="myFunction5()" class="boldi">Tulio Triviño</p>
                  </button>
                </h2>
              </div>
            </div>
            `