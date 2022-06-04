import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import searchIcon from '../../assets/searchIcon.png';
import ClicableElement from '../Clicable/Clicable';

const SearchBar = () => {
  const Data = [];
  const [isSearch, ToggleSearch] = useState(false);
  const [query, setQuery] = useState('');

  const handleClick = async (e) => {
    await ToggleSearch(!isSearch);
    if (!isSearch) { e.target.parentElement.nextElementSibling.click(); }
  };

  const onSearchClick = (id) => {
    console.log(id);
  };

  return (
    <div>
      <ClicableElement
        child={<img src={searchIcon} alt="search icon" style={{ width: 20, height: 22, background: 'black' }} />}
        click={(e) => handleClick(e)}
      />

      {isSearch && (
        <input
          type="text"
          placeholder="Type cryptocurrency name or symbol..."
          onChange={(event) => setQuery(event.target.value)}
          onClick={(e) => e.target.focus()}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              console.log('enter press here! ');
            }
          }}
          onBlur={() => {
            handleClick();
            setQuery('');
          }}
          value={query}
        />
      )}

      {isSearch
        && !!query.length
        && Data.filter((item) => item.id?.toLowerCase().includes(query.toLowerCase())
        || item.name?.toLowerCase().includes(query.toLowerCase())
        || item.symbol?.toLowerCase().includes(query.toLowerCase())).map((item, id = uuid()) => (
          <ul key={id}>
            <ClicableElement
              child={<li>{item.name}</li>}
              click={() => onSearchClick(item.id)}
            />
          </ul>
        ))}
    </div>
  );
};

export default SearchBar;
