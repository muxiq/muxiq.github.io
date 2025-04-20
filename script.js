
document.getElementById('profileForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const avatar = document.getElementById('avatar').value.trim();
  const bio = document.getElementById('bio').value.trim();
  const theme = document.getElementById('theme').value.trim();
  const links = document.getElementById('links').value.trim().split(',');

  const data = {
    username,
    avatar,
    bio,
    theme,
    links
  };

  const profilePage = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Perfil de ${username}</title>
      <link href='https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css' rel='stylesheet'>
    </head>
    <body class='${theme === 'claro' ? 'bg-white text-black' : 'bg-gray-900 text-white'} font-sans'>
      <div class='max-w-xl mx-auto p-4 text-center'>
        <img src='${avatar}' alt='${username}' class='w-32 h-32 rounded-full mx-auto mb-4 object-cover'>
        <h1 class='text-3xl font-bold'>${username}</h1>
        <p class='mb-4'>${bio}</p>
        <div class='space-y-2'>
          ${links.map(link => `<a href='${link.trim()}' class='block bg-blue-600 hover:bg-blue-700 p-2 rounded'>${link.trim()}</a>`).join('')}
        </div>
      </div>
    </body>
    </html>
  `;

  const blob = new Blob([profilePage], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${username}.html`;
  a.click();
});
