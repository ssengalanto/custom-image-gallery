import { makeStyles } from '@material-ui/core/styles';

export interface ImageProps {
  dimensions?: number | [number, number];
  imageFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

export const useImageStyles = makeStyles(() => ({
  image: ({ dimensions, imageFit = 'cover' }: ImageProps) => {
    let height: number | undefined;
    let width: number | undefined;

    if (typeof dimensions === 'number') {
      height = dimensions;
      width = dimensions;
    }

    if (dimensions instanceof Array) {
      const [x, y] = dimensions;
      width = x;
      height = y;
    }
    return { objectFit: imageFit, height, width };
  },
}));
