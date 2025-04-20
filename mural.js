
fetch("perfis.json")
  .then(res => res.json())
  .then(perfis => {
    const mural = document.getElementById("mural");
    Object.values(perfis).forEach(perfil => {
      const card = document.createElement("div");
      card.className = "bg-gray-800 p-4 rounded-xl shadow-md text-center";
      card.innerHTML = `
        <img src="${perfil.avatar}" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
        <h2 class="text-xl font-bold">${perfil.nome}</h2>
        <p class="mb-4">${perfil.bio}</p>
        <div class="space-y-2">
          ${perfil.links.map(link => `<a href="${link}" target="_blank" class="block bg-blue-600 hover:bg-blue-700 p-2 rounded">${link}</a>`).join('')}
        </div>
      `;
      mural.appendChild(card);
    });
  });
