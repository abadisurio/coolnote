import React, { useEffect, useState } from 'react'
import { getInitialData } from '../utils'
import { SearchIcon } from '@heroicons/react/solid'
import NoteCard from './NoteCard'

const initialData = [{
    id: 0,
    title: "",
    body: "",
    archived: false,
    createdAt: ""
}]
const initialNewNote = {
    id: 0,
    title: "Start to write here",
    body: "Something great",
    archived: false,
    createdAt: ""
}

const CardGrid = () => {

    const [data, setData] = useState(initialData)
    const [searchKey, setSearchKey] = useState("")
    const [newNote, setNewNote] = useState(initialNewNote)
    const [searchedNote, setSearchedNote] = useState([])

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchedData = getInitialData()
        setData(fetchedData)
        setLoading(false)
    }, [])

    const handleSearch = (e) => {
        // console.log('e', e)
        const newSearchKey = e.target.value
        setSearchKey(newSearchKey)
        setSearchedNote(
            data.filter(item => item.title.toLowerCase().includes(newSearchKey.toLowerCase()))
        )
        console.log('data', data)
    }

    const handleChange = (e) => {
        setNewNote(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const saveNote = () => {
        setData(prevState => {
            return [
                ...prevState,
                { ...newNote, id: Date.now() }
            ]
        })
        setNewNote(initialNewNote)
        alert('Catatan baru berhasil disimpan')
    }

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))

    }

    const isSaveDisabled = newNote.body.length > 50

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {isLoading && <h1>Loading</h1>}
            <div className='flex flex-col'>
                <div className='rounded-xl border border-white m-2 p-3 hover:bg-slate-700 transition duration-150 flex flex-row content-center'>
                    <SearchIcon className="h-5 w-5 self-center mr-3" />
                    <input className='flex bg-transparent w-full text-xl text-sm' name='search' value={searchKey} onChange={handleSearch} onFocus={(e) => e.target.select()} placeholder="Search" />
                </div>
                <div className='rounded-xl border border-white m-2 p-3 hover:bg-slate-700 transition duration-150 flex-1 flex flex-col'>
                    <input className='bg-transparent w-full text-xl mb-3' name='title' value={newNote.title} onChange={handleChange} />
                    <textarea className='bg-transparent w-full flex-1 mb-3' name='body' value={newNote.body} onChange={handleChange} rows={3} />
                    <div className="flex justify-between items-center">
                        <span>{newNote.body.length}/50</span>
                        <button className={`bg-green-500/${isSaveDisabled ? 0 : 80} px-2 py-1 rounded-lg`} disabled={isSaveDisabled} onClick={saveNote}>{isSaveDisabled ? 'Kurangi karakter' : 'Save'}</button>
                    </div>

                </div>
            </div>
            {data.length === 0 && (
                <div className='rounded-xl border border-white m-2 p-3 flex h-64'>

                    <h1 className='w-full self-center text-center'>Tidak ada data</h1>
                </div>
            )}
            {(searchKey === "" ? data : searchedNote).map(item => {
                return <NoteCard item={item} action={{ handleDelete }} />
            })}
        </div>
    )
}

export default CardGrid