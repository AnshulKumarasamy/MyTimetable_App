import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class SubjectsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isMathModalVisible: false,
      isPhysicsModalVisible: false,
      isChemistryModalVisible: false,
      isBiologyModalVisible: false,
    };
  }

  mathModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.isMathModalVisible}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Maths </Text>
          </View>
          <View>
            <Text style={styles.text}>
              {`1. Co-ordinate Geometry\n2. Circles\n3. Pair of Linear Equation in two variables\n4. Heron's Formula\n5. Quadrilateral\n6. Real Number\n7. Similar Triangle\n8. Lines, Angles, Triangles- Congruency\n9.Trigonometry\n10. Polynomial \n11. Probability \n12. Statistics \n13. Surface area and Volumes`}
            </Text>
          </View>
          <Text
            style={styles.cancelButtonText}
            onPress={() => {
              this.setState({ isMathModalVisible: false });
            }}>
            Go Back
          </Text>
        </ScrollView>
      </Modal>
    );
  };

  physicsModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.isPhysicsModalVisible}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Physics </Text>
          </View>
          <View>
            <Text style={styles.text}>
              {`1.	Human eye and colourful world\n2.	Force\n3.	Gravitation\n4.	Reflection of Light\n5.	Motion\n6.	Refraction of Light\n7.	Work Power and Energy`}
            </Text>
          </View>
          <Text
            style={styles.cancelButtonText}
            onPress={() => {
              this.setState({ isPhysicsModalVisible: false });
            }}>
            Go Back
          </Text>
        </ScrollView>
      </Modal>
    );
  };

  chemistryModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.isChemistryModalVisible}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Chemistry </Text>
          </View>
          <View>
            <Text style={styles.text}>
              {`1.	Acid Bases, Salts\n2.	Atom and molecules\n3.	Atomic Structure\n4.	Chemical Reaction\n5.	Metal and Non-metal`}
            </Text>
          </View>
          <Text
            style={styles.cancelButtonText}
            onPress={() => {
              this.setState({ isChemistryModalVisible: false });
            }}>
            Go Back
          </Text>
        </ScrollView>
      </Modal>
    );
  };

  biologyModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.isBiologyModalVisible}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Biology </Text>
          </View>
          <View>
            <Text style={styles.text}>
              {`1.	Tissue\n2.	Respiration\n3.	Excretion\n4.	Natural Resources\n5.	Nutrition\n6.	Transportation in Animal\n7.	Transportation in Plants`}
            </Text>
          </View>
          <Text
            style={styles.cancelButtonText}
            onPress={() => {
              this.setState({ isBiologyModalVisible: false });
            }}>
            Go Back
          </Text>
        </ScrollView>
      </Modal>
    );
  };

  componentDidMount() {
    console.log(this.state.isMathModalVisible);
    console.log(this.state.isPhysicsModalVisible);
    console.log(this.state.isChemistryModalVisible);
    console.log(this.state.isBiologyModalVisible);
  }

  render() {
    return (
      <View>
        {this.mathModal()}
        {this.physicsModal()}
        {this.chemistryModal()}
        {this.biologyModal()}
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
              text: 'Subjects',
              style: { color: '#ffffff', fontSize: 20, fontWeight: 'bold' },
            }}
            backgroundColor="#0261fa"
          />
        </View>

        <ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({ isMathModalVisible: true });
            }}>
            <Text style={styles.buttonText}>Maths</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({ isPhysicsModalVisible: true });
            }}>
            <Text style={styles.buttonText}>Physics</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({ isChemistryModalVisible: true });
            }}>
            <Text style={styles.buttonText}>Chemistry</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({ isBiologyModalVisible: true });
            }}>
            <Text style={styles.buttonText}>Biology</Text>
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
    marginTop: 100,
    width: 200,
    height: 100,
    backgroundColor: '#ff954f',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
  },
  scrollview: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleView: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#32867d',
  },
  cancelButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#32867d',
    textAlign: 'center',
    marginTop: 100,
  },
  text: {
    fontSize: 30,
    textAlign: 'left',
    marginLeft: 30,
    marginTop: 40,
  },
});
