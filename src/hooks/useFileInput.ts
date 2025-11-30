import { useRef } from 'react';

export function useFileInput(onFile: (url: string) => void) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddPhoto = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onFile(url);
    }
  };

  return { fileInputRef, handleAddPhoto, handleFileChange };
}
