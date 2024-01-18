// var food = {
//     foodName: 'Pounded yam', 
//     ancestor: 'yam',
//     color: 'white',
//     isSweet: true,
//     isExpensive: true,
//     price: 1000,
//     eat() {
//         console.log('I am now eating');
//     },
//     notEat() {
//         console.log("I am not eating");
//     },
//     buy(){
//         console.log('Bring it');
//     },
//     doNotBuy(){
//         console.log("I'm not Buying It's expensive");
//     }
// }


// console.log(food.price);   // Dot Notation
// console.log(food['isExpensive']); // Bracket Notation
// if (food.foodName == 'Pounded yam') {
//     food.eat();
// }else{
//     food.notEat();
// }

// if (food.price == 1000) {
//     food.buy()
// }else {
//     food.doNotBuy();
// }


// SCHOOL PORTAL
function submit() {
    allStudents = [];
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var mailPhone = document.getElementById("mailPhone").value;
    var password = document.getElementById("password").value;


    if (firstName === '' || lastName === '' || address === '' || mailPhone === '' || password === '') {
        emptyError.style.display = "block"
        // higher order function
        setTimeout(() => {
            emptyError.style.display = "none"
        }, 5000)
    } else {
        var studObj = { firstName, lastName, address, mailPhone, password }
        var pushedStudents = allStudents.push(studObj);
        if (pushedStudents) {
            displayStudents();
            console.log(allStudents);
            successMessage.style.display = "block"
            // higher order function again
            setTimeout(() => {
                successMessage.style.display = "none"
            }, 3000)
        } else {

            alert("Failed to submit");
        }
    }

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("mailPhone").value = "";
    document.getElementById("password").value = "";
}

function displayStudents() {
    show.innerHTML = "";
    show.innerHTML += `
        <tr>
        <th class="">S/N</th>
        <th class="">First Name</th>
        <th class="">Last Name</th>
        <th class="">Address</th>
        <th class="">Email / Phone No.</th>
        <th class="">Make Changes</th>
        </tr>
    `
    if (allStudents.length > 0) {
        for (i = 0; i < allStudents.length; i++){
            console.log(allStudents[i].firstName);
            console.log(allStudents[i].lastName);
            console.log(allStudents[i].address);
            console.log(allStudents[i].mailPhone);
        }
        // .map
        // allStudents.map((student, index) => {
        //     console.log(student.firstName);
        // })
        show.innerHTML += `
        <tr>
        <td>${i}.</td>
        <td>${allStudents[i].firstName}</td>
        <td>${allStudents[i].lastName}</td>
        <td>${allStudents[i].address}</td>
        <td>${allStudents[i].mailPhone}</td>
        <td><button class="btn btn-danger mt-1 btn-sm" onclick="del(${i})">Delete</button></td>
        </tr>
        `
    }
}