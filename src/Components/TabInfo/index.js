import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Facality from './Faculty';
import FeeStructure from './FeeStructure';
import LastYearMerit from './LastYearMerit';

const TabInfo = ({programDetails}) => {
  const [activeTab, setActiveTab] = useState('faculty'); // Default active tab is 'faculty'

  const facilitiesMembers = programDetails.facilitiesMembers;
  const ProgramName = programDetails.name;
  const profImg = programDetails.profImg;
  const feeStructure = programDetails.feeStructure;
  const LastMerit = programDetails.LastYearMerit;

  return (
    <View>
      <View
        style={{
          backgroundColor: '#E8F1FF',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 3,
          paddingHorizontal: 3,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'faculty' && styles.active]}
          onPress={() => setActiveTab('faculty')}>
          <Text style={styles.textStyle}>Faculty</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'feeStructure' && styles.active,
          ]}
          onPress={() => setActiveTab('feeStructure')}>
          <Text style={styles.textStyle}>Fee Structure</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'lastYearMerit' && styles.active,
          ]}
          onPress={() => setActiveTab('lastYearMerit')}>
          <Text style={styles.textStyle}>Last Year Merit</Text>
        </TouchableOpacity>
      </View>

      {/* Conditionally render the components based on the active tab */}
      {activeTab === 'faculty' && (
        <Facality
          facilitiesMembers={facilitiesMembers}
          ProgramName={ProgramName}
          profImg={profImg}
        />
      )}
      {activeTab === 'feeStructure' && (
        <FeeStructure feeStructure={feeStructure} />
      )}
      {activeTab === 'lastYearMerit' && <LastYearMerit LastMerit={LastMerit} />}
    </View>
  );
};

export default TabInfo;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: '700',
    color: '#202244',
    // fontFamily: 'Jost-Bold',
    // fontFamily: 'SofadiOne-Regular',
    // fontSize: responsiveFontSize(1.8),
  },
  tabButton: {
    width: responsiveWidth(28),
    height: responsiveHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 2,
    paddingRight: 2,
  },
  active: {
    backgroundColor: '#F5F9FF',
  },
});
