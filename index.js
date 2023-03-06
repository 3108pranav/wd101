// let userform=document.getElementsById("userform");
// const saveuserform=(event)=>{
//     event.preventDefault();
//     const name=document.getElementsById("name").value;
//     const email=document.getElementsById("email").value;
//     const Password=document.getElementsById("password").value;
// }
// userform.addEventListner("submit",saveuserform)





// const dobInput = document.getElementById('dob');
// const dobError = document.getElementById('dob-error');

// dobInput.addEventListener('input', () => {
//   const dobValue = dobInput.value;
//   const dobDate = new Date(dobValue);
//   const age = calculateAge(dobDate);
  
//   if (age < 18) {
//     dobError.textContent = 'You must be at least 18 years old.';
//     dobInput.setCustomValidity('You must be at least 18 years old.');
//   } else if (age > 55) {
//     dobError.textContent = 'You must be no more than 55 years old.';
//     dobInput.setCustomValidity('You must be no more than 55 years old.');
//   } else {
//     dobError.textContent = '';
//     dobInput.setCustomValidity('');
//   }
// });

// function calculateAge(dob) {
//   const today = new Date();
//   const diff = today.getTime() - dob.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }


// THIS FUNCTION IS FOR DISPLAY DATA............................

function store(){
    
    let inputEmail= document.getElementById("email");
    let nameEl = document.getElementById("name");
    let pass = document.getElementById("pass");
    let dob = document.getElementById("dob");
    localStorage.setItem("name", inputEmail.value);
    localStorage.setItem("email", nameEl.value);
    localStorage.setItem("pass", pass.value);
    localStorage.setItem("dob", dob.value);
    let n = localStorage.getItem("name");
    let e = localStorage.getItem("email");
    let p = localStorage.getItem("pass");
    let dat = localStorage.getItem("dob");
    var d = new Date(dob.value);
    console.log(d);
    let age = Math.floor((new Date() - d) / (365 * 24 * 60 * 60 * 1000));
    console.log(age);
    if(age<=18 || age>=55){
        alert("Your Age is NOT satisfied by our CONDITIONS")
        return
    }
    document.querySelector(".local-entries").insertAdjacentHTML('beforeend',`<h3 class="boxed">${n}</h3>
    <h3 class="boxed">${e}</h3>
    <h3 class="boxed">${p}</h3>
    <h3 class="boxed">${dat}</h3>`)
    
    // console.log(calculateAge(dat));
    // function displayData() {
    //     let output = document.getElementById('output');
    //     output.insertAdjacentHTML("beforeend","<p>Name: " + n + "</p>" +
    //                         "<p>Email: " + e + "</p>"+
    //                         "<p>password: " + p + "</p>"+
    //                         "<p>date: " + dat + "</p>")
    //     }
        
    // displayData();
}





