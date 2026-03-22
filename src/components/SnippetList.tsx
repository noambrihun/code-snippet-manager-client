import SnippetItem from "./SnippetItem"

function SnippetList() {
    return (
      <div className="space-y-4">
  
        <h2 className="text-xl text-white font-bold">
          Snippets
        </h2>
        <SnippetItem />
        <SnippetItem />
        <SnippetItem />
      </div>
    )
  }
  
  export default SnippetList