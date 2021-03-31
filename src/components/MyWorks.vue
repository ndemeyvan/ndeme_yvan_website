<template>
  <div id="works">
    <div class="title text-center">
      <p class="litle_title">MY WORKS</p>
      <h1 class="big_title">My Works</h1>
    </div>

    <div class="cards-1 section-gray">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card card-blog">
              <div class="card-image">
                <a href="#">
                  <img
                    class="img"
                    src="https://i.pinimg.com/236x/a8/55/0d/a8550d90d6c79b22800a346c3a4d01af.jpg"
                  />
                  <div class="card-caption">Quisque a bibendum magna</div>
                </a>
                <div class="ripple-cont"></div>
              </div>
              <div class="table">
                <h6 class="category text-info">Cinema</h6>
                <p class="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam
                  lacinia elit et placerat finibus. Praesent justo metus,
                  pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus
                  odio antement, feugiat eget nisi sit amet, scelerisque
                  dignissim velit antement.
                </p>
              </div>
            </div>
          </div>
                <div class="col-md-4">
            <div class="card card-blog">
              <div class="card-image">
                <a href="#">
                  <img
                    class="img"
                    src="https://i.pinimg.com/236x/a8/55/0d/a8550d90d6c79b22800a346c3a4d01af.jpg"
                  />
                  <div class="card-caption">Quisque a bibendum magna</div>
                </a>
                <div class="ripple-cont"></div>
              </div>
              <div class="table">
                <h6 class="category text-info">Cinema</h6>
                <p class="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam
                  lacinia elit et placerat finibus. Praesent justo metus,
                  pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus
                  odio antement, feugiat eget nisi sit amet, scelerisque
                  dignissim velit antement.
                </p>
              </div>
            </div>
          </div>
                <div class="col-md-4">
            <div class="card card-blog">
              <div class="card-image">
                <a href="#">
                  <img
                    class="img"
                    src="https://i.pinimg.com/236x/a8/55/0d/a8550d90d6c79b22800a346c3a4d01af.jpg"
                  />
                  <div class="card-caption">Quisque a bibendum magna</div>
                </a>
                <div class="ripple-cont"></div>
              </div>
              <div class="table">
                <h6 class="category text-info">Cinema</h6>
                <p class="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam
                  lacinia elit et placerat finibus. Praesent justo metus,
                  pharetra vel nibh sit amet, tincidunt posuere nulla. Vivamus
                  odio antement, feugiat eget nisi sit amet, scelerisque
                  dignissim velit antement.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
#works {
  min-height: 500px;
}
.title {
  margin-top: 70px;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  line-height: 20px;
  color: #b4b2c5;
}
.big_title {
  font-weight: 700;
  color: #130f49;
  font-size: 64px;
  font-style: normal;
}

.list_works {
  margin-top: 80px;
}

/* test */

.section-gray {
  background: white;
  padding: 60px 0 30px 0;
}

/*---------------------------------------------------------------------- /
CARDS
----------------------------------------------------------------------- */

.card {
  display: inline-block;
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.87);
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.card .card-image {
  height: 60%;
  position: relative;
  overflow: hidden;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: -30px;
  border-radius: 6px;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}

.card .card-image img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  pointer-events: none;
}

.card .card-image .card-caption {
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: #fff;
  font-size: 1.3em;
  text-shadow: 0 2px 5px rgba(33, 33, 33, 0.5);
}

.card img {
  width: 100%;
  height: auto;
}

.img-raised {
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}

.table {
  margin-bottom: 0px;
}

.card .table {
  padding: 15px 30px;
}

.card-blog {
  margin-top: 30px;
}

/* ======= GENERAL  ======= */

body,
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4 {
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.5em;
}

a {
  color: #9c27b0;
  text-decoration: none;
}

a:hover {
  color: #9c27b0;
  text-decoration: underline;
}

p {
  color: #3c4857;
}



h1,
.h1 {
  font-size: 3.8em;
}

h2,
.h2 {
  font-size: 2em;
  line-height: 1.6em;
  margin: 15px 0 15px;
  font-weight: 700;
  font-family: "Roboto Slab", "Times New Roman", serif;
  text-align: center;
}

h3,
.h3 {
  font-size: 1.825em;
  line-height: 1.4em;
  margin: 30px 0 30px;
  font-weight: 700;
  font-family: "Roboto Slab", "Times New Roman", serif;
  text-align: center;
}

h4,
.h4 {
  font-size: 1.3em;
  line-height: 1.55em;
}

h5,
.h5 {
  font-size: 1.25em;
  line-height: 1.55em;
  margin-bottom: 15px;
}

h6,
.h6 {
  font-size: 0.9em;
  font-weight: 500;
}
</style>