//sample users list
var users = [
    { id: 1, name: "John", age: "18", profession: "developer" },
    { id: 2, name: "Jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
  ];

  function renderUser() {
    var userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.forEach(function(user) {
      var list = document.createElement("li");

      var name = document.createElement("span");
      name.textContent = "Name: " + user.name;
      list.appendChild(name);

      var profession = document.createElement("span");
      profession.textContent = "Profession: " + user.profession;
      list.appendChild(profession);

      var age = document.createElement("span");
      age.textContent = "Age: " + user.age;
      list.appendChild(age);
      userList.appendChild(list);
    });
  }

  //filter function
  function filter() {
    var selectedProfession = document.getElementById("profession").value;
    if (selectedProfession === "") {
      alert("Please select a profession before clicking the button.");
      return;
    }

    var filterUser = users.filter(function(user) {
      return user.profession === selectedProfession;
    });

    users = filterUser;
    renderUser();
  }

  //add function
  function addUser() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var profession = document.getElementById("newProfession").value;

    var newUser = {
      id: users.length + 1,
      name: name,
      age: age,
      profession: profession
    };

    if(name == "" || age == "" || profession == "")
    {
      alert("Please enter correct details !")
    }
    else{
      users.push(newUser);
    }

    
    renderUser();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("newProfession").value = "developer";
  }
  renderUser();