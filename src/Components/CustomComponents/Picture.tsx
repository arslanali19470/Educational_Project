import React from 'react';
import { StyleSheet, Image, ImageProps } from 'react-native';
import { AppColors } from '../../utils/AppConstants';

interface PictureProps extends ImageProps {
  localSource?: number;
  uriSource?: string;
  height?: number | string;
  width?: number | string;
  imgColor?: string;
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | undefined;
  roundCorner?: number;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center' | undefined;
  marginLeft?: number;
  marginRight?: number;
  transform?: boolean;
  marginBottom?: number;
  position?: string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  // themeValue?: string;
}

const Picture: React.FC<PictureProps> = ({
  localSource,
  uriSource,
  height,
  width,
  imgColor,
  alignSelf,
  roundCorner,
  resizeMode,
  marginLeft,
  marginRight,
  transform,
  marginBottom,
  position,
  top,
  left,
  right,
  bottom,
  // themeValue
}) => {
  return (
    <>
      {uriSource ? (
        <Image
          style={{
            height: height,
            width: width,
            tintColor: imgColor,
            alignSelf: alignSelf,
            borderRadius: roundCorner || 0,
            marginLeft: marginLeft,
            marginRight: marginRight,
            position: position,
            top: top,
            left: left,
            right: right,
            bottom: bottom,
          }}
          source={{ uri: uriSource }}
          onError={(error) => console.log('Image failed to load:', error)}
          resizeMode={resizeMode || 'cover'}
        />
      ) : (
        <Image
          style={{
            height: height,
            width: width,
            tintColor: imgColor,
            alignSelf: alignSelf,
            borderRadius: roundCorner || 0,
            transform: transform ? [{ scaleY: -1 }] : [],
            marginBottom: marginBottom,
            marginRight: marginRight,
            position: position,
            top: top,
            left: left,
            right: right,
            bottom: bottom,
            // backgroundColor: themeValue == 'dark' ? 'white' : 'transparent'
          }}
          source={localSource || undefined}
          resizeMode={resizeMode || 'cover'}
        />
      )}
    </>
  );
};

export default Picture;
