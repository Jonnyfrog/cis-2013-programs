var $ = function (id) 
{
    return document.getElementById(id);
}

var mainProgram = function () 
{
    var stringFirstName = prompt("What is your first name?");
    if (!isNaN(stringFirstName)) {
        alert("Uh Oh! Idiot alert! Big idiot here!");
    } else
    {
        alert("Hello "+ stringFirstName +"! It's great to meet you!");  
    }
}

window.onload = function () 
{
    $("click").onclick = mainProgram;
    $("item_cost").focus(); //puts the cursor on the first DOM text input box
}