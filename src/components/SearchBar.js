import React, {useState} from 'react';
function SearchBar({handleChange, searchTerm, handleSubmit, children, id}) {
//   const [searchTerm, setSearchTerm] = useState('');
//   function handleChange(event) {
//     setSearchTerm(event.target.value);
//  }
  return (
    <section className='search-bar-container'>
      <form onSubmit= {handleSubmit}>
        <label htmlFor={id}>
          {children}
          <br />
          <input 
          type='text' 
          placeholder='Search City' 
          id={id} 
          name='search-city' className='search-city' 
          onChange={handleChange}
          value={searchTerm}
          />
        </label>
        <button type='submit' className='submit-search-city'>
          Search
        </button>
      </form>
    </section>
  )
}
export default SearchBar;