import React from 'react';
import YellowButton from '../../ui/YellowButton';

interface HeroSectionProps {
  primaryBlue?: string;
  accentGreen?: string;
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ primaryBlue = '#1ED9C3', accentGreen = '#FF8552', onGetStarted }) => (
  <section 
    className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
    style={{
      background: 'linear-gradient(to bottom, #0a0a0a 0%, #151515 50%, #1a1a1a 100%)',
    }}
  >
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at top right, rgba(30, 217, 195, 0.08) 1px, transparent 1px),
          radial-gradient(circle at 70% 30%, rgba(255, 133, 82, 0.06) 1.5px, transparent 1.5px),
          radial-gradient(circle at 50% 60%, rgba(30, 217, 195, 0.05) 2px, transparent 2px)
        `,
        backgroundSize: '60px 60px, 80px 80px, 100px 100px',
        backgroundPosition: 'top right, 20% 20%, 50% 50%'
      }}
    />
    {/* Floating decorative shapes */}
    <div 
      className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
      style={{ 
        backgroundColor: accentGreen,
        top: '5%',
        left: '10%',
        animation: 'heroFloat 12s ease-in-out infinite'
      }}
    />
    <div 
      className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
      style={{ 
        backgroundColor: primaryBlue,
        bottom: '20%',
        right: '15%',
        animation: 'heroFloat 15s ease-in-out infinite 3s'
      }}
    />
    <div className="relative z-10 text-center px-6 -mt-20">
      {/* Decorative element above title */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div 
          className="h-0.5 w-12 rounded-full"
          style={{ backgroundColor: accentGreen }}
        />
        <div 
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: accentGreen }}
        />
        <div 
          className="h-0.5 w-12 rounded-full"
          style={{ backgroundColor: accentGreen }}
        />
      </div>
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-fadeIn">
        Make it stand out.
        <br />
        <span
          style={{
            color: primaryBlue,
            fontWeight: 900,
            textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 1px 0 rgba(0,0,0,0.3)',
          }}
        >
          FrameIt
        </span> <span className="text-white">now.</span>
      </h1>
      <p className="text-xl sm:text-2xl text-gray-200 mb-8 font-medium">
        Create, customize, and be post-ready.
      </p>
      {/* Enhanced button with glow effect */}
      <div className="relative inline-block">
        <div 
          className="absolute inset-0 rounded-full blur-xl opacity-50 pointer-events-none -z-10"
          style={{ backgroundColor: '#FFB84D' }}
        />
        <YellowButton size="lg" onClick={onGetStarted} className="text-black">
          Get Started
        </YellowButton>
      </div>
    </div>
    <div 
      className="absolute bottom-0 left-0 right-0 h-32"
      style={{
        background: 'linear-gradient(to bottom, transparent 0%, rgba(26, 26, 26, 0.5) 50%, #1a1a1a 100%)'
      }}
    />
  </section>
);

export default HeroSection;
