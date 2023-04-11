const { createApp, ref, reactive, computed } = Vue;

const app = createApp({
  setup() {
    //const products = 10;


    const cart = ref(0)
    //products =
    const products = ref([]);

    const dataFilePath = "listProducts.json";



    fetch(dataFilePath)
      .then((response) =>{
        return response.json();
      }) 
      .then((data) => {
        products.value = data;
      })  
      
      
    function updateCart(price) {
      console.log('Update Cart');
      cart.value += 1;
    }
    function isInStock(index) {
      return products.value[index].stock > 0;
    }



    return{
    cart,
    updateCart,
    products,
    isInStock,

    };
  },
});
