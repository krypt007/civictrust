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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-slate-200">
          {/** row 1 */}
          <Card>
            <CardHeader className='text-xl font-bold'>New Projects</CardHeader>
            <div className='flex w-full justify-center items-center'>
              <div className='flex w-16 h-16 object-contain'>
                <Image 
                src={`/icons/add.png`}
                alt='Nairobi skyline'
                width={2000}
                height={1000}
                />
              </div>
            </div>
            <CardContent>A list of newly started or about to start projects.</CardContent>
          </Card>
          <Card>
            <CardHeader className='text-xl font-bold'>Stalled Projects</CardHeader>
            <div className='flex w-full justify-center items-center'>
              <div className='flex w-16 h-16 object-contain'>
                <Image 
                src={`/icons/error.png`}
                alt='Nairobi skyline'
                width={2000}
                height={1000}
                />
              </div>
            </div>
            <CardContent>Stalled or unfinished projects, do you live in any relevant area, talk to us.</CardContent>
          </Card>
          <Card>
            <CardHeader className='text-xl font-bold'>Closed Projects</CardHeader>
            <div className='flex w-full justify-center items-center'>
              <div className='flex w-16 h-16 object-contain'>
                <Image 
                src={`/icons/list.png`}
                alt='Nairobi skyline'
                width={2000}
                height={1000}
                />
              </div>
            </div>
            <CardContent>Completed projects and some analysis of them.</CardContent>
          </Card>

          {/** row 2 */}
          <Card>
            <CardHeader className='text-xl font-bold'>Submit Evidence</CardHeader>
            <div className='flex w-full justify-center items-center'>
              <div className='flex w-16 h-16 object-contain'>
                <Image 
                src={`/icons/find.png`}
                alt='Nairobi skyline'
                width={2000}
                height={1000}
                />
              </div>
            </div>
            <CardContent>Take photos and upload, share your views of open and closed projects and earn VUMA points.</CardContent>
          </Card>
          <Card>
            <CardHeader className='text-xl font-bold'>View Rewards</CardHeader>
            <div className='flex w-full justify-center items-center'>
              <div className='flex w-16 h-16 object-contain'>
                <Image 
                src={`/icons/reward.png`}
                alt='Nairobi skyline'
                width={2000}
                height={1000}
                />
              </div>
            </div>
            <CardContent>With Vuma points you can earn real money for participating to make your county better.</CardContent>
          </Card>
          <Card>
            <CardHeader className='text-xl font-bold'>Complaints</CardHeader>
            <div className='flex w-full justify-center items-center'>
              <div className='flex w-16 h-16 object-contain'>
                <Image 
                src={`/icons/comment.png`}
                alt='Nairobi skyline'
                width={2000}
                height={1000}
                />
              </div>
            </div>
            <CardContent>Do you have a burning issue, let us know.</CardContent>
          </Card>
          {/** row 3 */}
        {/* <AreaGraph />
        <PieGraph />
        <BarGraph />
        <ProgressGraph /> */}
        </div>
        
      </div>

      <Footer />


    </div>
  );
};

export default Home;
