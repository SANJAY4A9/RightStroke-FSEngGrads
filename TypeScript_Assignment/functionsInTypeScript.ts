function Greet(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}

console.log(Greet('Sherlock'));
console.log(Greet('Sherlock', 'Hi'));
console.log(Greet('Bill Gates'));

function Gree(greeting: string, name?: string ) : string {
    return greeting + ' ' + name + '!';
}

console.log(Gree('Hello','Sherlock'));
console.log(Gree('Hi'));

//Function with rest parameters
function reet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}

console.log(reet("Hello", "Sherlock", "Bill Gates"));

console.log(reet("Hello"));
