import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ setPage, page }) => {
  return (
    <button className={css.btn} type="submit" onClick={() => setPage(page + 1)}>
      Load More
    </button>
  );
};
