const loginItems = document.getElementById('form-1');
const btnLogin = document.querySelector("#form-1 .login")
const formLogin =  document.querySelector("#form-1 .form-login");
const btnRegister = document.querySelector("#form-1 .register")
const formRegister =  document.querySelector("#form-1 .form-register");
const slider = document.querySelector("#form-1 .slider");

const loginItems01 = document.getElementById('form-2');
const btnLogin01 = document.querySelector("#form-2 .login")
const formLogin01 =  document.querySelector("#form-2 .form-login");
const btnRegister01 = document.querySelector("#form-2 .register")
const formRegister01 =  document.querySelector("#form-2 .form-register");
const slider01 = document.querySelector("#form-2 .slider");

function toggle(btn, to_btn, from, to_form){
    btn.style.color = "inherit";
    to_btn.style.color = "white";
    from.style.display = "none";
    to_form.style.display = "flex";
    from.classList.remove("flex");
    from.classList.add("hidden");
    to_form.classList.remove("hidden");
    to_form.classList.add("flex");
}

btnLogin.addEventListener("click", (event)=>{
    if(formLogin.classList.contains("flex")){
        return;
    }
    toggle(btnRegister, btnLogin, formRegister, formLogin);
    slider.classList.add("translate-x-[0%]");
    slider.classList.remove("translate-x-[100%]");
    // slider.style.transform = "translate('0%')";
})


btnRegister.addEventListener("click", (event)=>{
    if(formRegister.classList.contains("flex")){
        return;
    }
    toggle(btnLogin, btnRegister, formLogin, formRegister);
    slider.classList.add("translate-x-[100%]");
    slider.classList.remove("translate-x-[0%]");
    // slider.style.transform = "translate('0%')";
})

btnLogin01.addEventListener("click", (event)=>{
    if(formLogin01.classList.contains("flex")){
        return;
    }
    toggle(btnRegister01, btnLogin01, formRegister01, formLogin01);
    slider01.classList.add("translate-x-[0%]");
    slider01.classList.remove("translate-x-[100%]");
    // slider01.style.transform = "translate('0%')";
})


btnRegister01.addEventListener("click", (event)=>{
    if(formRegister01.classList.contains("flex")){
        console.log("the form is already on displayed")
        return;
    }
    toggle(btnLogin01, btnRegister01, formLogin01, formRegister01);
    slider01.classList.add("translate-x-[100%]");
    slider01.classList.remove("translate-x-[0%]");
    // slider.style.transform = "translate('0%')";
})