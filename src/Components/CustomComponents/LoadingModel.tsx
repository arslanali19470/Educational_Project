import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Picture from './Picture';
import {Profile} from '../../Assets';
import {normalized} from '../../Utils/AppConstant';
import Space from './Space';
import Heading from './Heading';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const LoadingModel = ({Loading}) => {
  return (
    <Modal
      isVisible={Loading}
      style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.modalContent}>
        <Picture
          localSource={Profile}
          height={responsiveHeight(20)}
          width={responsiveWidth(40)}
          resizeMode="contain"
          alignSelf="center"
        />
        <Space height={30} />
        <Heading
          text="Waiting for Response"
          textAlign="center"
          fontSize={20}
          weight={'bold'}
        />
        <Space height={25} />
        <ActivityIndicator size={'16'} color="#0961F5" />
      </View>
    </Modal>
  );
};

export default LoadingModel;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    width: responsiveWidth(80),
    height: responsiveHeight(45),
    padding: 40,
    borderRadius: 30,
    alignItems: 'center',
  },
});
