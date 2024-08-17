interface EngineerCardProps {
    engineer: {
      name: string;
      credentials: string;
      workHistory: string;
    };
  }
  
  const EngineerCard: React.FC<EngineerCardProps> = ({ engineer }) => (
    <div className="engineer-card mt-6 p-4 border rounded-lg shadow">
      <h3 className="text-xl font-semibold">Approving Engineer: {engineer.name}</h3>
      <p className="mt-2">Credentials: {engineer.credentials}</p>
      <p className="mt-2">Work History: {engineer.workHistory}</p>
    </div>
  );
  
  export default EngineerCard;
  