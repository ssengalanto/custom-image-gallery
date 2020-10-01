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
  image: {
    objectFit: 'cover',
  },
  thumbnail: {
    flexWrap: 'nowrap',
    overflowX: 'auto',
    overflowY: 'hidden',
    scrollbarWidth: 'none',
  },
  thumbnailImage: {
    height: 80,
    width: 80,
    borderRadius: 20,
    [theme.breakpoints.down('sm')]: {
      height: 70,
      width: 70,
    },
  },
  thumbnailSelected: {
    opacity: 0.6,
  },
  imgButtonBase: {
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
  modalBackdrop: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButton: {
    height: 40,
    width: 40,
  },
  modalImage: {
    margin: '0 5px',
    height: 500,
    width: 500,
    borderRadius: 20,
    '&:focus': {
      outline: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      height: 230,
      width: 230,
    },
  },
}));
