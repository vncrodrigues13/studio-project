var xhr = new XMLHttpRequest();
xhr.open("POST", 'http://localhost:2121/employee', true);
xhr.setRequestHeader('Content-Type', 'application/json');
var params = 'orem=ipsum&name=binny';
xhr.send(params);