import { Progress } from "@/components/ui/progress"

interface CustomProgressBarProps {
  progress: number;
}

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({ progress }) => {
  // Determine the color based on the progress percentage
  const getColorClass = (progress: number) => {
    if (progress < 33) {
      return 'bg-red-500';
    } else if (progress >= 33 && progress <= 66) {
      return 'bg-orange-500';
    } else {
      return 'bg-green-500';
    }
  };

  return (
    <div className="w-full">
      <Progress
        value={progress}
        className={`${getColorClass(progress)} h-4 rounded-lg`}
      />
    </div>
  );
};

export default CustomProgressBar;
