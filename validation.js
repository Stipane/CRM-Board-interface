const fname = document.getElementById('name1');
const lname = document.getElementById('name2');
const dtebirth = document.getElementById('dob');
const emailAdd = document.getElementById('email');
const department = document.getElementById('dept');
const form = document.getElementById('RegForm');
const name1_Error = document.getElementById('name1_Error');
const name2_Error = document.getElementById('name2_Error');
const dob_Error = document.getElementById('dob_Error');
const email_Error = document.getElementById('email_Error');
const dept_Error = document.getElementById('dept_Error');

form.addEventListener('submit', (e) => {
  var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (fname.value === '' || fname.value == null) {
    e.preventDefault();
    name1_Error.innerHTML = 'This field cannot be left blank';
  } else {
    name1_Error.innerHTML = '';
  }

  if (lname.value === '' || lname.value == null) {
    e.preventDefault();
    name2_Error.innerHTML = 'This field cannot be left blank';
  } else {
    name2_Error.innerHTML = '';
  }

  if (dtebirth.value === '' || dtebirth.value == null) {
    e.preventDefault();
    dob_Error.innerHTML = 'This field cannot be left blank';
  } else {
    dob_Error.innerHTML = '';
  }

  if (!email.value.match(email_check)) {
    e.preventDefault();
    email_Error.innerHTML = 'Valid email is required';
  } else {
    email_Error.innerHTML = '';
  }

  if (department.value === '' || department.value == null) {
    e.preventDefault();
    dept_Error.innerHTML = 'This field cannot be left blank';
  } else {
    dept_Error.innerHTML = '';
  }
});
