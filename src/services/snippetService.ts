export const getSnippets = async () => {

  const response = await fetch("http://localhost:3000/api/snippets")

  const data = await response.json()

  return data
}