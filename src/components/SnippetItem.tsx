interface SnippetItemProps {
  snippet: any
  onDelete: (id: string) => void
  onEdit: (snippet: any) => void
}
function SnippetItem({ snippet, onDelete, onEdit }: SnippetItemProps) {
  const { title, code, _id } = snippet
  return (
    <div className="bg-slate-500 p-4 rounded">
      <h3 className="text-lg font-bold text-white">{title}</h3>

      <div className="bg-black text-green-400 p-2 mt-2 rounded">
        {code}
      </div>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onEdit(snippet)}
          className="bg-yellow-500 px-3 py-1 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(_id)}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
  
  export default SnippetItem