function completeAndRedirect(){
    var form = document.forms['myform'];
    text.innerHTML="Веденні вами дані: <br> І'мя : "+ form.elements.Firstname.value + "<br> EMAIL : " + form.elements.email.value + "<br> ПОвідомлення : " + form.elements.massage.value;
}
