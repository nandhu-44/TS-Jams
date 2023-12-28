interface Product {
  readonly _id: number;
  name: string;
  price: number;
}

interface DiscountProduct extends Product {
  discountPrice: number;
}

interface Inventory {
  readonly _id: number;
  name: string;
  products: Product[];
  getAllProducts: () => Product[];
  getProductById: (id: number) => Product | undefined;
}

const inventory: Inventory = {
  _id: 1,
  name: "Store Inventory",
  products: [
    { _id: 1, name: "Product 1", price: 100 },
    { _id: 2, name: "Product 2", price: 200 },
    { _id: 3, name: "Product 3", price: 300 },
  ],
  getAllProducts: function () {
    return this.products;
  },
  getProductById: function (id: number) {
    return this.products.find((product) => product._id === id);
  },
};

function calculateDiscount(product: Product): DiscountProduct {
  const discountPrice = product.price * 0.88;
  return { ...product, discountPrice };
}

console.log(inventory.getAllProducts());
console.log(inventory.getProductById(2));
console.log(calculateDiscount(inventory.getProductById(2)!));
