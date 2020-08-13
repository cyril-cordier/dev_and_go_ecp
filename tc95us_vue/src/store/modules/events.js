const token = window.localStorage.getItem('token') || "";

const state = {
    message:[],
    updatemessage:[],
    event:[],
    events:[],
    eventById:[],
    deleteeventById:[],

   

}

const getters = {
    getMessage:(state) =>(state.message),
    getEvent:(state) =>(state.event),
    infoEventById:(state) =>(state.EventById),
    getAllEvents:(state)=> (state.events),
    deleteEventById:(state)=>(state.deleteEventById),
}

const actions = {
   
    // CREATE
    async createForm({commit},form){
        var formdata = new FormData();
        formdata.append("title", form.title);
        formdata.append("details", form.details);
        formdata.append("place", form.place);
        formdata.append("price", form.price);
        //formdata.append("image", form.image);
        //formdata.append("file", form.file);
        
     
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8000/api/events/create", requestOptions)
          .then(response => response.json())
          .then(result =>  {
              commit('createMessage',result);

             
            })
          .catch(error => console.log('error', error));
    },
    
    // EDIT
    async editForm({commit},form){
      var formdata = new FormData();
      formdata.append("title", form.title);
      formdata.append("details", form.details);
      formdata.append("place", form.place);
      formdata.append("price", form.price);
      //formdata.append("image", form.image);
      //formdata.append("file", form.file);
   
      var requestOptions = {
        method: 'PUT',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch("http://localhost:8000/api/events/update", requestOptions)
        .then(response => response.json())
        .then(result =>  {
            commit('updateMessage',result);

           
          })
        .catch(error => console.log('error', error));
  },

   
      
// FETCH BY ID
    async fetchEventById({commit},id){
                  var myHeaders = new Headers();
                  myHeaders.append("Authorization", `Bearer ${token}`);
      
                  var requestOptions = {
                  method: 'GET',
                  headers: myHeaders,
                  
                  redirect: 'follow'
                  };
      
                  fetch(`http://localhost:8000/api/events/${id}`, requestOptions)
                  .then(response => response.json())
                  .then(result => {
                    commit('eventById',result);
    
                  })
                  .catch(error => console.log('error', error));
                      },

    // DELETE BY ID
    async deleteEvent({commit},id){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      
      redirect: 'follow'
      };

      fetch(`http://localhost:8000/api/events/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        commit('deleteEventById',result);

      })
      .catch(error => console.log('error', error));
          },

        //FETCH ALL
     async fetchAllEvents({commit}){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            
            redirect: 'follow'
            };

            fetch("http://localhost:8000/api/events/", requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchAllEvents',result))
            .catch(error => console.log('error', error));
                },

    }
  

const mutations = {
createMessage:(state,message)=>(state.message = message),
updateMessage:(state,updatemessage)=>(state.updatemessage = updatemessage),
fetchEvent:(state,event) =>(state.event = event),
fetchAllEvents:(state,events)=>(state.events = events),
EventById:(state,EventById)=>(state.EventById = EventById),
deleteEventById:(state,deleteeventById)=>(state.deleteEventById = deleteeventById),

}



export default{
    state,
    getters,
    actions,
    mutations,
}