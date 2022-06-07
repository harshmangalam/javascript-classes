const usersContainer = document.getElementById("usersContainer");

console.log(usersContainer);

async function fetchGithubData() {
  const userEndpoint = "https://api.github.com/users";
  const response = await fetch(userEndpoint);

  const users = await response.json();

  users.forEach((user) => {
    usersContainer.innerHTML += `
    
    <div class="user">
        <h2>Login :- ${user.login}</h2>
        <h4>ID :- ${user.id}</h4>
        <img src="${user.avatar_url}" />

    </div>

    
    
    
    `;
  });
}

fetchGithubData();
