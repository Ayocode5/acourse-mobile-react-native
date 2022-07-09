import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import colors from '../../assets/colors/colors';

const Profile = () => {
  const tailwind = useTailwind();

  return (
    <View style={styles.profile}>
      <View style={tailwind('relative')}>
        <View></View>
        <Text
          style={[
            tailwind('text-center font-medium'),
            styles.profileHeaderText,
          ]}>
          Profile
        </Text>
        <Image
          style={[tailwind('absolute'), styles.profileHeaderSetting]}
          source={require('../../assets/icons/ic_setting.png')}
        />
      </View>

      <View
        style={[
          tailwind('flex justify-center flex-col items-center'),
          styles.profileUser,
        ]}>
        <Image
          style={styles.profileUserImage}
          source={require('../../assets/images/profile_pic.png')}
        />
        <Text style={styles.profileUserName}>Robert Fox</Text>
        <Text style={styles.profileUserView}>View Profile</Text>
      </View>

      <View style={styles.myClasses}>
        <Text style={styles.myClassesTitle}>My Classes</Text>
        <View style={tailwind('flex flex-col')}>
          <View style={tailwind('flex flex-row justify-between items-center')}>
            <View
              style={tailwind('flex justify-between flex-row items-center')}>
              <Image source={require('../../assets/icons/ic_download.png')} />
              <View
                style={tailwind('flex flex-col justify-between items-start')}>
                <Text>Downloaded Class</Text>
                <Text>4 Class</Text>
              </View>
            </View>

            <Image source={require('../../assets/icons/ic_arrow-right.png')} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    padding: 24,
  },
  profileHeaderText: {
    color: colors.black,
    fontSize: 16,
  },
  profileHeaderSetting: {
    top: 0,
    right: 0,
  },
  profileUser: {
    marginTop: 35,
  },
  profileUserImage: {
    width: 85,
    height: 85,
  },
  profileUserName: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 16,
  },
  profileUserView: {
    color: colors.blue,
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2,
  },
  myClasses: {
    marginTop: 28,
  },
  myClassesTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
});

export default Profile;
