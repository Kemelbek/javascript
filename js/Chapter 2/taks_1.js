function sortCountry(arr) {
    arr.sort((a, b) => a.length - b.length);
    return arr[arr.length-1];
}
var countries = ["КНДР", "Америка", "Россия", "Кыргызстан", "Австралия"];
var sortedcountries = sortCountry(countries);
console.log(sortedcountries);