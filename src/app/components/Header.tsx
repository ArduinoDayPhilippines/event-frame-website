import YellowButton from './YellowButton';

export default function Header() {
  const headerBgColor = '#4A90E2';

  return (
    <header 
      style={{ 
        backgroundColor: headerBgColor, 
        // Shadow: Downward cast
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.6)' 
      }} 
      className="text-white z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo/Site Name */}
        <div className="text-xl font-bold text-white"> 
          FrameIt
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 items-center">
          <a href="#" className="text-white hover:text-gray-200 transition-colors text-base font-medium">About Us</a> 
          <a href="#" className="text-white hover:text-gray-200 transition-colors text-base font-medium">Features</a> 
          {/* Highlighted CTA button (Home) */}
          <YellowButton size="md" fullRounded={true}>
            Home
          </YellowButton>
        </nav>
      </div>
    </header>
  );
}
