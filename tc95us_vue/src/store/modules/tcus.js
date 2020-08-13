const token = window.localStorage.getItem('token') || "";

const state = {
    pokemons : [],
    pokemonById: [],
    message:[],
    messageLogin:[],
    team:[],
    user:[],
    users:[],
    teamById:[],
    sendPokemonMessage:[],
    UserById:[],
    deleteUserById:[],
    addPokemon:[],

   

}

const getters = {
    AllPokemons: (state) => (state.pokemons),
    PokemonById:(state) => (state.pokemonById),
    getMessage:(state) =>(state.message),
    getLogin:(state) => (state.messageLogin),
    getTeam:(state) =>(state.team),
    getUser:(state) =>(state.user),
    infoUserById:(state) =>(state.UserById),
    getAllUsers:(state)=> (state.users),
    getTeamById:(state) =>(state.teamById),
    getSendMessage:(state)=>(state.sendPokemonMessage),
    addPokemonMessage:(state)=>(state.addPokemonMessage),
    deleteUserById:(state)=>(state.deleteUserById),
}

const actions = {
    // ADD pokemon to a team

    async addPokemonInTeam ({commit},obj){  
              
                var myHeaders = new Headers();

                var formdata = new FormData();
                formdata.append("team_name", obj.team);
                formdata.append("pokemon_id", obj.id);
          
                var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: formdata,
                  redirect: 'follow'
                };
          
                fetch("http://localhost:8000/api/pokemon/add", requestOptions)
                .then(response => response.json())
                .then(result => {
       
                  commit('addPokemonMessage',result);


                })
                .catch(error => console.log('error', error));
   
    
},
//GIFT POKEMON ONLY 24H
          async giftPokemon ({commit},date){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            var formdata = new FormData();
            formdata.append("gift", date);


            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: formdata,
              redirect: 'follow'
            };

            fetch("http://localhost:8000/api/users/gift", requestOptions)
            .then(response => response.json())
            .then(result => {
              
              console.log(result,commit);

            })
            .catch(error => console.log('error', error));

          },
    // FETCH ALL POKEMON 
    fetchPokemon({commit}){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            
            redirect: 'follow'
            };

            fetch("http://localhost:8000/api/pokemons", requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchPokemon',result))
            .catch(error => console.log('error', error));
                },

    // FETCH POKEMON BY ID 
    fetchPokemonById({commit},id){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
         
          redirect: 'follow'
        };
        
        fetch(`http://localhost:8000/api/pokemons/${id}`, requestOptions)
          .then(response => response.json())
          .then(result => commit('fetchPokemonById',result))
          .catch(error => console.log('error', error));
            },

    // REGISTER 
    async registerForm({commit},form){
        var formdata = new FormData();
        formdata.append("lastname", form.lastname);
        formdata.append("firstname", form.firstname);
        formdata.append("email", form.email);
        formdata.append("password", form.password);
        formdata.append("c_password", form.c_password);
        
     
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8000/api/register", requestOptions)
          .then(response => response.json())
          .then(result =>  {
              commit('registerMessage',result);
              if(!result.error){
              }
             
            })
          .catch(error => console.log('error', error));
    },
    //LOGIN 

    async loginForm({commit},obj){
        var formdata = new FormData();
        formdata.append("email", obj.email);
        formdata.append("password", obj.password);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        console.log(commit);

        fetch("http://localhost:8000/api/login", requestOptions)
        .then(response => response.json())
        .then(result =>  {
            commit('loginMessage',result);
            window.localStorage.setItem('token',result.success.token);
            if(!result.error){
              window.location.href="/MonCompte";
            }
          })
        .catch(error => console.log('error', error));
    },
    // EDIT USER 
    async editForm({commit},form){
      var formdata = new FormData();
      formdata.append("lastname", form.lastname);
      formdata.append("firstname", form.firstname);
      formdata.append("email", form.email);
      
   
      var requestOptions = {
        method: 'PUT',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch("http://localhost:8000/api/users/update", requestOptions)
        .then(response => response.json())
        .then(result =>  {
            commit('registerMessage',result);
            if(!result.error){
            }
           
          })
        .catch(error => console.log('error', error));
  },

    // FETCH TEAM 

    async fetchTeam({commit}){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            
            redirect: 'follow'
            };

            fetch("http://localhost:8000/api/users/me/team", requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchTeam',result))
            .catch(error => console.log('error', error));
                },
    // FETCH TEAM BY ID
  async fetchTeamById({commit},id){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            
            redirect: 'follow'
            };

            fetch(`http://localhost:8000/api/users/${id}/team`, requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchTeamById',result))
            .catch(error => console.log('error', error));
                },


      // FETCH USER
    async fetchUser({commit}){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            
            redirect: 'follow'
            };

            fetch("http://localhost:8000/api/users/me/", requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchUser',result))
            .catch(error => console.log('error', error));
                },
// FETCH USER BY ID
    async fetchUserById({commit},id){
                  var myHeaders = new Headers();
                  myHeaders.append("Authorization", `Bearer ${token}`);
      
                  var requestOptions = {
                  method: 'GET',
                  headers: myHeaders,
                  
                  redirect: 'follow'
                  };
      
                  fetch(`http://localhost:8000/api/users/${id}`, requestOptions)
                  .then(response => response.json())
                  .then(result => {
                    commit('UserById',result);
    
                  })
                  .catch(error => console.log('error', error));
                      },

    // DELETE USER BY ID
    async deleteUser({commit},id){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      
      redirect: 'follow'
      };

      fetch(`http://localhost:8000/api/users/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        commit('deleteUserById',result);

      })
      .catch(error => console.log('error', error));
          },

        //FETCH ALL USERS
     async fetchAllUsers({commit}){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            
            redirect: 'follow'
            };

            fetch("http://localhost:8000/api/users/", requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchAllUsers',result))
            .catch(error => console.log('error', error));
                },
// SEND POKEMON TO OTHER PLAYER
      async sendPokemon({commit},obj){
          var myHeaders = new Headers();
          myHeaders.append("Authorization", `Bearer ${token}`);

        var formdata = new FormData();
        formdata.append("team_name", obj.team);
        formdata.append("pokemon_id", obj.id);
        formdata.append("new_team", obj.newteam);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("http://localhost:8000/api/users/7/team", requestOptions)
        .then(response => response.json())
        .then(result => {
          commit('sendPokemon',result)

        })
        .catch(error => console.log('error', error));
      },


    }
  
  
    



const mutations = {
fetchPokemon : (state, pokemons) => (state.pokemons = pokemons),
fetchPokemonById : (state,pokemonById) => (state.pokemonById = pokemonById),
registerMessage:(state,message)=>(state.message = message),
loginMessage:(state,messageLogin) =>(state.messageLogin = messageLogin),
fetchTeam:(state,team) => (state.team = team),
fetchUser:(state,user) =>(state.user = user),
fetchAllUsers:(state,users)=>(state.users = users),
fetchTeamById:(state,teamById) => (state.teamById = teamById),
sendPokemon:(state,sendPokemonMessage)=>(state.sendPokemonMessage = sendPokemonMessage),
UserById:(state,UserById)=>(state.UserById = UserById),
deleteUserById:(state,deleteUserById)=>(state.deleteUserById = deleteUserById),
addPokemonMessage:(state,addPokemonMessage) =>(state.addPokemonMessage = addPokemonMessage),

}



export default{
    state,
    getters,
    actions,
    mutations,
}