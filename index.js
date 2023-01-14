// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    destructivelyAppendCat = [cats.push(name)];
}

function destructivelyPrependCat(name){
    destructivelyPrependCat = [cats.unshift(name)];
}

function destructivelyRemoveLastCat(){
    destructivelyRemoveLastCat = [cats.pop(cats.length - 1)];
}

function destructivelyRemoveFirstCat(){
    destructivelyRemoveFirstCat = [cats.shift(cats[0])];
}

function appendCat(name){
    return appendCat = [...cats, name];
}

function prependCat(name){
    return prependCat = [name, ...cats];
}

function removeLastCat(){
    return removeLastCat = cats.slice(0,2);
}

function removeFirstCat(){
    return removeFirstCat = cats.slice(1,3);
}



