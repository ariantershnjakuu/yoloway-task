import { useState, useEffect, useRef } from 'react';
import { useStore } from '../store/useStore';
import { DRAWING_CONSTANTS } from '../constants/drawing';

interface ImageWithDimensions {
  file: File;
  width: number;
  height: number;
}

/**
 * Manages image upload functionality.
 * 
 * Responsibilities:
 * - Handles file input and validation
 * - Processes uploaded images (scaling, dimension calculations)
 * - Creates image shapes on the canvas
 * - Manages cleanup of image URLs
 */
export const useImageUpload = () => {
  const { selectedTool, setSelectedTool } = useStore();
  const [pendingImage, setPendingImage] = useState<ImageWithDimensions | null>(null);
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const addShape = useStore(state => state.addShape);

  useEffect(() => {
    if (selectedTool === 'image') {
      fileInputRef.current?.click();
    }
  }, [selectedTool]);

  useEffect(() => {
    if (pendingImage?.file) {
      const url = URL.createObjectURL(pendingImage.file);
      const img = new Image();
      img.src = url;
      
      img.onload = () => {
        setImageElement(img);
        let width = img.width;
        let height = img.height;
        const maxSize = DRAWING_CONSTANTS.MAX_IMAGE_SIZE;
        
        if (width > maxSize || height > maxSize) {
          const ratio = width / height;
          if (width > height) {
            width = maxSize;
            height = maxSize / ratio;
          } else {
            height = maxSize;
            width = maxSize * ratio;
          }
        }

        addShape({
          id: Math.random().toString(),
          type: 'image',
          x: 0,
          y: 0,
          width,
          height,
          src: url,
          fill: 'transparent',
        });

        setPendingImage(null);
        setImageElement(null);
        setSelectedTool('move');
      };

      return () => URL.revokeObjectURL(url);
    }
  }, [pendingImage?.file, setSelectedTool, addShape]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      setPendingImage({ file, width: 0, height: 0 });
    } else {
      setSelectedTool('move');
    }
    e.target.value = '';
  };

  return {
    fileInputRef,
    handleFileChange,
  };
}; 