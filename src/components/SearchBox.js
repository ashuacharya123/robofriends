import React from 'react';


function SearchBox({searchfield,SearchChange}){
    return(
        <div className='pa2'>
            <input onChange={SearchChange} className='pa3 ba b--green bg-lightest-blue ' type='search' placeholder='search robots'></input>
            
        </div>
    )
}



export default SearchBox;