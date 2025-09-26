  function librarySystem() {
   let username = prompt("Enter username:");
    let password = prompt("Enter password:");
    if (username === "Dinesh" && password === "dina") {
     let borrow = confirm("Do you want to get a book?");
     if (borrow) {
        let category = prompt("Enter book type:\n1 = Moral \n2 = Science \n3 = Geological");
     category = Number(category);
    switch (category) {
     case 1:
     alert("You selected Moral");
    break;
    case 2:
     alert("You selected Science");
     break;
    case 3:
    alert("You selected Geological");
    break;
    default:
        alert("Invalid type!");
             }
     } else {
    alert(" sorry, try again later!");
            }
     } else {
    alert("Invalid login!");
        }
    }
    librarySystem();



    function checkVotingEligibility() {
    do {
         let name = prompt("Enter your name:");
        let age = prompt("Enter age:");
if (age >= 18) {
 alert("yes " +name + ", you are eligible.");
        } else {
 alert("Sorry " +name + ", you are not eligible.");
        }
var again = confirm("Do you want to check again?");
    } while (again);
   alert("try again later");
}
checkVotingEligibility();


