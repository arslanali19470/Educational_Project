import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Heading from '../../Components/CustomComponents/Heading';
import Picture from '../../Components/CustomComponents/Picture';
import {normalized} from '../../Utils/AppConstant';

const Facality = ({route}) => {
  const {facilitiesMembers, ProgramName, profImg} = route.params;
  const array1 = ['SEEMAB LATIF', 'Usman Zabit', 'Hassaan Khaliq Qureshi'];
  // useEffect(() => {
  //   profImg.forEach(element => {
  //     console.log(element);
  //   });
  // }, []);

  return (
    <ScrollView style={{padding: 15}}>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          marginBottom: 25,
          marginTop: 10,
          color: '#222',
        }}>
        Facality Of {ProgramName}
      </Text>

      {facilitiesMembers.map((item, ind) => (
        <View
          key={ind}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            marginBottom: 20,
          }}>
          {/* <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: '#777',
              borderRadius: 100,
            }}
          /> */}
          <Picture
            localSource={item.profImg}
            height={normalized.hp('7%')}
            width={normalized.hp('10%')}
            resizeMode="contain"
            alignSelf="center"
          />
          {/* <Text>{profImg}</Text> */}
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'column',
            }}>
            <Heading
              text={item.ProfessorName}
              textAlign="center"
              fontSize={15}
              color="#333"
              weight={'bold'}
            />
            <Heading text={item.Rank} textAlign="center" fontSize={15} />
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
