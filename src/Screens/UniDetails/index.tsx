import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons, normalized} from '../../Utils/AppConstant';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../Navigation/MainNavigation';
import {RouteProp} from '@react-navigation/native';
import {PUIMG} from '../../Assets';
import Picture from '../../Components/CustomComponents/Picture';
import Heading from '../../Components/CustomComponents/Heading';
import Space from '../../Components/CustomComponents/Space';
import TabDetails from '../TabDetails';

type ArgumentNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Unidetails'
>;
type ArgumentRouteProp = RouteProp<RootStackParamList, 'Unidetails'>;

export type ArgumentScreenProps = {
  navigation: ArgumentNavigationProp;
  route: ArgumentRouteProp;
};

const Unidetails = ({navigation, route}: ArgumentScreenProps) => {
  const {programDetails, universityName, UniIMG, Website, AdmissionPortal} =
    route.params;

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
          style={{width: 40}}>
          <MaterialIcons name="keyboard-backspace" color="black" size={30} />
        </TouchableOpacity>
        {/* 
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>
          {programDetails.name}
        </Text>
        <Text style={{fontSize: 18, marginTop: 10}}>
          Fee Structure: {programDetails.feeStructure}
        </Text>
        <Text style={{fontSize: 18, marginTop: 10}}>Facilities Members:</Text>
        {programDetails.facilitiesMembers.map(
          (member: string, index: number) => (
            <Text key={index} style={{fontSize: 16, marginTop: 5}}>
              - {member}
            </Text>
          ),
        )}
      </View> */}
        <View style={{marginTop: -30}}>
          <Picture
            localSource={UniIMG}
            height={normalized.hp('15%')}
            width={normalized.hp('28%')}
            resizeMode="contain"
            alignSelf="center"
          />
        </View>
        <Space height={2} />
        <Heading
          // text="Punjab University"
          text={universityName}
          weight={'bold'}
          textAlign="center"
          fontSize={20}
          color="black"
        />
        <Space height={5} />
        <Heading text="Lahore" textAlign="center" fontSize={15} />
        <Space height={15} />
        <View style={{flexDirection: 'row', gap: 50, justifyContent: 'center'}}>
          <View>
            <Heading
              text="26"
              weight={'bold'}
              textAlign="center"
              fontSize={18}
            />
            <Heading text="Courses" textAlign="center" fontSize={15} />
          </View>
          <View>
            <Heading
              text="15800"
              weight={'bold'}
              textAlign="center"
              fontSize={18}
            />
            <Heading text="Students" textAlign="center" fontSize={15} />
          </View>
          <View>
            <Heading
              text="100"
              weight={'bold'}
              textAlign="center"
              fontSize={18}
            />
            <Heading text="Rating" textAlign="center" fontSize={15} />
          </View>
        </View>
        <Space height={15} />
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ddd',
              width: '40%',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}
            onPress={() => Linking.openURL(Website)}>
            <Text
              style={{textAlign: 'center', color: 'black', fontWeight: '600'}}>
              Website
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#0961F5',
              width: '40%',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}
            onPress={() => Linking.openURL(AdmissionPortal)}>
            <Text
              style={{textAlign: 'center', color: 'white', fontWeight: '600'}}>
              Admission Portal{' '}
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
            //   textAlign="justify"
            fontSize={14}
            color="#666"
          />
        </View>
        <Space height={10} />
      </View>
      <TabDetails
        facilitiesMembers={programDetails.facilitiesMembers}
        LastMerit={programDetails.LastYearMerit}
        ProgramName={programDetails.name}
        FeesStruure={programDetails.feeStructure}
        // profImg: Profile
        profImg={programDetails.profImg}
      />
    </View>
  );
};

export default Unidetails;

const styles = StyleSheet.create({});
