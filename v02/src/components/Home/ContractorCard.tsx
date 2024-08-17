import { useState } from 'react';

interface Contractor {
  name: string;
  details: string;
  image: string;
  workHistory: string;
  location: string;
}

interface ContractorCardProps {
  contractor: Contractor;
}

const ContractorCard: React.FC<ContractorCardProps> = ({ contractor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className="contractor-card mt-6 p-4 border rounded-lg shadow cursor-pointer hover:bg-gray-100"
        onClick={toggleModal}
      >
        <h3 className="text-xl font-semibold">{contractor.name}</h3>
        <p className="mt-2">{contractor.details}</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <button
              className="absolute top-4 right-4 text-red-500 hover:text-gray-800"
              onClick={toggleModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{contractor.name}</h2>
            <img
              src={contractor.image}
              alt={contractor.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p><strong>Location:</strong> {contractor.location}</p>
            <p className="mt-4"><strong>Work History:</strong> {contractor.workHistory}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContractorCard;
