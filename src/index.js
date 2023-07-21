//! CRUD

//* CREATE - POST
//* READ   - GET
//* UPDATE - PUT & PATCH
//* DELETE - DELETE

// Приклад СТАНДАРТНОЇ СТРУКТУРИ ЗАПИТУ ВІДМІННОГО ВІД GET
// const options = {
//   // Вказуєм метод
//   method: 'POST',
//   // Описуємо тіло, що несе інформацію
//   body: JSON.stringify({
//     name: 'TEst user',
//     age: 18,
//   }),
//   // Вказуємо контент-тайп, що є дуже важливо для POST, PUT, PATCH
//   headers: {
//     'Content-type': 'aplication/json',
//   }
// };
// fetch('https://SomeURL', options);

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// POST
const post = {
  title: 'group 85',
  body: 'group 85 first post',
  userId: 101,
};

options = {
  method: 'POST',
  body: JSON.stringify(post),
  headers: {
    'Content-type': 'application/json',
  },
};
fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then(resp => {
    console.log(resp);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    // Метод json() - завжди повертає проміс, тому має обовязково бути наступний then()
    return resp.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));

fetch('https://jsonplaceholder.typicode.com/posts/101')
  .then(response => response.json())
  .then(json => console.log(json));
