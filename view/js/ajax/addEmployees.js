// const sendData = () => {
//     sendHttpRequest('POST', 'http://127.0.0.1:2121/employee', {
//             "id": "01234567892",
//             "name": "Matheus Rodrigues",
//             "birth_date": "1996-06-28T03:00:00.000Z",
//             "email": "mathsrodrigues@gmail.com",
//             "phone": "98765432111",
//             "address": {
//                 "street": "avenida boa viagem",
//                 "complement": "apto 203",
//                 "number": "914",
//                 "district": "Pina"
//             }
//         })
//         .then(responseData => {
//             console.log(responseData);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// };



// const sendHttpRequest = (method, url, data) => {
//     const promise = new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);

//         xhr.responseType = 'json';

//         if (data) {
//             xhr.setRequestHeader('Content-Type', 'application/json');
//         }

//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response);
//             } else {
//                 resolve(xhr.response);
//             }
//         };

//         xhr.onerror = () => {
//             reject('Something went wrong!');
//         };

//         xhr.send(JSON.stringify(data));
//     });
//     return promise;
// };

// sendData()