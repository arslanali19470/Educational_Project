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
  ActivityIndicator,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Picture from '../../Components/CustomComponents/Picture';
import {
  HomeScreenLogo,
  List1,
  List2,
  List3,
  List4,
  Profile,
} from '../../Assets';
import {
  MaterialIcons,
  multiThemeColor,
  normalized,
} from '../../Utils/AppConstant';
import Space from '../../Components/CustomComponents/Space';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {data, universitiesInPakistan} from '../../Utils/AppData';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../Navigation/MainNavigation';
import LoadingModel from '../../Components/CustomComponents/LoadingModel';

type ArgumentNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type ArgumentRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type ArgumentScreenProps = {
  navigation: ArgumentNavigationProp;
  route: ArgumentRouteProp;
};

const Home = () => {
  const [firstOpen, setFirstOpen] = useState(false);
  const [firstValue, setFirstValue] = useState(null);

  const [secondOpen, setSecondOpen] = useState(false);
  const [secondValue, setSecondValue] = useState(null);

  const [thirdOpen, setThirdOpen] = useState(false);
  const [thirdValue, setThirdValue] = useState(null);

  const [fourthOpen, setFourthOpen] = useState(false);
  const [fourthValue, setFourthValue] = useState(null);

  const [backPressCount, setBackPressCount] = useState(0);

  const [degrees, setDegrees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [programs, setPrograms] = useState([]);

  const navigation = useNavigation<ArgumentNavigationProp>();

  const [Loading, setLoading] = useState(false);
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
      const selectedDegree = selectedUniversity.degrees.find(
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
      const selectedDegree = selectedUniversity.degrees.find(
        degree => degree.degreeType === secondValue,
      );
      const selectedDepartment = selectedDegree.departments.find(
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
        //  backgroundColor: '#F5F9FF'
        // backgroundColor: multiThemeColor().main_background,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: '#F5F9FF',
            // backgroundColor: multiThemeColor().main_background,
            // backgroundColor: 'red',
          }}>
          <LoadingModel Loading={Loading} />
          <View
            style={{
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Picture
              localSource={HomeScreenLogo}
              height={normalized.hp('20%')}
              width={normalized.hp('35%')}
              resizeMode="contain"
            />
          </View>

          {/* First DropDown */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: 5,
              paddingLeft: 30,
              height: 50,
              borderRadius: 10,
              zIndex: 100,
            }}>
            <Picture
              localSource={List1}
              height={normalized.hp('5%')}
              width={normalized.hp('10%')}
              resizeMode="contain"
            />
            <DropDownPicker
              open={firstOpen}
              value={firstValue}
              items={universitiesInPakistan.map(uni => ({
                label: uni,
                value: uni,
              }))}
              //   setOpen={setFirstOpen}
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
                width: 250,
                height: 40,
                borderWidth: 0,
              }}
              searchTextInputStyle={{
                borderWidth: 0, // Remove the border inside the search text input
              }}
              dropDownContainerStyle={{
                backgroundColor: '#fff',
                maxHeight: 300,
                width: 320,
                marginLeft: -66,
                marginTop: -42,
                borderWidth: 0,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,
                elevation: 24,
              }}
              zIndex={9000}
              zIndexInverse={9000}
              ListEmptyComponent={() => (
                <Text style={{padding: 10, textAlign: 'center', color: '#999'}}>
                  Select the university first
                </Text>
              )}
            />
          </View>

          <Space height={40} />

          {/* Second DropDown */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: 5,
              paddingLeft: 30,
              height: 50,
              borderRadius: 10,
              zIndex: 90,
            }}>
            <Picture
              localSource={List2}
              height={normalized.hp('5%')}
              width={normalized.hp('10%')}
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
              searchable={true}
              searchPlaceholder="Search Degree"
              style={{
                backgroundColor: '#fff',
                width: 250,
                height: 40,
                borderWidth: 0,
              }}
              searchTextInputStyle={{
                borderWidth: 0, // Remove the border inside the search text input
              }}
              dropDownContainerStyle={{
                backgroundColor: '#fff',
                maxHeight: 300,
                width: 330,
                marginLeft: -70,
                borderWidth: 0,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,
                elevation: 24,
              }}
              zIndex={2000}
              zIndexInverse={2000}
              ListEmptyComponent={() => (
                <Text style={{padding: 10, textAlign: 'center', color: '#444'}}>
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
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: 5,
              paddingLeft: 30,
              height: 50,
              borderRadius: 10,
              zIndex: 80,
            }}>
            <Picture
              localSource={List3}
              height={normalized.hp('5%')}
              width={normalized.hp('10%')}
              resizeMode="contain"
            />
            <DropDownPicker
              open={thirdOpen}
              value={thirdValue}
              items={departments}
              //   setOpen={setThirdOpen}
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
                width: 250,
                height: 40,
                borderWidth: 0,
              }}
              searchTextInputStyle={{
                borderWidth: 0, // Remove the border inside the search text input
              }}
              dropDownContainerStyle={{
                backgroundColor: '#fff',
                maxHeight: 300,
                width: 330,
                marginLeft: -70,
                borderWidth: 0,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,
                elevation: 24,
              }}
              zIndex={1000}
              zIndexInverse={3000}
              ListEmptyComponent={() => (
                <Text style={{padding: 10, textAlign: 'center', color: '#444'}}>
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
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: 5,
              paddingLeft: 30,
              height: 50,
              borderRadius: 10,
              zIndex: 70,
            }}>
            <Picture
              localSource={List4}
              height={normalized.hp('5%')}
              width={normalized.hp('10%')}
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
                width: 250,
                height: 40,
                borderWidth: 0,
              }}
              searchTextInputStyle={{
                borderWidth: 0, // Remove the border inside the search text input
              }}
              dropDownContainerStyle={{
                backgroundColor: '#fff',
                maxHeight: 300,
                width: 330,
                marginLeft: -70,
                borderWidth: 0,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,
                elevation: 24,
              }}
              zIndex={100}
              zIndexInverse={100}
              ListEmptyComponent={() => (
                <Text style={{padding: 10, textAlign: 'center', color: '#444'}}>
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
              height: 47,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 10,
              borderRadius: 40,
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
                    universityName: selectedUniversity.name,
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
                  borderRadius: 100,
                  marginLeft: 90,
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Home;
