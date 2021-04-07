
// url for "dog" keyword search in IA dept. Returns object: { total results = # , objectIDs = [array of individual object ids] } 
const metIADoggoUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q=dog"   

 // truncated url for search by keyword in IA dept -Can add keywork to end
const metIArtTopicUrl ="https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q="  

// truncated url for specific art piece object -Can add objectID at end
const metIAObjectUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"

const artContainer = document.getElementsByClassName("Image-Container")



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
            let artPieceImg = data.primaryImageSmall;
            let artPieceTitle = data.title;
            let artPieceDate = data.objectDate
            //console.log(artPieceImg, artPieceTitle, artPieceDate) 
            log(artPieceDate)
            log(artPieceImg)
            log(artPieceTitle)
            renderArt(data)
        })
       //select random bunch from array
        //  
    })
 }

function renderArt(artPiece){

        let h2 = document.createElement('h2')
        h2.innerText = artPiece.name
      
        let img = document.createElement('img')
        img.setAttribute('src', artPiece.primaryImageSmall)
        img.setAttribute('class', 'display-image')
      
        let p = document.createElement('p')
        p.innerText = artPiece.title
      
        // let btn = document.createElement('button')
        // btn.setAttribute('class', 'like-btn')
        // btn.setAttribute('id', toy.id)
        // btn.innerText = "like"
        // btn.addEventListener('click', (e) => {
        //   console.log(e.target.dataset);
        //   likes(e)
        //})
        const artContainer = document.getElementsByClassName("Image-Container")

        let divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')
        divCard.append(h2, img, p) //,btn)
        artContainer.append(divCard)
    
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