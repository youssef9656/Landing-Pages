

// setTimeout(()=>{green_range.style.width = "calc((100%/9)*1)"} , 1000)
function range_with(w){
    let green_range = document.querySelector('.green_range')
    let range_circle = document.querySelector('.range_circle')
    green_range.style.width = `calc((100%/9)*${w})`
    range_circle.textContent = `${w}/9`
}

document.addEventListener('DOMContentLoaded',()=>{

    // let component_div = document.querySelector('.component_div')
    var component_div = $('.component_div');

    component_div.load("components/component2.html" , ".div1")



})
console.log("sit t9awed")
