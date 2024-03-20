function validate()
{
  var username = document.getElementById('user').value
  var password = document.getElementById('pass').value

  switch(username)
  {
      case "tapan":
          switch(password)
          {
              case "tapan123":
              return true;
              default:
                alert("incorrect password")
                return false
          }
      default:
        alert("no user");
      return false;
  }
}