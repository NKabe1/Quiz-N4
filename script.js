const btn = document.querySelector("#btn");
const userCard = document.querySelector(".userCard");

function generateCard(contact) {
    return `<ul class="list-group">
    <li class="list-group-item">Name: ${contact.firstName}</li>
    <li class="list-group-item">Lastname: ${contact.lastName}</li>
    <li class="list-group-item">Age: ${contact.age}</li>
    <li class="list-group-item">Address: ${contact.address}</li>
    <li class="list-group-item">Gender: ${contact.gender}</li>
  </ul>`;
}

function fillCard(cardContent) {
    userCard.innerHTML = cardContent;
}

btn.addEventListener("click", () => {
    const fullNameInput = document.querySelector("#fullName");
    const firstNameInput = fullNameInput.value.split(" ")[0];
    const lastNameInput = fullNameInput.value.split(" ")[1] || "";
    const ageInput = document.querySelector("#age").value;
    const addressInput = document.querySelector("#address").value;
    const genderMale = document.querySelector("#genderMale");
    const genderFemale = document.querySelector("#genderFemale");

    let gender = "";
    if (genderMale.checked) {
        gender = "Male";
    } else if (genderFemale.checked) {
        gender = "Female";
    }

    const contact = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        age: ageInput,
        address: addressInput,
        gender: gender,
    };

    const cardContent = generateCard(contact);
    fillCard(cardContent);

    fullNameInput.value = "";
    document.querySelector("#age").value = "";
    document.querySelector("#address").value = "";
    genderMale.checked = false;
    genderFemale.checked = false;
});