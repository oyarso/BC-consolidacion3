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
document.getElementById("p2").innerHTML =
  `
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div class="row">
                <div class="col-sm-6">
                  <div class="card ">
                    <span class="float-left colorin">¡Hola! <small class="text-muted">11/03/2023</small> </span>
                  </div>
                </div>
                <hr>
                <div class="d-flex justify-content-end">
                  <div class="card ">
                    <span class="float-right colorout">Buenas tardes ¿En que puedo ayudar? <small
                        class="text-muted">15/03/2023</small></span>
                  </div>
                </div>
                <hr>
                <div class="col-sm-6">
                  <div class="card ">
                    <span class="float-sm-right colorin">¡Hola! Buenas tardes
                      <small class="text-muted">15/03/2023</small>
                    </span>
                  </div>
                </div>
                <hr>
                <div class="btn-holder">
                  <hr>
                  <div class="d-flex justify-content-center ">

                    <div class="col-12 align-bottom ">
                      <input class="col w-100" type="text">
                    </div>
                    <div class="col ">
                      <div class="dropdown">
                        <button class="button button2 dropdown-toggle " type="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <i class="fa fa-paperclip" aria-hidden="true"></i></button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Imágenes</a></li>
                          <li><a class="dropdown-item" href="#">Video</a></li>
                          <li><a class="dropdown-item" href="#">Documentos</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col">
                      <button class="button button1"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div class="row">
                <div class="col-sm-6">
                  <div class="card ">
                    <span class="float-left colorin">hi <small class="text-muted">15/01/2023</small> </span>
                  </div>
                </div>
                <hr>
                <div class="d-flex justify-content-end">
                  <div class="card ">
                    <span class="float-right colorout">Jaguar you <small class="text-muted">12/02/2023</small></span>
                  </div>
                </div>
                <hr>
                <div class="btn-holder">
                  <hr>
                  <div class="d-flex justify-content-center ">

                    <div class="col-12 align-bottom ">
                      <input class="col w-100" type="text">
                    </div>
                    <div class="col ">
                      <div class="dropdown">
                        <button class="button button2 dropdown-toggle " type="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <i class="fa fa-paperclip" aria-hidden="true"></i></button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Imágenes</a></li>
                          <li><a class="dropdown-item" href="#">Video</a></li>
                          <li><a class="dropdown-item" href="#">Documentos</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col">
                      <button class="button button1"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div class="row">
                <div class="col-sm-6">
                  <div class="card ">
                    <span class="float-left colorin">Hola <small class="text-muted">15/01/2023</small> </span>
                  </div>
                </div>
                <hr>
                <div class="d-flex justify-content-end">
                  <div class="card ">
                    <span class="float-right colorout">hi how are you? <small
                        class="text-muted">15/02/2023</small></span>
                  </div>
                </div>
                <hr>
                <div class="col-sm-6">
                  <div class="card ">
                    <span class="float-left colorin">Holanda <small class="text-muted">15/03/2023</small> </span>
                  </div>
                </div>
                <hr>
                <div class="btn-holder">
                  <hr>
                  <div class="d-flex justify-content-center ">

                    <div class="col-12 align-bottom ">
                      <input class="col w-100" type="text">
                    </div>
                    <div class="col ">
                      <div class="dropdown">
                        <button class="button button2 dropdown-toggle " type="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <i class="fa fa-paperclip" aria-hidden="true"></i></button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Imágenes</a></li>
                          <li><a class="dropdown-item" href="#">Video</a></li>
                          <li><a class="dropdown-item" href="#">Documentos</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col">
                      <button class="button button1"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div class="row">
                <div class="col-sm-6">
                  <div class="card ">
                    <span class="float-left colorin">¿Como estas? <small class="text-muted">15/03/2023</small>
                    </span>
                  </div>
                </div>
                <hr>
                <div class="d-flex justify-content-end">
                  <div class="card ">
                    <span class="float-right colorout">bien gracias a Dios <small
                        class="text-muted">15/04/2023</small></span>
                  </div>
                </div>
                <hr>
                <div class="col-sm-6">
                  <div class="card ">
                    <span class="float-left colorin">Me alegro <small class="text-muted">15/05/2023</small>
                    </span>
                  </div>
                  <hr>
                  <div class="btn-holder">
                    <hr>
                    <div class="d-flex justify-content-center ">

                      <div class="col-12 align-bottom ">
                        <input class="col w-100" type="text">
                      </div>
                      <div class="col ">
                        <div class="dropdown">
                          <button class="button button2 dropdown-toggle " type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa fa-paperclip" aria-hidden="true"></i></button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Imágenes</a></li>
                            <li><a class="dropdown-item" href="#">Video</a></li>
                            <li><a class="dropdown-item" href="#">Documentos</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col">
                        <button class="button button1"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div class="row">
                <div class="col-sm-6">
                  <div class="card ">
                    <span class="float-left colorin">Gracias por todo <small class="text-muted">02/03/2023</small>
                    </span>
                  </div>
                </div>
                <hr>

                <div class="d-flex justify-content-end">
                  <div class="card ">
                    <span class="float-right colorout">de nada c: <small class="text-muted">11/04/2023</small></span>
                  </div>
                </div>
                <hr>

                <div class="btn-holder">
                  <hr>
                  <div class="d-flex justify-content-center ">

                    <div class="col-12 align-bottom ">
                      <input class="col w-100" type="text">
                    </div>
                    <div class="col ">
                      <div class="dropdown">
                        <button class="button button2 dropdown-toggle " type="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <i class="fa fa-paperclip" aria-hidden="true"></i></button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Imágenes</a></li>
                          <li><a class="dropdown-item" href="#">Video</a></li>
                          <li><a class="dropdown-item" href="#">Documentos</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col">
                      <button class="button button1"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> `
