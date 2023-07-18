<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><i class="fa-brands fa-bitcoin"></i> MoneyValue</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <router-link :to="`/Login`"
            ><button class="btn">Se connecter</button></router-link
          >
        </ul>
      </div>
    </div>
  </nav>

  <section class="section_money"> <br>
  
    <center> <h2>Convertisseur de devise MoneyValue</h2>  </center>
  
  <div>
        <p>Montant</p>
       <input type="text" name="" id="">

       <label for=""> De </label> 
       <select name="" id=""> 
        <option value=""> Dollad USD</option>
       </select>
  </div>
  </section>
</template>

<style>

.btn {
  padding: 5px;
  margin: 0px 3px;
  text-decoration: none;
  border: 1px solid grey;
}

.btn:hover {
  background-color: aquamarine;
  opacity: 1;
  transition: 1.1s;
  border-radius: 20px;
}

</style>