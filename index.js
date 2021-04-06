const metIslamicArtUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q=dog"   
const metIslamicArtTopic ="https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q="   
   
   fetch(metIslamicArtUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
