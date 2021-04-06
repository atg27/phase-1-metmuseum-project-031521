
// url for "dog" keyword search in IA dept. Returns object: { total results = # , objectIDs = [array of individual object ids] } 
const metIADoggoUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q=dog"   

 // truncated url for search by keyword in IA dept -Can add keywork to end
const metIArtTopicUrl ="https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q="  

// truncated url for specific art piece object -Can add objectID at end
const metIAObjectUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"

//initialize variable so fetch result can be used globally
let fetchedIdArray;

const GetObjectIdFromSearch = (url => { 
   fetch(url)
    .then(res => res.json()) //promise to json
    // .then(data => {
    //    const objectToRender = data.objectIDs[1]
    //    console.log(objectToRender);
    //     })
    .then(data => fetchedIdArray = data) //assign json data to variable
 })

return GetObjectIdFromSearch(metIADoggoUrl);

console.log(fetchedIdArray.objectIDs)

// const randomValue = (array) => {
//     return array[Math.floor(Math.random() * list.length)];
// };