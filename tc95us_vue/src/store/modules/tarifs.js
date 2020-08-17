const token = window.localStorage.getItem('token') || "";
var url = `localhost:8000`;

const state = {
    tarifmessage:[],
    updatetarifmessage:[],
    tarif:[],
    tarifs:[],
    tarifById:[],
    deleteTarifById:[],

   

}

const getters = {
  getTarifMessage:(state) =>(state.tarifmessage),
  getUpdateTarifMessage:(state)=>(state.updatetarifmessage), 
  getTarif:(state) =>(state.tarif),
  infoTarifById:(state) =>(state.TarifById),
  getAllTarifs:(state)=> (state.tarifs),
}

const actions = {
   
    // CREATE
    async createTarif({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);  
      var formdata = new FormData();
        formdata.append("type", form.type);
        formdata.append("category", form.category);
        formdata.append("price1", form.price1);
        formdata.append("price2", form.price2);
        formdata.append("price3", form.price3);
        formdata.append("details", form.details);
       
        
     
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch(`http://${url}/api/tarifs`, requestOptions)
          .then(response => response.json())
          .then(result =>  {
              commit('createTarifMessage',result);
              /* location.reload(); */

             
            })
          .catch(error => console.log('error', error));
    },
    
    // EDIT
    async editTarif({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            myHeaders.append('Content-Type','application/json');
            var raw=JSON.stringify({
              "type": form.type,
              "category": form.category,
              "price1": form.price1,
              "price2": form.price2,
              "price3": form.price3,
              "details": form.details,
            });
   
      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch(`http://${url}/api/tarifs/${form.id}`, requestOptions)
        .then(response => response.json())
        .then(result =>  {
            commit('updateTarifMessage',result);
            //location.reload();
           
          })
        .catch(error => console.log('error', error));
  },

   
      
// FETCH BY ID
    async fetchTarifById({commit},id){
                  var myHeaders = new Headers();
                  myHeaders.append("Authorization", `Bearer ${token}`);
      
                  var requestOptions = {
                  method: 'GET',
                  headers: myHeaders,
                  
                  redirect: 'follow'
                  };
      
                  fetch(`http://${url}/api/tarifs/${id}`, requestOptions)
                  .then(response => response.json())
                  .then(result => {
                    commit('TarifById',result);
    
                  })
                  .catch(error => console.log('error', error));
                      },

    // DELETE BY ID
    async deleteTarif({commit},id){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      
      redirect: 'follow'
      };

      fetch(`http://${url}/api/tarifs/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        commit('deleteTarifById',result);

      })
      .catch(error => console.log('error', error));
          },

        //FETCH ALL
     async fetchAllTarifs({commit}){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            
            redirect: 'follow'
            };

            fetch(`http://${url}/api/tarifs/`, requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchAllTarifs',result))
            .catch(error => console.log('error', error));
                },

    }
  

const mutations = {
createTarifMessage:(state,tarifmessage)=>(state.tarifmessage = tarifmessage),
updateTarifMessage:(state,updatetarifmessage)=>(state.updatetarifmessage = updatetarifmessage),
fetchTarif:(state,tarif) =>(state.tarif = tarif),
fetchAllTarifs:(state,tarifs)=>(state.tarifs = tarifs),
TarifById:(state,TarifById)=>(state.TarifById = TarifById),
deleteTarifById:(state,deletetarifById)=>(state.deleteTarifById = deletetarifById),

}



export default{
    state,
    getters,
    actions,
    mutations,
}