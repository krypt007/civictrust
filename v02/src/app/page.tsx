'use client'
import { useRouter } from 'next/navigation'
import ProjectCard from '@/components/Home/ProjectCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DashChart from '@/components/Charts/DashChart';
import { PieGraph } from '@/components/Charts/pie-graph';
import { BarGraph } from '@/components/Charts/bar-graph';
import { AreaGraph } from '@/components/Charts/area-graph';
import ProgressGraph from '@/components/Charts/progress-graph';

const Home = () => {
  const router = useRouter();

  const projects = [
    { id: '1', name: 'Mombasa – Mtwapa – Kilifi', image: '/DJI_0256-840x620-840x620.jpg' },
    { id: '2', name: 'Mwache Junction – Tsunza – Mteza', image: '/DSC_0686-840x620-840x620.jpg' },
    { id: '3', name: 'Athi River – Machakos Turnoff', image: '/MACHAKOS-TURNOFF-840x620-840x620.jpg' },
    // Add more projects here
  ];

  return (
    <div className='flex flex-col h-screen justify-between object-fill'>
      <div className='flex flex-col h-full'>
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-purple-300 overflow-scroll">
        {/* <DashChart /> */}
        <AreaGraph />
        <PieGraph />
        <BarGraph />
        {/* {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.image}
            onClick={() => router.push(`/project/${project.id}`)}
          />
        ))} */}
        <ProgressGraph />
        </div>
        
      </div>

      <Footer />


    </div>
  );
};

export default Home;
