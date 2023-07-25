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

// //! POST
// const post = {
//   title: 'group 85',
//   body: 'group 85 first post',
//   userId: 101,
// };

// options = {
//   method: 'POST',
//   body: JSON.stringify(post),
//   headers: {
//     'Content-type': 'application/json',
//   },
// };
// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then(resp => {
//     console.log(resp);
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     // Метод json() - завжди повертає проміс, тому має обовязково бути наступний then()
//     return resp.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// fetch('https://jsonplaceholder.typicode.com/posts/101')
//   .then(response => response.json())
//   .then(json => console.log(json));

// //! PATCH - UPDATE
// //* Можна оновлувати тільки те, що нам потрібно, скажімо, title
// const DB = {
//   id: 1,
//   title: 'Some title',
//   body: 'Some body',
//   userID: 101,
// };

// const req = {
//   title: 'New value',
// };

// const resalt = {
//   id: 1,
//   title: 'New value',
//   body: 'Some body',
//   userID: 101,
// };

// //************************************************************ */
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => console.log('json-resp from GET: ', json));

// const options = {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'New title from PATCH method!',
//   }),
//   headers: {
//     'Content-type': 'application/json',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
//   .then(resp => {
//     console.log('resp: ', resp);
//     if(!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then(data => console.log('data: ', data))
//   .catch(err => console.log('err', err));
// //************************************************************ */

// //! PUT - UPDATE
// //* Метод PUT - перезатре весь обєкт тією інформацією, що ми надаємо, окрім ID, бо то база даних сама встановлює.

// //* У Базы даних вже э така ынформація
// const DB = {
//   id: 1,
//   title: 'Some title',
//   body: 'Some body',
//   userID: 101,
// };

// //* Дані для PUT запиту
// const req = {
//   title: 'New value',
// };

// //* Маємо результат
// const resalt = {
//   id: 1,
//   title: 'New value',
// };

// //! DELETE - DELETE
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => console.log('json-resp from GET: ', json));

// const options = {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'New title from PATCH method!',
//   }),
//   headers: {
//     'Content-type': 'application/json',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
//   .then(resp => {
//     console.log('resp: ', resp);
//     if(!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then(data => console.log('data: ', data))
//   .catch(err => console.log('err', err));
// //************************************************************ */
// fetch('https://jsonplaceholder.typicode.com/posts/1', {method: 'DELETE'})
// .then(resp => {
//   console.log('resp delete: ', resp);
//   if(!resp.ok) {
//     throw new Error(resp.statusText);
//   }
//   return resp.json();
// })
// .then(data => console.log('data delete resp.json(): ', data))
// .catch(err => console.log('err delete: ', err));

// //! Робота з формою
// const form = document.querySelector('.js-question');

// form.addEventListener('submit', handlerQuestion);

// function handlerQuestion(evt) {
//   evt.preventDefault();
//   // деструктуризацією знімаємо значення елементів форми
//   const { usrName, phone, email, question } = evt.currentTarget.elements;

//   const request = {
//     // Присвоюємо значення відповідного поля
//     name: usrName.value,
//     phone: phone.value,
//     email: email.value,
//     comment: question.value,
//   };

//   serviceQuestion(request)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => evt.target.reset());
// }

// // Функція для запиту на бекентд
// function serviceQuestion(data) {
//   // Описуємо опції запиту
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-type': 'application/json',
//     },
//   };

//   // Сам запит
//   // return fetch('http://127.0.0.1:3000/api/question', options)
//   return fetch('http://127.0.0.1:3000/api/question', options).then(resp => {
//     console.log('bek-end resp: ', resp);
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   });
// }

// //! JS-11.2 *************************************************************

// async function serviceCountries() {
//   // //! Послідовний запит
//   // const reps1 = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//   // const reps2 = await fetch('https://restcountries.com/v3.1/name/France');
//   // const reps3 = await fetch('https://restcountries.com/v3.1/name/Poland');

//   //! Паралельний запит
//   const countries = ['Ukraine', 'France', 'Poland'];
//   // Через map робимо fetch на кожну країну масиву
//   const responses = countries.map(async country => {
//      const resp = await fetch(`C/${country}`);
//     //  console.log(resp);
//      return resp.json();
//   });
//   console.log(responses);
// }

// serviceCountries();

//! Практика форми  з полями на країни + погода

const elements = {
  form: document.querySelector('.js-search'),
  formContainer: document.querySelector('.js-form-container'),
  addField: document.querySelector('.js-add'),
  list: document.querySelector('.js-list'),
};

elements.addField.addEventListener('click', handlerAdd);
elements.form.addEventListener('submit', handlerSearch);

function handlerAdd() {
  elements.formContainer.insertAdjacentHTML(
    'beforeend',
    '<input type="text" name="country" />'
  );
}

async function handlerSearch(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);
  const countries = formData
    .getAll('country')
    .map(item => item.trim())
    .filter(item => item);

  try {
  const capitals = await serviceCountries(countries);
  const weather = await serviceWeather(capitals);
  console.log(weather);

  elements.list.innerHTML = createMarkup(weather);
  } catch (err) {
    console.log(err);
  } finally {
    evt.target.reset();
  }
}

async function serviceCountries(countries) {
  const BASE_URL = 'https://restcountries.com/v3.1/name/';
  const responses = await countries.map(async country => {
    const response = await fetch(`${BASE_URL}${country}`);
    return response.json();
  });

  const data = await Promise.allSettled(responses);

  return data
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value[0].capital[0]);
}

async function serviceWeather(capitals) {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const END_POINT = '/current.json';
  const API_KEY = '14c56bddeab14583a6e164909231107';

  const responses = await capitals.map(async capital => {
    const response = await fetch(
      `${BASE_URL}${END_POINT}?key=${API_KEY}&q=${capital}&lang=uk`
    );
    return response.json();
  });

  const data = await Promise.allSettled(responses);
  console.log(data);
  return data
    .filter(({ status }) => status === 'fulfilled')
    .map(
      ({
        value: {
          current: {
            temp_c,
            condition: { text, icon },
          },
          location: { country, name },
        },
      }) => ({ country, name, text, icon, temp_c })
    );
}

function createMarkup(arr) {
  // return arr
  //   .map(
  //     ({ country, name, temp_c, icon, text }) => `<li>
  //     <img src="${icon}" alt="${text}" />
  //     <h2>${country}</h2>
  //     <h2>${name}</h2>
  //     <p>${text}</p>
  //     <p>${temp_c}</p>
  //   </li>`
  //   )
  //   .join('');

    return arr.reduce(
      (acc, { country, name, temp_c, icon, text }) =>
        acc +
        `<li>
  <img src="${icon}" alt="${text}" />
  <h2>${country}</h2>
  <h2>${name}</h2>
  <p>${text}</p>
  <p>${temp_c}</p>
  </li>`,'');
}
