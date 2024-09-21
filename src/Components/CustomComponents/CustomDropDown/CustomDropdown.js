import React from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Picture from '../Picture';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {styles} from './styles';

const CustomDropdown = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  placeholder,
  searchPlaceholder,
  imageSource,
  imageHeight,
  imageWidth,
  zIndex,
  zIndexInverse,
  listEmptyMessage,
  modalPosition,
}) => {
  return (
    <View style={[styles.FirstListView, {zIndex}]}>
      <Picture
        localSource={imageSource}
        height={imageHeight}
        width={imageWidth}
        resizeMode="contain"
      />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        searchable={true}
        searchPlaceholder={searchPlaceholder}
        style={{
          backgroundColor: '#fff',
          width: responsiveWidth(66),
          borderWidth: 0,
          borderRadius: 10,
        }}
        searchTextInputStyle={{
          borderWidth: 0,
          height: 30,
        }}
        listMode="MODAL"
        modalContentContainerStyle={{
          width: responsiveWidth(85),
          maxHeight: responsiveHeight(28),
          backgroundColor: 'white',
          alignSelf: 'center',
          borderRadius: 10,
          ...modalPosition,
        }}
        modalProps={{
          animationType: 'fade',
          transparent: true,
          presentationStyle: 'overFullScreen',
        }}
        zIndex={zIndex}
        zIndexInverse={zIndexInverse}
        ListEmptyComponent={() => (
          <Text style={styles.PlaceHolderColor}>{listEmptyMessage}</Text>
        )}
      />
    </View>
  );
};

export default CustomDropdown;
