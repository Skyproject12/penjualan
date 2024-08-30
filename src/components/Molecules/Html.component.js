import {Dimensions} from 'react-native';
import React from 'react';
import RenderHTML, {
  HTMLContentModel,
  HTMLElementModel,
} from 'react-native-render-html';
import {Colors, Fonts} from '../../utils';

const customHTMLElementModels = {
  br: HTMLElementModel.fromCustomModel({
    tagName: 'br',
    mixedUAStyles: {
      width: 12,
      height: 12,
      alignSelf: 'center',
    },
    contentModel: HTMLContentModel.block,
  }),
  img: HTMLElementModel.fromCustomModel({
    tagName: 'img',
    mixedUAStyles: {
      marginTop: 12,
      borderRadius: 6,
    },
    contentModel: HTMLContentModel.block,
  }),
  div: HTMLElementModel.fromCustomModel({
    tagName: 'div',
    mixedUAStyles: {
      fontSize: 14,
      fontFamily: Fonts.PRIMARY_REGULAR,
      textTransform: 'capitalize',
      color: Colors.HEADER_KELAS,
    },
    contentModel: HTMLContentModel.block,
  }),
};

function Html({html}) {
  return (
    <RenderHTML
      contentWidth={Dimensions.get('window').width - 32}
      source={{html: html}}
      customHTMLElementModels={customHTMLElementModels}
    />
  );
}

export default Html;
