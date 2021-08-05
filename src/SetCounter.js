import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { set } from './actions';

export const SetCounter = () => {
  const count = useSelector((state) => state.count);
  const [localCount, setLocalCount] = useState(count);
  const dispatch = useDispatch();

  useEffect(() => {
    setLocalCount(count);
  }, [count]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(localCount));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          value={localCount}
          onChange={(e) => setLocalCount(e.target.value)}
          type="number"
        />
        <input type="submit" />
      </form>
    </section>
  );
};
