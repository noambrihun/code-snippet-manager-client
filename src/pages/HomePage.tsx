import SnippetList from "../components/SnippetList"

function HomePage() {
    return (
      <div className="min-h-screen bg-slate-600 p-10">
  
        <h1 className="text-3xl text-white font-bold mb-6">
          Code Snippet Manager
        </h1>
        <SnippetList />
      </div>
    )
  }
  
  export default HomePage