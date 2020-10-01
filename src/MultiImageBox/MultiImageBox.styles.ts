import { makeStyles } from '@material-ui/core/styles';

export type MutliImageBoxUseStyles = ReturnType<typeof useStyles>;

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 300,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 250,
    },
  },
  thumbnail: {
    flexWrap: 'nowrap',
    overflowX: 'auto',
    overflowY: 'hidden',
    scrollbarWidth: 'none',
    opacity: 1,
  },
  thumbnailSelected: {
    opacity: 0.5,
  },
  image: {
    position: 'relative',
    objectFit: 'cover',
  },
  imageAuxiliary: {
    height: 80,
    width: 80,
    borderRadius: 20,
    [theme.breakpoints.down('sm')]: {
      height: 70,
      width: 70,
    },
  },
  imgButton: {
    borderRadius: 20,
  },
  imageMain: {
    height: 300,
    width: 300,
    borderRadius: 20,
    [theme.breakpoints.down('sm')]: {
      height: 250,
      width: 250,
    },
  },
}));
