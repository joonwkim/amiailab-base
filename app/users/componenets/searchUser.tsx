'use client'
import React, { useState } from 'react'
import SearchBar from '../../../components/controls/searchBar'
import { useRouter } from 'next/navigation'

const SearchUser = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/users/${search}/`)
  }

  const onValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearch(e.target.value)
    // router.push(`/wiki/${search}/`)

    if (search.length > 3) {
      router.push(`/users/${search}/`)
    }
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/users/${search}/`)
    }
  }
  const onCancelBtnClicked = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
     e.preventDefault()
     setSearch('')
  }

  return (
    <SearchBar value={search}
    onKeyDown={onKeyDown}
    handleChange={onValueChanged}
    handleCancelBtnClick={onCancelBtnClicked}
    placeholder="Search user by name..." />
  )
}

export default SearchUser