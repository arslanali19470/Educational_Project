import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LastYearMerit = ({route}) => {
  const {LastMerit} = route.params;
  useEffect(() => {
    console.log(LastMerit);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Last Year's Merit Details</Text>

      <Text style={styles.text}>{LastMerit}</Text>
    </View>
  );
};

export default LastYearMerit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
});
