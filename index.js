{/* <let numero = 1

let nombre = "Kevin"

let lista = ["item0", "item1", "item2", "item3", "item4"]

let obj = {

    Nombre: "Kevin",

    Apellido: "Gras",

    Edad: 34

}

let numero2 = numero + 1

console.log(numero)
console.log(nombre)
console.table(lista)
console.log(obj)
console.log(numero2)> */}

const valoresBase = [1, 2, 3, 4, 5, 6]

const valoresPotencia = valoresBase.map((base, i) => base ** i)

/* console.log(valoresPotencia) */

let nombre = ['Kevin', 'Juan', 'Emilio', 'Luna']
console.log(nombre.includes('Juan'))

/* if (nombre.includes('Juan')) {
    return 'Si Juan está'
} else {
    return 'No esta Juan'
}
 */

const impuestos = {
    impuesto1: 234,
    impuesto2: 341,
    impuesto3: 4611,
    impuesto4: 111,
}
    
let parKeyValue = Object.entries(impuestos)
let soloPropiedades = Object.keys(impuestos)
let soloValores = Object.values(impuestos)

/* console.log(soloTotal) */