let searchForm = document.querySelector('.search-form');
let searchbtn = document.querySelector('#search-btn');

searchbtn.onclick = () => {
    searchForm.classList.toggle('active');
}

let loginForm = document.getElementById('login-form');
let loginBtn = document.querySelector('#login-btn');

loginBtn.onclick = () => {
    loginForm.classList.toggle('active');
}

let navBar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    navBar.classList.toggle('active');
}

let wrapper = document.querySelector('.wrapper');
let categoryBtn = document.querySelector('#category-btn');

categoryBtn.onclick = () => {
    wrapper.classList.toggle('active');
}


let dropDown = document.querySelectorAll(".drop_down");

for(let i=0; i<dropDown.length; i++){
    dropDown[i].addEventListener("click", function() {
        
        dropDown[i].classList.toggle("active"); 
    })
}


window.onclick = (event) => {

    if (!event.target.matches('#menu-btn')) {
        if (navBar.classList.contains('active')) {
            navBar.classList.remove('active')
        }
    }

    if (!event.target.matches('#login-btn')) {
        if (loginForm.classList.contains('active')) {
            loginForm.classList.remove('active')
        }
    }

    if (!event.target.matches('#search-btn')) {
        if (searchForm.classList.contains('active')) {
            searchForm.classList.remove('active')
        }
    }

    for(let i=0; i<dropDown.length; i++){
        if (!event.target.matches("#dropDown")) {
            if (dropDown[i].classList.contains('active')) {
                dropDown[i].classList.remove('active')
            }
        }
    }
    

    if (!event.target.matches('#category-btn')) {
        if (wrapper.classList.contains('active')) {
            wrapper.classList.remove('active')
        }
    }
}

loginForm.addEventListener('click', event => event.stopPropagation());
searchForm.addEventListener('click', event => event.stopPropagation());
navBar.addEventListener('click', event => event.stopPropagation());
wrapper.addEventListener('click', event => event.stopPropagation());



/*

<script type="text/javascript">
$(document).ready(function () {
    $('input[name="input_10"]').datepicker({
        dateFormat: "mm/dd/yy",
        altFormat: "yymmdd",
        showOtherMonths: true,
        minDate: 3,
        showOn: "both",
        buttonText: "<i class='btr bt-calendar'  style='color: black;'></i>",
    });
})
</script>


$(document).ready(function () {
    alert(test12);
})

*/