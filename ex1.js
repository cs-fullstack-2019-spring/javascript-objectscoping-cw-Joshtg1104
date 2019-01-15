// * Create an array called ```peopleList``` objects using *Object Literal* notation.
//
// * Each 'person' object in the 'people' collection should have the following information:
//
//     First Name
// Last Name
// Age
// Zip Code
//
// Add the following 4 People to your list:
//     ```
// Jimmy Page, 62, 00821
//
// Rick Nielsen, 57, 61016
//
// Jimi Hendrix, 58, 90001
//
// Lemmy Kilmister, 57, 21120
// ```
//
// ### Add code to perform the following:
//
//     * Dynamically add the property ```famousSong``` to the object instance for ```Jimi Hendrix```
//     and assign it the value ```Purple Haze```
//
// * Dynamically add a function called ```getBandandZip()``` to the object instance for
//     ```Jimmy Page``` that returns a concatenated string of ```Led Zeppelin HISZIPCODE```
// (get zip code from the object instance). Call the function from your code and log the response.
//
// * Write a function that accepts a zip code parameter and prints out all the people in the array
// with a matching zip code, or print the message ```No match found for zip code!``` if there is no match

var peopleList = [
    {
    firstName: "Jimmy",
    lastName: "Page",
    age: 62,
    zipCode: "00821"
},
 {
    firstName: "Rick",
    lastName: "Nielsen",
    age: 57,
    zipCode: "61016"
},
{
    firstName: "Jimi",
    lastName: "Hendrix",
    age: 58,
    zipCode: "90001"
},
{
    firstName: "Lemmy",
    lastName: "Kilmister",
    age: 57,
    zipCode: "21120"
}];
console.log(peopleList);

peopleList[2].famousSong = "Purple Haze";
console.log(peopleList[2]);

peopleList[0].getBandandZip = function(){
    return("Led Zepplin " + this.zipCode);};
console.log(peopleList[0]);




// var list = [{color:"red",price:"12"},{color:"blue",price:"14"},{color:"pink",price:"15"}];
// console.log(list[1].color);
// list[1].size = "medium";
// console.log(list[1].size);