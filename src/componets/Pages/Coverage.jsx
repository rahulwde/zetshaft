import React from 'react';
import BangladeshMap from './BangladeshMap';
import { useLoaderData } from 'react-router';

const Coverage = () => {
  const serviceCenter = useLoaderData()
  console.log(serviceCenter)
  return (
    <div>
      <BangladeshMap serviceCenter={serviceCenter}></BangladeshMap>
    </div>
  );
};

export default Coverage;