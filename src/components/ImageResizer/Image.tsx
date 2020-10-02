import React from 'react';

import { useStyles } from './Image.styles';

interface Props extends React.ComponentProps<'img'> {
  dimensions?: number | [number, number];
}

export const Image: React.FC<Props> = ({ dimensions, alt, className, ...props }) => {
  const classes = useStyles({ dimensions });
  return <img alt={alt} className={`${classes.image} ${className}`} {...props} />;
};
