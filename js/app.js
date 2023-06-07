var check=document.querySelector(".check");
check.addEventListener('click',idioma);


function idioma(){
    console.error(check.checked);
    let id=check.checked;
    if (id==true)
    { 
        location.href="/en/index.html";
        
        
    }
    else{

        location.href="../js/index.html";
        
    }
}
