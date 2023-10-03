import axios from "axios";

export async function productsData() {
  const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/walmart"
  );
  /*.then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });*/

  return products;
}
