const { createApp, reactive, computed, ref } = Vue;

const app = createApp({
  setup() {
    const cart = ref([]);
    const products = ref([]);

    const dataFilePath = "./listItems.json";

    // Default to false
    const selected = ref();

    fetch(dataFilePath)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        products.value = data;
      });

    // computed(() => {
    //   elp =() =>{
    //     const self = this;
    //     if(self.selected === 'men'){
    //       return self.products;
    //     }
    //     else
    //     {
    //       return self.products.filter(function(products){
    //         return self.currentFilter === Game.genre;
    //       });
    //     }
    //     })

    // Functions to show only one varient

    const selectedVariantIndex = ref(0);

    function updateSelectedVariant(index) {
      selectedVariantIndex.value = index;
    }
    const imageSrc = computed(() => {
      return product.children[selectedVariantIndex.value].imageSrc;
    });

    // Only focusing on Price for now
    const price = computed(() => {
      return products.value[selectedVariantIndex.value];
    });

    const inStock = computed(() => {
      return product.children[selectedVariantIndex.value].stock;
    });

    const productTitle = computed(() => {
      return product.children[selectedVariantIndex.value].type;
    });

    function addToCart(index) {
      const foundIndex = cart.value.findIndex(
        (element) => element.title === products.value[index].title
      );

      if (foundIndex === -1) {
        cart.value.push({
          title: products.value[index].title,
          quantity: 1,
        });
      } else {
        cart.value[foundIndex].quantity += 1;
      }

      products.value[index].stock -= 1;

      console.log("Cart contents", cart.value);
    }

    const itemsInCart = computed(() => {
      if (cart.value.length === 0) {
        return 0;
      }

      let quantity = 0;

      cart.value.forEach((cartItem) => {
        quantity += cartItem.quantity;
      });

      return quantity;
    });

    const filteredProducts = computed(() => {
      if (selected.value) {
        return products.value.filter((element) => element.sale === true);
      }
      return products.value;

      // console.log(selected.value);

      // console.log(products.value);

      // // return products.value;

      // return products.value.filter((product) => {
      //   if (product.sale) {
      //     console.log("Sale", product.sale);
      //     if (product.sale === true) {
      //       return true;
      //     } else return false;
      //   } else return false;
      // });

      // if (selected.value) {
      //   return products.value.filter((product) => product.sale === true);
      // }

      // return products.value;
    });

    return {
      cart,
      products,

      itemsInCart,
      selected,
      addToCart,
      selectedVariantIndex,

      updateSelectedVariant,
      imageSrc,
      price,
      inStock,
      productTitle,
      filteredProducts,
      //  elp,
    };
  },
});

app.mount("#app");
