<script>
export default {
  data() {
    return {
      result: "",
      value_amount: "",
      money: [],
      sourceMoney: [],
      targetMoney: [],
      id:"",
      show_amount:false,
    };
  },

  methods: {
    async getMoney() {
      var url = "http://127.0.0.1:8000/api/list_currency";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((Response) => {
          return Response.json();
        })
        // Res me permet de lire les informations renvoyer par mon json depuis l'api.
        .then((res) => {
          console.log(res);
          if (res.status == "Done") {
            this.money = res.data; // Recuperation de toute les infos dans la table monnaie depuis l'api.
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    //function pour récup l'id
     async getPairId() {
      var url = "http://127.0.0.1:8000/api/getpair_id";
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_sources: this.sourceMoney,
          id_target: this.targetMoney,
        }),
      })
        .then((Response) => {
          return Response.json();
        })
        
       // Res me permet de lire les informations renvoyer par mon json depuis l'api.
        .then((res) => {
          console.log(res);
          if (res.status == "Done") {
            this.id = res.data; // On recupere l'id de la pair stocker dans data
            this.show_amount = true;
            console.log(this.id);
            this.convert(this.id);
          }
        });
    },

      //Function pour la conversion
      async convert(id){
       var url = `http://127.0.0.1:8000/api/convert_amount/${id}`;
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
           amount:this.value_amount,
        }),
      }).then((Response) => {
          return Response.json();
        })
        
        // Res me permet de lire les informations renvoyer par mon json depuis l'api.
        .then((res) => {
          console.log(res);
          if (res.status == "Done") {
            this.result = res.data; // On recupere le resultat de la somme
           console.log(this.result);
          }
        });
    }
  },

  mounted() {
    this.getMoney();
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

  <section class="section_money">
    <br />

    

    <div>
      <center>
      <h2>Convertisseur de devise MoneyValue</h2>
      <p>Rentrez votre montant</p>
      <input type="number" v-model="value_amount" name="" id="" placeholder="Montant exemple 15000" />
      <label for="">&ensp; De &ensp;</label>
      <select v-model="sourceMoney">
        <option v-for="m in money" :key="m.id" :value="m.id">
          {{ m.code_currency }}
        </option>
      </select>
      vers
      <select v-model="targetMoney">
        <option v-for="m in money" :key="m.id" :value="m.id">
          {{ m.code_currency }}
        </option>
      </select> &ensp;
      <button @click="getPairId">Convertissez</button> 
       
    <p v-if="show_amount">Le montant est : {{ result }}</p>
    </center>
    </div>
  </section>
</template>

<style>

html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  background-color: #1B2B41;
}
.section_money {
  padding: 20px;
  margin: 20px;
}
select {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: #fff;
}
button {
  border-radius: 10px;
  width: 150px;
}
button:hover {
  background-color: aquamarine;
  opacity: 1;
  transition: 1.2s;
  border-radius: 20px;
}
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
input {
  border-radius: 10px;
}
</style>