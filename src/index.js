
// url for "dog" keyword search in IA dept. Returns object: { total results = # , objectIDs = [array of individual object ids] } 
const metIADoggoUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q=dog"   

 // truncated url for search by keyword in IA dept -Can add keywork to end
const metIArtTopicUrl ="https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q="  

// truncated url for specific art piece object -Can add objectID at end
const metIAObjectUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"



//funx to fetch random objectId from array + fetch selected object for display on SPA
function getObjectIdFromSearch(url) { 
   fetch(url)
    .then(res => res.json())
    .then(function(data) {
        let objectIDArray = data.objectIDs;
        //console.log(objectIDArray)
        //console.log(objectIDArray[Math.floor(Math.random()* objectIDArray.length)])
        let randomlyGeneratedObjId = objectIDArray[Math.floor(Math.random()* objectIDArray.length)]
        
       return fetch(metIAObjectUrl + randomlyGeneratedObjId)
        .then(res => res.json())
        //.then(console.log)
        .then(function(data){
            let artPieceImg = data.primaryImage;
            let artPieceTitle = data.title;
            let artPieceDate = data.objectDate
            console.log(artPieceImg, artPieceTitle, artPieceDate) 
        })
       //select random bunch from array
        //  
    })
 }


 
getObjectIdFromSearch(metIADoggoUrl);




//   .catch(function(error) {
//     console.log('Error!', error)
//   })



// function randomValue(arr) {
//     arr[Math.floor(Math.random()* objectIDArray.length)]
// }