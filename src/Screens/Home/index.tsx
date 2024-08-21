import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {MaterialIcons, normalized} from '../../Utils/AppConstant';
import Heading from '../../Components/CustomComponents/Heading';
import Space from '../../Components/CustomComponents/Space';
import Picture from '../../Components/CustomComponents/Picture';
import {main_Logo, Splash_image} from '../../Assets';

const Home = () => {
  const UniDetails = [1, 2, 3, 4, 5, 6, 7];
  return (
    // <ScrollView style={{backgroundColor: '#0455a4', flex: 1, padding: 10}}>
    <ScrollView style={{backgroundColor: 'white', flex: 1, padding: 10}}>
      <View style={styles.Row}>
        {/* <MaterialIcons name="auto-stories" color="#60b1de" size={150} />
        <Heading text="University Hub" color="#fff" fontSize={30} /> */}
        <Space height={10} />
        <Picture
          localSource={Splash_image}
          height={normalized.hp('22%')}
          width={normalized.hp('40%')}
          //   resizeMode="contain"
        />
        {/* <Picture
          localSource={main_Logo}
          height={normalized.hp('22%')}
          width={normalized.hp('40%')}
          //   resizeMode="contain"
        /> */}
        <Space height={20} />
        {/* <Heading
          text="Perfect Solution for Students"
          color="white"
          fontSize={15}
        /> */}
      </View>
      <View style={styles.GridContainer}>
        {UniDetails.map((item, ind) => (
          <>
            <TouchableOpacity
              key={ind}
              style={[
                styles.Item,
                {padding: 20, backgroundColor: '#296eb1', borderRadius: 10},
              ]}>
              {/* <MaterialIcons name="auto-stories" color="#60b1de" size={80} /> */}
              <MaterialIcons name="auto-stories" color="#fff" size={80} />
              <Space height={5} />
              <Heading text="Select University" color="#fff" fontSize={14} />
            </TouchableOpacity>
          </>
        ))}
      </View>
      <Space height={15} />
      <Heading
        text="@copyright UniHub.com2@24"
        color="#cccc"
        fontSize={14}
        textAlign="center"
      />
      <Space height={20} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Row: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  GridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  Item: {
    width: '48%', // 2 items per row with some gap
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
