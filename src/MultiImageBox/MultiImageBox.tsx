/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Skeleton from '@material-ui/lab/Skeleton';

import { MutliImageBoxUseStyles, useStyles } from './MultiImageBox.styles';

interface MultiImageBoxProps {
  loading: boolean;
  images: string[];
  imageType: string;
}

export const MultiImageBox: React.FC<MultiImageBoxProps> = ({ loading, images, imageType }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const classes = useStyles();

  const handleImageSelection = useCallback((index: number) => {
    setSelectedImage(index);
  }, []);

  return (
    <Grid container direction="column" justify="flex-start" classes={{ root: classes.container }}>
      <MainImage
        selected={selectedImage}
        classes={classes}
        loading={loading}
        images={images}
        imageType={imageType}
      />
      <Thumbnails
        selected={selectedImage}
        handleClick={handleImageSelection}
        classes={classes}
        loading={loading}
        images={images}
        imageType={imageType}
      />
    </Grid>
  );
};

const MainImage: React.FC<
  MultiImageBoxProps & { classes: MutliImageBoxUseStyles; selected: number }
> = ({ classes, imageType, images, loading, selected }) => (
  <Grid item xs={12} style={{ marginBottom: 10 }}>
    {loading ? (
      <Skeleton variant="rect" classes={{ root: classes.imageMain }} />
    ) : (
      <img
        loading="lazy"
        alt={`${imageType}-main-image`}
        className={clsx(classes.image, classes.imageMain)}
        src={images[selected]}
      />
    )}
  </Grid>
);

const Thumbnails: React.FC<
  MultiImageBoxProps & {
    classes: MutliImageBoxUseStyles;
    handleClick: (index: number) => void;
    selected: number;
  }
> = ({ classes, loading, images, imageType, handleClick, selected }) => (
  <Grid item spacing={2} container direction="row" classes={{ root: classes.thumbnail }}>
    {images.map((src, index) => (
      <Grid item>
        {loading ? (
          <Skeleton variant="rect" classes={{ root: classes.imageAuxiliary }} />
        ) : (
          <ButtonBase classes={{ root: classes.imgButton }} onClick={() => handleClick(index)}>
            <img
              loading="lazy"
              alt={src ? `${imageType}-auxiliary-image-${index}` : undefined}
              className={clsx(classes.image, classes.imageAuxiliary, {
                [classes.thumbnailSelected]: index === selected,
              })}
              src={src}
            />
          </ButtonBase>
        )}
      </Grid>
    ))}
  </Grid>
);
