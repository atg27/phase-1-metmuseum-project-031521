const metIAObjectUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"

// url for "dog" keyword search in IA dept. Returns object: { total results = # , objectIDs = [array of individual object ids] } 
const metIAIslam = "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=14&q=islam"
const metIAClothingUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q=clothing"
const metIADoggoUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q=dog"   
const metIACatUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q=cat"
const metIAFoodUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q=food"
const metIABuildingUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q=building"

//const metIArtTopicUrl ="https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q="  

function getObjectIdFromSearch(url) { 
   fetch(url)
    .then(res => res.json())
    .then((data) => {
        let objectIDArray = data.objectIDs;
        //console.log(objectIDArray)
        //console.log(objectIDArray[Math.floor(Math.random()* objectIDArray.length)+1])
        let randomlyGeneratedObjId = objectIDArray[Math.floor(Math.random() * objectIDArray.length)+1]
        
        getArt(randomlyGeneratedObjId)
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
    .catch(error => {
        console.log('Error!', error)

      })
}

function renderArt(artPiece){
        const artContainer = document.querySelector("div")
        let h3 = document.createElement('h2')
        h3.innerText = "TITLE: " + artPiece.title
      
        let img = document.createElement('img')
        img.setAttribute('src', artPiece.primaryImageSmall)
      
        let p = document.createElement('p')
        p.innerText = "DATE: " + artPiece.objectDate
      
        artContainer.innerHTML = ""
        artContainer.append(h3,img, p)
    
}

function log(input){
    console.log(input)
}

getObjectIdFromSearch(metIAIslam);

