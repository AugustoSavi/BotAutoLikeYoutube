setInterval(function(){

console.log("Verificando se já deu like");

const classes = document.querySelector("#top-level-buttons > ytd-toggle-button-renderer:nth-child(1)").className 

    if (classes.indexOf('style-default-active') == -1){
            
        document.querySelector("#top-level-buttons > ytd-toggle-button-renderer:nth-child(1)").click()
        console.log("Dei like");
    }
    else {
        console.log("Já foi dado like");
    }

},15000);
