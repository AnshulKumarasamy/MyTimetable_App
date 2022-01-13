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

export default class DashboardScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Header
            leftComponent={
              <Icon name="book" type="font-awesome" color="#ffffff" />
            }
            centerComponent={{
              text: 'My Timetable',
              style: { color: '#ffffff', fontSize: 20, fontWeight: 'bold' },
            }}
            backgroundColor="#6f03fc"
          />
        </View>

        <ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('TimetableScreen');
            }}>
            <Image
              source={require('../assets/calendar.jpg')}
              style={{ width: 90, height: 95, marginLeft: 10, marginTop: 65 }}
            />
            <Text style={styles.buttonText}>Timetable</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('SubjectsScreen');
            }}>
            <Image
              source={require('../assets/books.png')}
              style={{ width: 110, height: 100, marginLeft: 10, marginTop: 60 }}
            />
            <Text style={styles.buttonText}>Subjects</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Entertainment');
            }}>
            <Image
              source={require('../assets/Youtube.png')}
              style={{ width: 70, height: 70, marginLeft: 10, marginTop: 65 }}
            />
            <Text style={styles.buttonText}>Entertainment</Text>
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
    marginTop: 110,
    width: 300,
    height: 150,
  },
  buttonText: {
    textAlign: 'right',
    marginLeft: 50,
    marginBottom: 50,
    fontSize: 35,
    color: 'black',
  },
});
