'use server'

import { createTodo, updateTodo } from "@/services/todoService"
import { revalidatePath } from "next/cache"

export async function createTodoAction(title:string) {
    await createTodo(title)
    revalidatePath('/')
}
export async function updateTodoAction(id: string, isCompleted:boolean) {
    await updateTodo(id,isCompleted)
    revalidatePath('/')
}