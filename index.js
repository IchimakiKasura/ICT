// Hello guys and gals

for(i=1; i < 10; i++)
{
    console.log(i)
}

switch(username)
{   
    case "user":
        switch(password)
        {
            case "123":
                window.location.href = "home.html"
                return false;
            default:
                alert("incorrect");
                return false;
        }
    default:
        alert("no user");
        return false;
}