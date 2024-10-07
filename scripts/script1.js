

// setTimeout(()=>{green_range.style.width = "calc((100%/9)*1)"} , 1000)
// function range_with(w){
//     let green_range = document.querySelector('.green_range')
//     let range_circle = document.querySelector('.range_circle')
//     green_range.style.width = `calc((100%/9)*${w})`
//     range_circle.textContent = `${w}/9`
// }
//
// document.addEventListener('DOMContentLoaded',()=>{
//
//     // let component_div = document.querySelector('.component_div')
//     var component_div = $('.component_div');
//
//     component_div.load("components/component2.html" , ".div1")
//
//
// })


function titleAnimation1(){
    setTimeout(()=>{
      let title = document.querySelector('.title');
      let contentDiv = document.querySelector('#contentDiv')
        title.style.opacity = "1"
        setTimeout(()=>{
            title.style.marginTop = "0px"
        },500)
        setTimeout(()=>{
            contentDiv.style.opacity = '1'
        },1700)

    },300)

}



