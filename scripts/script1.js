

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



