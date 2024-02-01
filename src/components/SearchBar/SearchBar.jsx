import css from './SearchBar.module.css';
import { getImages } from '../../js/api.js';

export const SearchBar = ({ onSearch }) => {
  function handleSubmit(event) {
    event.preventDefault();
    onSearch(event.target.elements.searchQuery.value);
    event.target.reset();
  }

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          placeholder="Photo search"
          className={css.input}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
