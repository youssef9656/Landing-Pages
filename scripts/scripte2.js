const objectDOnne= {

}

function range_with(w){
    let green_range = document.querySelector('.green_range')
    let range_circle = document.querySelector('.range_circle')
    green_range.style.width = `calc((100%/9)*${w})`
    range_circle.textContent = `${w}/9`
}
// Call the function with a value, for example, 2


function  Chek_image(imag){
    var step=imag.dataset.step
    var valeurChk=imag.dataset

    delete imag.dataset.step;
    objectDOnne[step]=valeurChk

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




}


function laoadcomponents(step){
    $(".component_div").load('components/component'+ step + '.html #div'+step, function() {

        console.log(objectDOnne)

    });
}

laoadcomponents(1)


function  laoadCompReverse(){


}

