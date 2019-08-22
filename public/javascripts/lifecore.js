// loading
function getUser() {
  var xhr = new XMLHttpRequest();
  xhr.onlaod = function() {
    if (xhr.status == 200) {
      var users = JSON.parse(xhr.responseText);
      console.log(users);
      var tbody = document.querySelector("#user-list tbody");
      tbody.innerHTML = "";
      users.map(function(user) {
        var row = document.createElement("tr");
        row.addEventListener("click", function() {
          getComment(user.id);
        });
        var td = document.createElement("td");
        td.textContent = user.id;
        row.appendChild(td);
        td = document.createElement("td");
        td.textContent = user.pid;
        row.appendChild(td);
        td = document.createElement("td");
        td.textContent = user.language;
        row.appendChild(td);
        td = document.createElement("td");
        td.textContent = user.water;
        row.appendChild(td);
        td = document.createElement("td");
        td.textContent = user.filter;
        row.appendChild(td);
        td = document.ceeateElement("td");
        td.textContent = user.notify ? "true" : "false";
        row.appendChild(td);
        tbody.appendChild(row);
      });
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open("GET", "/users");
  location.reload();
}

// create
document.getElementById("user-form").addEventListener("submit", function(e) {
  e.preventDefault();
  var pid = e.target.pid.value;
  var water = e.target.water.value;
  var filter = e.target.filter.value;
  var notify = false;
  if (!pid) {
    return alert("Please enter the product ID");
  }
  if (!water) {
    return alert("Please enter the water size");
  }
  if (!filter) {
    return alert("Please enter the filter size");
  }
  if (filter < 2000) {
    notify = true;
  }
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status === 201) {
      console.log(xhr.responseText);
      getUser();
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open("POST", "/users");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      pid: pid,
      water: water,
      filter: filter,
      notify: notify
    })
  );
  e.target.pid.value = "";
  e.target.water.value = "";
  e.target.filter.value = "";
});

// update
document.getElementById("update-form").addEventListener("submit", function(e) {
  e.preventDefault();
  var pid = e.target.pid.value;
  var water = e.target.water.value;
  var filter = e.target.filter.value;
  var notify = false;
  if (!pid) {
    return alert("Please enter the update product ID");
  }
  if (!water) {
    return alert("Please enter the update water size");
  }
  if (!filter) {
    return alert("Please enter the update filter size");
  }
  if (filter < 2000) {
    notify = true;
  }
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      getUser();
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open("PATCH", "/users/" + pid);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      pid: pid,
      water: water,
      filter: filter,
      notify: notify
    })
  );
  e.target.pid.value = "";
  e.target.water.value = "";
  e.target.filter.value = "";
});
