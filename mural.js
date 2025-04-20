
let perfis = [];
let indexAtual = 0;

fetch("perfis.json")
  .then(res => res.json())
  .then(data => {
    perfis = Object.values(data);
    mostrarPerfil(indexAtual);
  });

function mostrarPerfil(index) {
  const perfil = perfis[index];
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = `
    <div class="bg-gray-800 p-6 rounded-2xl shadow-lg">
      <img src="${perfil.avatar}" class="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
      <h2 class="text-2xl font-bold">${perfil.nome}</h2>
      <p class="mb-4">${perfil.bio}</p>
      <div class="flex justify-center space-x-4 text-xl">
        ${perfil.links.map(link => {
          let icon = "";
          if (link.includes("github.com")) icon = "fab fa-github";if (link.includes("twitter.com")) icon = "fab fa-twitter";if (link.includes("instagram.com")) icon = "fab fa-instagram";if (link.includes("linkedin.com")) icon = "fab fa-linkedin";if (link.includes("discord.com")) icon = "fab fa-discord";
          return icon ? `<a href="${link}" target="_blank"><i class="${icon}"></i></a>` : "";
        }).join('')}
      </div>
    </div>
  `;
}

function next() {
  indexAtual = (indexAtual + 1) % perfis.length;
  mostrarPerfil(indexAtual);
}

function prev() {
  indexAtual = (indexAtual - 1 + perfis.length) % perfis.length;
  mostrarPerfil(indexAtual);
}
