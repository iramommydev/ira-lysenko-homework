/* eslint-disable react/prop-types */
// * Base
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
// * Styles
import styles from './List.module.css';
// * Components
import Button from '../Button/Button';

const List = () => {
  const [state, setState] = useState({ list: [], error: '', loading: true });

  const getList = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => {
        console.log(data);
        setState((prevState) => ({
          ...prevState,
          list: data,
          loading: false,
          error: '',
        }));
      })
      .catch(() => {
        setState((prevState) => ({
          ...prevState,
          error: 'data loading error',
          loading: false,
        }));
      });
  }, []);

  useEffect(() => getList(), [getList]);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return (
      <div>
        <p>{state.error}</p>;
        <Button text='Retry' onClick={getList} />
      </div>
    );
  }

  if (!state.list.length) {
    return <div>This list is empty</div>;
  }

  return (
    <details>
      <ul className={styles.list}>
        {state.list.map(({ body, title, id }) => (
          <Item title={title} body={body} key={`list item ${id}`} />
        ))}
      </ul>
    </details>
  );
};

const Item = ({ title, body }) => {
  return (
    <li className={styles.item}>
      <h4>{title}</h4>
      <p>{body}</p>
    </li>
  );
};

export default List;
