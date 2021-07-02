import React from 'react';
import CreekCard from '../../components/CreekCard/CreekCard';

import './Creek.scss';

const Creeks = ({ creeks }) => {
  return (
    <div className='list'>
      <div className='list__content'>
        <h4>Creek List</h4>
      </div>
      <div>
        <div className='container'>
          <div className='row'>
            {creeks.map((creek) => {
              return <CreekCard key={JSON.stringify(creek)} creek={creek} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creeks;
