/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Skeleton from '@material-ui/lab/Skeleton';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import IconButton from '@material-ui/core/IconButton';

import { useToggle } from 'hooks';

import { Image } from '../ImageResizer';
import { useStyles } from './MultiImageBox.styles';
import { useMultiImageBox } from './useMultiImageBox';

interface MultiImageBoxProps {
  loading: boolean;
  images: string[];
  imageType: string;
}

export const MultiImageBox: React.FC<MultiImageBoxProps> = ({ loading, images, imageType }) => {
  const {
    models: { selectedImage },
    operations: { handleNext, handlePrevious, handleImageSelection, handleKeyDown },
  } = useMultiImageBox({ images });

  const {
    models: { open },
    operations: { handleOpen, handleClose },
  } = useToggle();

  const classes = useStyles();

  return (
    <>
      <Grid container direction="column" justify="flex-start" classes={{ root: classes.container }}>
        <Grid item xs={12} style={{ marginBottom: 10 }}>
          {loading ? (
            <Skeleton variant="rect" classes={{ root: classes.imageMain }} />
          ) : (
            <ButtonBase classes={{ root: classes.imgButtonBase }} onClick={handleOpen}>
              <Image
                loading="lazy"
                alt={`${imageType}-main-image`}
                className={classes.imageMain}
                src={images[selectedImage]}
              />
            </ButtonBase>
          )}
        </Grid>

        <Grid item spacing={1} container direction="row" classes={{ root: classes.thumbnail }}>
          {images.map((src, index) => (
            <Grid item key={index}>
              {loading ? (
                <Skeleton variant="rect" classes={{ root: classes.thumbnailImage }} />
              ) : (
                <ButtonBase
                  classes={{ root: classes.imgButtonBase }}
                  onClick={() => handleImageSelection(index)}
                >
                  <Image
                    loading="lazy"
                    alt={src ? `${imageType}-auxiliary-image-${index}` : undefined}
                    className={clsx(classes.image, classes.thumbnailImage, {
                      [classes.thumbnailSelected]: index === selectedImage,
                    })}
                    src={src}
                  />
                </ButtonBase>
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        hideBackdrop
        aria-labelledby="image-gallery-title"
        aria-describedby="image-gallery-description"
      >
        <Backdrop
          className={classes.modalBackdrop}
          open={open}
          onClick={handleClose}
          onKeyDown={handleKeyDown}
        >
          <Grid container alignItems="center" justify="center" direction="row">
            <IconButton classes={{ root: classes.modalButton }} onClick={handlePrevious}>
              <ArrowLeftIcon />
            </IconButton>
            <Image
              loading="lazy"
              alt={
                images[selectedImage] ? `${imageType}-auxiliary-image-${selectedImage}` : undefined
              }
              className={clsx(classes.image, classes.modalImage)}
              src={images[selectedImage]}
            />
            <IconButton classes={{ root: classes.modalButton }} onClick={handleNext}>
              <ArrowRightIcon />
            </IconButton>
          </Grid>
        </Backdrop>
      </Modal>
    </>
  );
};
