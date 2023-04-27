//import {CreateCard} from './accueil.js';

fetch("http://localhost:5678/api/works/")
.then (res => res.json())
.then(worksArray => {
    for(let works of worksArray){
    CreateSmallCard(works);
}}); 


//Création de la modale 

const modal = document.getElementById('modal1');

const openModal = document.getElementById('js-modal');
openModal.addEventListener("click", function(event) {
        event.preventDefault();
        const modal = document.getElementById('modal1');
        modal.style.display = null;
        modal.removeAttribute('aria-hidden');
        modal.setAttribute('aria-modal', 'true');
                buttonPreModal.style.visibility = "hidden";
                preModalTitle.style.display = "none";
                validation.style.display = "none";
                addPhoto.style.display = "none";
                infoPhoto.style.display = "none";

});    

const closeModal = document.getElementById("closemodal"); 
    closeModal.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
});


//Fonction de l'importation et de la création de l'emplacement des travaux dans la modale
function CreateSmallCard(smallCards){
const galleryModal = document.getElementById("gallery-modal");
    const photoModal = document.createElement("figure");
                        photoModal.style.width = "85px";
                        photoModal.style.height = "140px"
                        photoModal.style.marginRight = "8px";

    const pictureModal = document.createElement("div");
            pictureModal.setAttribute("id", "picture");
                        pictureModal.style.height = "120px";
    
    const movePicture = document.createElement("i");
                        movePicture.setAttribute("class", "fa-solid fa-up-down-left-right");
                            movePicture.style.display = "none";
                            movePicture.style.justifyContent = "center";
                            movePicture.style.alignItems = "center";
                            movePicture.style.backgroundColor = "black";
                            movePicture.style.color = "white";
                            movePicture.style.position = "relative";
                            movePicture.style.width = "17px";
                            movePicture.style.height = "17px";
                            movePicture.style.bottom = "8px";
                            movePicture.style.left = "35px";


    const deletePicture = document.createElement("button");
    const iconDelete = document.createElement("i");
        iconDelete.setAttribute("class", "fa-regular fa-trash-can");
            iconDelete.style.width = "15px";
            iconDelete.style.height = "15px";
            iconDelete.style.color = "white";
            iconDelete.style.paddingTop = "2px";
            
            deletePicture.appendChild(iconDelete);

            deletePicture.setAttribute("id", "deleteButton");
                            
    //Suppression des éléments de la modale 

            deletePicture.addEventListener("click", function(e){
                e.preventDefault();
                    //const imageId = document.getElementById("picture");
                    const token = sessionStorage.getItem("token");

                    fetch("http://localhost:5678/api/works/{id}", {
                    method: 'DELETE',
                    headers:{'accept': '*/*',
                    'authorization': `Bearer ${token}`},
                })
                .then(res => console.log("Projet supprimé !"))
    
            });
        //Mise en forme des boutons de suppression

                deletePicture.style.display = "flex";
                deletePicture.style.backgroundColor = "black";
                deletePicture.style.width = "18px";
                deletePicture.style.height = "18px";
                deletePicture.style.justifyContent = "center";
                deletePicture.style.position = "relative";
                deletePicture.style.top = "10px";
                deletePicture.style.left = "60px";
                deletePicture.style.padding = "0";
                deletePicture.style.border = "none";

    const imageUrlModal = document.createElement("img");
                        imageUrlModal.src = smallCards.imageUrl;
                            imageUrlModal.style.width = "85px";
                            imageUrlModal.style.height = "120px";
                            imageUrlModal.style.position = "absolute";

            imageUrlModal.addEventListener("mouseover", function (event){
            movePicture.style.display = "flex";
        });
            imageUrlModal.addEventListener("mouseout", function(event){
            movePicture.style.display = "none";
        });

    const titleImgModal = document.createElement("figcaption");
                        titleImgModal.textContent = "Editer";
                        titleImgModal.style.position = "relative";


    galleryModal.appendChild(photoModal);
    photoModal.appendChild(pictureModal);
    pictureModal.appendChild(imageUrlModal);
    photoModal.appendChild(titleImgModal);
    pictureModal.appendChild(deletePicture);
    pictureModal.appendChild(movePicture);
    
};


            
                        

//Style du titre de la modale
const titleModal = document.getElementById("titlemodal");

                titleModal.style.height = "30px";
                titleModal.style.fontFamily = "work sans";
                titleModal.style.fontWeight = "400";
                titleModal.style.color = "black";

//Style des boutons supérieurs de la modale
const buttonsModal = document.getElementById("btns-modal");
                buttonsModal.style.width = "600px";
                buttonsModal.style.display = "flex";
                buttonsModal.style.justifyContent = "space-between";
                buttonsModal.style.alignItems = "center";
                buttonsModal.style.marginTop = "15px";

        
const buttonCloseModal = document.getElementById("closemodal");
                buttonCloseModal.style.display = "flex";
                buttonCloseModal.style.height = "24px";
                buttonCloseModal.style.fontSize = "24px";
                buttonCloseModal.style.backgroundColor = "white";
                buttonCloseModal.style.border = "none";
                buttonCloseModal.style.paddingBottom = "5px";

const styleModalGallery = document.getElementById("gallery-modal");
                styleModalGallery.style.marginTop = "40px";
                styleModalGallery.style.paddingLeft = "65px";
                styleModalGallery.style.width = "530px";
                styleModalGallery.style.height = "450px" 
                styleModalGallery.style.display = "flex";
                styleModalGallery.style.flexDirection = "row";
                styleModalGallery.style.flexWrap = "wrap";

//Mise en forme de la galerie modale, du bouton ouvrant la seconde modale et du futur bouton de suppression

const changeModal = document.getElementById("change-modal");
                changeModal.style.display = "flex";
                changeModal.style.flexDirection = "column";
                changeModal.style.justifyContent = "center";
                changeModal.style.width = "420px";
                changeModal.style.borderTop = "solid", "black";
                changeModal.style.marginBottom = "30px";

const deleteGallery = document.getElementById("delete-gallery");
                deleteGallery.style.display = "flex";
                deleteGallery.style.justifyContent = "center";
                deleteGallery.style.color = "black";
                deleteGallery.style.textDecoration = "none";

const buttonPreModal = document.getElementById("premodal");
        buttonPreModal.style.border = "none";
        buttonPreModal.style.backgroundColor = "white";
        buttonPreModal.style.fontSize = "24px";
        buttonPreModal.style.padding = "0";
        buttonPreModal.addEventListener("click", function(event){
            const galleryModal = document.getElementById("gallery-modal");
            const modalWrapper = document.getElementById("modal-wrapper");
                    modalWrapper.style.height = "730px";
                    titleModal.style.display = "flex";
                    galleryModal.style.display = "flex";
                    changeModal.style.display = "flex";
                    buttonPreModal.style.visibility = "hidden";
                    preModalTitle.style.display = "none";
                    addPhoto.style.display = "none";
                    infoPhoto.style.display = "none";
                    validation.style.display = "none";
            });

const changePhoto = document.getElementById("change-photo");
    changePhoto.addEventListener("click", function(event){
        const galleryModal = document.getElementById("gallery-modal");
        const modalWrapper = document.getElementById("modal-wrapper");
                modalWrapper.style.height = "670px";
                titleModal.style.display = "none";
                galleryModal.style.display = "none";
                changeModal.style.display = "none";
                buttonPreModal.style.visibility = "visible";
                preModalTitle.style.display = "flex";
                addPhoto.style.display = "flex";
                infoPhoto.style.display = "flex";
                validation.style.display = "flex";
        });

        changePhoto.style.marginLeft = "120px";
        changePhoto.style.padding = "1em";















//Intégration de la modale d'ajout de photo

const preModalTitle = document.getElementById("premodaltitle");
                        preModalTitle.style.fontFamily = "work sans";
                        preModalTitle.style.fontWeight = "400";
                        preModalTitle.style.color = "black";
                        preModalTitle.style.marginTop = "10px";



//Formulaire d'ajout de nouvelles photos 

const formPhoto = document.getElementById("formphoto");
const addPhoto = document.getElementById("newphoto");
                        addPhoto.style.width = "420px";
                        addPhoto.style.height = "180px";
                        addPhoto.style.justifyContent = "center";
                        addPhoto.style.alignItems = "center";
                        addPhoto.style.flexDirection = "column";
                        addPhoto.style.backgroundColor = "#E8F1F7";
                        addPhoto.style.borderRadius = "5px";
                        addPhoto.style.marginTop = "36px";

//Prévisualisation de la photo et intégration de sa zone d'apparition

        let photo = document.getElementById("newpicture");
            let previewPicture = function (e){
                const [picture] = e.files;

                    if(picture) {
                        photo.src = URL.createObjectURL(picture)
                        photo.style.display = "flex";
                        iconPhoto.style.display = "none";
                        actionButton.style.display = "none";
                        formatImage.style.display = "none";
                    };

            };
                        photo.style.maxHeight = "180px";
                        photo.style.objectFit = "contain";
                        photo.style.border = "none";
                        photo.style.display = "none";

const iconPhoto = document.getElementById("icon");
                        iconPhoto.style.fontSize = "58px";
                        iconPhoto.style.justifyContent = "center";
                        iconPhoto.style.color = "#B9C5CC";
                        iconPhoto.style.marginTop = "10px";

//Bouton d'ajout de photo

const actionButton = document.getElementById("buttonAdd");
                        actionButton.style.display = "flex";
                        actionButton.style.flexDirection = "column";
                        actionButton.style.alignItems = "center";
                        actionButton.style.borderRadius = "60px";
                        actionButton.style.backgroundColor = "#A7A7A7";
                        actionButton.style.height = "36px";
                        actionButton.style.marginTop = "15px";


const buttonAddPhoto = document.getElementById("buttonaddphoto");
                        buttonAddPhoto.textContent = "+ Ajouter photo";
                        buttonAddPhoto.style.position = "relative";
                        buttonAddPhoto.style.top = "12px";
                        buttonAddPhoto.style.color = "#306685";
const inputAddPhoto = document.getElementById("input-addphoto");
            inputAddPhoto.setAttribute("name", "max_file_size");
            inputAddPhoto.setAttribute("value", "4096");
                        inputAddPhoto.style.height = "36px";
                        inputAddPhoto.style.opacity = "0";

const formatImage = document.getElementById("formatimage");
                        formatImage.style.marginTop = "5px";



//Entrée des informations pour la nouvelle image

const infoPhoto = document.getElementById("infophoto");
                        infoPhoto.style.flexDirection = "column";
                        infoPhoto.style.height = "250px";
                        infoPhoto.style.justifyContent = "center";
//Entrée du titre de la nouvelle image

const infoTitle = document.getElementById("infotitle");
                        infoTitle.style.display = "flex";
                        infoTitle.style.flexDirection = "column";
const titleInput = document.getElementById("titrephoto");
                        titleInput.style.marginBottom = "10px";
const titlePhoto = document.getElementById("titlephoto");
                        titlePhoto.style.height = "50px";
                        titlePhoto.style.marginBottom = "20px";
                        titlePhoto.style.border = "none";
                        titlePhoto.style.boxShadow = "0 4px 14px rgba(0,0,0,0.09)";

//Entrée de la catégorie de la nouvelle image

const infoCat = document.getElementById("infocat");
                        infoCat.style.display = "flex";
                        infoCat.style.flexDirection = "column";
const catTitle = document.getElementById("categorie");
                        catTitle.style.marginBottom = "10px";

const catPhoto = document.getElementById("catphoto");
                        catPhoto.style.height = "50px";
                        catPhoto.style.border = "none";
                        catPhoto.style.boxShadow = "0 4px 14px rgba(0,0,0,0.09)";
                        catPhoto.style.backgroundColor = "white";

const btnValidation = document.createElement("input");
        btnValidation.setAttribute("id", "btn-validation");
        btnValidation.setAttribute("type", "submit");   
        btnValidation.setAttribute("value", "Valider"); 
        btnValidation.setAttribute("onchange", "styleValidation");


btnValidation.addEventListener("click", function(e){
        e.preventDefault();
        const token = sessionStorage.getItem("token");
        let formData = new FormData();
   
                formData.append('image', document.getElementById('input-addphoto').files[0]);
                formData.append('title', document.getElementById('titlephoto').value);
                formData.append('category', document.getElementById('catphoto').value);


                fetch("http://localhost:5678/api/works/", {
                        method: 'POST',
                        headers:{'accept': 'application/json',
                                'authorization': `Bearer ${token}`},
                        body: formData,
                })
                .then(res => {
                    if(!res.status.ok){
                        const notOk = document.createElement("p");
                        const validation = document.getElementById("validation");
                        notOk.textContent = "Erreur lors de l'envoi du formulaire";
                        validation.appendChild(notOk);
                    } else {
                        return res.json();
                    };
                })
                .then(response => {
                    window.location.replace();
                    console.log(response);
                })
                
                .catch(err => console.log(err));
    });

                        btnValidation.style.padding = "1em";
                        btnValidation.style.marginTop = "20px";

                        
const styleValidation = function (){
    if(photo.src !=="" && titlePhoto.value !== "" && catPhoto.value !== "") {
        btnValidation.style.backgroundColor = "#1D6154";
    } else {
        btnValidation.style.backgroundColor = "#A7A7A7";
    };
};              

const validation = document.getElementById("validation");
                validation.style.display = "flex";
                validation.style.justifyContent = "center";
                validation.style.borderTop = "solid", "black", "1px";


//Rattachement des éléments de la modale avec les parents 

formPhoto.appendChild(addPhoto);
formPhoto.appendChild(infoPhoto);
formPhoto.appendChild(validation);
addPhoto.appendChild(photo);
addPhoto.appendChild(iconPhoto);
addPhoto.appendChild(actionButton);
actionButton.appendChild(buttonAddPhoto);
actionButton.appendChild(inputAddPhoto);
addPhoto.appendChild(formatImage);
infoPhoto.appendChild(infoTitle);
infoPhoto.appendChild(infoCat);
infoTitle.appendChild(titleInput);
infoTitle.appendChild(titlePhoto);
infoCat.appendChild(catTitle);
infoCat.appendChild(catPhoto);
validation.appendChild(btnValidation);






