import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import COLORS from '../Constant/theme';

export default function Container({children, scroll}) {
  return (
    <>
      {scroll ? (
        <ScrollView contentContainerStyle={styles.container2}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.container}>{children}</View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  container2: {
    flex: 1,
    backgroundColor:"white"
  },
});
