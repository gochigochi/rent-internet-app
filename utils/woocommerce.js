import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"

export const api = new WooCommerceRestApi({
    url: "https://db.rent-internet.com",
    consumerKey: process.env.NEXT_PUBLIC_WOO_PUBLIC_TESTKEY,
    consumerSecret: process.env.NEXT_PUBLIC_WOO_SECRET_TESTKEY,
    version: "wc/v3",
    queryStringAuth: true,
    axiosConfig: {
          headers: {'Content-Type': 'application/json'},
    }
});

export const getProductDetails = (setter, loader) => {
    api.get("products")
    .then((res) => {
      if (res.status === 200) {
        setter(res.data)
      }
    })
    .catch(err => console.log(err))
    .finally(() => loader(false))
}