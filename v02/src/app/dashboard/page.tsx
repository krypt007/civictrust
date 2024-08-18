'use client'
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PieGraph } from '@/components/Charts/pie-graph';
import { BarGraph } from '@/components/Charts/bar-graph';
import { AreaGraph } from '@/components/Charts/area-graph';
import ProgressGraph from '@/components/Charts/progress-graph';

const Home = () => {

  return (
    <div className='flex flex-col h-screen justify-between object-fill'>
      <div className='flex flex-col h-full'>
      <div className='flex w-full object-fill justify-center items-center'>
        <Image 
        src={`/home_header.png`}
        alt='Nairobi skyline'
        width={2000}
        height={1000}
        />
      </div>
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-purple-300 overflow-scroll">
        <AreaGraph />
        <PieGraph />
        <BarGraph />
        <ProgressGraph />
        </div>
        
      </div>

      <Footer />


    </div>
  );
};

export default Home;
