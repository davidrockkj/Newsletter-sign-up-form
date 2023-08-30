let email = document.querySelector("#email")
const error = document.querySelector("#error")
const btn = document.querySelector("#btn")
const btnModal = document.querySelector("#btn-modal")
let feedbackMessage = document.querySelector("#feedback-message")
const modal = document.querySelector(".modal-container")
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const myForm = document.getElementById("#myForm")
const myModal = document.getElementById("#myModal")

btn.disabled = true

function closeModal() {
    modal.style.display = "none";
    document.getElementById("#myForm").reset();
    btn.classList.remove("btn-active");
    window.location.reload();
}

btnModal.addEventListener("click", closeModal)


function openModal() {
    feedbackMessage.innerHTML = `A confirmation email has been sent to <b>${email.value}</b>. Please, open it and click on the button inside to confirm your subscription.`
    
    modal.style.display = "flex"
}

window.addEventListener("keyup", function (e) {
    if(e.code === 'Escape'){
        closeModal()
    }
})

function isitEmpty() {
    if(email.value.length > 0){
        if(email.value.match(mailformat))
        {
            error.innerHTML = ""
            email.classList.remove("email-invalid")
        } else {
            email.classList.add("email-invalid")
            error.innerHTML = "Valid email required"
        }
    } else {
        error.innerHTML = ""
        btn.disabled = true
        btn.classList.remove("btn-active")
        email.classList.remove("email-invalid")
    }
}


function vejaAi() {

    if(email.value.match(mailformat))
        {
            btn.classList.add("btn-active")
            btn.disabled = false
            btn.addEventListener("click", openModal)

            myForm.addEventListener("submit", function(e){
                e.preventDefault()
                openModal()
            })

            document.addEventListener("keypress", function(e){
                if(e.key === 'Enter'){
                    openModal()
                }
            })

        } else {
            btn.classList.remove("btn-active")
            btn.disabled = true
        }
}