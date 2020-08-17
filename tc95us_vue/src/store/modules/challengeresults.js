const token = window.localStorage.getItem('token') || "";
var url = `localhost:8000`;

const state = {
    challengeresultmessage:[],
    updatechallengeresultmessage:[],
    challengeresult:[],
    challengeresults:[],
    ChallengeresultById:[],
    deleteChallengeresultById:[],

   

}

const getters = {
    getChallengeresultMessage:(state) =>(state.challengeresultmessage),
    getUpdateChallengeresultMessage:(state)=>(state.updatechallengeresultmessage),
    getChallengeresult:(state) =>(state.challengeresult),
    infoChallengeresultById:(state) =>(state.ChallengeresultById),
    getAllChallengeresults:(state)=> (state.challengeresults),
}

const actions = {
   
    // CREATE
    async createChallengeresult({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
        var formdata = new FormData();
        formdata.append("winner", form.winner);
        formdata.append("looser", form.looser);
        formdata.append("S1W", form.S1W);
        formdata.append("S1L", form.S1L);
        formdata.append("S2W", form.S2W);
        formdata.append("S2L", form.S2L);
        formdata.append("S3W", form.S3W);
        formdata.append("S3L", form.S3L);
        formdata.append("pointsW", form.pointsW);
        formdata.append("pointsL", form.pointsL);
        formdata.append("details", form.details);
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch(`http://${url}/api/challengeresults`, requestOptions)
          .then(response => response.json())
          .then(result =>  {
              commit('createChallengeresultMessage',result);
              /* location.reload(); */
             
            })
          .catch(error => console.log('error', error));
    },
    
    // EDIT
    async editChallengeresult({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            myHeaders.append('Content-Type','application/json');
            var raw=JSON.stringify({
              "winner": form.winner,
              "looser": form.looser,
              "S1W": form.S1W,
              "S1L": form.S1L,
              "S2W": form.S2W,
              "S2L": form.S2L,
              "S3W": form.S3W,
              "S3L": form.S3L,
              "pointsW": form.pointsW,
              "pointsL": form.pointsL,
              "details": form.details,
            });
   
      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch(`http://${url}/api/challengeresults/${form.id}`, requestOptions)
        .then(response => response.json())
        .then(result =>  {
            commit('updateChallengeresultMessage',result);
            //location.reload();
           
          })
        .catch(error => console.log('error', error));
  },

   
      
// FETCH BY ID
    async fetchChallengeresultById({commit},id){
                  var myHeaders = new Headers();
                  myHeaders.append("Authorization", `Bearer ${token}`);
      
                  var requestOptions = {
                  method: 'GET',
                  headers: myHeaders,
                  
                  redirect: 'follow'
                  };
      
                  fetch(`http://${url}/api/challengeresults/${id}`, requestOptions)
                  .then(response => response.json())
                  .then(result => {
                    commit('ChallengeresultById',result);
    
                  })
                  .catch(error => console.log('error', error));
                      },

    // DELETE BY ID
    async deleteChallengeresult({commit},id){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      
      redirect: 'follow'
      };

      fetch(`http://${url}/api/challengeresults/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        commit('deleteChallengeresultById',result);

      })
      .catch(error => console.log('error', error));
          },

        //FETCH ALL
     async fetchAllChallengeresults({commit}){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            
            redirect: 'follow'
            };

            fetch(`http://${url}/api/challengeresults/`, requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchAllChallengeresults',result))
            .catch(error => console.log('error', error));
                },

    }
  

const mutations = {
createChallengeresultMessage:(state,challengeresultmessage)=>(state.challengeresultmessage = challengeresultmessage),
updateChallengeresultMessage:(state,updatechallengeresultmessage)=>(state.updatechallengeresultmessage = updatechallengeresultmessage),
fetchChallengeresult:(state,challengeresult) =>(state.challengeresult = challengeresult),
fetchAllChallengeresults:(state,challengeresults)=>(state.challengeresults = challengeresults),
ChallengeresultById:(state,ChallengeresultById)=>(state.ChallengeresultById = ChallengeresultById),
deleteChallengeresultById:(state,deleteChallengeresultById)=>(state.deleteChallengeresultById = deleteChallengeresultById),

}



export default{
    state,
    getters,
    actions,
    mutations,
}