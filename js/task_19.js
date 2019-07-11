var num = 20;

var convert = num.toString(2);

var arrChar = convert.split("1");

if (arrChar[arrChar.length-1]!==""){
    arrChar.splice(arrChar.indexOf(arrChar[arrChar.length-1]),1);
    console.log(arrChar);
}

arrChar.sort();
    
    return arrChar[arrChar.length-1].length;

