import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Heading from '../../Components/CustomComponents/Heading';
import Picture from '../../Components/CustomComponents/Picture';
import {normalized, normalizedFont} from '../../Utils/AppConstant';
import {RouteProp} from '@react-navigation/native';

type FacalityMember = {
  ProfessorName: string;
  Rank: string;
  profImg: number;
};

type FacalityProps = {
  route: RouteProp<
    {params: {facilitiesMembers: FacalityMember[]; ProgramName: string}},
    'params'
  >;
};
const Facality: React.FC<FacalityProps> = ({route}) => {
  const {facilitiesMembers, ProgramName} = route.params;

  return (
    <ScrollView style={{padding: 15}}>
      <Text
        style={{
          fontSize: normalizedFont.rf(2.5),
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
          <Picture
            localSource={item.profImg}
            height={normalized.hp('7%')}
            width={normalized.hp('10%')}
            resizeMode="contain"
            alignSelf="center"
          />
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'column',
            }}>
            <Heading
              text={item.ProfessorName}
              textAlign="center"
              fontSize={normalizedFont.rf(2.2)}
              color="#333"
              weight={'bold'}
            />
            <Heading
              text={item.Rank}
              textAlign="center"
              fontSize={normalizedFont.rf(2.2)}
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
    // fontSize: ,
    // color: 'red',
  },
});
