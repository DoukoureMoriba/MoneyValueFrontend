<script>
    export default {
        data() {
            return {
                pair:[],
            }
        },
        methods: {
            async getPairs() {
                var url = 'http://127.0.0.1:8000/api/list_pairs';  
            fetch(url, {
                    method:"GET",
                    headers:{'Content-Type':'application/json'
                        },
                })
                .then(Response =>{
                return Response.json();
                 })
                  // Res me permet de lire les informations renvoyer par mon json depuis l'api.
                .then(res=> {
                    console.log(res);
                if (res.status=='Done') {
                    this.pair = res.data;// Recuperation de toute les infos dans la table pair depuis l'api.
                }
                })
                .catch(error => {
                    console.error(error);
                })   
            }
        },
        // Exécute une instruction lorsque la page est crée. 
        mounted() {
            this.getPairs();
        },
    }
</script>



<template>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#"><i class="fa-brands fa-bitcoin"></i> MoneyValue</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
            <button>Se deconnecter</button>
        </ul>
        </div>
    </div>
</nav>


<!---Le tableau-->
 <br> <section>
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Monnaie sources</th>
      <th scope="col">Monnaie cible</th>
      <th scope="col">Taux convers</th>
      <th scope="col">Nombre de requête</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="p in pair" :key="p.id"><!--La boucle parcour mon tableau afin de recuperer tout les elements de la table pair.-->
      <th scope="row">{{ p.id }}</th>
      <td :id="p.id_sources"> {{ p.currency_sources }}</td>
      <td :id="p.id_target">{{ p.currency_target }}</td>
      <td>{{ p.conversion_rates }}</td>
      <td>{{ p.count }}</td>
      <td>
         <button><i class="fa-solid fa-pen-to-square"></i>Modifier</button> 
         <button><i class="fa-solid fa-trash"></i>Supprimer</button> 
    </td>
    </tr>
  </tbody>

  
</table>

</div>
</section>
</template>

<style>

</style>