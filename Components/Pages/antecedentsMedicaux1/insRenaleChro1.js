import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from "../../Form/FormInput";
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
//import 'localstorage-polyfill';
import { ScrollView } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';


const InsRenaleChro1 = (props) => {

  const [anciennete, setAnciennete] = useState(0.0);
  const [traitement, setTraitement] = useState(0);
  const [hemodialyse, setHemodialyse] = useState(true);

  var handleAnciennteChange = (text) => {
    setAnciennete(text)
  }
  var handleTraitementChange = (text) => {
    setTraitement(text)
  }
  var handleHemodialyseChange = (data) => {
    if (data[0].selected)
      setHemodialyse(true);
    else if (data[1].selected)
      setHemodialyse(false)
  }
  var handleSubmit = (e) => {
    var values = {
      antecedent: "InsRenaleChro",
      anciennete: anciennete,
      traitement: traitement,
      hemodialyse: hemodialyse
    }
    e.preventDefault();
    //console.log(values)
    props.antecedentsMedicaux(props.patientList["cin"], values)
    props.navigation.navigate("AddAntecendentsMedicaux1")
  }




  return (
<LinearGradient colors={['#d7dbdd', '#abebc6','#d7dbdd']} style={styles.body}>
    <ScrollView>


      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Insuffisance rénale chronique</Text>

        <FormInput title="Ancienneté" placeholder="Ancienneté" onChangeText={handleAnciennteChange} type="decimal-pad" />
        <FormInput title="Traitement" placeholder="Traitement" onChangeText={handleTraitementChange} />

        <View style={styles.row}>
          <Text style={tailwind('text-gray-700 py-2')}>
            Hémodialyse?
    </Text>
          <RadioGroup radioButtons={[
            {
              label: 'Oui',
              color: '#51d1c5',

            },
            {
              label: 'Non',
              color: '#51d1c5',
            },
          ]}
            //flexDirection='row'
            style={tailwind('')}
            onPress={handleHemodialyseChange}
          />

        </View>

        <View style={styles.row}>
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("AddAntecendentsMedicaux1") }} />
          <FormButton title="Enregister" onPress={handleSubmit} />

        </View>



      </View>



    </ScrollView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
});
const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

  antecedentsMedicaux: actions.antecedentsMedicaux
};

export default connect(mapStateToProps, mapActionToProps)(InsRenaleChro1);
