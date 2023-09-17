const category = document.querySelector('.category');
const navbar = document.querySelector('.navbar ul');
const member = document.querySelector('.member');
const footer = document.querySelector('.area-footer');


category.onclick = () =>{
    navbar.classList.toggle('muncul');
    member.classList.toggle('muncul');
    footer.classList.toggle('muncul');
}

function validate(){
    const form = document.forms['memberform'];
    const name = form['fullname'].value;
    const email = form['email'].value;
    const agree = form['agreement'].checked;
    const gender = form['gender'].value;
    const address = document.getElementById("address").value;

    let message = ''
    var x = 0;
    var y = 0;
    var z = 0;

    if(name.length < 8){
        message = "Name must be minimum 8 characters"
        document.getElementById('errorName').innerHTML = message
        x = x + 1;
    }
    else{
        message = ""
        document.getElementById('errorName').innerHTML = message
    }

    if(!email){
        message = "You must enter email"
        document.getElementById('errorEmail').innerHTML = message
        x = x + 1;
    }
    else{
        for(var i=0; i<email.length; i=i+1){
            if(email[i]=='@' && i != 0 && i != (email.length-1)){
                y = y + 1;
            }
        }
        if(y == 1 && (email[email.length-5]!='@' && email[email.length-4]=='.' && email[email.length-3]=='c' && email[email.length-2]=='o' && email[email.length-1]=='m')){
            message = ""
            document.getElementById('errorEmail').innerHTML = message
        }
        else{
            message = "Email Invalid"
            document.getElementById('errorEmail').innerHTML = message
            x = x + 1;
        }

    }


    if(gender != 'male' && gender!='female'){
        message = "Please choose your gender!"
        document.getElementById('errorGender').innerHTML = message
        x = x + 1;
    }
    else{
        message = ""
        document.getElementById('errorGender').innerHTML = message
    }


    if(address == ''){
        message = "You must enter your address"
        document.getElementById('errorAddress').innerHTML = message
        x = x + 1;
    }
    else{
        message = ""
        document.getElementById('errorAddress').innerHTML = message
    }

    if(!agree){
        message = "You must agree to our terms and conditions"
        document.getElementById('errorAgree').innerHTML = message
        x = x + 1;
    }
    else{
        message = ""
        document.getElementById('errorAgree').innerHTML = message
    }

    if(x >= 1){
        x = 0;
        return false;
    }

   

}