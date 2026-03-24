import { useEffect, useState } from "react"
import SnippetItem from "./SnippetItem"
import { getSnippets, deleteSnippet } from "../services/snippetService"

type SnippetListProps = {
  snippets: any[]
  setSnippets: React.Dispatch<React.SetStateAction<any[]>>
  onEdit: (id: string) => void
}

function SnippetList({ snippets, setSnippets, onEdit }: SnippetListProps) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const data = await getSnippets()
        setSnippets(data.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchSnippets()
  }, [])
  const handleDelete = async (id: string) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this snippet?"
    )
  
    if (!confirmDelete) {
      return
    }else{
      await deleteSnippet(id)
      setSnippets(prev =>
        prev.filter(snippet => snippet._id !== id)
      )
    }
  }

  // מצב טעינה
  if (loading) {
    return (
      <div className="text-white text-lg">
        Loading snippets...
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl text-white font-bold">
        Snippets
      </h2>

      {snippets.map((snippet) => (
        <SnippetItem
          key={snippet._id}
          snippet={snippet}
          onDelete={handleDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default SnippetList