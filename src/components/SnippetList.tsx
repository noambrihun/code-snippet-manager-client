import { useEffect, useState } from "react"
import SnippetItem from "./SnippetItem"
import { getSnippets, deleteSnippet } from "../services/snippetService"

type SnippetListProps = {
  snippets: any[]
  setSnippets: React.Dispatch<React.SetStateAction<any[]>>
}

function SnippetList({ snippets, setSnippets }: SnippetListProps) {

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
    await deleteSnippet(id)
    setSnippets(prev =>
      prev.filter(snippet => snippet._id !== id)
    )
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
          id={snippet._id}
          title={snippet.title}
          code={snippet.code}
          onDelete={handleDelete}
        />
      ))}
    </div>
  )
}

export default SnippetList