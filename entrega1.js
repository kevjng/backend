

class ProductManager {
    constructor() {
        this.products = []
    }

    getProduct = () => this.products

    getProductById = (id) => {
        const productDb = this.products.find(product => product.id === id)
        if (!productDb) {
            return `no existe el producto con id: ${id}`

        }
        return productDb
    }

    addProduct = (newProduct) => {
        //Si esta el producto...
        const productDb = this.products.find(product => product.code === newProduct.code)
        /*console.log(productDb)*/
        if (productDb) {
            return `Se encontró el producto`
        }

        if (newProduct.title === "" ) {
            return 'completar bien el titulo'
        }
        if (newProduct.desc === "" ) {
            return 'completar bien la desc'
        }
        if (newProduct.price <= 0 ) {
            return 'el precio debe ser mayor a 0'
        }
        
        if (this.products.length === 0) {
            newProduct.id = 1
            this.products.push(newProduct)
        } else {
            this.products = [...this.products, { ...newProduct, id: this.products[this.products.length - 1].id + 1 }]
        }

    }
}

const productos = new ProductManager()


console.log(productos.addProduct(
    { title: "producto 1", desc: "este es un producto...", price:0, thumbnail: "ruta img", stock: 0, code: 1, stock:200 }
))
console.log(productos.addProduct(
    { title: "producto 2", desc: "", price: 1500, thumbnail: "ruta img", stock: 5, code: 2, stock: 500 }
))


console.log(productos.getProduct())
console.log(productos.getProductById(2))