import React from 'react';
import {Image} from 'react-native';

const checkWidth = (width, heightProps, height, widthProps) => {
  if (widthProps) {
    return widthProps;
  }
  return width * (heightProps / height);
};

const checkHeight = (heightProps, height, widthProps, width) => {
  if (heightProps) {
    return heightProps;
  }
  return height * (widthProps / width);
};

const StaticImage = ({
  source,
  height: heightProps,
  width: widthProps,
  style,
  ...imageProps
}) => {
  const {width, height} = Image.resolveAssetSource(source);

  return (
    <Image
      source={source}
      style={[
        {
          height: checkHeight(heightProps, height, widthProps, width),
          width: checkWidth(width, heightProps, height, widthProps),
        },
        style,
      ]}
      {...imageProps}
    />
  );
};

export default StaticImage;
