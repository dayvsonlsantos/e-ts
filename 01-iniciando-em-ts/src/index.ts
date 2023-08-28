//  string, boolean, number, ...

// Compilar -> tsc -w ou tsc

const x: number = 30;

console.log(x);


//* Definir valor com um tipo:

// inferencia X annotation (ambos estão tipando os dados)

    // inferencia (o tipo é automaticamente determinaco)
        let y = 35;
    // annotation (você define o tipo):
        let z: number = 25;

//* Tipos básicos
    // Typescript utiliza todos os tipos em minusculo. Exatamente como sai no typeof: console.log(typeof firstName);
    let firstName: string = "Dayvson";
    let age: number = 21;
    const isAdmin: boolean = true;

//* Tipos object
    const myNumbers: number[] = [1,2,3];

//* Tuplas
    let myTuple: [number, string, string[]];
    myTuple = [5, "teste", ["a", "b"]];

//* Object Literals -> {prop: value}
    const user: {name: string, age: number} = {
        name: "Dayvson",
        age: 21
    }
    console.log(user);

//* any -> Não é uma boa prática, mas existe...
    let a: any = 0;
        a = true;
        a = [];
        a = "teste";

//? Quando não sabemos os tipos que aquela variável pode ter:
    //* union type -> Unimos tipos para criar algo mais complexo
    let id: string | number = "10";
    id = 200;

//* type alias -> Usado p/ determinar o nome de um tipo que criamos, assim podemos reutilizá-lo
    type myIdType = number | string;

    const userId: myIdType = 10;
    const productId: myIdType = "A001";

//* enum -> enumera coleções e nos permite usar dados mais complexos de uma forma mais simples
    // tamanho de roupas (size: Médio, size: Pequeno)
    enum Size {
        P = "pequeno",
        M = "Médio",
        G = "Grande"
    }

    const camisa = {
        name: "camisa gola V",
        size: Size.G
    }

    console.log(camisa);

//* literal types -> determina um valor literal como um tipo
    let teste: "algumvalor";

    //teste = "outrovalor"; -> Erro, pois não conseguimos alterar o literal types p/ outro valor

    let teste2: "autenticado" | null;
    teste2: null;
    teste2: "autenticado";
    //Podemos utilizar na autenticação de um usuário. Ex: Se ele logou, fique autenticado, caso não: null.

//* Funcões
    function sum(a: number, b: number){ // Parâmetro
        return a + b;
    }

    console.log(sum(20,2)); // Argumento

    //* Podemos ainda determinar o tipo de saída daquela função:
        function sayHelloToMe(name: string): string { //:string determina o tipo do retorno
            return (`Olá ${name}`);
        }

        console.log(sayHelloToMe("Dayvson"));

    //* Funções que não retornam valores
        function logger(msg: string): void{
            console.log(msg);
        }

        console.log(logger("oie função sem retorno"));

    //* Parâmetros opcionais:
        function greeting(name: string, greet?: string): void { // greet? -> a interrogação indica que é opcional
            /*
                Dessa forma, teremos um erro lógico, pois o greet é opcional
                Se não passarmos como argumento, retornará 'undefined'
            */
            console.log (`Olá ${greet} ${name}`);

            // Para resolver o erro lógico acima, é necessário a verificação:
            if(greet) { //Verifica se algo está vindo como argumento
                console.log (`Hello ${greet} ${name}`);
            }else{
                console.log(`Olá ${name}`);
            }


        }

        console.log(greeting("Dayvson"));

        console.log(greeting("Dayvson", "Mr."));

//* Interfaces -> Padronizam algo p/ que possamos usar como tipos
    interface MathFunctionParams{ //Interface p/ funções matemáticas
        n1: number,
        n2: number
    }

    //Interface permite reaproveitamento, exemplos:

        function sumNumbers(nums: MathFunctionParams): number{
            return nums.n1 + nums.n2;
        }

        console.log(sumNumbers({n1: 1, n2: 2}))


        function multiplyNumbers(nums: MathFunctionParams): number{
            return nums.n1 * nums.n2;
        }
        
        // Podemos tipar variável usando a interface também:
            const numeros: MathFunctionParams = {
                n1: 10,
                n2: 20
            }

        console.log(multiplyNumbers(numeros));

//* Narrowing -> Checagem de tipos
    function doSomething(info: number | boolean): void {
        if(typeof info === "number"){ //Verifica se o tipo do dado é numero
            console.log(`O número é ${info}`);
        }else {
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
    function showArraysItems<T>(arr: T[]) { //arr -> indica que recebe um array | T[] -> Indica que pode ser de qualquer tipo
        arr.forEach((item) => {
            console.log(`ITEM: ${item}`);
        })
    }

    const a1: number[] = [1,2,3];
    const a2: string[] = ["a", "b", "c"];
    const a3: [number, string, number] = [1, "a", 2]; //Tupla = Linhas

    console.log(showArraysItems(a1));
    console.log(showArraysItems(a2));
    console.log(showArraysItems(a3));

//* Classes
    class User {
        name
        role
        isApproved

        constructor(name: string, role: string, isApproved: boolean) {
            this.name = name;
            this.role = role;
            this.isApproved = isApproved;
        }

        showUserName(): void{
            console.log(`O nome do usuário é ${this.name}`);
        }

        showUserRole(canShow: boolean): void{
            if(canShow) {
                console.log(`A função do usuário é ${this.role}`);
            }else{
                console.log("Informação Restrita");
            }
        }
    }

    const zeca = new User("Zeca", "Admin", true);

    console.log(zeca);
    zeca.showUserName();
    zeca.showUserRole(true);

//* Interfaces em Classes
    //Geralmente iniciam com letra I maiuscula de Interface
    interface IVehicle {
        brand: string;
        showBrand(): void; //Método que retorna vazio
    }

    class Car implements IVehicle {
        brand: string;
        wheels: number;
        
        constructor(brand: string, wheels: number) {
            this.wheels = wheels;
            this.brand = brand;
        }
        
        showBrand(): void {
            console.log(`A marca do carro é ${this.brand}`);
            console.log(`O carro tem ${this.wheels} rodas`);
        }
    }

    const fusca = new Car ("Volkswagem", 4);

    fusca.showBrand();

//* Herança
    class SuperCar extends Car{
        engine

        constructor(brand: string, wheels: number, engine: number){
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
    function BaseParamters(){

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

        return function <T extends {new (...args: any[]): {}}>(constructor: T){
            // retornarmos uma classe que extends aquele constructor
            return class extends constructor {
                //Essa nova classe contém;
                id = Math.floor(Math.random() * 65536); // Número aleátorio;
                createdAt = new Date();

                /*
                    Assim, quando o usuário é criado, ganha um id 
                    (gerado por números aleatórios e uma data de criação)
                */
            }
        }
    }

    /*
        Para implementar esse decorator, usamos o @nomedele()
        Todo @ num código TS, será um decorator
    */
 
    @BaseParamters()
    class Person {
        name

        constructor(name: string){
            this.name = name;
        }
    }

    const sam = new Person("Sam");

    console.log(sam);