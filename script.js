$(document).ready(function () {
  // LOGIN VALIDATION
  $("#loginForm").validate({
        rules: {
         username: { required: true },
         password: { required: true }
              },
        messages: {
         username: "Please enter your username",
         password: "Please enter your password"
            },
    submitHandler: function (form) {
        let username = $("input[name='username']").val();
        let password = $("input[name='password']").val();

        // Static login
         if (username === "admin" && password === "12345") {
        localStorage.setItem("username", username);
        window.location.href = "landing page.html";
        return;
  }

  // Dynamic login (from signup)
  let storedUser = JSON.parse(localStorage.getItem("registeredUser"));
        if (storedUser && (username === storedUser.email || username === storedUser.username) 
        && password === storedUser.password) {
        localStorage.setItem("username", storedUser.username);
        window.location.href = "landing page.html";
        } else {
        alert("Invalid username or password!");
        }
}

  });

  // SIGNUP VALIDATION
    $("#signupForm").validate({
        rules:{
        fullname: { required: true },
        email: { required: true, email: true },
        password: { required: true, minlength: 5 },
        confirm_password: {
        required: true,
        equalTo: "#password"
      }
    },
        messages: {
        fullname: "Please enter your full name",
        email: "Please enter a valid email address",
        password: {
        required: "Please provide a password",
        minlength: "Password must be at least 5 characters long"
      },
        confirm_password: {
        required: "Please confirm your password",
        equalTo: "Passwords do not match"
      }
    },
    submitHandler: function (form) {
        let username = $("input[name='fullname']").val();
        let email = $("input[name='email']").val();
        let password = $("input[name='password']").val();

  // save to localStorage
        localStorage.setItem("registeredUser", JSON.stringify({
        username: username,
        email: email,
        password: password
  }));

        alert("Registration successful! You can now login.");
        window.location.href = "index.html";
}

  });
});
