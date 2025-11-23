import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  borderColor: string;
  iconColor: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  borderColor,
  iconColor,
}: FeatureCardProps) {
  return (
    <div 
      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border-2"
      style={{ borderColor }}
    >
      <h3 className="text-2xl font-bold text-black mb-4 text-center">{title}</h3>
      <p className="text-gray-700 mb-6 leading-relaxed text-justify">
        {description}
      </p>
      <div className="flex justify-center">
        <Icon size={64} style={{ color: iconColor }} strokeWidth={1.5} />
      </div>
    </div>
  );
}
