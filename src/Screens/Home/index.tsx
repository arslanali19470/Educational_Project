import React, {useCallback, useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Text,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import DropDownPicker, {
  ValueType,
  ItemType,
} from 'react-native-dropdown-picker';
import Picture from '../../Components/CustomComponents/Picture';
import {HomeScreenLogo, List1, List2, List3, List4} from '../../Assets';
import {
  MaterialIcons,
  normalized,
  normalizedFont,
} from '../../Utils/AppConstant';
import Space from '../../Components/CustomComponents/Space';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {
  data,
  ProgramDetails,
  universitiesInPakistan,
} from '../../Utils/AppData';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../Navigation/MainNavigation';
import LoadingModel from '../../Components/CustomComponents/LoadingModel';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

type ArgumentNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type ArgumentRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type ArgumentScreenProps = {
  navigation: ArgumentNavigationProp;
  route: ArgumentRouteProp;
};

type DropDownValueType = string | null;
type DropDownItemType = {label: string; value: string};

const Home = () => {
  const [firstOpen, setFirstOpen] = useState<boolean>(false);
  const [firstValue, setFirstValue] = useState<DropDownValueType>(null);

  const [secondOpen, setSecondOpen] = useState<boolean>(false);
  const [secondValue, setSecondValue] = useState<DropDownValueType>(null);

  const [thirdOpen, setThirdOpen] = useState<boolean>(false);
  const [thirdValue, setThirdValue] = useState<DropDownValueType>(null);

  const [fourthOpen, setFourthOpen] = useState<boolean>(false);
  const [fourthValue, setFourthValue] = useState<DropDownValueType>(null);

  const [backPressCount, setBackPressCount] = useState<number>(0);

  const [degrees, setDegrees] = useState<DropDownItemType[]>([]);
  const [departments, setDepartments] = useState<DropDownItemType[]>([]);
  const [programs, setPrograms] = useState<DropDownItemType[]>([]);

  const navigation = useNavigation<ArgumentNavigationProp>();
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

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: '#E8F1FF',
        paddingHorizontal: 30,
        paddingTop: 35,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
      <LoadingModel Loading={false} />
      <View
        style={{
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Picture
          localSource={HomeScreenLogo}
          height={responsiveHeight(20)}
          width={responsiveWidth(65)}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingHorizontal: 4,
          height: responsiveHeight(6.8),
          borderRadius: 10,
          zIndex: 100,
        }}>
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
          zIndexInverse={9000}
          ListEmptyComponent={() => (
            <Text style={{padding: 15, textAlign: 'center', color: '#545454'}}>
              Select the university first
            </Text>
          )}
        />
      </View>

          <Space height={normalized.hp(5)} />

      {/* Second DropDown */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingHorizontal: 4,
          height: responsiveHeight(6.8),
          borderRadius: 10,
          zIndex: 90,
        }}>
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
          zIndexInverse={2000}
          ListEmptyComponent={() => (
            <Text style={{padding: 15, textAlign: 'center', color: '#545454'}}>
              Select the university first
            </Text>
          )}
        />
      </View>

      <Space height={40} />

      {/* Third DropDown */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingHorizontal: 4,
          height: responsiveHeight(6.8),
          width: responsiveWidth(85),
          borderRadius: 10,
          zIndex: 80,
        }}>
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
            <Text style={{padding: 15, textAlign: 'center', color: '#545454'}}>
              Select the Degree first
            </Text>
          )}
        />
      </View>

      <Space height={40} />

      {/* Fourth DropDown */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingHorizontal: 4,
          height: responsiveHeight(6.8),
          borderRadius: 10,
          zIndex: 70,
        }}>
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
            borderRadius: 10,
            borderWidth: 0,
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
            <Text style={{padding: 15, textAlign: 'center', color: '#545454'}}>
              Select the Department first
            </Text>
          )}
        />
      </View>

      <Space height={120} />

      {/* Submit Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#0961F5',
          height: responsiveHeight(6.8),
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingRight: 8,
          borderRadius: 50,
        }}
        onPress={() => {
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
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            // gap: 20,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
            Continue
          </Text>
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              marginLeft: 85,
            }}>
            <View style={{alignItems: 'center'}}>
              <MaterialIcons name="east" color="#0961F5" size={25} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity
            style={{
              backgroundColor: '#0961F5',
              height: 47,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 10,
              borderRadius: 40,
            }}
            onPress={() => {
              if (!firstValue) {
                ToastAndroid.show(
                  'Please select a University first!',
                  ToastAndroid.SHORT,
                );
                return;
              }
              if (!secondValue) {
                ToastAndroid.show(
                  'Please select a Degree first!',
                  ToastAndroid.SHORT,
                );
                return;
              }
              if (!thirdValue) {
                ToastAndroid.show(
                  'Please select a Department first!',
                  ToastAndroid.SHORT,
                );
                return;
              }
              if (!fourthValue) {
                ToastAndroid.show(
                  'Please select a Program first!',
                  ToastAndroid.SHORT,
                );
                return;
              }

              // All fields are selected, proceed to navigate
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
                  universityName: selectedUniversity.name,
                });
              }
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Continue</Text>
            </View>
          </TouchableOpacity> */}
    </KeyboardAvoidingView>
  );
};

export default Home;
