import React, {useCallback, useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Picture from '../../Components/CustomComponents/Picture';
import {HomeScreenLogo, List1, List2, List3, List4} from '../../assets';
import {MaterialIcons, normalized} from '../../Utils/AppConstant';
import Space from '../../Components/CustomComponents/Space';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {data, universitiesInPakistan} from '../../Utils/AppData';

//import LoadingModel from '../../Components/CustomComponents/LoadingModel';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {styles} from './styles';

const Home = () => {
  const [firstOpen, setFirstOpen] = useState(false);
  const [firstValue, setFirstValue] = useState(null);

  const [secondOpen, setSecondOpen] = useState(false);
  const [secondValue, setSecondValue] = useState(null);

  const [thirdOpen, setThirdOpen] = useState(null);
  const [thirdValue, setThirdValue] = useState(null);

  const [fourthOpen, setFourthOpen] = useState(false);
  const [fourthValue, setFourthValue] = useState(null);

  const [backPressCount, setBackPressCount] = useState(0);

  const [degrees, setDegrees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [programs, setPrograms] = useState([]);

  const navigation = useNavigation();
  useEffect(() => {
    if (firstValue) {
      const selectedUniversity = data.universities.find(
        university => university.name === firstValue,
      );
      if (selectedUniversity) {
        const degreeOptions = selectedUniversity.degrees.map(degree => ({
          label: degree.degreeType,
          value: degree.degreeType,
        }));
        setDegrees(degreeOptions);
        setSecondValue(null);
        setThirdValue(null);
        setFourthValue(null);
        setDepartments([]);
        setPrograms([]);
      }
    }
  }, [firstValue]);

  useEffect(() => {
    if (secondValue && firstValue) {
      const selectedUniversity = data.universities.find(
        university => university.name === firstValue,
      );
      const selectedDegree = selectedUniversity?.degrees.find(
        degree => degree.degreeType === secondValue,
      );
      if (selectedDegree) {
        const departmentOptions = selectedDegree.departments.map(dept => ({
          label: dept.name,
          value: dept.name,
        }));
        setDepartments(departmentOptions);
        setThirdValue(null);
        setFourthValue(null);
        setPrograms([]);
      }
    }
  }, [secondValue]);

  useEffect(() => {
    if (thirdValue && secondValue && firstValue) {
      const selectedUniversity = data.universities.find(
        university => university.name === firstValue,
      );
      const selectedDegree = selectedUniversity?.degrees.find(
        degree => degree.degreeType === secondValue,
      );
      const selectedDepartment = selectedDegree?.departments.find(
        dept => dept.name === thirdValue,
      );
      if (selectedDepartment) {
        const programOptions = selectedDepartment.programs.map(program => ({
          label: program.name,
          value: program.name,
        }));
        setPrograms(programOptions);
        setFourthValue(null);
      }
    }
  }, [thirdValue]);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (firstOpen) {
          setFirstOpen(false);
          return true;
        }
        if (secondOpen) {
          setSecondOpen(false);
          return true;
        }
        if (thirdOpen) {
          setThirdOpen(false);
          return true;
        }
        if (fourthOpen) {
          setFourthOpen(false);
          return true;
        }

        if (backPressCount === 0) {
          ToastAndroid.show('Please press again to exit', ToastAndroid.SHORT);
          setBackPressCount(1);

          setTimeout(() => {
            setBackPressCount(0);
          }, 2000);

          return true;
        }

        if (backPressCount === 1) {
          BackHandler.exitApp();
          return true;
        }

        return false;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => backHandler.remove();
    }, [firstOpen, secondOpen, thirdOpen, fourthOpen, backPressCount]),
  );

  const BtnFunction = () => {
    {
      if (fourthValue) {
        const selectedUniversity = data.universities.find(
          university => university.name === firstValue,
        );
        const selectedDegree = selectedUniversity?.degrees.find(
          degree => degree.degreeType === secondValue,
        );
        const selectedDepartment = selectedDegree?.departments.find(
          dept => dept.name === thirdValue,
        );
        const selectedProgram = selectedDepartment?.programs.find(
          program => program.name === fourthValue,
        );
        if (selectedProgram) {
          navigation.navigate('Unidetails', {
            programDetails: selectedProgram,
            universityName: selectedUniversity?.name,
            UniIMG: selectedUniversity?.UniIMG,
            Website: selectedUniversity?.Website,
            AdmissionPortal: selectedUniversity?.AdmissionPortal,
          });
        }
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.KeyAvoidViewStyle}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
      {/*  
      <LoadingModel Loading={false} />
      */}

      <View style={styles.ImageBox}>
        <Picture
          localSource={HomeScreenLogo}
          height={responsiveHeight(20)}
          width={responsiveWidth(65)}
          resizeMode="contain"
        />
      </View>
      <View style={styles.FirstListView}>
        <Picture
          localSource={List1}
          height={responsiveHeight(4)}
          width={responsiveWidth(16)}
          resizeMode="contain"
        />
        <DropDownPicker
          open={firstOpen}
          value={firstValue}
          items={universitiesInPakistan.map(uni => ({
            label: uni,
            value: uni,
          }))}
          setOpen={() => {
            setFirstOpen(!firstOpen);
            setSecondOpen(false);
            setThirdOpen(false);
            setFourthOpen(false);
          }}
          setValue={setFirstValue}
          setItems={() => {}}
          placeholder="University"
          searchable={true}
          searchPlaceholder="Search University"
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
            maxHeight: responsiveHeight(24),
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 10,
            top: responsiveHeight(34),
          }}
          modalProps={{
            animationType: 'fade',
            transparent: true,
            presentationStyle: 'overFullScreen',
            onRequestClose: () => setFirstOpen(false),
          }}
          zIndex={9000}
          // zIndexInverse={9000}
          ListEmptyComponent={() => (
            <Text style={styles.PlaceHolderColor}>
              Select the university first
            </Text>
          )}
        />
      </View>

      <Space height={normalized.hp(5)} />

      {/* Second DropDown */}
      <View style={[styles.FirstListView, {zIndex: 90}]}>
        <Picture
          localSource={List2}
          height={responsiveHeight(5)}
          width={responsiveWidth(16.5)}
          resizeMode="contain"
        />
        <DropDownPicker
          open={secondOpen}
          value={secondValue}
          items={degrees}
          //   setOpen={setSecondOpen}
          setOpen={() => {
            setSecondOpen(!secondOpen);
            setFirstOpen(false);
            setThirdOpen(false);
            setFourthOpen(false);
          }}
          setValue={setSecondValue}
          setItems={() => {}}
          placeholder="Degree Level"
          searchPlaceholder="Search Degree"
          style={{
            backgroundColor: '#fff',
            width: responsiveWidth(66),
            borderRadius: 10,
            borderWidth: 0,
          }}
          listMode="SCROLLVIEW"
          dropDownContainerStyle={{
            backgroundColor: '#fff',
            width: responsiveWidth(82),
            marginTop: responsiveHeight(0.56),
            marginLeft: responsiveWidth(-16),
            borderWidth: 0,
            elevation: 2,
          }}
          zIndex={6000}
          // zIndexInverse={2000}
          ListEmptyComponent={() => (
            <Text style={styles.PlaceHolderColor}>
              Select the university first
            </Text>
          )}
        />
      </View>

      <Space height={40} />

      {/* Third DropDown */}
      <View style={[styles.FirstListView, {zIndex: 80}]}>
        <Picture
          localSource={List3}
          height={responsiveHeight(5)}
          width={responsiveWidth(16.5)}
          resizeMode="contain"
        />
        <DropDownPicker
          open={thirdOpen}
          value={thirdValue}
          items={departments}
          setOpen={() => {
            setThirdOpen(!thirdOpen);
            setSecondOpen(false);
            setFirstOpen(false);
            setFourthOpen(false);
          }}
          setValue={setThirdValue}
          setItems={() => {}}
          placeholder="Department"
          searchable={true}
          searchPlaceholder="Search Department"
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
          modalContentContainerStyle={{
            width: responsiveWidth(85),
            maxHeight: responsiveHeight(38),
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 10,
            top: responsiveHeight(57.5),
          }}
          modalProps={{
            animationType: 'fade',
            transparent: true,
            presentationStyle: 'overFullScreen',
          }}
          listMode="MODAL"
          zIndex={300}
          ListEmptyComponent={() => (
            <Text style={styles.PlaceHolderColor}>Select the Degree first</Text>
          )}
        />
      </View>

      <Space height={40} />

      {/* Fourth DropDown */}
      <View style={[styles.FirstListView, {zIndex: 70}]}>
        <Picture
          localSource={List4}
          height={responsiveHeight(4)}
          width={responsiveWidth(16.5)}
          resizeMode="contain"
        />
        <DropDownPicker
          open={fourthOpen}
          value={fourthValue}
          items={programs}
          //   setOpen={setFourthOpen}
          setOpen={() => {
            setThirdOpen(false);
            setSecondOpen(false);
            setFirstOpen(false);
            setFourthOpen(!fourthOpen);
          }}
          setValue={setFourthValue}
          setItems={() => {}}
          placeholder="Program"
          searchable={true}
          searchPlaceholder="Search Program"
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
            gap: 4,
            top: responsiveHeight(69.2),
          }}
          modalProps={{
            animationType: 'fade',
            transparent: true,
            presentationStyle: 'overFullScreen',
          }}
          zIndex={1000}
          zIndexInverse={100}
          ListEmptyComponent={() => (
            <Text style={styles.PlaceHolderColor}>
              Select the Department first
            </Text>
          )}
        />
      </View>

      <Space height={120} />

      {/* Submit Button */}
      <TouchableOpacity style={styles.ButtonMainstyle} onPress={BtnFunction}>
        <View style={styles.BtnDirection}>
          <Text style={styles.BtnText}>Continue</Text>
          <View style={styles.BtnRoundIcon}>
            <View style={{alignItems: 'center'}}>
              <MaterialIcons name="east" color="#0961F5" size={25} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Home;
