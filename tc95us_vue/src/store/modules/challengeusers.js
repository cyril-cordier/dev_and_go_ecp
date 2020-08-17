const token = window.localStorage.getItem('token') || "";
var url = `localhost:8000`;

const state = {
    challengeusermessage:[],
    updatechallengeusermessage:[],
    challengeuser:[],
    challengeusers:[],
    ChallengeuserById:[],
    deleteChallengeuserById:[],

   

}

const getters = {
    getChallengeuserMessage:(state) =>(state.challengeusermessage),
    getUpdateChallengeuserMessage:(state)=>(state.updatechallengeusermessage),
    getChallengeuser:(state) =>(state.challengeuser),
    infoChallengeuserById:(state) =>(state.ChallengeuserById),
    getAllChallengeusers:(state)=> (state.challengeusers),
}

const actions = {
   
    // CREATE
    async createChallengeuser({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
        var formdata = new FormData();
        formdata.append("challengename", form.challengename);
        formdata.append("contact", form.contact);
        formdata.append("ranking", form.ranking);
        formdata.append("points", form.points);
        formdata.append("nbmatchs", form.nbmatchs);
        formdata.append("matchaverage", form.matchaverage);
        formdata.append("setaverage", form.setaverage);
        formdata.append("gameaverage", form.gameaverage);
        formdata.append("visible", form.visible);
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch(`http://${url}/api/challengeusers`, requestOptions)
          .then(response => response.json())
          .then(result =>  {
              commit('createChallengeuserMessage',result);
              /* location.reload(); */
             
            })
          .catch(error => console.log('error', error));
    },
    
    // EDIT
    async editChallengeuser({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            myHeaders.append('Content-Type','application/json');
            var raw=JSON.stringify({
              "challengename": form.challengename,
              "contact": form.contact,
              "ranking": form.ranking,
              "points": form.points,
              "nbmatchs": form.nbmatchs,
              "matchaverage": form.matchaverage,
              "setaverage": form.setaverage,
              "gameaverage": form.gameaverage,
              "visible": form.visible,
            });
   
      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch(`http://${url}/api/challengeusers/${form.id}`, requestOptions)
        .then(response => response.json())
        .then(result =>  {
            commit('updateChallengeuserMessage',result);
            //location.reload();
           
          })
        .catch(error => console.log('error', error));
  },

   
      
// FETCH BY ID
    async fetchChallengeuserById({commit},id){
                  var myHeaders = new Headers();
                  myHeaders.append("Authorization", `Bearer ${token}`);
      
                  var requestOptions = {
                  method: 'GET',
                  headers: myHeaders,
                  
                  redirect: 'follow'
                  };
      
                  fetch(`http://${url}/api/challengeusers/${id}`, requestOptions)
                  .then(response => response.json())
                  .then(result => {
                    commit('ChallengeuserById',result);
    
                  })
                  .catch(error => console.log('error', error));
                      },

    // DELETE BY ID
    async deleteChallengeuser({commit},id){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      
      redirect: 'follow'
      };

      fetch(`http://${url}/api/challengeusers/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        commit('deleteChallengeuserById',result);

      })
      .catch(error => console.log('error', error));
          },

        //FETCH ALL
     async fetchAllChallengeusers({commit}){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            
            redirect: 'follow'
            };

            fetch(`http://${url}/api/challengeusers/`, requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchAllChallengeusers',result))
            .catch(error => console.log('error', error));
                },

    }
  

const mutations = {
createChallengeuserMessage:(state,challengeusermessage)=>(state.challengeusermessage = challengeusermessage),
updateChallengeuserMessage:(state,updatechallengeusermessage)=>(state.updatechallengeusermessage = updatechallengeusermessage),
fetchChallengeuser:(state,challengeuser) =>(state.challengeuser = challengeuser),
fetchAllChallengeusers:(state,challengeusers)=>(state.challengeusers = challengeusers),
ChallengeuserById:(state,ChallengeuserById)=>(state.ChallengeuserById = ChallengeuserById),
deleteChallengeuserById:(state,deleteChallengeuserById)=>(state.deleteChallengeuserById = deleteChallengeuserById),

}



export default{
    state,
    getters,
    actions,
    mutations,
}