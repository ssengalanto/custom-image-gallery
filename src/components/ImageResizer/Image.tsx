import React from 'react';

import { ImageProps, useImageStyles } from './Image.styles';

type Props = React.ComponentProps<'img'> & ImageProps;

export const Image: React.FC<Props> = ({ dimensions, imageFit, alt, className, ...props }) => {
  const classes = useImageStyles({ dimensions, imageFit });
  return <img alt={alt} className={`${classes.image} ${className}`} {...props} />;
};
