import React, { Suspense } from 'react';
import Banner from './Banner';
import TopPlant from './TopPlant';
import PlantLoader from '../../Components/Loader/PlantLoader';
import ExpertSec from './ExpertSec';
import PlantCare from './PlantCare';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<PlantLoader />}>
        <TopPlant></TopPlant>
      </Suspense>
      <Suspense fallback={<PlantLoader />}>
        <ExpertSec></ExpertSec>
      </Suspense>
      <PlantCare></PlantCare>
    </div>
  );
};

export default Home;
