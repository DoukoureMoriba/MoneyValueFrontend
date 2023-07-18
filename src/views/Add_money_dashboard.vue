<script>
export default {
  data() {
    return {
      codeCurrency: "",
    };
  },

  methods: {
    async addCurrency() {
      var url = "http://127.0.0.1:8000/api/add_money";
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code_currency: this.codeCurrency,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          console.log(res);
          if (res.status === "Done") {
            alert("La monnaie a été ajoutée avec succès");
            this.$router.push("/Dashboard_money"); // Redirection vers la page Dashboard de la monnaie
          } else {
            alert("La monnaie existe deja");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <div class="pairclass">
    <center>
      <h1>Rentrer une nouvelle Monnaie</h1>

      <br /><br />

      <p class="taux">Saisir le code de la monnaie</p>
      <div>
        <input
          type="text"
          v-model="codeCurrency"
          placeholder="Code Currency"
          maxlength="3"
          pattern="[A-Za-z]+"
        />
        <button @click="addCurrency">Ajouter la monnaie</button>
      </div>
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