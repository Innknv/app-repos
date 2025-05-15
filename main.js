fetch('https://api.github.com/users/mojombo/repos')
  .then(response => response.json())
  .then(repos => {
    const container = document.getElementById('repo-list');
    repos.forEach(repo => {
      const div = document.createElement('div');
      div.className = 'repo';

      div.innerHTML = `
        <h3>${repo.name}</h3>
        <p>Автор: ${repo.owner.login}</p>
      `;

      div.addEventListener('click', () => {
        window.open(repo.html_url, '_blank');
      });

      container.appendChild(div);
    });
  })
  .catch(error => console.error('Помилка:', error));
