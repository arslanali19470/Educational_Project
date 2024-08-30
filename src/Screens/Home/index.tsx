import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {data, universitiesInPakistan} from '../../Utils/AppData';
// import {data} from '../../Utils/AppData';
import Space from '../../Components/CustomComponents/Space';

const App: React.FC = () => {
  // const universitiesInPakistan = [];
  // data.universities.forEach(uni => universitiesInPakistan.push(uni.name));
  // console.log(universitiesInPakistan);

  const [Isselected1, setIsselected1] = useState(false);
  const [Isselected2, setIsselected2] = useState(false);
  const [Isselected3, setIsselected3] = useState(false);

  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(
    null,
  );
  const [selectedDegreeLevel, setSelectedDegreeLevel] = useState<string | null>(
    null,
  );
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null,
  );
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const [showErrors, setShowErrors] = useState({
    university: false,
    degreeLevel: false,
    department: false,
    program: false,
  });
  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested', // Ignore specific warning message
  ]);

  const handleShowResults = () => {
    setShowErrors({
      university: !selectedUniversity,
      degreeLevel: !selectedDegreeLevel,
      department: !selectedDepartment,
      program: !selectedProgram,
    });
  };

  const AllUni = [];

  useEffect(() => {
    const uninm = data.universities;
  }, []);

  // List of universities from the predefined array
  const universities = universitiesInPakistan.map(uni => ({
    id: uni,
    name: uni,
  }));

  // Get degrees for the selected university
  const degreeLevels = selectedUniversity
    ? data.universities
        .find(uni => uni.name === selectedUniversity)
        ?.degrees.map(degree => ({
          id: degree.degreeType,
          name: degree.degreeType,
        })) || []
    : [];

  // Get departments for the selected degree level
  const departments = selectedDegreeLevel
    ? data.universities
        .find(uni => uni.name === selectedUniversity)
        ?.degrees.find(degree => degree.degreeType === selectedDegreeLevel)
        ?.departments.map(department => ({
          id: department.name,
          name: department.name,
        })) || []
    : [];

  // Get programs for the selected department
  const programs = selectedDepartment
    ? data.universities
        .find(uni => uni.name === selectedUniversity)
        ?.degrees.find(degree => degree.degreeType === selectedDegreeLevel)
        ?.departments.find(department => department.name === selectedDepartment)
        ?.programs.map(program => ({
          id: program.name,
          name: program.name,
        })) || []
    : [];

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={false}>
        <Space height={40} />

        <Text style={styles.label}>Select University</Text>
        <SearchableDropdown
          onItemSelect={item => {
            setSelectedUniversity(item.name);
            setSelectedDegreeLevel(null);
            setSelectedDepartment(null);
            setSelectedProgram(null);
            setIsselected1(false); // Reset state to hide department dropdown
            setIsselected2(false); // Reset state to hide program dropdown
            setIsselected3(false);
            setShowErrors(prevState => ({...prevState, university: false}));
          }}
          items={universities}
          defaultIndex={0}
          resetValue={false}
          placeholder={selectedUniversity || 'Select University'}
          textInputProps={{
            underlineColorAndroid: 'transparent',
            style: [
              pickerSelectStyles.input,
              showErrors.university && !selectedUniversity
                ? pickerSelectStyles.errorInput
                : {},
            ],
          }}
          itemsContainerStyle={dropdownStyles.listContainer}
          itemStyle={dropdownStyles.listItem}
          itemTextStyle={{color: dropdownStyles.listItem.color}}
          selectedItemTextStyle={dropdownStyles.listItemSelected}
          listProps={{
            nestedScrollEnabled: true,
          }}
          containerStyle={styles.dropdownContainer}
        />
        {showErrors.university && !selectedUniversity && (
          <Text style={styles.errorText}>Kindly select University Name*</Text>
        )}
        <Space height={20} />

        <Text style={styles.label}>Select Degree Level</Text>
        <SearchableDropdown
          onItemSelect={item => {
            setSelectedDegreeLevel(item.name);
            setIsselected1(true);
            setIsselected2(false); // Reset state to hide program dropdown
            setIsselected3(false);
            setSelectedDepartment(null);
            setSelectedProgram(null);
            setShowErrors(prevState => ({...prevState, degreeLevel: false}));
          }}
          items={degreeLevels}
          resetValue={false}
          placeholder={selectedDegreeLevel || 'Select the university first'}
          textInputProps={{
            underlineColorAndroid: 'transparent',
            style: [
              pickerSelectStyles.input,
              showErrors.degreeLevel && !selectedDegreeLevel
                ? pickerSelectStyles.errorInput
                : {},
            ],
          }}
          itemsContainerStyle={dropdownStyles.listContainer}
          itemStyle={dropdownStyles.listItem}
          itemTextStyle={{color: dropdownStyles.listItem.color}}
          selectedItemTextStyle={dropdownStyles.listItemSelected}
          listProps={{
            nestedScrollEnabled: true,
          }}
          containerStyle={styles.dropdownContainer}
          disabled={!selectedUniversity}
        />
        {showErrors.degreeLevel && !selectedDegreeLevel && (
          <Text style={styles.errorText}>Kindly select the Degree*</Text>
        )}
        <Space height={20} />

        {Isselected1 && (
          <>
            <Text style={styles.label}>Select Department</Text>
            <SearchableDropdown
              onItemSelect={item => {
                setSelectedDepartment(item.name);
                setIsselected2(true);
                setIsselected3(false);
                setSelectedProgram(null);
                setShowErrors(prevState => ({...prevState, department: false}));
              }}
              items={departments}
              resetValue={false}
              placeholder={selectedDepartment || 'Select Department'}
              textInputProps={{
                underlineColorAndroid: 'transparent',
                style: [
                  pickerSelectStyles.input,
                  showErrors.department && !selectedDepartment
                    ? pickerSelectStyles.errorInput
                    : {},
                ],
              }}
              itemsContainerStyle={dropdownStyles.listContainer}
              itemStyle={dropdownStyles.listItem}
              itemTextStyle={{color: dropdownStyles.listItem.color}}
              selectedItemTextStyle={dropdownStyles.listItemSelected}
              listProps={{
                nestedScrollEnabled: true,
              }}
              containerStyle={styles.dropdownContainer}
              disabled={!selectedDegreeLevel}
            />
            {showErrors.department && !selectedDepartment && (
              <Text style={styles.errorText}>
                Kindly select the Department*
              </Text>
            )}
            <Space height={20} />
          </>
        )}
        {Isselected2 && (
          <>
            <Text style={styles.label}>Select Program</Text>
            <SearchableDropdown
              onItemSelect={item => {
                setSelectedProgram(item.name);
                setIsselected3(true);
                setShowErrors(prevState => ({...prevState, program: false}));
              }}
              items={programs}
              resetValue={false}
              placeholder={selectedProgram || 'Select Program'}
              textInputProps={{
                underlineColorAndroid: 'transparent',
                style: [
                  pickerSelectStyles.input,
                  showErrors.program && !selectedProgram
                    ? pickerSelectStyles.errorInput
                    : {},
                ],
              }}
              itemsContainerStyle={dropdownStyles.listContainer}
              itemStyle={dropdownStyles.listItem}
              itemTextStyle={{color: dropdownStyles.listItem.color}}
              selectedItemTextStyle={dropdownStyles.listItemSelected}
              listProps={{
                nestedScrollEnabled: true,
              }}
              containerStyle={styles.dropdownContainer}
              disabled={!selectedDepartment}
            />
            {showErrors.program && !selectedProgram && (
              <Text style={styles.errorText}>Kindly select the Program*</Text>
            )}
            <Space height={20} />
          </>
        )}

        {Isselected3 && (
          <>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={handleShowResults}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 17}}>
                Show Results
              </Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const pickerSelectStyles = {
  input: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
  },
  errorInput: {
    borderColor: 'red',
  },
};

const styles = StyleSheet.create({
  buttonstyle: {
    backgroundColor: '#0455a4',
    width: '100%',
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
  },

  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  errorText: {
    color: 'red',
    // marginBottom: 20,
    marginLeft: 10,
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    marginBottom: 5,
  },
});

const dropdownStyles = {
  listContainer: {
    borderRadius: 10,
    backgroundColor: '#eee',
    marginTop: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  listItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  listItemSelected: {
    color: '#fff',
  },
};

export default App;
