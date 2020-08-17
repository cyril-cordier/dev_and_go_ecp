const token = window.localStorage.getItem('token') || "";
var url = `localhost:8000`;

const state = {
    officeusermessage:[],
    updateofficeusermessage:[],
    officeuser:[],
    officeusers:[],
    OfficeuserById:[],
    deleteOfficeuserById:[],

   

}

const getters = {
    getOfficeuserMessage:(state) =>(state.officeusermessage),
    getUpdateOfficeuserMessage:(state)=>(state.updateofficeusermessage),
    getOfficeuser:(state) =>(state.officeuser),
    infoOfficeuserById:(state) =>(state.OfficeuserById),
    getAllOfficeusers:(state)=> (state.officeusers),
}

const actions = {
   
    // CREATE
    async createOfficeuser({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
        var formdata = new FormData();
        //var image_name =  form.id;
        formdata.append("name", form.name);
        formdata.append("fonction", form.fonction);
        formdata.append("image", form.image);
        formdata.append("image_name", form.image_name+'.'+form.extension);
     
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch(`http://${url}/api/office`, requestOptions)
          .then(response => response.json())
          .then(result =>  {
              commit('createOfficeuserMessage',result);
              /* location.reload(); */
             
            })
          .catch(error => console.log('error', error));
    },
    
    // EDIT
    async editOfficeuser({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            myHeaders.append('Content-Type','application/json');
            var raw=JSON.stringify({
              "name": form.name,
              "fonction": form.fonction,
              "image": form.image,
              "image_name": form.image_name+'.'+form.extension
            });
            console.log(form.image);
            
      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch(`http://${url}/api/office/${form.id}`, requestOptions)
        .then(response => response.json())
        .then(result =>  {
            commit('updateOfficeuserMessage',result);
            //location.reload();
           
          })
        .catch(error => console.log('error', error));
  },

   
      
// FETCH BY ID
    async fetchOfficeuserById({commit},id){
                  var myHeaders = new Headers();
                  myHeaders.append("Authorization", `Bearer ${token}`);
      
                  var requestOptions = {
                  method: 'GET',
                  headers: myHeaders,
                  
                  redirect: 'follow'
                  };
      
                  fetch(`http://${url}/api/office/${id}`, requestOptions)
                  .then(response => response.json())
                  .then(result => {
                    commit('OfficeuserById',result);
    
                  })
                  .catch(error => console.log('error', error));
                      },

    // DELETE BY ID
    async deleteOfficeuser({commit},id){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      
      redirect: 'follow'
      };

      fetch(`http://${url}/api/office/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        commit('deleteOfficeuserById',result);

      })
      .catch(error => console.log('error', error));
          },

        //FETCH ALL
     async fetchAllOfficeusers({commit}){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            
            redirect: 'follow'
            };

            fetch(`http://${url}/api/office/`, requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchAllOfficeusers',result))
            .catch(error => console.log('error', error));
                },

    }
  

const mutations = {
createOfficeuserMessage:(state,officeusermessage)=>(state.officeusermessage = officeusermessage),
updateOfficeuserMessage:(state,updateofficeusermessage)=>(state.updateofficeusermessage = updateofficeusermessage),
fetchOfficeuser:(state,officeuser) =>(state.officeuser = officeuser),
fetchAllOfficeusers:(state,officeusers)=>(state.officeusers = officeusers),
OfficeuserById:(state,OfficeuserById)=>(state.OfficeuserById = OfficeuserById),
deleteOfficeuserById:(state,deleteOfficeuserById)=>(state.deleteOfficeuserById = deleteOfficeuserById),

}



export default{
    state,
    getters,
    actions,
    mutations,
}