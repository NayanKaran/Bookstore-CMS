import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../store/categories';

const Categories = () => {
  const response = useSelector((state) => state.entities.categories);

  const dispatch = useDispatch();

  return (
    <main id="categories">
      <p>{response}</p>
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check Status
      </button>
    </main>
  );
};

export default Categories;
