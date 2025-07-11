import React from 'react'
import { Input } from './ui/input'
import { SearchIcon } from 'lucide-react'

const Search = () => {
    return (
        <form>
            <div className='w-full bg-white border border-gray-500 rounded-2xl shadow-md text-lg px-3 flex items-center gap-3'>
                <div className='py-4'>
                    <SearchIcon className='text-gray-400' size={25} />
                </div>
                <Input className='py-4 focus-within:border-0 focus-within:ring-0 focus:ring-0 focus:border-0 focus-outline-0 focus-within:outline-0' />
            </div>
        </form>
    )
}

export default Search