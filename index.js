import ProductManager from "./productManager.js";

const productManager = new ProductManager()

// let newProduct = {title: 'papa', price: 23, description: 'verdura', thumbnail: 'La imagen no esta disponible', code: 'ABC123', stock: 76}
console.log(await productManager.deleteById(1))