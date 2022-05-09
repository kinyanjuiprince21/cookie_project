const email1 = document.querySelector("#email1");
const password1 = document.querySelector("#password1");
const checkbox1 = document.querySelector("#checkbox1");
const submit1 = document.querySelector("#submit1");


submit1.addEventListener("click", () => {
    setCookie("email", email1.value,3);
    setCookie("password", password1.value,3);

    if(email1.value != null && password1 != null ) {
        console.log("authenticated");
        setCookie("user", "authenticated", 3);
        let cookieName = getCookie("user");
        window.alert(cookieName);
    } else {
        console.log("user not authenticated");
    }
});
function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;

}

function deleteCookie(name) {
    setCookie(name, null, null);
}

function getCookie(name){
    const cookieDecoded = decodeURIComponent(document.cookie);
    const cookieArray = cookieDecoded.split("; ");

    let result = null;

    cookieArray.forEach( element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1);
        }
    });
    return result;
}