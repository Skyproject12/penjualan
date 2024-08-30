import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';

const renderImage = (source, setError, style) => {
  return (
    <FastImage source={source} style={style} onError={() => setError(true)} />
  );
};

function ImageView({source, style, errorUri}) {
  const [isError, setError] = useState(false);
  const uri = {uri: source};
  const errorUris = {uri: errorUri};

  return !isError
    ? renderImage(uri, setError, style)
    : renderImage(errorUris, setError, style);
}

export default ImageView;
