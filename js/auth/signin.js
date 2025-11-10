const emailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //call API to check credentials in database

    /* 
    if(emailInput.value == "test.admin@mail.com" && passwordInput.value == "123"){
        //call the real token
        const token = "azertyuiopqsdfghjklmwxcvbn";
        setToken(token);
        //add token within cookie

        setCookie(roleCookieName, "admin", 7);
        window.location.replace("/");
    }
    else if(emailInput.value == "test.guest@mail.fr" && passwordInput.value == "123"){
        //call the real token
        const token = "nbvcxwmlkjhgfdsqpoiuytreza";
        setToken(token);
        //add token within cookie

        setCookie(roleCookieName, "guest", 7);
        window.location.replace("/");
    }
    else{
        emailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
    */
}