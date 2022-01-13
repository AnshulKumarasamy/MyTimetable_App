import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DashboardScreen from './screens/DashboardScreen';
import TimetableScreen from './screens/TimetableScreen';
import MondayScreen from './screens/MondayScreen';
import TuesdayScreen from './screens/TuesdayScreen';
import WednesdayScreen from './screens/WednesdayScreen';
import ThursdayScreen from './screens/ThursdayScreen';
import FridayScreen from './screens/FridayScreen';
import SubjectsScreen from './screens/SubjectsScreen';
import Entertainment from './screens/Entertainment';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

const switchNavigator = createSwitchNavigator({
  DashboardScreen: DashboardScreen,
  TimetableScreen: TimetableScreen,
  MondayScreen: MondayScreen,
  TuesdayScreen: TuesdayScreen,
  WednesdayScreen: WednesdayScreen,
  ThursdayScreen: ThursdayScreen,
  FridayScreen: FridayScreen,
  SubjectsScreen: SubjectsScreen,
  Entertainment: Entertainment,
});

const AppContainer = createAppContainer(switchNavigator);
