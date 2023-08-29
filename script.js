var email = document.querySelector("#email")
var error = document.querySelector("#error")
var btn = document.querySelector("#btn")
var btnModal = document.querySelector("#btn-modal")
var feedbackMessage = document.querySelector("#feedback-message")
const modal = document.querySelector(".modal-container")
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn.disabled = true


btnModal.addEventListener("click", () => {
    modal.style.display = "none"
    email.value = ""
    btn.classList.remove("btn-active")
})

function openModal() {
    feedbackMessage.innerHTML = `A confirmation email has been sent to <b>${email.value}</b>. Please, open it and click on the button inside to confirm your subscription.`
    
    modal.style.display = "flex"
    //console.log("passou por aqui")
}

function isitEmpty() {
    if(email.value.length > 0){
        //console.log(`tem algo no input ${email.value}`)
        if(email.value.match(mailformat))
        {
            error.innerHTML = ""
            //console.log(`Sim, tem email: ${email.value}`)
            btn.classList.add("btn-active")
            btn.disabled = false
            btn.addEventListener("click", openModal)
            email.classList.remove("email-invalid")
        } else {
            btn.classList.remove("btn-active")
            btn.disabled = true
            //console.log("Nao, nao tem email")
            email.classList.add("email-invalid")
            error.innerHTML = "Valid email required"
        }
    } else {
        error.innerHTML = ""
        //console.log("o input ta vazio")
        btn.disabled = true
        btn.classList.remove("btn-active")
        email.classList.remove("email-invalid")
    }
}

