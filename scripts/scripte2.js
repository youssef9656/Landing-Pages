
const objectDOnne= {}

// Cette fonction met à jour la largeur de l'élément 'green_range' et affiche la valeur actuelle du step
function range_with(w){
    let green_range = document.querySelector('.green_range')
    let range_circle = document.querySelector('.range_circle')

    // Utilisation de la méthode template literals pour définir la largeur
    green_range.style.width = `calc((100%/9)*${w})`
    range_circle.textContent = `${w}/9`
}

// Fonction pour vérifier si l'élément est une image et appliquer les changements visuels
function  Chek_image(elment){
    console.log(elment.tagName)

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
                range_with(2);
                laoadcomponents(2)

                break;
            case "step2":
                range_with(3);
                laoadcomponents(3)
                break;
            case "step3":
                range_with(4);
                laoadcomponents(4)
                break;
            case "step4":
                range_with(5)
                laoadcomponents(5)
                break;
            case "step5":
                range_with(6)
                laoadcomponents(6)
                break;
            case "step6":
                range_with(7)
                laoadcomponents(7)
                break;
            case "step7":
                range_with(8)
                laoadcomponents(8)
                break;
            case "step8":
                range_with(9)
                laoadcomponents(9)
                break;
            case "step9":
                range_with(10)
                laoadcomponents(10)
                break;
            case "step10":
                range_with(11)
                laoadcomponents(11)
                break;
            default:
                range_with(1);
                laoadcomponents(1)
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
            checkbox[index(objet, step)].checked = true
        }
    }
}

// Fonction pour gérer les boutons de navigation en arrière
function  btton_reverse(){
    var firstElement = document.querySelector('.elmentCherche[data-step]');
    var step = firstElement.dataset.step;

    switch (step) {
        case "step1":
        case "step2":
            range_with(1);
            laoadcomponents(1)
            break;
        case "step3":
            range_with(2);
            laoadcomponents(2)
            break;
        case "step4":
            range_with(3);
            laoadcomponents(3)
            break;
        case "step5":
            range_with(4);
            laoadcomponents(4)
            break;
        case "step6":
            range_with(5);
            laoadcomponents(5)


            break;
        case "step7":
            range_with(6);
            laoadcomponents(6)
            break;
        case "step8":
            range_with(7);
            laoadcomponents(7)
            break;
        case "step9":
            range_with(8);
            laoadcomponents(8)
            break;
        case "step10":
            range_with(9);
            laoadcomponents(9)
            break;
        default:
            range_with(1);
            laoadcomponents(1)
            break;
    }
}

// Fonction pour charger les composants en fonction du step
function laoadcomponents(step){
    $(".component_div").load('components/component'+ step + '.html #div'+step, function() {
        titleAnimation1();
        laoadCompReverse(objectDOnne);
        console.log(objectDOnne)
        document.getElementById('sendEmailBtn').addEventListener('click', () => sendEmail(objectDOnne));


    });
}

// Chargement initial du premier composant
laoadcomponents(1);


function sendEmail(objectDOnne) {
    // Récupérer les valeurs du formulaire
    const objectDonnees = {
        recipient: "youssefhamroui03@gmail.com",
        subject: "MON",
        message:JSON.stringify( objectDOnne)
    };

    $.ajax({
        url: 'Email/send_email.php', // Utilisez un chemin relatif
        type: 'POST',
        data: objectDonnees,
        beforeSend: function() {
            // Message pendant l'envoi (facultatif)
            console.log("Envoi en cours...");
        },
        success: function(response) {
            alert(response); // Utilisation d'une alerte pour afficher la réponse
        },
        error: function(xhr, status, error) {
            alert("Erreur lors de l'envoi de l'email : " + error); // Alerte pour les erreurs
        }
    });
}
