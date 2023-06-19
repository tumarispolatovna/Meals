import React, { useState } from 'react'


        const Search = ({setSearch}) => {
            return (
                <label className='search shadow-md rounded-md bg-white p-4  '>
                <i class='bx bx-search'></i>
                <input  className='p-2'
                onChange={e => setSearch(e.target.value)}
                type='text' placeholder='Type For Search By Category...'/> 
            </label>
            )
            }

export default Search