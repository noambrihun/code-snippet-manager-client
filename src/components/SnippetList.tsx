import SnippetItem from "./SnippetItem"
import { deleteSnippet } from "../services/snippetService"
type SnippetListProps = {
  snippets: any[]
  setSnippets: React.Dispatch<React.SetStateAction<any[]>>
}

function SnippetList({ snippets, setSnippets }: SnippetListProps) {
  const handleDelete = async (id: string) => {

    await deleteSnippet(id)
  
    setSnippets(prev =>
      prev.filter(snippet => snippet._id !== id)
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
          title={snippet.title}
          code={snippet.code}
          id={snippet._id}
          onDelete={() => handleDelete(snippet._id)}
        />
      ))}

      </div>
  )
}

export default SnippetList