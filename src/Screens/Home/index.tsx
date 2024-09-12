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

  const [loading, setLoading] = useState<boolean>(false);

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
          }}>
          <LoadingModel Loading={loading} />
          <Space height={normalized.hp(3)} />
          <View style={{alignItems: 'center', marginBottom: 0}}>
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
              // backgroundColor: 'white',
              paddingLeft: normalized.wp(8),
              height: normalized.hp(7.5),
              borderRadius: normalized.wp(2.5),
              zIndex: 100,
              width: normalized.wp(90),
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
              setOpen={() => {
                setFirstOpen(!firstOpen);
                setSecondOpen(false);
                setThirdOpen(false);
                setFourthOpen(false);
              }}
              setValue={setFirstValue}
              placeholder="University"
              searchable
              searchPlaceholder="Search University"
              style={{
                width: normalized.wp(70),
                height: normalized.hp(5),
                borderWidth: 0,
              }}
              searchTextInputStyle={{
                borderWidth: 0,
              }}
              dropDownContainerStyle={{
                backgroundColor: '#fff',
                maxHeight: normalized.hp(40),
                padding: 10,
                width: normalized.wp(90),
                marginLeft: normalized.wp(-18),
                borderWidth: 0,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 12},
                shadowOpacity: 0.58,
                shadowRadius: 16.0,
                elevation: 24,
              }}
              // zIndex={4000}
              // zIndexInverse={1000}
              ListEmptyComponent={() => (
                <Text style={{padding: 0, textAlign: 'center', color: '#999'}}>
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
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              paddingLeft: normalized.wp(8),
              height: normalized.hp(7.5),
              borderRadius: normalized.wp(2.5),
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
              setOpen={() => {
                setSecondOpen(!secondOpen);
                setFirstOpen(false);
                setThirdOpen(false);
                setFourthOpen(false);
              }}
              setValue={setSecondValue}
              placeholder="Degree Level"
              searchable
              searchPlaceholder="Search Degree"
              style={{
                width: normalized.wp(70),
                height: normalized.hp(5),
                borderWidth: 0,
              }}
              searchTextInputStyle={{
                borderWidth: 0,
              }}
              dropDownContainerStyle={{
                backgroundColor: '#fff',
                maxHeight: normalized.hp(40),
                padding: 10,
                width: normalized.wp(90),
                marginLeft: normalized.wp(-18),
                borderWidth: 0,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 12},
                shadowOpacity: 0.58,
                shadowRadius: 16.0,
                elevation: 24,
              }}
              zIndex={3000}
              zIndexInverse={2000}
            />
          </View>
          <Space height={normalized.hp(5)} />
          {/* Third DropDown */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              // padding: 5,
              paddingLeft: normalized.wp(8),
              height: normalized.hp(7.5),
              borderRadius: normalized.wp(2.5),
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
                width: normalized.wp(70),
                height: normalized.hp(5),
                borderWidth: 0,
              }}
              searchTextInputStyle={{
                borderWidth: 0, // Remove the border inside the search text input
              }}
              dropDownContainerStyle={{
                backgroundColor: '#fff',
                maxHeight: normalized.hp(40),
                padding: 10,
                // width: 330,
                // marginLeft: -70,
                width: normalized.wp(89),
                marginLeft: normalized.wp(-18.5),
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
                  Select the Degree first
                </Text>
              )}
            />
          </View>
          <Space height={normalized.hp(5)} />
          {/* Fourth DropDown */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              // padding: 5,
              paddingLeft: normalized.wp(8),
              height: normalized.hp(7.5),
              borderRadius: normalized.wp(2.5),
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
                width: normalized.wp(70),
                height: normalized.hp(5),
                borderWidth: 0,
              }}
              searchTextInputStyle={{
                borderWidth: 0, // Remove the border inside the search text input
              }}
              dropDownContainerStyle={{
                backgroundColor: '#fff',
                maxHeight: normalized.hp(30),
                padding: 10,
                width: normalized.wp(89),
                marginLeft: normalized.wp(-18.5),
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
                  Select the Department first
                </Text>
              )}
            />
          </View>
          <Space height={normalized.hp(18)} />

          {/* Similar implementation for third and fourth dropdowns */}
          {/* Submit Button */}
          <TouchableOpacity
            style={{
              backgroundColor: '#0961F5',
              // height: 47,
              height: normalized.hp(7.5),
              justifyContent: 'center',
              // alignItems: 'flex-end',
              // paddingRight: 10,
              // paddingRight: normalized.wp(2),
              borderRadius: normalized.hp(7),
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
                if (selectedProgram && selectedUniversity) {
                  // Construct the ProgramDetails object to match the expected structure
                  const programDetails: ProgramDetails = {
                    name: selectedProgram.name,
                    feeStructure: selectedProgram.feeStructure,
                    facilitiesMembers: selectedProgram.facilitiesMembers.map(
                      member => ({
                        ProfessorName: member.ProfessorName,
                        Rank: member.Rank,
                        profImg: member.profImg || 'default-prof-img-url', // Handle undefined profImg
                      }),
                    ),
                    LastYearMerit: selectedProgram.LastYearMerit || 'N/A', // Provide default for optional fields
                  };

                  navigation.navigate('Unidetails', {
                    programDetails, // Pass the transformed object
                    universityName: selectedUniversity.name,
                    UniIMG: selectedUniversity.UniIMG || 'default-uni-img-url', // Provide defaults if undefined
                    Website:
                      selectedUniversity.Website || 'No Website available',
                    AdmissionPortal:
                      selectedUniversity.AdmissionPortal ||
                      'No Admission Portal available',
                  });
                }
              }
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: normalizedFont.rf(2.6),
                  marginLeft: normalized.wp(29),
                  letterSpacing: 1,
                }}>
                Continue
              </Text>
              <View
                style={{
                  height: normalized.hp(6.2),
                  width: normalized.hp(6.2),
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                  marginLeft: normalized.wp(19),
                  alignSelf: 'flex-end',
                }}>
                <View style={{alignItems: 'center'}}>
                  <MaterialIcons name="east" color="#0961F5" size={25} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* ... */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Home;
