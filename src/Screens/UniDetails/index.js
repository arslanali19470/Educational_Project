import React from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {
  MaterialIcons,
  normalized,
  normalizedFont,
} from '../../Utils/AppConstant';
import Picture from '../../Components/CustomComponents/Picture';
import Heading from '../../Components/CustomComponents/Heading';
import Space from '../../Components/CustomComponents/Space';
import TabInfo from '../../Components/TabInfo';
import {styles} from './styles';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Unidetails = ({navigation, route}) => {
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

  return (
    <View style={styles.MainView}>
      <View style={styles.UpperBox}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <MaterialIcons name="keyboard-backspace" color="black" size={30} />
        </TouchableOpacity>

        <View style={styles.uniImageContainer}>
          <Picture
            localSource={parseInt(UniIMG)}
            height={responsiveHeight('15')}
            width={responsiveWidth('28')}
            resizeMode="contain"
            alignSelf="center"
          />
        </View>

        <Space height={responsiveHeight(1)} />

        <Heading
          text={universityName}
          textAlign="center"
          fontSize={responsiveFontSize(2.8)}
          color="black"
          fontFamily="Jost-SemiBold"
        />

        <Space height={responsiveHeight(0.5)} />

        <Heading
          text="Lahore"
          textAlign="center"
          fontSize={responsiveFontSize(2.1)}
        />

        <Space height={responsiveHeight(2)} />

        <View style={styles.infoRow}>
          <View>
            <Heading
              text="26"
              weight={'bold'}
              textAlign="center"
              fontSize={responsiveFontSize(2.5)}
            />
            <Heading
              text="Courses"
              textAlign="center"
              fontSize={responsiveFontSize(2.1)}
            />
          </View>

          <View>
            <Heading
              text="15800"
              weight={'bold'}
              textAlign="center"
              fontSize={responsiveFontSize(2.5)}
            />
            <Heading
              text="Students"
              textAlign="center"
              fontSize={responsiveFontSize(2.1)}
            />
          </View>

          <View>
            <Heading
              text="100"
              weight={'bold'}
              textAlign="center"
              fontSize={responsiveFontSize(2.5)}
            />
            <Heading
              text="Rating"
              textAlign="center"
              fontSize={responsiveFontSize(2.1)}
            />
          </View>
        </View>

        <Space height={responsiveHeight(2)} />

        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={styles.websiteButton}
            onPress={() => Linking.openURL(Website)}>
            <Text style={styles.websiteButtonText}>Website</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.admissionButton}
            onPress={() => Linking.openURL(AdmissionPortal)}>
            <Text style={styles.admissionButtonText}>Admission Portal</Text>
          </TouchableOpacity>
        </View>

        <Space height={25} />
      </View>

      <View style={styles.infoBox}>
        <Heading
          text="The University comprises six campuses, 19 Faculties, 08 Constituent Colleges, and 138 departments"
          textAlign="center"
          fontSize={responsiveFontSize(1.7)}
          color="#A0A4AB"
          fontFamily="Mulish-Regular"
        />
        <Space height={15} />
        <TabInfo programDetails={programDetails} />
      </View>
    </View>
  );
};

export default Unidetails;
