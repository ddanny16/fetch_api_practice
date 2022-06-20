let h1 = document.querySelectorAll("h1");
let p = document.querySelectorAll("p");

let hOnes = Array.from(h1);

let url = "https://reqres.in/api/users";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    let datas = result.data;
    datas.map((data) => {
        console.log(data.email);
      console.log(data.first_name);
      console.log(data.last_name);
      console.log(data.avatar);
      demo.innerHTML += `<h1>E-mail: ${data.email}</h1>`;
      demo.innerHTML += `<p>First Name: ${data.first_name}</p>`;
      demo.innerHTML += `<p>Last Name: ${data.last_name}</p>`;
      demo.innerHTML += `<img src="${data.avatar}" alt="image avatar">`;
    //   img.style.borderRadius="50%"
    });
  });
