import { useEffect, useState } from "react"
import SnippetItem from "./SnippetItem"
import { getSnippets } from "../services/snippetService"

function SnippetList() {

  const [snippets, setSnippets] = useState<any[]>([])

  useEffect(() => {

    const fetchSnippets = async () => {
      const data = await getSnippets()
      console.log(data)
      setSnippets(data.data)
    }

    fetchSnippets()

  }, [])

  return (
    <div className="space-y-4">

      <h2 className="text-xl text-white font-bold">
        Snippets
      </h2>

      {snippets.map((snippet) => (
        <SnippetItem key={snippet._id} />
      ))}

    </div>
  )
}

export default SnippetList