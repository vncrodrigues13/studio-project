var xhr = new XMLHttpRequest();
xhr.open("GET", "http://127.0.0.1:2121/employee", true);
xhr.onload = function() {
    console.log(xhr.responseText);
};
xhr.send();