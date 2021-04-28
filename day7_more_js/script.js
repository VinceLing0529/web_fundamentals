var num=0;
function add(){
    num ++;
    var x =document.querySelector(".likes")

    x.innerText= num +"Likes"
}

function remove(){
    var y = document.getElementById("card-lists");
    y.classlist.remove("card-list-item");

}