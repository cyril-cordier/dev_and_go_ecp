const token = window.localStorage.getItem('token') || "";
var url = `localhost:8000`;

const state = {
    productmessage:[],
    updateproductmessage:[],
    product:[],
    products:[],
    ProductById:[],
    deleteProductById:[],

   

}

const getters = {
    getProductMessage:(state) =>(state.productmessage),
    getUpdateProductMessage:(state)=>(state.updateproductmessage),
    getProduct:(state) =>(state.product),
    infoProductById:(state) =>(state.ProductById),
    getAllProducts:(state)=> (state.products),
}

const actions = {
   
    // CREATE
    async createProduct({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
        var formdata = new FormData();
        formdata.append("name", form.name);
        formdata.append("details", form.details);
        formdata.append("price", form.price);
        formdata.append("image", form.image);
        formdata.append("image_name", form.image_name+'.'+form.extension);
        
     
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch(`http://${url}/api/products`, requestOptions)
          .then(response => response.json())
          .then(result =>  {
              commit('createProductMessage',result);
              /* location.reload(); */
             
            })
          .catch(error => console.log('error', error));
    },
    
    // EDIT
    async editProduct({commit},form){
      var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            myHeaders.append('Content-Type','application/json');
            var raw=JSON.stringify({
              "name": form.name,
              "details": form.details,
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
      
      fetch(`http://${url}/api/products/${form.id}`, requestOptions)
        .then(response => response.json())
        .then(result =>  {
            commit('updateProductMessage',result);
            location.reload();
           
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
      
                  fetch(`http://${url}/api/products/${id}`, requestOptions)
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

      fetch(`http://${url}/api/products/${id}`, requestOptions)
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

            fetch(`http://${url}/api/products/`, requestOptions)
            .then(response => response.json())
            .then(result => commit('fetchAllProducts',result))
            .catch(error => console.log('error', error));
                },

    }
  

const mutations = {
createProductMessage:(state,productmessage)=>(state.productmessage = productmessage),
updateProductMessage:(state,updateproductmessage)=>(state.updateproductmessage = updateproductmessage),
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