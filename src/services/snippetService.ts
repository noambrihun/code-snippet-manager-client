export const getSnippets = async () => {

  const response = await fetch("http://localhost:3000/api/snippets")

  const data = await response.json()

  return data
}

export const createSnippet = async (snippet: any) => {

  const response = await fetch("http://localhost:3000/api/snippets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(snippet)
  })

  const data = await response.json()

  return data
}