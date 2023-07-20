<script>
export default {
  data() {
    return {
      money: [],
      codeCurrency: "",
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
        .then((res) => {
          console.log(res);
          if (res.status == "Done") {
            this.money = res.data;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    async getCurrency(id) {
      var url = `http://127.0.0.1:8000/api/get_money/${id}`;
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((Response) => {
          return Response.json();
        })
        .then((res) => {
          console.log(res);
          if (res.status == "Done") {
            this.codeCurrency = res.data.code_currency;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    async updateCurrency(id) {
      var url = `http://127.0.0.1:8000/api/udpate_money/${id}`;
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code_currency: this.codeCurrency,
        }),
      })
        .then((Response) => {
          return Response.json();
        })
        .then((res) => {
          console.log(res);
          if (res.status == "Done") {
            alert("La monnaie a été modifiée avec succès");
            this.$router.push("/Dashboard_money");
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
      this.getCurrency(this.id);
    }
  },
};
</script>

<template>
  <div class="pairclass">
    <center>
      <h1>Modification de la monnaie</h1>
      <br />
      <br />
      <p class="taux">Saisir le code de la monnaie</p>
      <input type="text" v-model="codeCurrency" placeholder="Code Currency" />
      <button @click="updateCurrency(this.id)">Enregistrer</button>
    </center>
  </div>
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
  background-color: rgb(86, 57, 113);
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
  border-radius: 10px;
  border: 1px solid #fff;
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
input {
  border-radius: 10px;
}
</style>