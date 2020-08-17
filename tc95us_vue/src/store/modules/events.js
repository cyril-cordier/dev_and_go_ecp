const token = window.localStorage.getItem('token') || "";
var url = `localhost:8000`;

const state = {
    eventmessage:[],
    updateeventmessage:[],
    event:[],
    events:[],
    eventById:[],
    deleteEventById:[],

   

}

const getters = {
  getEventMessage:(state) =>(state.eventmessage),
  getUpdateEventMessage:(state)=>(state.updateeventmessage), 
  getEvent:(state) =>(state.event),
  infoEventById:(state) =>(state.EventById),
  getAllEvents:(state)=> (state.events),
}

const actions = {
   
    // CREATE
    async createEvent({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);  
      var formdata = new FormData();
        formdata.append("title", form.title);
        formdata.append("details", form.details);
        formdata.append("place", form.place);
        formdata.append("date", form.date);
        formdata.append("hour", form.hour);
        formdata.append("price", form.price);
        formdata.append("image", form.image);
        formdata.append("image_name", form.image_name+'.'+form.extension);
       
        
     
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch(`http://${url}/api/events`, requestOptions)
          .then(response => response.json())
          .then(result =>  {
              commit('createEventMessage',result);
              /* location.reload(); */

             
            })
          .catch(error => console.log('error', error));
    },
    
    // EDIT
    async editEvent({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            myHeaders.append('Content-Type','application/json');
            var raw=JSON.stringify({
              "title": form.title,
              "details": form.details,
              "place": form.place,
              "date": form.date,
              "hour": form.hour,
              "price": form.price,
              "image": form.image,
              "image_name": form.image_name+'.'+form.extension
            });
   
      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch(`http://${url}/api/events/${form.id}`, requestOptions)
        .then(response => response.json())
        .then(result =>  {
            commit('updateEventMessage',result);
            //location.reload();
           
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
      
                  fetch(`http://${url}/api/events/${id}`, requestOptions)
                  .then(response => response.json())
                  .then(result => {
                    commit('EventById',result);
    
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

      fetch(`http://${url}/api/events/${id}`, requestOptions)
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

            fetch(`http://${url}/api/events/`, requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchAllEvents',result))
            .catch(error => console.log('error', error));
                },

    }
  

const mutations = {
createEventMessage:(state,eventmessage)=>(state.eventmessage = eventmessage),
updateEventMessage:(state,updateeventmessage)=>(state.updateeventmessage = updateeventmessage),
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