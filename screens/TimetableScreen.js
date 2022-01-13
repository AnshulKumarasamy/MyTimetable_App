import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class TimetableScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Header
            leftComponent={
              <Icon
                name="arrow-left"
                type="feather"
                color="#ffffff"
                onPress={() =>
                  this.props.navigation.navigate('DashboardScreen')
                }
              />
            }
            centerComponent={{
              text: 'Timetable',
              style: { color: '#ffffff', fontSize: 20, fontWeight: 'bold' },
            }}
            backgroundColor="#6f03fc"
          />
        </View>
        <ScrollView>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#fcc603' }]}
            onPress={() => {
              this.props.navigation.navigate('MondayScreen');
            }}>
            <Text style={styles.buttonText}>Monday</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#fc2003' }]}
            onPress={() => {
              this.props.navigation.navigate('TuesdayScreen');
            }}>
            <Text style={styles.buttonText}>Tuesday</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#0356fc' }]}
            onPress={() => {
              this.props.navigation.navigate('WednesdayScreen');
            }}>
            <Text style={styles.buttonText}>Wednesday</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#fc2003' }]}
            onPress={() => {
              this.props.navigation.navigate('ThursdayScreen');
            }}>
            <Text style={styles.buttonText}>Thursday</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#fcc603' }]}
            onPress={() => {
              this.props.navigation.navigate('FridayScreen');
            }}>
            <Text style={styles.buttonText}>Friday</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 75,
    width: 300,
    height: 100,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
  },
});
