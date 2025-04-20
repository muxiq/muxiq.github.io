
const username = window.location.pathname.split("/").pop().replace(".html", "");

fetch("perfis.json")
  .then(res => res.json())
  .then(perfis => {
    const perfil = perfis[username];
    if (!perfil) {
      document.getElementById("profile").innerHTML = "<h1 class='text-2xl font-bold'>Perfil não encontrado</h1>";
      return;
    }

    document.title = "Perfil de " + perfil.nome;

    document.body.className = perfil.tema === "claro" ? "bg-white text-black" : "bg-gray-900 text-white";

    document.getElementById("profile").innerHTML = `
      <img src="${perfil.avatar}" alt="${perfil.nome}" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
      <h1 class="text-3xl font-bold">${perfil.nome}</h1>
      <p class="mb-4">${perfil.bio}</p>
      <div class="space-y-2">
        ${perfil.links.map(link => `<a href="${link}" class="block bg-blue-600 hover:bg-blue-700 p-2 rounded">${link}</a>`).join('')}
      </div>
    `;
  });
