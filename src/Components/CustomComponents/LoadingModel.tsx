import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Picture from './Picture';
import {Profile} from '../../Assets';
import {normalized} from '../../Utils/AppConstant';
import Space from './Space';
import Heading from './Heading';

const LoadingModel = ({Loading}) => {
  return (
    <View>
      <Modal isVisible={Loading}>
        <View style={styles.modalContent}>
          <Picture
            localSource={Profile}
            height={normalized.hp('20%')}
            width={normalized.hp('20%')}
            resizeMode="contain"
            alignSelf="center"
          />
          <Space height={20} />
          <Heading
            text="Waiting for Response"
            textAlign="center"
            fontSize={20}
            weight={'bold'}
          />
          <Space height={20} />
          <ActivityIndicator size="large" color="#2C2C54" />
        </View>
      </Modal>
    </View>
  );
};

export default LoadingModel;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    height: 330,
    padding: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
