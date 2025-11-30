
type UseShareFrameArgs = {
  imageUrl: string;
  scale: number;
  rotate: number;
  caption: string;
  frameColor: string;
  frameId: string | null | undefined;
  setFrameId: (id: string) => void;
};

type UseShareFrameResult = {
  handleShare: () => Promise<void>;
  showShareModal: boolean;
  setShowShareModal: (open: boolean) => void;
  shareUrl: string;
};

export function useShareFrame({ imageUrl, scale, rotate, caption, frameColor, frameId, setFrameId }: UseShareFrameArgs): UseShareFrameResult {
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  const generateTempFrameId = () => {
    return 'frame_' + Math.random().toString(36).substring(2, 11);
  };

  const handleShare = async () => {
    if (!imageUrl) return;
    let currentFrameId = frameId;
    if (!currentFrameId) {
      currentFrameId = generateTempFrameId();
      setFrameId(currentFrameId);
    }
    try {
      let imageData = imageUrl;
      if (imageUrl.startsWith('blob:')) {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        imageData = await fileToBase64(blob as File);
      }
      const frameData = {
        frameId: currentFrameId,
        imageUrl: imageData,
        scale,
        rotate,
        caption,
        frameColor: frameColor || '#4A90E2',
        createdAt: new Date().toISOString(),
      };
      const saved = await saveFrame(frameData);
      if (!saved) {
        alert('Failed to save frame. Storage quota may be exceeded. Try deleting old frames.');
        return;
      }
      const baseUrl = window.location.origin;
      const url = `${baseUrl}/user/${currentFrameId}`;
      setShareUrl(url);
      setShowShareModal(true);
    } catch (error) {
      console.error('Failed to save frame:', error);
      alert('Failed to create shareable link. Storage may be full. Try clearing old frames.');
    }
  };

  return { handleShare, showShareModal, setShowShareModal, shareUrl };
}
import { useState } from 'react';
import { saveFrame, fileToBase64 } from '@/lib/frameStorage';
