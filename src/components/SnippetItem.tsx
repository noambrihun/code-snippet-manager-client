interface SnippetItemProps {
    title: string
    code: string
    id: string
    onDelete: (id: string) => void
}

function SnippetItem({ title, code, id, onDelete }: SnippetItemProps) {
  return (
    <div className="bg-slate-500 p-4 rounded">
  
        <h3 className="text-lg font-bold text-white">
          {title}
        </h3>
  
        <div className="bg-black text-green-400 p-2 mt-2 rounded">
          {code}
        </div>
        <button onClick={() => onDelete(id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
  
      </div>
    )
  }
  
  export default SnippetItem