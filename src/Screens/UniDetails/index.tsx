import React, {useEffect} from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  MaterialIcons,
  normalized,
  normalizedFont,
} from '../../Utils/AppConstant';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../Navigation/MainNavigation';
import {RouteProp} from '@react-navigation/native';
import {PUIMG} from '../../Assets';
import Picture from '../../Components/CustomComponents/Picture';
import Heading from '../../Components/CustomComponents/Heading';
import Space from '../../Components/CustomComponents/Space';
import TabDetails from '../TabDetails';
import {ProgramDetails} from '../../Utils/AppData';

type ArgumentNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Unidetails'
>;
type ArgumentRouteProp = RouteProp<RootStackParamList, 'Unidetails'>;

type TabDetailsProps = {
  programDetails: ProgramDetails;
};

export type ArgumentScreenProps = {
  navigation: ArgumentNavigationProp;
  route: ArgumentRouteProp;
};

const Unidetails = ({navigation, route}: ArgumentScreenProps) => {
  const {
    programDetails = {
      name: '',
      feeStructure: '',
      LastYearMerit: '',
      facilitiesMembers: [],
    },
    universityName = '',
    UniIMG,
    Website = '',
    AdmissionPortal = '',
  } = route.params || {};

  useEffect(() => {
    console.log(programDetails);
  }, [programDetails]);

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
      }}>
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{width: normalized.wp(12)}}>
          <MaterialIcons name="keyboard-backspace" color="black" size={30} />
        </TouchableOpacity>

        <View style={{marginTop: normalized.hp(-3)}}>
          <Picture
            localSource={parseInt(UniIMG)}
            height={normalized.hp('15%')}
            width={normalized.hp('28%')}
            resizeMode="contain"
            alignSelf="center"
          />
        </View>
        <Space height={normalized.hp(1)} />
        <Heading
          text={universityName}
          weight={'bold'}
          textAlign="center"
          fontSize={normalizedFont.rf(2.9)}
          color="black"
        />
        <Space height={normalized.hp(0.5)} />
        <Heading
          text="Lahore"
          textAlign="center"
          fontSize={normalizedFont.rf(2.2)}
        />
        <Space height={normalized.hp(2)} />
        <View style={{flexDirection: 'row', gap: 50, justifyContent: 'center'}}>
          <View>
            <Heading
              text="26"
              weight={'bold'}
              textAlign="center"
              fontSize={normalizedFont.rf(2.6)}
            />
            <Heading
              text="Courses"
              textAlign="center"
              fontSize={normalizedFont.rf(2.2)}
            />
          </View>
          <View>
            <Heading
              text="15800"
              weight={'bold'}
              textAlign="center"
              fontSize={normalizedFont.rf(2.6)}
            />
            <Heading
              text="Students"
              textAlign="center"
              fontSize={normalizedFont.rf(2.2)}
            />
          </View>
          <View>
            <Heading
              text="100"
              weight={'bold'}
              textAlign="center"
              fontSize={normalizedFont.rf(2.6)}
            />
            <Heading
              text="Rating"
              textAlign="center"
              fontSize={normalizedFont.rf(2.2)}
            />
          </View>
        </View>
        <Space height={normalized.hp(2)} />
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E8F1FF',
              width: normalized.wp(40),
              height: normalized.hp(5.4),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}
            onPress={() => Linking.openURL(Website)}>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontWeight: '600',
                fontSize: normalizedFont.rf(2),
              }}>
              Website
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#0961F5',
              width: normalized.wp(40),
              height: normalized.hp(5.4),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}
            onPress={() => Linking.openURL(AdmissionPortal)}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: '600',
                fontSize: normalizedFont.rf(2),
              }}>
              Admission Portal
            </Text>
          </TouchableOpacity>
        </View>
        <Space height={10} />
      </View>
      <View style={{backgroundColor: 'white', padding: 2}}>
        <View>
          <Heading
            text="The University comprises six campuses, 19 Faculties, 08 Constituent Colleges, and 138 departments"
            textAlign="center"
            fontSize={normalizedFont.rf(1.9)}
            color="#666"
          />
        </View>
        <Space height={normalized.hp(1)} />
      </View>
      <TabDetails programDetails={programDetails} />
    </View>
  );
};

export default Unidetails;

const styles = StyleSheet.create({});
