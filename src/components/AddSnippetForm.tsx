import { useState } from "react"
import { createSnippet } from "../services/snippetService"

function AddSnippetForm() {

  const [title, setTitle] = useState("")
  const [code, setCode] = useState("")
  const [language, setLanguage] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

   const newSnippet = {
    title,
    code,
    language,
    description
   }
   await createSnippet(newSnippet)
   console.log("Snippet created successfully")
    }
  

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-500 p-4 rounded space-y-3"
    >

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 rounded"
      />

      <textarea
        placeholder="Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full p-2 rounded"
      />

      <input
        type="text"
        placeholder="Language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="w-full p-2 rounded"
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 rounded"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Snippet
      </button>

    </form>
  )
}

export default AddSnippetForm