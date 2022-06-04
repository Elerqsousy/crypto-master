import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import searchIcon from '../../assets/searchIcon.png';
import ClicableElement from '../Clicable';
import styles from './navigation.module.css';

const SearchBar = () => {
  const Data = [];
  const [isSearch, ToggleSearch] = useState(false);
  const [query, setQuery] = useState('');

  const handleClick = async (e) => {
    await ToggleSearch(!isSearch);
    if (!isSearch) {
      e.target.parentElement.nextElementSibling.click();
    }
  };

  return (
    <div className={styles.SearchBarContainer}>
      {isSearch && (
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Type cryptocurrency name or symbol..."
          onChange={(event) => setQuery(event.target.value)}
          onClick={(e) => e.target.focus()}
          onBlur={() => {
            handleClick();
            setQuery('');
          }}
          value={query}
        />
      )}
      <ClicableElement
        child={(
          <img
            className={styles.searchIcon}
            src={searchIcon}
            alt="search icon"
          />
        )}
        click={(e) => handleClick(e)}
      />

      {isSearch
        && !!query.length
        && Data.filter(
          (item) => item.id?.toLowerCase().includes(query.toLowerCase())
            || item.name?.toLowerCase().includes(query.toLowerCase())
            || item.symbol?.toLowerCase().includes(query.toLowerCase()),
        ).map((item, id = uuid()) => (
          <ul key={id}>
            <ClicableElement
              child={<li>{item.name}</li>}
              click={() => {}}
            />
          </ul>
        ))}
    </div>
  );
};

export default SearchBar;
