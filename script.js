import { perfis } from './perfis.js';

const icons = {
  Instagram: "fa-brands fa-instagram",
  YouTube: "fa-brands fa-youtube",
  Discord: "fa-brands fa-discord",
  GitHub: "fa-brands fa-github",
  Site: "fa-solid fa-globe",
  WhatsApp: "fa-brands fa-whatsapp",
  Twitter: "fa-brands fa-x-twitter",
  TikTok: "fa-brands fa-tiktok"
};

const container = document.getElementById('profiles');
perfis.forEach(user => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = \`
    <img class="avatar" src="\${user.avatar}" alt="Avatar" />
    <h2>\${user.name}</h2>
    <p>\${user.bio}</p>
    <div class="links">
      \${user.links.map(link => {
        const icon = icons[link.name] || "fa-solid fa-link";
        return \`<a href="\${link.url}" target="_blank"><i class="\${icon}"></i></a>\`;
      }).join('')}
    </div>
  \`;
  container.appendChild(card);
});