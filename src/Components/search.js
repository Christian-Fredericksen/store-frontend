import React from 'react'

const SearchBar = (props) => {

    const {
        handleChange,
    } = props
        
    return(
        <div>
            <input onChange={handleChange} type="text" placeholder="Search..." name="searched" value={props.searched}/>
        </div>
    )
}
export default SearchBar;