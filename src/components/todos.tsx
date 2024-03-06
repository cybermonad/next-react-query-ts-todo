"use client"

import API_BASE_URL from "@/constants/API_BASE_URL"
import type TodoProps from "@/constants/TodoProps"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import TodoCard from "./todo-card"

export default function Todos() {
  const { data, isLoading, isError } = useQuery<any>({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await axios.get(`${API_BASE_URL}/todos`)
      return data as TodoProps[]
    }
  })

  if (isLoading) return <div className="text-2xl">загрузка...</div>
  if (isError) return <div className="text-2xl">что-то пошло не так...</div>
  if (data.length === 0) return <div className="text-2xl">нет задач</div>

  return (
    <ul className="flex flex-col-reverse gap-4">
      {data.map((todo: TodoProps) => (
        <TodoCard key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
