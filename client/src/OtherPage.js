import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      You're here. And you ain't never gettin' out.
      <Link to="/">Go back!</Link>
    </div>
  );
}