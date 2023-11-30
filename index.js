const profileImage = document.querySelector("#imageGermo");
const fullNameSpan = document.querySelector("#fullName");
const ageSpan = document.querySelector("#age")
const statusSpan = document.querySelector("#status")
const btnUpdateProfile = document.querySelector("#updateButton")

const isGermo = confirm("Are you Germo?"); // Ask if the user is germo or not

if(isGermo === true){
    console.log("Literally me");
}
else{
    profileImage.src = "images/pig.jpg";
    fullNameSpan.innerHTML = "Siga Sigasson"
    ageSpan.innerHTML = "38"
    statusSpan.innerHTML = "Piggin' around"
}

btnUpdateProfile.addEventListener("click", () => {
    profileImage.src = "images/scream.jpg";
    fullNameSpan.innerHTML = "Scream Emojington"
    ageSpan.innerHTML = "3"
    statusSpan.innerHTML = "Shocked"
});