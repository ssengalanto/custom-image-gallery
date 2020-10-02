import { makeStyles } from '@material-ui/core/styles';

interface Props {
  dimensions?: number | [number, number];
}

export const useStyles = makeStyles(() => ({
  image: ({ dimensions }: Props) => {
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
    return { objectFit: 'cover', height, width };
  },
}));
