import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import {CommonHeader} from '../../../Components';

const Search = ({navigation}) => {
  const [searchText, setSearchText] = useState(null);

  return (
    <SafeAreaView style={styles.safe_area}>
      <CommonHeader 
        onPressIcon={() => navigation.openDrawer()}
        title={'Search'}
        isIcon={true}
        hasSearchBar
        isDrawer={true}
        style={styles.view}
        isSearchable={true}
        onPressCross={() => setSearchText(null)}
        onChangeText={text => setSearchText(text)}
        searchValue={searchText}
      />
      <View style={styles.main_view}></View>
    </SafeAreaView>
  );
};

export default Search;
