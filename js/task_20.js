var names = ["Sam", "Joe", "sam", "Jim", "Jane"];   

for (var i = 0; i < names.length;i++){

    for (var j =i+1;j< names.length;j++){
        names[j] = names[j].toUpperCase();
        names[i] = names[i].toUpperCase();

        if (names[i]==names[j]){
            names.splice(j,1);
        }

    }
    names[i]=names[i].charAt(0).toUpperCase()+names[i].slice(1).toLowerCase();
}

console.log(names);