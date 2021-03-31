<template>
  <div class="navigation_bar">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse navigation_elements" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Rodrigue Ndeme</a>
            <div class="linklist">
                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Work</a>
            </li>
              <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Services</a>
            </li>
              <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Contact</a>
            </li>
          </ul>
            </div>
          <div class="contact-me">Contact Me</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
   background-color:#ff8b5b;
       padding-top: .2rem; 
     padding-bottom: .2rem;
}
.navbar-brand{
  font-weight: 400;
  size: 16px;
  font-style: normal;
}
.nav-link{
  font-weight: 500;
   size: 10px;
}
.navigation_elements{
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;
 
}
.navbar-brand{
    font-size: 30px;
    font-weight: bold;
}
.contact-me {
  cursor: pointer;
  border: none;
  color: white;
  padding: 10px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 50px;
  border: 1px solid #fff;
  text-align: center;
  outline: none;
}



.contact-me:hover,
.contact-me:active {
  background-color: #fff;
  color: #000;
  transition: background-color 0.3s ease-in, color 0.3s ease-in;
}
</style>
