import { useEffect, useState } from 'react';
import { getFrame, SavedFrame } from '@/lib/frameStorage';

export function useLoadFrame(frameId: string) {
  const [frame, setFrame] = useState<SavedFrame | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [userCaption, setUserCaption] = useState('');

  useEffect(() => {
    if (!frameId) {
      setNotFound(true);
      setLoading(false);
      return;
    }
    const savedFrame = getFrame(frameId);
    if (savedFrame) {
      setFrame(savedFrame);
      setUserCaption(savedFrame.caption);
    } else {
      setNotFound(true);
    }
    setLoading(false);
  }, [frameId]);

  return { frame, loading, notFound, userCaption, setUserCaption };
}
