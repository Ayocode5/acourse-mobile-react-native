import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../assets/colors/colors';
import popularClass from '../../assets/data/popularClass';
import yourProgress from '../../assets/data/yourProgress';

const globalStyle = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
  },
  columnView: {
    flexDirection: 'column',
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          {/* Header */}
          <View style={[styles.headerWrapper, globalStyle.rowView]}>
            <View style={[styles.headerProfile, globalStyle.rowView]}>
              <Image
                source={require('../../assets/images/profile_pic.png')}
                resizeMode="contain"
                style={{width: 48, height: 48}}
              />
              <View style={[styles.welcomeHeader, globalStyle.columnView]}>
                <Text style={styles.welcomeText}>Welcome Back,</Text>
                <Text style={styles.welcomeName}>Jonathan Tri</Text>
              </View>
            </View>
            <Image
              source={require('../../assets/icons/ic_search.png')}
              resizeMode="contain"
              style={{width: 24, height: 24}}
            />
          </View>

          {/* Your Progress */}
          <View style={[styles.yourProgressWrapper, globalStyle.columnView]}>
            <View style={[styles.yourProgressHeader, globalStyle.rowView]}>
              <Text style={styles.yourProgressTitle}>Your Progress</Text>
              <Text style={styles.yourProgressSee}>See All</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={[styles.yourProgressCard, globalStyle.columnView]}>
                  <Image
                    source={yourProgress[0].image}
                    resizeMode="contain"
                    style={{
                      width: 196,
                      height: 128,
                      borderTopRightRadius: 24,
                      borderTopLeftRadius: 24,
                    }}
                  />
                  <Text style={styles.yourProgressCourseTitle}>
                    {yourProgress[0].title}
                  </Text>
                  <View style={[styles.yourProgressBar, globalStyle.rowView]}>
                    <View style={styles.progressBar}>
                      <View style={styles.progressBarValue}></View>
                    </View>
                    <Text style={styles.yourProgressBarText}>
                      {yourProgress[0].progress}%
                    </Text>
                  </View>
                </View>
                <View style={[styles.yourProgressCard, globalStyle.columnView]}>
                  <Image
                    source={require('../../assets/images/course_2.png')}
                    resizeMode="contain"
                    style={{
                      width: 196,
                      height: 128,
                      borderTopRightRadius: 24,
                      borderTopLeftRadius: 24,
                    }}
                  />
                  <Text style={styles.yourProgressCourseTitle}>
                    Javascript For Beginner
                  </Text>
                  <View style={[styles.yourProgressBar, globalStyle.rowView]}>
                    <View style={styles.progressBar}>
                      <View style={styles.progressBarValue}></View>
                    </View>
                    <Text style={styles.yourProgressBarText}>75%</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>

          {/* Popular Class */}
          <View style={[styles.yourProgressWrapper, globalStyle.columnView]}>
            <View style={[styles.yourProgressHeader, globalStyle.rowView]}>
              <Text style={styles.yourProgressTitle}>Popular Class</Text>
              <Text style={styles.yourProgressSee}>See All</Text>
            </View>

            <View>
              <View style={[styles.popularClassCard, globalStyle.rowView]}>
                <Image
                  source={require('../../assets/images/course_3.png')}
                  resizeMode="contain"
                  style={{
                    width: 135,
                    height: 170,
                    borderTopLeftRadius: 16,
                    borderBottomLeftRadius: 16,
                  }}
                />
                <View
                  style={[styles.popularClassContent, globalStyle.columnView]}>
                  <Text style={styles.popularClassCategory}>Design</Text>
                  <Text style={styles.popularClassTitle}>
                    UX Design: Design Thinking
                  </Text>
                  <Text style={styles.popularClassDetail}>
                    1h 43m - 10 Lessons
                  </Text>

                  <View
                    style={[
                      styles.popularClassContentBottom,
                      globalStyle.rowView,
                    ]}>
                    <Text style={styles.popularClassPrice}>$25.00</Text>
                    <Image
                      source={require('../../assets/icons/ic_bookmark.png')}
                      resizeMode="contain"
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View>
              <View style={[styles.popularClassCard, globalStyle.rowView]}>
                <Image
                  source={require('../../assets/images/course_4.png')}
                  resizeMode="contain"
                  style={{
                    width: 135,
                    height: 170,
                    borderTopLeftRadius: 16,
                    borderBottomLeftRadius: 16,
                  }}
                />
                <View
                  style={[styles.popularClassContent, globalStyle.columnView]}>
                  <Text style={styles.popularClassCategory}>Development</Text>
                  <Text style={styles.popularClassTitle}>
                    Basic for HTML and CSS
                  </Text>
                  <Text style={styles.popularClassDetail}>
                    1h 43m - 10 Lessons
                  </Text>

                  <View
                    style={[
                      styles.popularClassContentBottom,
                      globalStyle.rowView,
                    ]}>
                    <Text style={styles.popularClassPrice}>$20.00</Text>
                    <Image
                      source={require('../../assets/icons/ic_bookmark.png')}
                      resizeMode="contain"
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerProfile: {
    display: 'flex',
    alignItems: 'center',
  },
  welcomeHeader: {
    marginHorizontal: 16,
  },
  welcomeText: {
    color: colors.darkGrey,
    fontSize: 12,
  },
  welcomeName: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 18,
  },
  yourProgressWrapper: {
    marginHorizontal: 20,
    marginTop: 32,
  },
  yourProgressHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 11,
  },
  yourProgressTitle: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 16,
  },
  yourProgressSee: {
    color: colors.blue,
    fontWeight: '500',
    fontSize: 12,
  },
  yourProgressCard: {
    width: 195,
    height: 230,
    backgroundColor: colors.white,
    borderRadius: 24,
    marginRight: 20,
  },
  yourProgressCourseTitle: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 14,
    marginHorizontal: 24,
    marginTop: 12,
    marginBottom: 8,
  },
  yourProgressBar: {
    marginHorizontal: 24,
    marginTop: 12,
    alignItems: 'center',
  },
  progressBar: {
    height: 6,
    width: 116,
    flexDirection: 'row',
    backgroundColor: colors.lightBlue,
    borderRadius: 5,
    marginRight: 8,
  },
  progressBarValue: {
    backgroundColor: colors.blue,
    width: '75%',
    height: 6,
    borderRadius: 5,
  },
  yourProgressBarText: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 10,
  },
  popularClassCard: {
    backgroundColor: colors.white,
    height: 170,
    borderRadius: 16,
    marginBottom: 20,
  },
  popularClassContent: {
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 24,
  },
  popularClassCategory: {
    color: colors.blue,
    fontWeight: '500',
    fontSize: 12,
  },
  popularClassTitle: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 16,
  },
  popularClassDetail: {
    color: colors.lightGrey,
    fontSize: 12,
  },
  popularClassPrice: {
    color: colors.blue,
    fontWeight: '500',
    fontSize: 14,
  },
  popularClassContentBottom: {
    justifyContent: 'space-between',
  },
});

export default Home;
