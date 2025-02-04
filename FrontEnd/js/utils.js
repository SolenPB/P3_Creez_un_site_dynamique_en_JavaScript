//Fonction pour créer les cartes présentant les travaux

export function CreateCard (card) {
    const travailElement = document.querySelector(".gallery");
    const photoElement = document.createElement("figure");
        photoElement.className = 'work1';

    const imageUrlElement = document.createElement("img");
        imageUrlElement.src = card.imageUrl;
        
    
    const titleElement = document.createElement("figcaption");
        titleElement.innerText = card.title;


        travailElement.appendChild(photoElement);
        photoElement.appendChild(imageUrlElement);
        photoElement.appendChild(titleElement);

};

export function Filtered(filter, data) { 
        let filteredWork = "";
        if(filter !== ""){
            filteredWork = data.filter(obj => obj.category.name == filter);
        } else {
            filteredWork = data;
        }
           let gallery = document.querySelector(".gallery");
        
           let galleryChildren = document.getElementsByClassName('work1');
         
           for (let i = -galleryChildren.length; i < galleryChildren.length; i++) {
           
            gallery.removeChild(gallery.firstChild);
            
           };
           for(let i = 0; i < filteredWork.length; i++){
            CreateCard(filteredWork[i]);
           }

};

