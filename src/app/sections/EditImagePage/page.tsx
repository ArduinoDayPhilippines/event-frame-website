"use client";

import { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import FramePreview from '@/app/components/FramePreview';
import ControlPanel from '@/app/components/ControlPanel';
import YellowButton from '@/app/components/YellowButton';

export default function EditImagePage() {
  const [scale, setScale] = useState(100);
  const [rotate, setRotate] = useState(0);
  const [caption, setCaption] = useState('');
  const [imageUrl, setImageUrl] = useState<string>(''); // Will be populated from upload
  
  const primaryBlue = '#4A90E2';

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log('Saving frame with:', { scale, rotate, caption });
  };

  const handleShare = () => {
    // TODO: Implement share functionality
    console.log('Sharing frame with caption:', caption);
  };

  const handleChangeFrame = () => {
    // TODO: Implement frame selection
    console.log('Opening frame selector');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="grow py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:pl-2">
            
            {/* Left Side: Frame Preview */}
            <div className="flex flex-col items-center gap-6">
              <FramePreview
                imageUrl={imageUrl}
                scale={scale}
                rotate={rotate}
                frameColor={primaryBlue}
              />
              
              {/* Change Frame Button */}
              <YellowButton 
                size="lg"
                onClick={handleChangeFrame}
              >
                + Change Frame
              </YellowButton>
            </div>

            {/* Right Side: Control Panel */}
            <div className="flex items-center justify-center lg:justify-start lg:pl-4">
              <div className="w-full max-w-md">
                <ControlPanel
                  scale={scale}
                  rotate={rotate}
                  caption={caption}
                  onScaleChange={setScale}
                  onRotateChange={setRotate}
                  onCaptionChange={setCaption}
                  onSave={handleSave}
                  onShare={handleShare}
                  backgroundColor={primaryBlue}
                />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
