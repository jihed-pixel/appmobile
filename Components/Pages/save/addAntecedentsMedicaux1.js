import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
//import 'localstorage-polyfill';
import { ScrollView } from 'react-native-gesture-handler';
import RadioGroup from 'react-native-radio-buttons-group';
import {LinearGradient} from 'expo-linear-gradient';


const AddAntecendentsMedicaux1 = (props) => {
  const [nextPath, setNextPath] = useState("PathRespChronique")

  var handleAntecedentChange = (data) => {
    if (data[0].selected) {
      setNextPath("PathRespChronique1")
    }
    else if (data[1].selected) {
      setNextPath("Cardiopathies1")

    }
    else if (data[2].selected) {
      setNextPath("TrRythCardiaque1")
    }
    else if (data[3].selected) {
      setNextPath("HTA1")
    }
    else if (data[4].selected) {
      setNextPath("Diabete1")
    }
    else if (data[5].selected) {
      setNextPath("InsRenaleChro1")
    }
    else if (data[6].selected) {
      setNextPath("AVC1")
    }
    else if (data[7].selected)
      setNextPath("Retinopathie1")
    else if (data[8].selected)
      setNextPath("ATCDchir1")
    else if (data[9].selected)
      setNextPath("Grossesse1")
    else if (data[10].selected)
      setNextPath("PriseAINS1")
    else if (data[11].selected)
      setNextPath("Immunosuppreseur1")
    else if (data[12].selected)
      setNextPath("AutresATCD1")




  }



  return (
<LinearGradient colors={['#d7dbdd', '#abebc6','#d7dbdd']} style={styles.body}>
    <ScrollView>


      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Antécédents medicaux</Text>


        <View style={tailwind("py-8")} >
          <RadioGroup radioButtons={[
            {
              label: 'Pathologie respiratoire chronique ?',
              color: '#51d1c5',

            },
            {
              label: 'Cardiopathies ?',
              color: '#51d1c5',
            },
            {
              label: 'Trouble du rythme cardiaque ?',
              color: '#51d1c5',
            },
            {
              label: 'HTA ?',
              color: '#51d1c5',
            },
            {
              label: 'Diabète ?',
              color: '#51d1c5',
            },
            {
              label: 'Insuffisance rénale chronique ?',
              color: '#51d1c5',
            },
            {
              label: 'AVC ?',
              color: '#51d1c5',
            },
            {
              label: 'Rétinopathie ?',
              color: '#51d1c5',
            },
            {
              label: 'ATCD chirugicaux ?',
              color: '#51d1c5',
            },
            {
              label: 'Grossesse en cours ?',
              color: '#51d1c5',
            },
            {
              label: "Prise récente d'AINS ?",
              color: '#51d1c5',
            },
            {
              label: 'Traitement immunosuppresseur ?',
              color: '#51d1c5',
            },
            {
              label: 'Autres ATCD ?',
              color: '#51d1c5',
            },
          ]}
            //flexDirection='row'
            style={tailwind('')}
            onPress={handleAntecedentChange}

          />







        </View>


        <View style={styles.row}>
          <FormButton title="Retour1" onPress={() => { props.navigation.navigate("Exposition1") }} />
          <FormButton title="Suivant" onPress={() => { props.navigation.navigate(nextPath) }} />
        </View>
        <FormButton title="Pass" onPress={() => { props.navigation.navigate("HabitudesDeVie1") }} />
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

};

export default connect(mapStateToProps, mapActionToProps)(AddAntecendentsMedicaux1);
