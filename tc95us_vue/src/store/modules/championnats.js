const token = window.localStorage.getItem('token') || "";
var url = `localhost:8000`;

const state = {
    championnatmessage:[],
    updatechampionnatmessage:[],
    championnat:[],
    championnats:[],
    ChampionnatById:[],
    deleteChampionnatById:[],

   

}

const getters = {
    getChampionnatMessage:(state) =>(state.championnatmessage),
    getUpdateChampionnatMessage:(state)=>(state.updatechampionnatmessage),
    getChampionnat:(state) =>(state.championnat),
    infoChampionnatById:(state) =>(state.ChampionnatById),
    getAllChampionnats:(state)=> (state.championnats),
}

const actions = {
   
    // CREATE
    async createChampionnat({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
        var formdata = new FormData();
        formdata.append("date", form.date);
        formdata.append("competition", form.competition);
        formdata.append("match", form.match);
        formdata.append("score", form.score);
        
     
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch(`http://${url}/api/championnats`, requestOptions)
          .then(response => response.json())
          .then(result =>  {
              commit('createChampionnatMessage',result);
              /* location.reload(); */
             
            })
          .catch(error => console.log('error', error));
    },
    
    // EDIT
    async editChampionnat({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            myHeaders.append('Content-Type','application/json');
            var raw=JSON.stringify({
              "date": form.date,
              "competition": form.competition,
              "match": form.match,
              "score": form.score,
            });
   
      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch(`http://${url}/api/championnats/${form.id}`, requestOptions)
        .then(response => response.json())
        .then(result =>  {
            commit('updateChampionnatMessage',result);
            location.reload();
           
          })
        .catch(error => console.log('error', error));
  },

   
      
// FETCH BY ID
    async fetchChampionnatById({commit},id){
                  var myHeaders = new Headers();
                  myHeaders.append("Authorization", `Bearer ${token}`);
      
                  var requestOptions = {
                  method: 'GET',
                  headers: myHeaders,
                  
                  redirect: 'follow'
                  };
      
                  fetch(`http://${url}/api/championnats/${id}`, requestOptions)
                  .then(response => response.json())
                  .then(result => {
                    commit('ChampionnatById',result);
    
                  })
                  .catch(error => console.log('error', error));
                      },

    // DELETE BY ID
    async deleteChampionnat({commit},id){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      
      redirect: 'follow'
      };

      fetch(`http://${url}/api/championnats/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        commit('deleteChampionnatById',result);

      })
      .catch(error => console.log('error', error));
          },

        //FETCH ALL
     async fetchAllChampionnats({commit}){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            
            redirect: 'follow'
            };

            fetch(`http://${url}/api/championnats/`, requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchAllChampionnats',result))
            .catch(error => console.log('error', error));
                },

    }
  

const mutations = {
createChampionnatMessage:(state,championnatmessage)=>(state.championnatmessage = championnatmessage),
updateChampionnatMessage:(state,updatechampionnatmessage)=>(state.updatechampionnatmessage = updatechampionnatmessage),
fetchChampionnat:(state,championnat) =>(state.championnat = championnat),
fetchAllChampionnats:(state,championnats)=>(state.championnats = championnats),
ChampionnatById:(state,ChampionnatById)=>(state.ChampionnatById = ChampionnatById),
deleteChampionnatById:(state,deleteChampionnatById)=>(state.deleteChampionnatById = deleteChampionnatById),

}



export default{
    state,
    getters,
    actions,
    mutations,
}