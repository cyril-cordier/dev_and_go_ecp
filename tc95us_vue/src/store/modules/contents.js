const token = window.localStorage.getItem('token') || "";
var url = `localhost:8000`;

const state = {
    contentmessage:[],
    updatecontentmessage:[],
    content:[],
    contents:[],
    ContentById:[],
    deleteContentById:[],

   

}

const getters = {
    getContentMessage:(state) =>(state.contentmessage),
    getUpdateContentMessage:(state)=>(state.updatecontentmessage),
    getContent:(state) =>(state.content),
    infoContentById:(state) =>(state.ContentById),
    getAllContents:(state)=> (state.contents),
}

const actions = {
   
    // CREATE
    async createContent({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
        var formdata = new FormData();
        formdata.append("title", form.title);
        formdata.append("content", form.content);
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
        
        fetch(`http://${url}/api/contents`, requestOptions)
          .then(response => response.json())
          .then(result =>  {
              commit('createContentMessage',result);
              /* location.reload(); */
             
            })
          .catch(error => console.log('error', error));
    },
    
    // EDIT
    async editContent({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            myHeaders.append('Content-Type','application/json');
            var raw=JSON.stringify({
              "title": form.title,
              "content": form.content,
              "name": form.name,
              "fonction": form.fonction,
              "image": form.image,
              "image_name": form.image_name+'.'+form.extension
            });
   
      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch(`http://${url}/api/contents/${form.id}`, requestOptions)
        .then(response => response.json())
        .then(result =>  {
            commit('updateContentMessage',result);
            //location.reload();
           
          })
        .catch(error => console.log('error', error));
  },

   
      
// FETCH BY ID
    async fetchContentById({commit},id){
                  var myHeaders = new Headers();
                  myHeaders.append("Authorization", `Bearer ${token}`);
      
                  var requestOptions = {
                  method: 'GET',
                  headers: myHeaders,
                  
                  redirect: 'follow'
                  };
      
                  fetch(`http://${url}/api/contents/${id}`, requestOptions)
                  .then(response => response.json())
                  .then(result => {
                    commit('ContentById',result);
    
                  })
                  .catch(error => console.log('error', error));
                      },

    // DELETE BY ID
    async deleteContent({commit},id){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      
      redirect: 'follow'
      };

      fetch(`http://${url}/api/contents/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        commit('deleteContentById',result);

      })
      .catch(error => console.log('error', error));
          },

        //FETCH ALL
     async fetchAllContents({commit}){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            
            redirect: 'follow'
            };

            fetch(`http://${url}/api/contents/`, requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchAllContents',result))
            .catch(error => console.log('error', error));
                },

    }
  

const mutations = {
createContentMessage:(state,contentmessage)=>(state.contentmessage = contentmessage),
updateContentMessage:(state,updatecontentmessage)=>(state.updatecontentmessage = updatecontentmessage),
fetchContent:(state,content) =>(state.content = content),
fetchAllContents:(state,contents)=>(state.contents = contents),
ContentById:(state,ContentById)=>(state.ContentById = ContentById),
deleteContentById:(state,deleteContentById)=>(state.deleteContentById = deleteContentById),

}



export default{
    state,
    getters,
    actions,
    mutations,
}