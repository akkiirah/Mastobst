console.log("test");
let submitButton = document.getElementById("submit_button");
if(submitButton) {
    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        let gif=document.getElementById("gif");
        gif.style.display="block";
        
    });
}