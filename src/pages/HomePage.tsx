import { useState } from "react"
import AddSnippetForm from "../components/AddSnippetForm"
import SnippetList from "../components/SnippetList"

function HomePage() {
  const [snippets, setSnippets] = useState<any[]>([])
  const [editingSnippet, setEditingSnippet] = useState<any | null>(null)

  return (
    <div className="min-h-screen bg-slate-600 p-10">
      <h1 className="text-3xl text-white font-bold mb-6">
        Code Snippet Manager
      </h1>

      <AddSnippetForm
        setSnippets={setSnippets}
        editingSnippet={editingSnippet}
        setEditingSnippet={setEditingSnippet}
      />

      <SnippetList
        snippets={snippets}
        setSnippets={setSnippets}
        onEdit={setEditingSnippet}
      />
    </div>
  )
}

export default HomePage