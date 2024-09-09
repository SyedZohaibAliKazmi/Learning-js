const buttons =document.querySelectorAll(".button")
// console.log("🚀 ~ buttons:", buttons)
const body = document.querySelector('body')



buttons.forEach(function(button){
    // console.log(button);

    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);

        // 1 Mehod to change color using" switch case "

        // switch (e.target.id) {
        //     case "grey":
        //         body.style.backgroundColor = "grey"
        //         break;
        //     case "white":
        //         body.style.backgroundColor = "white"
        //         break;
        //     case "blue":
        //         body.style.backgroundColor = "blue"
        //         break;
        //     case "yellow":
        //         body.style.backgroundColor = "yellow"
        //         break;
        
        // }

        // 2 Method to change color using "if else" 


        if (e.target.id === 'grey') {

            body.style.backgroundColor = e.target.id;
       
        }
        if (e.target.id === 'white') {

            body.style.backgroundColor = e.target.id;
       
        }
        if (e.target.id === 'blue') {

            body.style.backgroundColor = e.target.id;
       
        }
        if (e.target.id === 'yellow') {

            body.style.backgroundColor = e.target.id;
       
        }
        
    })
    
})
