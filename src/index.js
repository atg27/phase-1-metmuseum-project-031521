
// url for "dog" keyword search in IA dept. Returns object: { total results = # , objectIDs = [array of individual object ids] } 
const metIADoggoUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q=dog"   

 // truncated url for search by keyword in IA dept -Can add keywork to end
const metIArtTopicUrl ="https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q="  

// truncated url for specific art piece object -Can add objectID at end
const metIAObjectUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"

//const artContainer = document.querySelector("div")



//funx to fetch random objectId from array + fetch selected object for display on SPA
function getObjectIdFromSearch(url) { 
   fetch(url)
    .then(res => res.json())
    .then((data) => {
        let objectIDArray = data.objectIDs;
        //console.log(objectIDArray)
        //console.log(objectIDArray[Math.floor(Math.random()* objectIDArray.length)+1])
        let randomlyGeneratedObjId = objectIDArray[Math.floor(Math.random() * objectIDArray.length)+1]
        
        getArt(randomlyGeneratedObjId)

        // //2nd function and call it
        // fetch(metIAObjectUrl + randomlyGeneratedObjId)
        // .then(res => res.json())
        // //.then(console.log)
        // .then((data) => {
        //     let artPieceImg = data.primaryImageSmall;
        //     let artPieceTitle = data.title;
        //     let artPieceDate = data.objectDate
        //     //console.log(artPieceImg, artPieceTitle, artPieceDate) 
        //     log(artPieceDate)
        //     log(artPieceImg)
        //     log(artPieceTitle)
        //     const artContainer = document.querySelector("div")
        //     renderArt(data)
            
        
        // })
       //select random bunch from array
        //  
    })
 }
function getArt(objectId){
    fetch(metIAObjectUrl + objectId)
    .then(res => res.json())
    //.then(console.log)
    .then((data) => {
        let artPieceImg = data.primaryImageSmall;
        let artPieceTitle = data.title;
        let artPieceDate = data.objectDate
        //console.log(artPieceImg, artPieceTitle, artPieceDate) 
        log(artPieceDate)
        log(artPieceImg)
        log(artPieceTitle)
        const artContainer = document.querySelector("div")
        renderArt(data)
        
    
    })
}

function renderArt(artPiece){
        const artContainer = document.querySelector("div")
        let h2 = document.createElement('h2')
        h2.innerText = artPiece.title
      
        let img = document.createElement('img')
        img.setAttribute('src', artPiece.primaryImageSmall)
      
        let p = document.createElement('p')
        p.innerText = artPiece.objectDate
      
        artContainer.append(h2,img, p)
    
}


function log(input){
    console.log(input)
}

getObjectIdFromSearch(metIADoggoUrl);




//   .catch(function(error) {
//     console.log('Error!', error)
//   })



// function randomValue(arr) {
//     arr[Math.floor(Math.random()* objectIDArray.length)]
// }