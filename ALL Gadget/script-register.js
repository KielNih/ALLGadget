function validateregister(event)
{
    console.log("test")
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var email = document.getElementById("email").value
    var number = document.getElementById("phonenumber").value
    var birth = new Date(document.getElementById("birth").value)
    var female =  document.getElementById("female").checked
    var male = document.getElementById("male").checked
    var province = document.getElementById("province").value
    var checkbox = document.getElementById("checkbox").checked
    event.preventDefault(); // biar tidak auto refresh
    if(username == "")
    {
        alert("Username cannot be empty")
    }
    else if (!email.endsWith("@gmail.com"))
    {
        alert("Email used must end with @gmail.com")
    }
    else if(!checkPassword(password))
    {
        alert("Password must be at least 8 character amd is alphanumeric")
    }
    else if(number.charAt(0) != 0)
    {
        alert("PhoneNumber must start with 0")
    }
    else if(number == "")
    {
        alert("PhoneNumber cannot be empty")
    }
    else if(birth.getFullYear() > 2023)
    {
        alert(birth.getFullYear() + "is invalid")    
    }
    else if(!female && !male)
    {
        alert("Gender cannot be empty")
    }
    else if(province == "empty")
    {
        alert("Province cannot be empty")
    }
    else
    {
        alert("Welcome to ALLGadget " + username + ", Enjoyyy!!!")
        alert("Click OK to go to the homepage")
    }   
    location.replace("Home.html")

}

function checkPassword(password)
{
    if(password.length < 8)
    {
        return false
    }
    isAlpha = false
    isNum = false
    for(var i = 0; i < password.length; i++)
    {
        if(isNaN(password[i]))
        {
            isAlpha = true
        }
        else
        {
            isNum = true
        }
        if(isNum && isAlpha)
        {
            return true
        }
    }
    return false
}