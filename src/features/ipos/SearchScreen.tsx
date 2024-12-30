import Icon from '@components/global/Icon';
import CustomHeader from '@components/ui/CustomHeader';
import CustomInput from '@components/ui/CustomInput';
import {Colors, Fonts} from '@unistyles/Constants';
import {goBack} from '@utils/NavigationUtils';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const SearchScreen = () => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.flexRow}>
          <Pressable onPress={() => goBack()}>
            <Icon
              name="chevron-back"
              color={Colors.text}
              size={RFValue(16)}
              iconFamily="Ionicons"
            />
          </Pressable>
          {/* <CustomInput placeholder="Search e.g. sme" style={{width: '80%'}} /> */}
          <TextInput
            placeholder="Search e.g. sme"
            placeholderTextColor={'gray'}
            style={styles.inputContainer}
            autoFocus
          />
          {/* <CustomText variant="h4" fontFamily={Fonts.Medium} style={styles.text}>
          {title}
        </CustomText> */}
        </View>
      </SafeAreaView>
      <View>
        <Text>Search</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    justifyContent: 'space-between',
    padding: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 0.6,
    borderColor: Colors.border,
  },
  text: {
    textAlign: 'center',
  },
  inputContainer: {
    width: '90%',
    fontFamily: Fonts.Light,
    fontSize: RFValue(12),
    // paddingVertical: 14,
    // paddingBottom: 15,
    height: '100%',
    color: Colors.text,
    // bottom: -1,
    // borderWidth: 1,
    fontWeight: 'semibold',
  },
});

export default SearchScreen;
