import CreateTodos from "@/components/create-todos"
import Todos from "@/components/todos"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black py-8 text-white">
      <div className="container">
        <h1 className="mb-8 text-center text-6xl font-bold">
          туду лист на nextjs, react query, typescript
        </h1>
        <h2 className="mb-4 text-2xl font-semibold">создать туду</h2>
        <CreateTodos />
        <h2 className="mb-4 text-2xl font-semibold">список туду</h2>
        <Todos />
      </div>
    </main>
  )
}
