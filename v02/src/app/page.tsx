'use client'
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PieGraph } from '@/components/Charts/pie-graph';
import { BarGraph } from '@/components/Charts/bar-graph';
import { AreaGraph } from '@/components/Charts/area-graph';
import ProgressGraph from '@/components/Charts/progress-graph';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Home = () => {

  return (
    <div className='flex flex-col justify-between object-fill  overflow-scroll'>
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
        <div className='flex flex-col w-full justify-center items-center rounded-md p-5 gap-5'>
          <div className='text-2xl font-bold'>Welcome to Civic Trust</div>
          <div>Your Transparency Partner in Government Projects and Fiscal Planning.</div>
          <Link href={`/admin`}><Button>Get Started</Button></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-purple-300">
          <Card>
            <CardHeader>New Projects</CardHeader>
            <CardContent>A list of newly started or about to start projects.</CardContent>
          </Card>
          <Card>
            <CardHeader>New Projects</CardHeader>
            <CardContent>A list of newly started or about to start projects.</CardContent>
          </Card>
          <Card>
            <CardHeader>New Projects</CardHeader>
            <CardContent>A list of newly started or about to start projects.</CardContent>
          </Card>
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
