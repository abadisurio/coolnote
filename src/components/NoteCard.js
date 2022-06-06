import React from 'react'
import { TrashIcon } from '@heroicons/react/solid'

const NoteCard = ({ item, action }) => {
    console.log('item', item)
    return (
        <div key={item.id} className='rounded-xl border border-white m-2 p-3 hover:bg-slate-700 transition duration-150 h-64 flex flex-col'>
            <h1 className='text-xl mb-3'>{item.title}</h1>
            <div className="flex-1">
                <p className='line-clamp-3 text-sm'>
                    {item.body}
                </p>
            </div>
            <div className='flex'>
                <button className={`p-1 pr-0 bg-red-900 radius rounded-lg  overflow-hidden w-10 focus:w-32 transition duration-1000`} >
                    <div className='w-28 flex'>
                        <TrashIcon className='h-5 w-7 mx-2 self-center ' />
                        <span className={`w-full bg-slate-900 ml-1 p-1 px-3 radius rounded-lg text-slate-200`} onClick={() => action.handleDelete(item.id)}>Hapus</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default NoteCard