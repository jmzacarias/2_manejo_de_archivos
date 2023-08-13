import ProductManager from "./productManager.js";

const productManager = new ProductManager()

const mockProduct = {
    title: 'Producto de prueba',
    description: 'Este es un producto de prueba',
    price: 200,
    thumbnail: 'sin imagen',
    code: 'abc123',
    stock: 25
}

const mockFailProduct = {
    title: 'Producto de prueba',
    price: 200,
    thumbnail: 'sin imagen',
    code: 'abc123',
    stock: 25
}

const test = async ()=> {
    console.log('\--TEST--')
    console.log('getProducts() - debe devolver un array vacío')
    console.log(await productManager.getProducts())

    console.log('\--TEST--')
    console.log('addProduct(mockProduct) - Debe devolver el producto creado')
    console.log(await productManager.addProduct(mockProduct))

    console.log('\--TEST--')
    console.log('getProducts() - debe devolver un array con el producto agregado')
    console.log(await productManager.getProducts())

    console.log('\--TEST--')
    console.log('addProduct(mockProduct) - Debe devolver error por falta de campos requeridos')
    console.log(await productManager.addProduct(mockFailProduct))

    console.log('\--TEST--')
    console.log('addProduct(mockProduct) - Debe devolver error por CODE repetido')
    console.log(await productManager.addProduct(mockProduct))

    console.log('\--TEST--')
    console.log('getProducts() - debe devolver un array con el producto agregado')
    console.log(await productManager.getProducts())

    console.log('\--TEST--')
    console.log('getProductById(1) - debe devolver un array con el producto agregado')
    console.log(await productManager.getProductById(1))

    console.log('\--TEST--')
    console.log('getProductById(2) - debe devolver ERROR por inexistendia de ID 2')
    console.log(await productManager.getProductById(2))

    console.log('\--TEST--')
    console.log('updateProduct(1,{price:250}) - debe devolver uel producto actualizado')
    console.log(await productManager.getProductById(1,{price:250}))

    console.log('\--TEST--')
    console.log('updateProduct(2,{price:250}) - debe devolver ERROR por inexistencia de ID 2')
    console.log(await productManager.getProductById(2,{price:250}))

    console.log('\--TEST--')
    console.log('deleteProduct(1) - debe devolver el array vacio porque se elimino el unico producto')
    console.log(await productManager.deleteById(1))

    console.log('\--TEST--')
    console.log('deleteProduct(2) - debe devolver error por inexistencia del ID 2')
    console.log(await productManager.deleteById(2))
}

test();
