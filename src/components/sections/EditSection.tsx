"use client";

import { useFrame } from '@/contexts/FrameContext';
import Footer from '@/components/sections/Footer';
import FramePreview from '@/components/ui/FramePreview';
import ControlPanel from '@/components/ui/ControlPanel';
import YellowButton from '@/components/ui/YellowButton';
import ShareModal from '@/components/modals/ShareModal';
import { useShareFrame } from '@/hooks/useShareFrame';
import { useDownloadFrame } from '@/hooks/useDownloadFrame';
import { useRedirectIfNoImage } from '@/hooks/useRedirectIfNoImage';

export default function EditSection() {
  const {
    imageUrl,
    scale,
    rotate,
    caption,
    frameColor,
    frameId,
    setScale,
    setRotate,
    setCaption,
    setFrameId,
  } = useFrame();

  useRedirectIfNoImage(imageUrl);
  const { handleShare, showShareModal, setShowShareModal, shareUrl } = useShareFrame({
    imageUrl: imageUrl as string,
    scale,
    rotate,
    caption,
    frameColor: frameColor as string,
    frameId,
    setFrameId,
  });
  const { handleSave, isDownloading } = useDownloadFrame();

  const primaryBlue = frameColor || '#4A90E2';
  const accentGreen = '#50E3C2';

  const handleChangeFrame = () => {
    if (confirm('Do you want to upload a new frame? Current progress will be lost.')) {
      window.location.href = '/upload';
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-hidden bg-gradient-to-b from-[#4A90E2] via-[#8CB8E8] to-white">
      {/* Decorative dots pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, ${primaryBlue} 2px, transparent 2px),
            radial-gradient(circle at 80% 20%, ${accentGreen} 1.5px, transparent 1.5px),
            radial-gradient(circle at 30% 70%, ${accentGreen} 1px, transparent 1px),
            radial-gradient(circle at 75% 80%, ${primaryBlue} 2.5px, transparent 2.5px),
            radial-gradient(circle at 10% 90%, ${primaryBlue} 1.5px, transparent 1.5px),
            radial-gradient(circle at 90% 60%, ${accentGreen} 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px, 150px 150px, 120px 120px, 180px 180px, 90px 90px, 110px 110px',
          backgroundPosition: '0 0, 40px 40px, 80px 20px, 20px 60px, 60px 80px, 30px 30px',
        }}
      />

      {/* Floating decorative shapes */}
      <div
        className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          backgroundColor: primaryBlue,
          top: '15%',
          left: '10%',
          animation: 'floatSlow 12s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          backgroundColor: accentGreen,
          bottom: '20%',
          right: '10%',
          animation: 'floatSlow 15s ease-in-out infinite 3s',
        }}
      />

      <main className="grow flex items-center justify-center py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center gap-6">
              <FramePreview
                frameUrl={imageUrl || undefined}
                frameColor={primaryBlue}
              />
              <YellowButton size="lg" onClick={handleChangeFrame}>
                + Change Frame
              </YellowButton>
            </div>
            <div className="flex items-center justify-center lg:justify-center">
              <div className="w-full max-w-md">
                <ControlPanel
                  caption={caption}
                  onCaptionChange={setCaption}
                  onShare={handleShare}
                  backgroundColor={primaryBlue}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        shareUrl={shareUrl}
      />
    </div>
  );
}
