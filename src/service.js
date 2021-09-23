function enviar(){
    event.preventDefault();
    
    const forms = document.getElementById("forms")
    const url = "https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register"
    const formName  = forms.elements['name'].value;
    const formEmail = forms.elements['email'].value;
    
    body = {
        name: formName,
        email: formEmail
    }
    
    var request = new XMLHttpRequest()
    request.onreadystatechange = function(){
        if(request.readyState === 4){
            if(request.status === 200){
                forms.reset();
                window.alert("SUCESSO!")
            }
            else{
                window.alert("FALHA AO ENVIAR FORMULÁRIO")
            }
        }
    }

    request.open("POST", url, true)
    request.setRequestHeader("Authorization", body.email)
    request.send(JSON.stringify(body))    
}