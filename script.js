allStudents = [];

//----------------------------------- SCHOOL PORTAL-----------------------------------------//


//-----------------Display-Students Function--------------------//

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
        for (i = 0; i < allStudents.length; i++) {
            show.innerHTML += `
        <tr>
            <td>${i + 1}.</td>
            <td>${allStudents[i].firstName}</td>
            <td>${allStudents[i].lastName}</td>
            <td>${allStudents[i].address}</td>
            <td>${allStudents[i].mailPhone}</td>
            <td>
                <button class="btn btn-danger mt-1 btn-sm" onclick="del(${i})">Delete</button>
                <button class="btn btn-warning btn-sm mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button></td>
            </td>
        </tr>
        `
        }
    }
}

//-----------------Submit Function--------------------//

function submit() {
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

//-----------------Delete Function--------------------//

function del(del) {
    allStudents.splice(del, 1);
    displayStudents()
}