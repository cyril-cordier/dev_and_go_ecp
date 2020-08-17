const token = window.localStorage.getItem('token') || "";
var url = `localhost:8000`;

const state = {
    message:[],
    createmessage:[],
    messageLogin:[],
    user:[],
    users:[],
    UserById:[],
    deleteUserById:[],

   

}

const getters = {
    getMessage:(state) =>(state.message),
    getUpdateMessage:(state)=>(state.updatemessage),
    getCreateMessage:(state)=>(state.createmessage),
    getLogin:(state) => (state.messageLogin),
    getUser:(state) =>(state.user),
    infoUserById:(state) =>(state.UserById),
    getAllUsers:(state)=> (state.users),
    deleteUserById:(state)=>(state.deleteUserById),
}

const actions = {
   
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
        
        fetch(`http://${url}/api/register`, requestOptions)
          .then(response => response.json())
          .then(result =>  {
              commit('registerMessage',result);
              window.location.href="/login";

             
            })
          .catch(error => console.log('error', error));
    },
    // Create 
    async createForm({commit},form){
      var formdata = new FormData();
      formdata.append("lastname", form.lastname);
      formdata.append("firstname", form.firstname);
      formdata.append("email", form.email);
      formdata.append("challengename", form.challengename);
      
      
   
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch(`http://${url}/api/create`, requestOptions)
        .then(response => response.json())
        .then(result =>  {
            commit('createMessage',result);
            window.location.href="/MonCompte";

           
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

        fetch(`http://${url}/api/login`, requestOptions)
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
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            myHeaders.append('Content-Type','application/json');
            var raw=JSON.stringify({
              "lastname": form.lastname,
              "firstname": form.firstname,
              "email": form.email,
              "challengename": form.challengename,
            });
      
   
      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch(`http://${url}/api/users/${form.id}`, requestOptions)
        .then(response => response.json())
        .then(result =>  {
            commit('updateMessage',result);
            //location.reload();
           
          })
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

            fetch(`http://${url}/api/users/me/`, requestOptions)
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
      
                  fetch(`http://${url}/api/users/${id}`, requestOptions)
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

      fetch(`http://${url}/api/users/${id}`, requestOptions)
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

            fetch(`http://${url}/api/users/`, requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchAllUsers',result))
            .catch(error => console.log('error', error));
                },

    }
  

const mutations = {
createMessage:(state,createmessage)=>(state.createmessage = createmessage),
registerMessage:(state,message)=>(state.message = message),
updateMessage:(state,updatemessage)=>(state.updatemessage = updatemessage),
loginMessage:(state,messageLogin) =>(state.messageLogin = messageLogin),
fetchUser:(state,user) =>(state.user = user),
fetchAllUsers:(state,users)=>(state.users = users),
fetchTeamById:(state,teamById) => (state.teamById = teamById),
UserById:(state,UserById)=>(state.UserById = UserById),
deleteUserById:(state,deleteUserById)=>(state.deleteUserById = deleteUserById),

}



export default{
    state,
    getters,
    actions,
    mutations,
}