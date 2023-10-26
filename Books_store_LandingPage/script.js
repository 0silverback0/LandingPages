// script.js
function Home() {
    return `
      <div class="Home-Page text-black container-fluid">
        <div class="row container">
          <div class="col-lg-6 d-flex justify-content-center align-items-start flex-column" style="height: 91.5vh;">
            <h2 style="font-size: 80px; color: orange;">Book store</h2>
            <h2 style="font-size: 60px; color: white;">For You</h2>
            <a href="#"  class="btn btn-primary btn-outline my-3">View Books</a>
          </div>
          <div class="col-lg-6 d-flex justify-content-center align-items-center flex-column" style="height: 91.5vh;">
          </div>
        </div>
      </div>
    `;
  }
  
  document.querySelector("#root").innerHTML = Home();
  
  function Navbar() {
    return `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#" style="color: white;">Books Store</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <a class="nav-item nav-link hovering" href="../index.html">HOME</a>
              <a class="nav-item nav-link hovering" href="#">BOOKS</a>
              <a class="nav-item nav-link hovering" href="#">Add Books</a>
              <a class="nav-item nav-link hovering" href="#">GetAll Users</a>
              <a class="nav-item nav-link hovering" href="#">Requests</a>
              <a class="nav-item nav-link hovering" href="#">Logout</a>
            </ul>
          </div>
        </div>
      </nav>
      <div class="nav-underline"></div>
    `;
  }
  
  document.querySelector("#navbar").innerHTML = Navbar();
  
  function Footer() {
    return `
      <div class="d-flex justify-content-center align-items-center p-3 text-white bg-secondary" style="border-top: 2px solid black;">
        <h5>Copyright © ${new Date().getFullYear()} Created By <span style="color: red;">K Bharath Kumar</span></h5>
      </div>
    `;
  }
  
  document.querySelector("#footer").innerHTML = Footer();
  