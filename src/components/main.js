import React from 'react';

export const Main = () => {
  return (
    <div className='container'>
      <input
        className='btn btn-primary'
        type='submit'
        value='Alert'
        onClick={() => {
          alert('Alert button onClick');
        }}
      />
    </div>
  );
};
