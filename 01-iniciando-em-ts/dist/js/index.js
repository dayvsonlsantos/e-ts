"use strict";
//  string, boolean, number, ...
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Compilar -> tsc -w ou tsc
const x = 30;
console.log(x);
//* Definir valor com um tipo:
// inferencia X annotation (ambos estão tipando os dados)
// inferencia (o tipo é automaticamente determinaco)
let y = 35;
// annotation (você define o tipo):
let z = 25;
//* Tipos básicos
// Typescript utiliza todos os tipos em minusculo. Exatamente como sai no typeof: console.log(typeof firstName);
let firstName = "Dayvson";
let age = 21;
const isAdmin = true;
//* Tipos object
const myNumbers = [1, 2, 3];
//* Tuplas
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
//* Object Literals -> {prop: value}
const user = {
    name: "Dayvson",
    age: 21
};
console.log(user);
//* any -> Não é uma boa prática, mas existe...
let a = 0;
a = true;
a = [];
a = "teste";
//? Quando não sabemos os tipos que aquela variável pode ter:
//* union type -> Unimos tipos para criar algo mais complexo
let id = "10";
id = 200;
const userId = 10;
const productId = "A001";
//* enum -> enumera coleções e nos permite usar dados mais complexos de uma forma mais simples
// tamanho de roupas (size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "camisa gola V",
    size: Size.G
};
console.log(camisa);
//* literal types -> determina um valor literal como um tipo
let teste;
//teste = "outrovalor"; -> Erro, pois não conseguimos alterar o literal types p/ outro valor
let teste2;
teste2: null;
teste2: "autenticado";
//Podemos utilizar na autenticação de um usuário. Ex: Se ele logou, fique autenticado, caso não: null.
//* Funcões
function sum(a, b) {
    return a + b;
}
console.log(sum(20, 2)); // Argumento
//* Podemos ainda determinar o tipo de saída daquela função:
function sayHelloToMe(name) {
    return (`Olá ${name}`);
}
console.log(sayHelloToMe("Dayvson"));
//* Funções que não retornam valores
function logger(msg) {
    console.log(msg);
}
console.log(logger("oie função sem retorno"));
//* Parâmetros opcionais:
function greeting(name, greet) {
    /*
        Dessa forma, teremos um erro lógico, pois o greet é opcional
        Se não passarmos como argumento, retornará 'undefined'
    */
    console.log(`Olá ${greet} ${name}`);
    // Para resolver o erro lógico acima, é necessário a verificação:
    if (greet) { //Verifica se algo está vindo como argumento
        console.log(`Hello ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
console.log(greeting("Dayvson"));
console.log(greeting("Dayvson", "Mr."));
//Interface permite reaproveitamento, exemplos:
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
// Podemos tipar variável usando a interface também:
const numeros = {
    n1: 10,
    n2: 20
};
console.log(multiplyNumbers(numeros));
//* Narrowing -> Checagem de tipos
function doSomething(info) {
    if (typeof info === "number") { //Verifica se o tipo do dado é numero
        console.log(`O número é ${info}`);
    }
    else {
        console.log("Não foi passado um número");
    }
}
console.log(doSomething(true));
console.log(doSomething(2));
//* Generics
/*
    basicamente o tipo de dado não importa, quero executar uma função que trabalhe
    aquele tipo de dado, mas ele pode ser qualquer um, e vai funcionar nas diferentes
    situações.
*/
//Vai exibir os itens de um array, independente do tipo dele
//Para indicar o generics, usamos <T> ou <U>
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
const a3 = [1, "a", 2]; //Tupla = Linhas
console.log(showArraysItems(a1));
console.log(showArraysItems(a2));
console.log(showArraysItems(a3));
//* Classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`A função do usuário é ${this.role}`);
        }
        else {
            console.log("Informação Restrita");
        }
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(true);
class Car {
    constructor(brand, wheels) {
        this.wheels = wheels;
        this.brand = brand;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
        console.log(`O carro tem ${this.wheels} rodas`);
    }
}
const fusca = new Car("Volkswagem", 4);
fusca.showBrand();
//* Herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
//* Decorators
/*
    Usado p/ validação de dados, para construir um evento observável
    em algum ponto determinado de uma classe ou função.

    Ou seja, intervir em algum ponto específico, seja uma função, método,
    momento de criação da instancia.
        Nesse intervalo que ele tem como interagir, ele faz alguma ação.
            No exemplo abaixo, adicionamos duas propriedades aos objetos que são
            criados a partir da classe Person.
*/
/*
    Criar um decorators para que gere automaticamente um id
    e data de criação p/ cada nova pessoa criada (na classe Person)
*/
/*
    Todo decorators é uma função, e retorna uma outra função
    (que contém as informações que iremos alterar na classe base)
*/
//Constructor Decorator
function BaseParamters() {
    /*
        Temos que trabalhar de uma forma que possa receber qualquer tipo de argumento
        pois teremos classes diferentes.


    */
    //Criaremos um generic que pega todos os argumentos do constructor e insere novos nele
    /*
        função genérica que estende o que queremos pegar, nesse caso o new,
        que recebe todos os argumentos que estão vindo dessa classe. E dizemos
        que será um array do tipo any. Tipamos como um objeto.

        Dentro dos parâmetros, usamos o constructor, indicado que é o generic.
            Assim ativamos o decorator na hora do constructor, na hora que o objeto
            é instanciado. Para colocarmos os parâmetros que queremos.

        Estamos trazendo todos os arrays daquele objeto, pois queremos inserir novos
    */
    return function (constructor) {
        // retornarmos uma classe que extends aquele constructor
        return class extends constructor {
            constructor() {
                super(...arguments);
                //Essa nova classe contém;
                this.id = Math.floor(Math.random() * 65536); // Número aleátorio;
                this.createdAt = new Date();
                /*
                    Assim, quando o usuário é criado, ganha um id
                    (gerado por números aleatórios e uma data de criação)
                */
            }
        };
    };
}
/*
    Para implementar esse decorator, usamos o @nomedele()
    Todo @ num código TS, será um decorator
*/
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamters()
], Person);
const sam = new Person("Sam");
console.log(sam);
