import SnippetList from "../components/SnippetList"
import AddSnippetForm from "../components/AddSnippetForm"
function HomePage() {
    return (
      <div className="min-h-screen bg-slate-600 p-10">
  
        <h1 className="text-3xl text-white font-bold mb-6">
          Code Snippet Manager
        </h1>
        <AddSnippetForm />
        <SnippetList />
      </div>
    )
  }
  
  export default HomePage