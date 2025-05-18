let artistContainer = document.getElementById("artistContainer");


fetch('https://api.harvardartmuseums.org/Exhibition?apikey=8c5fb6a8-3d36-4468-bf92-69ac57f24f3b')
  .then((response) => response.json())
  .then((elements) => {    
    elements.records.forEach(item => {
        let artistCard = document.getElementById("artistCard");
        let img = document.createElement("img");
         img.src=item.images.baseimageurl;
         let name1 =document.createElement("p");
         name1.innerText=item.name;
         let title =document.createElement("p");
         title.innerText=item.title;
         let CreateDate = document.createElement("p");
         CreateDate.innerText=item.createdate;
         artistCard.appendChild(img);
         artistCard.appendChild(title);
         artistCard.appendChild(CreateDate);
         artistContainer.appendChild(artistCard);
    })
    })