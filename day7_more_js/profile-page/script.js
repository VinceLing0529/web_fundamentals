console.log("page loaded...");

function changename(){
    var x =document.querySelector(".name");
    x.innerText= "whatever";
}

function removeadd(){
    var y = document.querySelector(".card-list-item");
    y.parentNode.removeChild(y)
    var num= document.querySelector(".badge");
    num.innerText++;
    }

function removemin(){
    var y = document.querySelector(".card-list-item");
    y.parentNode.removeChild(y)
    var num= document.querySelector(".badge");
    num.innerText--;

}