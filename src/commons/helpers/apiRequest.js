async function apiRequest(body, method, route) {
  const res = await fetch(`http://api.crowdstar.xyz/${route}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  return res.json()
}

export default apiRequest
