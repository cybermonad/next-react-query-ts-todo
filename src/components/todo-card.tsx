"use client"

import API_BASE_URL from "@/constants/API_BASE_URL"
import type TodoProps from "@/constants/TodoProps"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

import { Button } from "./ui/button"
import { useToast } from "./ui/use-toast"

const TodoCard = ({ title, id, completed }: TodoProps) => {
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const { mutate: deleteTodo } = useMutation({
    mutationFn: async () => await axios.delete(`${API_BASE_URL}/todos/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] }),
        toast({
          title: "туду успешно удалено",
          description: "успех"
        })
    },
    onError: () =>
      toast({
        title: "Что-то пошло не так",
        description: "Попробуйте еще раз"
      })
  })

  const { mutate: patchTodo } = useMutation({
    mutationFn: async () => {
      await axios.patch(`${API_BASE_URL}/todos/${id}`, { completed: true })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] })
      toast({
        title: "помечено как выполнено",
        description: "успех"
      })
    },
    onError: () => console.log("fail")
  })
  return (
    <li key={id}>
      <article className="rounded-lg border-[1px] border-white p-4">
        <h3 className={`mb-4 text-lg ${completed ? "line-through" : ""}`}>
          {title}
        </h3>
        <div className="flex justify-between">
          <Button variant="secondary" onClick={() => patchTodo()}>
            закончить
          </Button>
          <Button variant="secondary" onClick={() => deleteTodo()}>
            удалить
          </Button>
        </div>
      </article>
    </li>
  )
}

export default TodoCard
