const objectDOnne= {

}

function range_with(w){
    let green_range = document.querySelector('.green_range')
    let range_circle = document.querySelector('.range_circle')
    green_range.style.width = `calc((100%/9)*${w})`
    range_circle.textContent = `${w}/9`
}
// Call the function with a value, for example, 2

function  Chek_image(elment){
    console.log(elment.tagName)
    if(elment.tagName == "DIV"){
        const allImages = document.querySelectorAll(".imag_card_box");
        const allIcons = document.querySelectorAll(".iconChek_image");

        // Boucle pour supprimer la classe 'couleurChek_image' de tous les autres éléments
        allImages.forEach(img => {
            img.classList.remove("coleurChek_image");
        });

        // Boucle pour cacher toutes les autres icônes
        allIcons.forEach(icon => {
            icon.style.display = "none";
        });
        elment.querySelector(".imag_card_box").classList.add("coleurChek_image")
        elment.querySelector(".iconChek_image").style.display = "block"
    }else{
        // checkbox[index(objet,step)].checked =true

        // console.log(checkbox.ch)
    }


    setTimeout(()=>{



        // Supposons que 'imag' soit un élément DOM avec un dataset
        var step = elment.dataset.step; // Récupérer la valeur de l'attribut 'step'
        delete elment.dataset.step; // Supprimer l'attribut 'step' du dataset
        var valeurChk = elment.dataset; // Récupérer l'ensemble du dataset
// Créer une copie du dataset pour éviter des modifications non désirées
        var dataClone = { ...valeurChk }; // Créer une copie superficielle du dataset
// Assurez-vous que objectDOnne est déjà défini quelque part
        objectDOnne[step] = JSON.parse(JSON.stringify(dataClone));

        switch (step) {
            case "step1":
                range_with(2);
                laoadcomponents(2)


                break
            case "step2":
                range_with(3);
                laoadcomponents(3)

                break
            case "step3":
                range_with(4);
                laoadcomponents(4)

                break
            case "step4":
                range_with(5)
                laoadcomponents(5)

                break

            default:
                range_with(1);
                laoadcomponents(1)

                break




        }




    },500)



}



function  laoadCompReverse(objet){

    var firstElement = document.querySelector('.elmentCherche[data-step]');
 // Récupère la valeur de data-id du premier élément
    var  step= firstElement.dataset.step;

    const imags =document.querySelectorAll(".imag_card_box")
    const iconChek = document.querySelectorAll(".iconChek_image")
    const  checkbox =document.querySelectorAll(".ui-checkbox")


    const index = (objet, step) => {
        for (const [key, value] of Object.entries(objet)) {

            if (key === step) {
                return value.index;
            }
        }
        return false;
    };


    if (index(objet,step)){
        if(imags.length > 0){
            imags[index(objet,step)].classList.add("coleurChek_image")
            iconChek[index(objet,step)].style.display = "block"
        }else{
              checkbox[index(objet,step)].checked =true

            // console.log(checkbox.ch)
        }

    }

}


function  btton_reverse(){
    var firstElement = document.querySelector('.elmentCherche[data-step]');
    // Récupère la valeur de data-id du premier élément
    var  step= firstElement.dataset.step;
    switch (step) {
        case "step1":
            range_with(1);
            laoadcomponents(1)
            break
        case "step2":
            range_with(1);
            laoadcomponents(1)
            break
        case "step3":
            range_with(2);
            laoadcomponents(2)
            break
        case "step4":
            range_with(3)
            laoadcomponents(3)
            break
        default:
            range_with(1);
            laoadcomponents(1)
            break

    }

}

function laoadcomponents(step){
    $(".component_div").load('components/component'+ step + '.html #div'+step, function() {
        console.log(objectDOnne)
        titleAnimation1()
        laoadCompReverse(objectDOnne)
    });
}

laoadcomponents(1)