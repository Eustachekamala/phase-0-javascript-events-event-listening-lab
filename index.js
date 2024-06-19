function addingEventListener(){
    const input = document.getElementById("button");

    function clickAlert(){
        alert("I'm clicked");
    }

    input.addEventListener("click", clickAlert);
}

addingEventListener();