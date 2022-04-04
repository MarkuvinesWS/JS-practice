// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
//
// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }
async function loadJson(url) {
    let resp = await fetch(url);
    if (resp.status == 200) {
        let json = await resp.json();
        return json;
    } else {
        throw new Error(resp.status);
    }
}
// loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404


// Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.
//
// В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.
//
    class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
//
// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new HttpError(response);
//             }
//         })
// }
//
// // Запрашивать логин, пока github не вернёт существующего пользователя.
// function demoGithubUser() {
//     let name = prompt("Введите логин?", "iliakan");
//
//     return loadJson(`https://api.github.com/users/${name}`)
//         .then(user => {
//             alert(`Полное имя: ${user.name}.`);
//             return user;
//         })
//         .catch(err => {
//             if (err instanceof HttpError && err.response.status == 404) {
//                 alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//                 return demoGithubUser();
//             } else {
//                 throw err;
//             }
//         });
// }


async function demoGithubUser() {

      // let name = prompt("Введите логин?", "iliakan");
      // let user = await loadJson(`https://api.github.com/users/${name}`)
      // alert(`Полное имя: ${user.name}.`);
      // return user;
   let user;
   let error;
      do  {
          try {
              let name = prompt("Введите логин?", "iliakan");
              user = await loadJson(`https://api.github.com/users/${name}`)
              if (user.name ===null) {throw new HttpError()}
              alert(`Полное имя: ${user.name}.`);
              return user;
          } catch (err) {
              alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
              error = err;
          }
      } while (true)

}
demoGithubUser();




// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
//
    async function wait() {
        await new Promise(resolve => setTimeout(resolve, 1000));

        return 10;
    }
//
    function f() {
    return wait().then(data => console.log(data))
        // ...что здесь написать?
        // чтобы вызвать wait() и дождаться результата "10" от async–функции
        // не забывайте, здесь нельзя использовать "await"
    }
// P.S. Технически задача очень простая, но этот вопрос часто задают разработчики, недавно познакомившиеся с async/await.