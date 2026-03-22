interface SnippetItemProps {
    title: string
    code: string
}

function SnippetItem({ title, code }: SnippetItemProps) {
  return (
    <div className="bg-slate-500 p-4 rounded">
  
        <h3 className="text-lg font-bold text-white">
          {title}
        </h3>
  
        <div className="bg-black text-green-400 p-2 mt-2 rounded">
          {code}
        </div>
  
      </div>
    )
  }
  
  export default SnippetItem