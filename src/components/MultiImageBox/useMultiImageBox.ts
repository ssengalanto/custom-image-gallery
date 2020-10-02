/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useCallback, useState } from 'react';

type Params = { images: string[] };

export const useMultiImageBox = ({ images = [] }: Params) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleDecrement = useCallback(() => {
    if (selectedImage === 0) {
      setSelectedImage(images.length - 1);
      return;
    }

    setSelectedImage((current) => current - 1);
  }, [selectedImage, images]);

  const handleIncrement = useCallback(() => {
    if (selectedImage === images.length - 1) {
      setSelectedImage(0);
      return;
    }

    setSelectedImage((current) => current + 1);
  }, [selectedImage, images]);

  const handlePrevious: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.stopPropagation();
      handleDecrement();
    },
    [handleDecrement],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleDecrement();
        return;
      }

      if (e.key === 'ArrowLeft') {
        handleIncrement();
      }
    },
    [handleIncrement, handleDecrement],
  );

  const handleNext: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.stopPropagation();
      handleIncrement();
    },
    [handleIncrement],
  );

  const handleImageSelection = useCallback((index: number) => {
    setSelectedImage(index);
  }, []);

  return {
    models: { selectedImage },
    operations: {
      handlePrevious,
      handleNext,
      handleKeyDown,
      handleImageSelection,
    },
  };
};
