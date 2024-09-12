import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Heading from '../../Components/CustomComponents/Heading';
import {normalizedFont} from '../../Utils/AppConstant';

const FeeStructure = ({route}) => {
  const {feeStructure} = route.params;
  return (
    <ScrollView style={styles.container}>
      {/* Undergraduate Programs */}
      <Text style={styles.sectionTitle}>Undergraduate Programs</Text>

      <Text style={styles.subHeading}>{feeStructure}</Text>
      <Text style={styles.subHeading}>1. Tuition Fees</Text>
      <Text style={styles.text}>- Arts & Humanities: $8,000 per year</Text>
      <Text style={styles.text}>- Science & Technology: $10,000 per year</Text>
      <Text style={styles.text}>- Business & Management: $9,000 per year</Text>

      <Text style={styles.subHeading}>2. Accommodation</Text>
      <Text style={styles.text}>
        - On-campus (Single Room): $4,000 per year
      </Text>
      <Text style={styles.text}>
        - On-campus (Shared Room): $3,000 per year
      </Text>
      <Text style={styles.text}>- Off-campus (Estimate): $5,000 per year</Text>

      <Text style={styles.subHeading}>3. Miscellaneous Fees</Text>
      <Text style={styles.text}>- Registration Fee: $500 (one-time)</Text>
      <Text style={styles.text}>- Library Fee: $200 per year</Text>
      <Text style={styles.text}>- Student Activity Fee: $300 per year</Text>

      {/* Postgraduate Programs */}
      <Text style={styles.sectionTitle}>Postgraduate Programs</Text>

      <Text style={styles.subHeading}>1. Tuition Fees</Text>
      <Text style={styles.text}>- Arts & Humanities: $12,000 per year</Text>
      <Text style={styles.text}>- Science & Technology: $14,000 per year</Text>
      <Text style={styles.text}>- Business & Management: $13,000 per year</Text>

      <Text style={styles.subHeading}>2. Accommodation</Text>
      <Text style={styles.text}>
        - On-campus (Single Room): $5,000 per year
      </Text>
      <Text style={styles.text}>
        - On-campus (Shared Room): $4,000 per year
      </Text>
      <Text style={styles.text}>- Off-campus (Estimate): $6,000 per year</Text>

      <Text style={styles.subHeading}>3. Miscellaneous Fees</Text>
      <Text style={styles.text}>- Registration Fee: $600 (one-time)</Text>
      <Text style={styles.text}>- Library Fee: $250 per year</Text>
      <Text style={styles.text}>- Student Activity Fee: $350 per year</Text>
    </ScrollView>
  );
};

export default FeeStructure;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: normalizedFont.rf(2.7),
    fontWeight: 'bold',
    marginTop: 20,
    color: '#222',
  },
  subHeading: {
    fontSize: normalizedFont.rf(2.3),
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  text: {
    fontSize: normalizedFont.rf(2),
    marginTop: 5,
    color: '#444',
    // color: 'red',
  },
});
