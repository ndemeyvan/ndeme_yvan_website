<template>
  <div>
    <nav class="site-header sticky-top py-4 fixed-top">
      <div
        class="container d-flex flex-column flex-md-row justify-content-between"
      >
        <a class="py-2" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="d-block mx-auto"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
            <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
            <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
            <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
            <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
            <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
          </svg>
        </a>
        <a class="py-2 d-none d-md-inline-block" href="#header">ACCEUIL</a>
        <a class="py-2 d-none d-md-inline-block" href="#expertise"
          >COMPÉTENCES</a
        >
        <a class="py-2 d-none d-md-inline-block" href="#works">TRAVAUX</a>
        <a class="py-2 d-none d-md-inline-block" href="#about"
          >A PROPOS DE MOI</a
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.site-header {
  background-color: #4caf50;
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  position: fixed;
}
.site-header a {
  font-family: "Karla", sans-serif;
  font-weight: 500;
  color: white;
  transition: ease-in-out color 0.15s;
  text-decoration: none;
}

.navigation_elements {
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
}
.navbar-brand {
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
  border-radius: 5px;
  border: 1px solid #fff;
  text-align: center;
  outline: none;
  font-family: "Karla", sans-serif;
  font-weight: 700;
}

.contact-me:hover,
.contact-me:active {
  background-color: #fff;
  color: #000;
  transition: background-color 0.3s ease-in, color 0.3s ease-in;
}
</style>
