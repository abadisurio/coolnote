import React, { useEffect, useState } from 'react'
import { getInitialData } from '../utils'

const initialData = [{
    id: 0,
    title: "",
    body: "",
    archived: false,
    createdAt: ""
}]
const initialNewNote = {
    id: Date.now(),
    title: "Start to write here",
    body: "Something great",
    archived: false,
    createdAt: ""
}

const CardGrid = () => {

    const [data, setData] = useState(initialData)
    const [newNote, setNewNote] = useState(initialNewNote)

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchedData = getInitialData()
        setData(fetchedData)
        setLoading(false)
    }, [])

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
                newNote
            ]
        })
        setNewNote(initialNewNote)
        alert('Catatan baru berhasil disimpan')
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {isLoading && <h1>Loading</h1>}
            <div className='flex flex-col'>
                <div className='rounded-xl border border-white m-2 p-3 hover:bg-slate-700 transition duration-150 flex-1 flex flex-col'>
                    <input className='bg-transparent w-full text-xl' name='title' value={newNote.title} onChange={handleChange} />
                    <textarea className='bg-transparent w-full flex-1 mb-3' name='body' value={newNote.body} onChange={handleChange} rows={3} />
                    <button className='bg-green-500/80 px-2 py-1 rounded-lg ' onClick={saveNote}>Save</button>

                </div>
            </div>
            {data.map(item => {
                // console.log(item)
                return (
                    <div key={item.id} className='rounded-xl border border-white m-2 p-3 hover:bg-slate-700 transition duration-150'>
                        <h1 className='text-xl'>{item.title}</h1>
                        {item.body}
                    </div>
                )
            })}
        </div>
    )
}

export default CardGrid