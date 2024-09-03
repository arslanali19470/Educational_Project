import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Heading from '../../Components/CustomComponents/Heading';

const Facality = () => {
  const array1 = ['SEEMAB LATIF', 'Usman Zabit', 'Hassaan Khaliq Qureshi'];
  return (
    <ScrollView style={{padding: 15}}>
      {array1.map((item, ind) => (
        <View
          key={ind}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            marginBottom: 20,
          }}>
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: '#777',
              borderRadius: 100,
            }}
          />
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'column',
            }}>
            <Heading
              text={item}
              textAlign="center"
              fontSize={15}
              color="#333"
              weight={'bold'}
            />
            <Heading
              text="Associate Professor"
              textAlign="center"
              fontSize={15}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Facality;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
