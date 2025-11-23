import Header from '@/app/components/Header';
import LandingFooter from '@/app/sections/LandingPage/LandingFooter';
import YellowButton from '@/app/components/YellowButton';

export default function LandingPage() {
  const primaryBlue = '#4A90E2'; 
  const accentGreen = '#50E3C2';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #4A90E2 0%, #8CB8E8 50%, rgba(255, 255, 255, 1) 100%)',
        }}
      >
        {/* Halftone pattern overlay - denser at top right, sparse at bottom */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at top right, rgba(74, 144, 226, 0.9) 1px, transparent 1px),
              radial-gradient(circle at 70% 30%, rgba(74, 144, 226, 0.7) 1.5px, transparent 1.5px),
              radial-gradient(circle at 50% 60%, rgba(74, 144, 226, 0.3) 2px, transparent 2px),
              radial-gradient(circle at bottom center, rgba(255, 255, 255, 0.1) 2px, transparent 2px)
            `,
            backgroundSize: '15px 15px, 25px 25px, 40px 40px, 50px 50px',
            backgroundPosition: 'top right, 20% 20%, 50% 50%, bottom center'
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 py-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black mb-6 leading-tight">
            Make it stand out.
            <br />
            <span style={{ color: primaryBlue }}>FrameIt</span> <span className="text-gray-900">now.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-black mb-8 font-medium">
            Create, customize, and be post-ready.
          </p>
          <YellowButton size="lg">
            Get Started
          </YellowButton>
        </div>

        {/* Gradient fade to white at bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.8) 50%, white 100%)'
          }}
        />
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-5xl w-full mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-x-8">
        
        {/* Overlapping Shapes */}
        <div className="relative w-full max-w-sm h-64 md:h-80 mb-10 md:mb-0 md:flex-shrink-0 flex items-center">
          
          {/* Green Square */}
          <div 
            style={{ 
              backgroundColor: accentGreen,
              transform: 'rotate(-15.13deg) translate(-60px, 32px)' 
            }}
            className="absolute w-64 h-64 shadow-xl opacity-90"
          />
          
          {/* Blue Square */}
          <div 
            style={{ 
              backgroundColor: primaryBlue,
              transform: 'rotate(-5.42deg) translate(50px, -20px)' 
            }}
            className="absolute w-64 h-64 shadow-2xl"
          />
        </div>

        {/* Headline Text */}
        <div className="text-center md:text-left md:max-w-md flex-shrink-0"> 
          <h2 
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 italic leading-tight" 
            style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.4)' }} 
          >
            Turn 
            <span style={{ color: primaryBlue }} className="font-extrabold"> moments</span> into 
            <br />
            <span style={{ color: accentGreen }} className="font-extrabold">masterpieces</span> with 
            <br />
            just one frame.
          </h2>
        </div>
        </div>
      </section>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}