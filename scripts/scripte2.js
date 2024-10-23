
let objectDOnne= {}

// Cette fonction met à jour la largeur de l'élément 'green_range' et affiche la valeur actuelle du step
function range_with(w , r){
    let green_range = document.querySelector('.green_range')
    let range_circle = document.querySelector('.range_circle')

    // Utilisation de la méthode template literals pour définir la largeur
    green_range.style.width = `calc((100%/${r})*${w})`
    range_circle.textContent = `${w}/${r}`
}

// Fonction pour vérifier si l'élément est une image et appliquer les changements visuels
function  Chek_image(elment){
    //pour supprume les donne de object
    const valeur = elment.dataset.valeur

    if(valeur=="Cuisine" || valeur=="Dressing" || valeur=="Autres" ){
        objectDOnne = {}
    }

    if(elment.tagName == "DIV"){
        // Sélection de toutes les images et icônes correspondantes
        const allImages = document.querySelectorAll(".imag_card_box");
        const allIcons = document.querySelectorAll(".iconChek_image");

        // Suppression de la classe 'coleurChek_image' pour toutes les images
        allImages.forEach(img => {
            img.classList.remove("coleurChek_image");
        });

        // Cacher toutes les icônes
        allIcons.forEach(icon => {
            icon.style.display = "none";
        });

        // Ajout de la classe pour l'image et affichage de l'icône correspondante
        elment.querySelector(".imag_card_box").classList.add("coleurChek_image")
        elment.querySelector(".iconChek_image").style.display = "block"
    }

    // Utilisation de setTimeout pour les actions différées
    setTimeout(()=>{
        var step = elment.dataset.step; // Récupération de l'attribut 'step'
        var valeur = elment.dataset.valeur; // Récupération de l'attribut 'step'

        delete elment.dataset.step; // Suppression de l'attribut 'step'

        // Clonage du dataset pour éviter toute modification accidentelle
        var valeurChk = elment.dataset;
        var dataClone = { ...valeurChk };
        objectDOnne[step] = JSON.parse(JSON.stringify(dataClone));

        // Switch pour gérer les différents steps
        switch (step) {
            case "step1":
                if(valeur=="Cuisine"){
                    range_with(2,5);
                    laoadcomponents(2,0)
                }else if(valeur=="Dressing"){
                    range_with(2,4);
                    laoadcomponents(5,0)
                }else if(valeur=="Autres"){
                    range_with(2,3);
                    laoadcomponents(7,0)
                }

                break;
            case "step2":
                range_with(3 ,5);
                laoadcomponents(3,0)
                break;
            case "step3":
                range_with(4,5);
                laoadcomponents(4,0)
                break;
            case "step4":
                range_with(5,5)
                laoadcomponents(11,0)
                break;


            case "step5":
                range_with(3,4)
                laoadcomponents(6,0)
                break;
            case "step6":
                range_with(4,4)
                laoadcomponents(11,9)

                break;
            case "step7":
                range_with(3,3)
                laoadcomponents(11,10)
                break;
            case "step8":
                range_with(9)
                laoadcomponents(9,0)
                break;
            case "step9":
                range_with(10)
                laoadcomponents(10,0)
                break;
            case "step10":
                range_with(11)
                laoadcomponents(11,0)
                break;
            default:
                range_with(1);
                laoadcomponents(1,0)
                break;
        }
    }, 300) // Réduction du délai pour accélérer la réponse
}

// Fonction pour inverser le chargement des composants en fonction de l'objet et du step
function  laoadCompReverse(objet){
    var firstElement = document.querySelector('.elmentCherche[data-step]');
    var step = firstElement.dataset.step;

    const imags = document.querySelectorAll(".imag_card_box")
    const iconChek = document.querySelectorAll(".iconChek_image")
    const checkbox = document.querySelectorAll(".ui-checkbox")

    const index = (objet, step) => {
        for (const [key, value] of Object.entries(objet)) {
            if (key === step) {
                return value.index;
            }
        }
        return false;
    };

    if (index(objet, step)) {
        if (imags.length > 0) {
            imags[index(objet, step)].classList.add("coleurChek_image")
            iconChek[index(objet, step)].style.display = "block"
        } else {
            checkbox[index(objet, step)].checked = true;

            //si le composon 4
                if( checkbox[index(objet, step)].value == "yes") {
                    const inputGroup = document.querySelectorAll('.inputGroupDIS');
                    const inputField = document.getElementById('inputField');
                    inputGroup[0].style.display = 'block'; // Cacher
                    inputGroup[1].style.display = 'block'; // Cacher
                    inputField.value = objet[step]["valueinput"]
                }
        }
    }
}

// Fonction pour gérer les boutons de navigation en arrière
function  btton_reverse(){
    var firstElement = document.querySelector('.elmentCherche[data-step]');
    var step = firstElement.dataset.step;
    console.log(step)

    switch (step) {
        case "step1":
        case "step2":
            range_with(1,5);
            laoadcomponents(1,0)
            break;
        case "step3":
            range_with(2,5);
            laoadcomponents(2,0)
            break;
        case "step4":
            range_with(3,5);
            laoadcomponents(3,0)
            break;
        case "step5":
            range_with(1,5)
            laoadcomponents(1,0)
            break;
        case "step6":
            range_with(2,4)
            laoadcomponents(5,0)
            break;
        case "step7":
            range_with(1,5);
            laoadcomponents(1,0)
            break;
        case "step8":
            range_with(4,5);
            laoadcomponents(4,0)
            break;
        case "step9":
            range_with(3,4);
            laoadcomponents(6,0)
            break;
        case "step10":
            range_with(2,3);
            laoadcomponents(7,0)
            break;
        default:
            range_with(1,5);
            laoadcomponents(1,0)
            break;
    }
}





// Fonction pour charger les composants en fonction du step
function laoadcomponents(step,vleurde){

    if(vleurde == 0){
        $(".component_div").load('components/component'+ step + '.html #div'+step, function() {
            console.log(objectDOnne)
            titleAnimation1();

            const buuttonEnvoi =document.getElementById('sendEmailBtn2')
            if(buuttonEnvoi){
                buuttonEnvoi.addEventListener('click', (e) => sendEmail(objectDOnne,e));
            }else{
                laoadCompReverse(objectDOnne);
            }




        });

    }
    else if(vleurde ==9){
        $(".component_div").load('components/component'+ step + '.html #div'+step, function() {
            console.log(objectDOnne)
            titleAnimation1();

            const buuttonEnvoi =document.getElementById('sendEmailBtn2')
            document.querySelector('.bottonPreviousstep').dataset.step = "step9";

            if(buuttonEnvoi){
                buuttonEnvoi.addEventListener('click', (e) => sendEmail(objectDOnne,e));
            }else{

                laoadCompReverse(objectDOnne);
            }




        });

    }
    else if(vleurde ==10){
        $(".component_div").load('components/component'+ step + '.html #div'+step, function() {
            console.log(objectDOnne)
            titleAnimation1();

            const buuttonEnvoi =document.getElementById('sendEmailBtn2')
            document.querySelector('.bottonPreviousstep').dataset.step = "step10";

            if(buuttonEnvoi){
                buuttonEnvoi.addEventListener('click', (e) => sendEmail(objectDOnne,e));
            }else{

                laoadCompReverse(objectDOnne);
            }




        });

    }

}

// Chargement initial du premier composant
laoadcomponents(1,0);





function sendEmail(objectDOnne,e) {
    e.preventDefault();
    let nom = document.getElementById('nom').value;
    let tel = document.getElementById('tel').value;
    let ville = document.getElementById('ville').value;

    // Récupérer les valeurs des champs
    const Verification = () => {

        let Verification = true;

        if (nom === "") {
            document.getElementById('nom').style.borderBottom = "2px red solid";
            Verification = false;
        }else{
            document.getElementById('nom').style.borderBottom = "2px solid #656565";
            Verification = true;

        }
        if (tel === "") {
            document.getElementById('tel').style.borderBottom = "2px red solid";
            Verification = false;
        }else {
            document.getElementById('tel').style.borderBottom = "2px solid #656565";
            Verification = true;

        }
        if (ville === "") {
            document.getElementById('ville').style.borderBottom = "2px red solid";
            Verification = false;
        }else {
            document.getElementById('ville').style.borderBottom = "2px solid #656565";
            Verification = true;

        }

        return Verification;
    }




    // Préparer les données à envoyer
    // let formData = {
    //     nom: nom,
    //     tel: tel,
    //     ville: ville
    //
    // };

    //prende les donne de objeget

  var  donneChoi ="" ;
    Object.entries(objectDOnne).forEach(([key, value]) => {
        // Condition pour 'Cuisine' dans 'step1'
        if (key === "step1" && value.valeur === "Cuisine") {
            const step1 = objectDOnne.step1 ? objectDOnne.step1.valeur : '';
            const step2 = objectDOnne.step2 ? objectDOnne.step2.valeur : '';
            const step3 = objectDOnne.step3 ? objectDOnne.step3.valeur : '';
            const step4 = objectDOnne.step4 ? objectDOnne.step4.valeur : '';
            if(step4 == "yes"){
                donneChoi = `CUISINE => step1 : ${step1}, step2: ${step2}, step3: ${step3}, step4: ${step4} => Text : ${objectDOnne.step4.valueinput}`;

            }else{
                donneChoi = `CUISINE => step1: ${step1}, step2: ${step2}, step3: ${step3}, step4: ${step4}`;
            }


        }

        // Condition pour 'Dressing' dans 'step1'
       else if (key === "step1" && value.valeur === "Dressing") {
            const step1 = objectDOnne.step1 ? objectDOnne.step1.valeur : '';
            const step5 = objectDOnne.step5 ? objectDOnne.step5.valeur : '';
            const step6 = objectDOnne.step6 ? objectDOnne.step6.valeur : '';



           donneChoi = `DRESSING => step1: ${step1}  ,step2: ${step5}, step3: ${step6}`;

        }


        // Condition pour 'Autres' dans 'step1'
      else  if (key === "step1" && value.valeur === "Autres") {
            const step1 = objectDOnne.step1 ? objectDOnne.step1.valeur : '';
            const step7 = objectDOnne.step7 ? objectDOnne.step7.valeur : '';
            if(step7 == "Autre"){
                donneChoi = `AUTRES => step2: ${step7}  , Text : ${objectDOnne.step7.valueinput}`;

            }else{
                donneChoi = `AUTRES =>step1: ${step1} , step2: ${step7}`;
            }


        }
    });


    const messagedonne =`Nom et Prénom :  ${nom.toUpperCase()} <br><br> Numéro de téléphone : ${tel} <br><br> Ville : ${ville.toUpperCase()} <br><br><br><br> ${donneChoi}`;




    if(Verification()){
        // Récupérer les valeurs du formulaire
        const objectDonnees = {
            recipient: "youssefhamroui03@gmail.com",
            subject: "MON",
            message:messagedonne
        };

        $.ajax({
            url: 'Email/send_email.php', // Utilisez un chemin relatif
            type: 'POST',
            data: objectDonnees,
            beforeSend: function() {
                // Message pendant l'envoi (facultatif)
                console.log("Envoi en cours...")
                $("body").load('components/loadPage.html ' , function() {})
                // window.location.href = 'components/loadPage.html';


            },
            success: function(response) {
                // alert(response); // Utilisation d'une alerte pour afficher la réponse
                // window.location.href = 'components/DonneEnvoiEmail.html';
                $("body").load('components/DonneEnvoiEmail.html ' , function() {})


            },
            error: function(xhr, status, error) {
                alert("Erreur lors de l'envoi de l'email : " + error); // Alerte pour les erreurs
            }
        });

    }


}
