
import React from 'react';
import './styles.css';

const Search = (props) => {
  const value = props.value;
  const handleChange = props.handleChange;
  const clearBtn = props.clearBtn;

  return (
    <div className="search-background relative">
      <div className="searchbar-wrap h-[60px]">
        {value ? (
          <button className="clear-btn w-12 h-12" onClick={clearBtn}>
            &times;
          </button>
        ) : (
          <img className="searchbar" src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="" />
        )}
        <input
          className="search"
          type="text"
          placeholder="Search your favourite restaurant !!"
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
