function squareRectangle(a = 2, b = 5) {

    return a * b
}

console.log(squareRectangle())


const pi = 3.14

function squareCircle(r = 2) {

    return pi * Math.pow(r, 2)
}

console.log(squareCircle())


function squareCylinder(r, h) {
    return 2 * pi * r * (h + r)
}

console.log(squareCylinder(3, 5))


const arr = [
    "qwe",
    "asd",
    "zxc"
];

function showEachItemOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }

}

showEachItemOfArray(arr)


function createParagraph(text) {
    document.write(`<p>${text}</p>`)
}

createParagraph("create text text")


function createList(list) {
    document.write(`<ul>
    <li>${list}</li>
    <li>${list}</li>
    <li>${list}</li>
</ul>`)
}

createList("test123")


function createList1(list1, count) {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${list1}</li>`)
    }
    document.write(`</ul>`)
}

createList1("asdaasda", 4)


const primitiveElements = [
    "asda",
    "qweq",
    213,
    123213123,
    true,
    false
]
//
// const testArr = [1,2,3,4,5]

function createPrimitiveElements(array) {

    document.write(`<ul>`)
    for (let j = 0; j < array.length; j++) {
        document.write(`<li>${array[j]}</li>`)
    }
    document.write(`</ul>`)
}

createPrimitiveElements(primitiveElements)


let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
];


function createUsersFields(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>${array[i].id} ${array[i].name} ${array[i].age}</div>`)
    }
}

createUsersFields(users)


const numbers = [
    13,
    0,
    10,
    5,
    7,
    -2,
    -13
]

let result = 0

function lowestNumber(array) {
    for (let i = 0; i < array.length; i++) {

        if (array[i] < result) {
            result = array[i]
        }
    }
    console.log(result)
}

lowestNumber(numbers)


sumNumbers = [1, 5, 13, 20]


function sum(array) {
    let result1 = 0
    for (let i = 0; i < array.length; i++) {
        result1 += array[i]
        console.log(result1)
    }
}

sum(sumNumbers)


swapNumbers = [11, 22, 33, 44]

console.log(swapNumbers[1])

function swap(array, index1, index2) {
    let swap1 = array[index1]
    let swap2 = array[index2]
    array[index1] = swap2
    array[index2] = swap1
    return array
}

console.log(swap(swapNumbers, 2, 1))


function exchange(sumUAH, currencyValues, exchangeCurrency) {


    for (let i = 0; i < currencyValues.length; i++) {


        if (exchangeCurrency == currencyValues[i].currency) {

            return sumUAH / currencyValues[i].value

        }

    }


}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'))