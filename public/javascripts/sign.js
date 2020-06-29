var nickname;



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

modal.style.display = "block";

// When the user clicks on the button, open the modal
btn.onclick = function() {
    const nameElement = document.getElementById("nickname");
    const name = nameElement.value;
    alert("Your nickname is "+name);
    nickname = name;
    document.getElementById("name").setAttribute("placeholder",nickname);
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

