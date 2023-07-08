'use client'

import React, { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import SearchBar from "../../../components/controls/searchBar"

export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/wiki/${search}/`)
    }

    const onValueChanged = (e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setSearch(e.target.value)
        // router.push(`/wiki/${search}/`)
       
        if(search.length > 3){
            router.push(`/wiki/${search}/`)
        }
    }
    const onCancelBtnClicked = (e:React.MouseEvent<HTMLSpanElement, MouseEvent>) =>{
        e.preventDefault()
        setSearch('')
    }
    const onKeyDown =(e:React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key ==='Enter'){
            router.push(`/wiki/${search}/`)
        }
    }

    return (
        <>
        <h4>To search  type the words and press enter key</h4>
            <SearchBar value={search}
            onKeyDown={onKeyDown}
            handleChange={onValueChanged} 
            handleCancelBtnClick={onCancelBtnClicked}
            placeholder="Search wiki..."/>
            {/* <form className="w-50 flex justify-center md:justify-between" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-white p-2 w-80 text-xl rounded-xl"
                    placeholder="Search"
                />
                <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
                    🚀
                </button>
            </form> */}
        </>

    )
}