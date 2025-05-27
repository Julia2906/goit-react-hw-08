import css from './SearchBox.module.css';

import { useDispatch } from 'react-redux';
import { contactFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const filterAction = contactFilter(e.target.value);
    dispatch(filterAction);
  };

  return (
    <div>
      <h2 className={css.title}>Find contacts by name</h2>
      <input
        className={css.input}
        type="text"
        name="username"
        onChange={handleSubmit}
      />
    </div>
  );
};

export default SearchBox;
