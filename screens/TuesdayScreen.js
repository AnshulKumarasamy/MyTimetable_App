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

export default class TuesdayScreen extends React.Component {
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
                  this.props.navigation.navigate('TimetableScreen')
                }
              />
            }
            centerComponent={{
              text: 'Tuesday',
              style: { color: '#ffffff', fontSize: 30, fontWeight: 'bold' },
            }}
            backgroundColor="#6f03fc"
          />
        </View>
        <ScrollView style={styles.container}>
          <Text style={styles.buttonText}>{`9:00 AM -10:00 AM \nEnglish`}</Text>
          <Text
            style={styles.buttonText}>{`10:10 AM - 11:10 AM \nEnglish`}</Text>
          <Text
            style={styles.buttonText}>{`11:20 AM - 12:20 PM \nChemistry`}</Text>
          <Text style={styles.buttonText}>{`1:00 PM - 2:00 PM \nPhysics`}</Text>
          <Text style={styles.buttonText}>{`2:10 PM - 3:00 PM \nPhysics`}</Text>
          <Text
            style={
              styles.buttonText
            }>{`4:00 PM - 6:00 PM \nTennis class`}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B67ade',
    marginHorizontal: 2,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 70,
    fontSize: 30,
    color: 'black',
    borderRadius: 5,
    borderWidth: 2,
    padding: 30,
  },
});
