var arr_numbers =[]
for(i =1; i<=100;i++){
        if (i%3===0 && i%5!==0){
        arr_numbers.push("fizz")
    } else if(i%5===0 && i%5!==0){
        arr_numbers.push("buzz")
    } else if(i%3===0 && i%5===0){
        arr_numbers.push("fizzbuzz")
    }else arr_numbers.push(i);
}
console.log(arr_numbers)