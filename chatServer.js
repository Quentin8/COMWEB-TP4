
let websocket;
let login_Globale;


function login(){
    login_Globale = prompt("Entrez votre pseudo");
}

function sendMessage(){
    let message = document.getElementById("inlineFormInputGroup").value;
    websocket.send(login_Globale + " : " + message + "\n");
    document.getElementById("inlineFormInputGroup").value = "";
}
function writeMessage(message){//Ecriture du message
if(message != 'Hi server'){
document.getElementById("chat").innerHTML += message;
}

}

function createWebsocket(){
    login();
    document.getElementById("chat").innerHTML = "";
    //creation du Websocket (canal de communication avaec le serveur)
    websocket = new WebSocket('ws://localhost:12345');
    websocket.onopen = function(event){
        console.log('connexion établie');
        websocket.send(login_Globale + ' joined the tchat !\n');
    }
    websocket.onmessage = function(event){
    //appelle la fonction writemessage
    writeMessage(event.data);
    }


    websocket.onclose = function(){
        console.log('Communication terminée');
    }
    //EventListener qui qd on click send quelque chose au serveur
    document.getElementById("btn1").addEventListener("click",sendMessage);

}
createWebsocket();
