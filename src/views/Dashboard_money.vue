<script>
export default {
  data() {
    return {
      money: [],
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

    // Function pour supprimer la list d'une monnaie
    async deleteMoney(moneyId) {
      var url = `http://127.0.0.1:8000/api/delete_money/${moneyId}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((Response) => {
          return Response.json();
        })
        .then((res) => {
          console.log(res);
          if (res.status === "Done") {
            alert("Monnaie supprimée avec succès");
            window.location.reload();
            // Mettez à jour la liste des Monnaies après la suppression
            this.getMoney();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    //Function pour la déconnexion de l'admin
    async logout() {
      var url = "http://127.0.0.1:8000/api/logout";
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((Response) => {
          return Response.json();
        })
        .then((res) => {
          console.log(res);
          if (res.status == "Done") {
            alert("Utilisateur déconnecté");
            this.$router.push("/"); // Redirection vers la route "welcome.vue"
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
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
        <ul class="navbar-nav m-auto mb-lg-0">
          <li class="nav-item">
            <a href="Dashboard" class="nav-link active" aria-current="page"
              >Dashboard Paire</a
            >
          </li>
        </ul>
        <ul class="navbar-nav">
          <button @click="logout()" class="btn">Se deconnecter</button>
        </ul>
      </div>
    </div>
  </nav>

  <!---Le tableau-->
  <br />
  <center><h1>Dashboard pour les Monnaies</h1></center>

  <section>
    <div>
      <RouterLink to="/Add_money_dashboard">
        <button class="btn">Ajouter</button> </RouterLink
      ><br /><br />
      <table class="table">
        <thead class="tableau-style">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Code de la monnaie</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="m in money" :key="m.id">
            <th scope="row">{{ m.id }}</th>
            <td>
              {{ m.code_currency }}
            </td>
            <td>
              <RouterLink :to="`/Edit_money_dashboard/${m.id}`">
                <button class="btn">
                  <i class="fa-solid fa-pen-to-square"></i>Modifier
                </button></RouterLink
              >

              <button class="btn" id="delete" @click="deleteMoney(m.id)">
                <i class="fa-solid fa-trash"></i>Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style>
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
}

.tableau-style {
  border-collapse: collapse;
  min-width: 400px;
  width: auto;
  box-shadow: 0 10px rgba(0, 0, 0, 0.15);
  margin: 100px;
  border: 5px solid midnightblue;
}

thead tr {
  background-color: midnightblue;
  color: #fff;
  text-align: left;
}

th,
td {
  padding: 15px 20px;
}

tbody tr,
td,
th {
  border: 5px solid #ddd;
}

tbody tr:nth-child(event) {
  background-color: #f3f3f3;
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

ul li {
  border: 2px transparent red;
  border-radius: 20px;
}
#delete:hover {
  background-color: red;
  opacity: 1;
  transition: 1.1s;
  border-radius: 20px;
}
ul li :hover {
  background-color: aquamarine;
  opacity: 1;
  transition: 1.1s;
  border-radius: 20px;
}
</style>