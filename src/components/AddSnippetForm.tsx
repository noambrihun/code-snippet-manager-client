import { useState } from "react"
import { createSnippet } from "../services/snippetService"

type AddSnippetFormProps = {
  setSnippets: React.Dispatch<React.SetStateAction<any[]>>
//React.Dispatch<React.SetStateAction<any[]>>-פונקציה שמקבלת פרמטר ומפעילה פעולה עליו
}

function AddSnippetForm({ setSnippets }: AddSnippetFormProps) {

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
  
    const response = await createSnippet(newSnippet)
  
    setSnippets((prev) => [...prev, response.data])
  
    setTitle("")
    setCode("")
    setLanguage("")
    setDescription("")
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