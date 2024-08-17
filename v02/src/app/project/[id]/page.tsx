'use client'
import { useRouter, usePathname, useSearchParams, redirect } from 'next/navigation'
import ContractorCard from '@/components/Home/ContractorCard';
import EngineerCard from '@/components/Home/EngineerCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProjectDetails = () => {
  // const router = useRouter();
  const searchParams = useSearchParams()
 
  const search = searchParams.get('id')
  // const { id } = router.query;
  // const id = search.

  // Mock Data (Replace with API fetch or real data)
  const project = [{
        id: '1',
        name: 'Project A',
        status: 'In Progress',
        milestones: ['Milestone 1', 'Milestone 2'],
        contractor: {
        name: 'XYZ Contractors',
        details: 'Company details from registry...',
        },
        engineer: {
        name: 'Jane Doe',
        credentials: 'P.Eng, M.Eng',
        workHistory: '5 years at ABC Engineering',
        },
    },{
        id: '2',
        name: 'Project B',
        status: 'In Progress',
        milestones: ['Milestone 1', 'Milestone 2'],
        contractor: {
        name: 'XYZ Contractors',
        details: 'Company details from registry...',
        },
        engineer: {
        name: 'Jane Brown',
        credentials: 'P.Eng, M.Eng',
        workHistory: '5 years at ABC Engineering',
        },
    },
    ];

    const contractor = {
        name: 'XYZ Contractors',
        details: 'General contracting services...',
        image: '/contractor_cert.png',
        workHistory: '10 years in residential and commercial projects.',
        location: 'New York, USA',
      };

  return (
    <div className='flex flex-col h-screen justify-between'>
      <div>
      <Header />
      <div className="p-6">
        
        <h1 className="text-3xl font-bold">{project[0].name}</h1>
        <p className="mt-4">Status: {project[0].status}</p>
        <h2 className="mt-4 text-2xl">Milestones Covered</h2>
        <ul>
          {project[0].milestones.map((milestone, index) => (
            <li key={index} className="mt-2">{milestone}</li>
          ))}
        </ul>
        <ContractorCard contractor={contractor} />
        <EngineerCard engineer={project[0].engineer} />
        
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
