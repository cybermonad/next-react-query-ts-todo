"use client"

import { useState } from "react"

import API_BASE_URL from "@/constants/API_BASE_URL"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function CreateTodos() {
  const { toast } = useToast()
  const [input, setInput] = useState("")
  const queryClient = useQueryClient()

  const { mutate: submitTodo } = useMutation({
    mutationFn: async () => {
      const id = new Date().toISOString()
      const todoData = {
        title: input,
        id: id,
        completed: false
      }
      await axios.post(`${API_BASE_URL}/todos`, todoData)
    },
    onSuccess: () => {
      setInput("")
      queryClient.invalidateQueries({ queryKey: ["todos"] })
      toast({
        title: "Успех",
        description: "Туду добавлено успешно"
      })
    },
    onError: () =>
      toast({
        title: "Что-то пошло не так",
        description: "Попробуйте ещё раз"
      })
  })

  const handleAddTodo = () => {
    if (input.trim() === "") {
      toast({
        title: "Ошибка",
        description: "Заголовок не может быть пустым",
        variant: "destructive"
      })
    } else {
      submitTodo()
    }
  }

  return (
    <>
      <div className="mb-6 flex gap-2">
        <Input
          placeholder="Описание"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={() => handleAddTodo()} variant="secondary">
          добавить туду
        </Button>
      </div>
    </>
  )
}
