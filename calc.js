let result = document.getElementById("display");

let calculate = function(inp){
    result.value += inp;    
}

let Result = function(){
    try{ 
        result.value =eval(result.value)
    }
    catch(err){
        alert("Invalid");
    }
}

function relo() {
    result.value = '';
}

function DEL() {
    result.value = result.value.slice(0,-1);
}