import Link from 'next/link'
import React from 'react'
import Search from './components/wikiSearch'

const Wiki = () => {
    return (
        <>
            <h1>
                <Link href="/">Wikipedia!</Link>
            </h1>
            <Search />
        </>

    )
}

export default Wiki