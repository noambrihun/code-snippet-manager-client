function SnippetItem() {
    return (
      <div className="bg-slate-500 p-4 rounded">
  
        <h3 className="text-lg font-bold text-white">
          Example Title
        </h3>
  
        <pre className="bg-black text-green-400 p-2 mt-2 rounded">
          console.log("Hello world")
        </pre>
  
      </div>
    )
  }
  
  export default SnippetItem