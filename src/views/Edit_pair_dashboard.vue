<script>
export default {
  data() {
    return {
      money: [],
      sourceMoney: [],
      targetMoney: [],
      conversion_rates: [],
    };
  },
  props: ["id"],
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
            this.money = res.data; // Recuperation de toute les infos dans la table pair depuis l'api.
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    async getPair(id) {
      var url = `http://127.0.0.1:8000/api/get_pair/${id}`;
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
            //On recupere les infos de la pair
            this.sourceMoney = res.data.id_sources;
            this.targetMoney = res.data.id_target;
            this.conversion_rates = res.data.conversion_rates;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    async updatePair(id) {
      var url = `http://127.0.0.1:8000/api/udpate_pairs/${id}`;
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_sources: this.sourceMoney,
          id_target: this.targetMoney,
          conversion_rates: this.conversion_rates,
        }),
      })
        .then((Response) => {
          return Response.json();
        })
        // Res me permet de lire les informations renvoyer par mon json depuis l'api.
        .then((res) => {
          console.log(res);
          if (res.status == "Done") {
            alert("La pair a été modifier avec succes");
            this.$router.push("/Dashboard"); //Redirection vers la page du Dashboard
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.getMoney();
    if (this.id) {
      this.getPair(this.id);
    }
  },
};
</script>

<template>
<div class="pairclass"><center> 
  <h1>Modification de la paire</h1>
  <label for="" class="label">Monnaie source</label> <br />
  <select v-model="sourceMoney">
    <option v-for="m in money" :key="m.id" :value="m.id">
      {{ m.code_currency }}
    </option></select
  ><br /><br />
  <label for="" class="label">Monnaie cible</label><br />
  <select v-model="targetMoney">
    <option v-for="m in money" :key="m.id" :value="m.id">
      {{ m.code_currency }}
    </option>
  </select>
  <br /><br />

  <p class="taux">taux de conversion</p>
  <input type="number" step="any" v-model="conversion_rates" />
  <br /><br />
  <button @click="updatePair(this.id)">Enregistrer</button>
  </center></div>
</template>

<style>


.pairclass {
    padding: 50px;
    

} 

html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color:rgb(86, 57, 113) ;
  color: #fff;
}

.label {
  padding: 20px;
  font-size: 1.5rem;
}
.taux {
  font-size: 1.2rem;
}
select {
  width: 200px;
  color: #fff;
  padding-top: 5px;
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 10px ;
  border: 1px solid #fff;
}

button {
  border-radius:10px;
  width: 150px;
}
button:hover {
  background-color: aquamarine;
  opacity: 1;
  transition: 1.2s;
  border-radius: 20px;
}

input {
  border-radius:10px;
}
</style>