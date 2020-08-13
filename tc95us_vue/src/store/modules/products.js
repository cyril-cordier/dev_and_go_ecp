const token = window.localStorage.getItem('token') || "";

const state = {
    message:[],
    updatemessage:[],
    product:[],
    products:[],
    ProductById:[],
    deleteProductById:[],

   

}

const getters = {
    getMessage:(state) =>(state.message),
    getProduct:(state) =>(state.product),
    infoProductById:(state) =>(state.ProductById),
    getAllProducts:(state)=> (state.products),
    deleteProductById:(state)=>(state.deleteProductById),
}

const actions = {
   
    // CREATE
    async createForm({commit},form){
        var formdata = new FormData();
        formdata.append("name", form.name);
        formdata.append("details", form.details);
        formdata.append("price", form.price);
        //formdata.append("image", form.image);
        
     
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8000/api/products/create", requestOptions)
          .then(response => response.json())
          .then(result =>  {
              commit('createrMessage',result);

             
            })
          .catch(error => console.log('error', error));
    },
    
    // EDIT
    async editForm({commit},form){
      var formdata = new FormData();
      formdata.append("name", form.name);
      formdata.append("details", form.details);
      formdata.append("price", form.price);
      formdata.append("image", form.image);
   
      var requestOptions = {
        method: 'PUT',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch("http://localhost:8000/api/products/update", requestOptions)
        .then(response => response.json())
        .then(result =>  {
            commit('updateMessage',result);

           
          })
        .catch(error => console.log('error', error));
  },

   
      
// FETCH BY ID
    async fetchProductById({commit},id){
                  var myHeaders = new Headers();
                  myHeaders.append("Authorization", `Bearer ${token}`);
      
                  var requestOptions = {
                  method: 'GET',
                  headers: myHeaders,
                  
                  redirect: 'follow'
                  };
      
                  fetch(`http://localhost:8000/api/products/${id}`, requestOptions)
                  .then(response => response.json())
                  .then(result => {
                    commit('ProductById',result);
    
                  })
                  .catch(error => console.log('error', error));
                      },

    // DELETE BY ID
    async deleteProduct({commit},id){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      
      redirect: 'follow'
      };

      fetch(`http://localhost:8000/api/products/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        commit('deleteProductById',result);

      })
      .catch(error => console.log('error', error));
          },

        //FETCH ALL
     async fetchAllProducts({commit}){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            
            redirect: 'follow'
            };

            fetch("http://localhost:8000/api/products/", requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchAllProducts',result))
            .catch(error => console.log('error', error));
                },

    }
  

const mutations = {
createMessage:(state,message)=>(state.message = message),
updateMessage:(state,updatemessage)=>(state.updatemessage = updatemessage),
fetchProduct:(state,product) =>(state.product = product),
fetchAllProducts:(state,products)=>(state.products = products),
ProductById:(state,ProductById)=>(state.ProductById = ProductById),
deleteProductById:(state,deleteProductById)=>(state.deleteProductById = deleteProductById),

}



export default{
    state,
    getters,
    actions,
    mutations,
}