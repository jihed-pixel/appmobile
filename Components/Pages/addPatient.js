import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import FormInput from "../Form/FormInput";
import tailwind from 'tailwind-rn';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-datepicker'
import FormButton from '../Form/FormButton';
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import {LinearGradient} from 'expo-linear-gradient';
import 'localstorage-polyfill';
const AddPatient = (props) => {
  useEffect(() => {


  }, [localStorage.getItem("addPatientMessage")])

  const [cin, setCin] = useState(0)
  const [matricule, setMatricule] = useState(0)
  const [identifiant, setIdentifiant] = useState("")
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [date, setDate] = useState("")
  const [sexe, setSexe] = useState("Male")
  const [adresse, setAdresse] = useState("")
  const [nationnalite, setNationnalite] = useState("")
  const [telDomicile, setTelDomicile] = useState("")
  const [telProtable, setTelPortable] = useState("")
  const [profession, setProfession] = useState("")
  const [marie, setMarie] = useState("")
  const [vitSeul, setVitSeul] = useState(false)
  const [nbIndiv, setNbIndiv] = useState(0)
  const [nbEnf, setNbEnf] = useState(0)
  const [nbCham, setNbCham] = useState(0)
  const [nivEtude, setNivEtude] = useState("")

  var handleNivEtude = (data) => {
    if (data[0].selected)
      setNivEtude(data[0].label)
    if (data[1].selected)
      setNivEtude(data[1].label)
    if (data[2].selected)
      setNivEtude(data[2].label)
    if (data[3].selected)
      setNivEtude(data[3].label)
    if (data[4].selected)
      setNivEtude(data[4].label)
  }

  var handleNbCham = (text) => {
    setNbCham(text)
  }

  var handleNbEnf = (text) => {
    setNbEnf(text)
  }
  var handleNbIndivChange = (text) => {
    setNbIndiv(text)
  }

  var handleProfessionChange = (text) => {
    setProfession(text)
  }
  var handleTelPortable = (text) => {
    setTelPortable(text)
  }
  var handleTelDomicile = (text) => {
    setTelDomicile(text)
  }
  var handleNationnaliteChange = (text) => {
    setNationnalite(text)
  }
  var handleCinChange = (text) => {
    setCin(text)
  }

  var handleMatriculeChange = (text) => {
    setMatricule(text)
  }
  var handleNomChange = (text) => {
    setNom(text)
  }
  var handleIdentifiantChange = (text) => {
    setIdentifiant(text)
  }
  var handlePrenomChange = (text) => {

    setPrenom(text)
  }
  var handleAddresseChange = (text) => {
    setAdresse(text)
  }

  var handleSexeChange = (data) => {
    if (data[0].selected) {
      setSexe(data[0].label)
    }
    else setSexe(data[1].label)

  }
  var handleMarieChange = (data) => {
    if (data[0].selected) {
      setMarie(data[0].label)
    }
    else {
      if (data[1].selected) {
        setMarie(data[1].label)
      }
      else setMarie(data[2].label)
    }
  }

  var handleVitSeul = (data) => {
    if (data[0].selected) {
      setVitSeul(true)
    }
    else setVitSeul(false)
  }

  var handleSubmit = (e) => {
    var values = {
      cin: cin,
      matricule: matricule,
      identifiant:identifiant,
      nom: nom,
      prenom: prenom,
      sexe: sexe,
      birthDate: date,
      nationnalite: nationnalite,
      adresse: adresse,
      telPort: telProtable,
      telDomicile: telDomicile,
      profession: profession,
      niveauEtude: nivEtude,
      vitSeul: vitSeul,
      individu: nbIndiv,
      enfant: nbEnf,
      chambres: nbCham,
      mariee: marie

    }
    e.preventDefault()
    props.cc(values)
    if (localStorage.getItem("addPatientMessage") == null) {

      props.navigation.navigate("SearchPatient1")
    }

  }
  var handleExit = (e) => {
    localStorage.setItem("addPatientMessage", JSON.stringify(null))
    props.navigation.navigate("Exposition1")
  }

  return (
<LinearGradient colors={['#d7dbdd', '#abebc6','#d7dbdd']} style={styles.body}>
    <ScrollView  >
      <Text style={tailwind('text-gray-700 font-bold text-xl text-center')}>Dossier Patient</Text>
      <Text style={tailwind('text-gray-700 font-bold text-xl text-center')}>Informations générales</Text>
      <Text style={tailwind('text-red-500 font-bold text-center py-2')} > {(localStorage.getItem("addPatientMessage") !== JSON.stringify(null)) && (props.message)}</Text>
      <View style={tailwind(' items-center ')}>
        <FormInput
          placeholder="CIN"
          type="number-pad"
          maxLength={Number("8")}
          onChangeText={handleCinChange}
        />
        <FormInput
          placeholder="Matricule"
          type="number-pad"
          onChangeText={handleMatriculeChange}
          maxLength={Number("10")}
        />
        <FormInput
          placeholder="Identifiant"
          onChangeText={handleIdentifiantChange}
        />
        <FormInput
          placeholder="Nom"
          onChangeText={handleNomChange}
        />
        <FormInput
          placeholder="Prenom"
          onChangeText={handlePrenomChange}
        />
        <View style={styles.row}>

          <Text style={tailwind('text-gray-700 py-2')}>
            Sexe ?
    </Text>
          <RadioGroup radioButtons={[
            {
              label: 'Male',
              color: '#51d1c5',

            },
            {
              label: 'Female',
              color: '#51d1c5',
            },
          ]}
            flexDirection='row'
            style={tailwind('')}
            onPress={handleSexeChange}
          />

        </View>

        <DatePicker
          style={tailwind("rounded-md text-red-500 border-solid w-3/5 border border-teal-500 ")}
          mode="date"
          placeholder={(date !== undefined && date) || "Date de naissance"}
          format="YYYY-MM-DD"
          minDate="1920-05-01"
          maxDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              left: 0,
              top: 0,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 0,
              borderWidth: 0
            }

          }}
          onDateChange={(date) => { setDate(date) }}
        />
        <FormInput
          placeholder="Adresse"
          onChangeText={handleAddresseChange}
        />
        <FormInput
          placeholder="Nationalité"
          onChangeText={handleNationnaliteChange}
        />
        <FormInput
          placeholder="Telephone Domicile"
          onChangeText={handleTelDomicile}
          type="number-pad"
          maxLength={Number("8")}
        />
        <FormInput
          placeholder="Telephone portable"
          type="number-pad"
          onChangeText={handleTelPortable}
          maxLength={Number("8")}
        />
        <FormInput
          placeholder="Profession"
          onChangeText={handleProfessionChange}
        />


        <View style={styles.row}>

          <Text style={tailwind('text-gray-700 py-2 pb-2')}>
            Niveau d'étude
    </Text>
          <RadioGroup radioButtons={[
            {
              label: 'Non Scolarisé',
              color: '#51d1c5',

            },
            {
              label: 'Primaire',
              color: '#51d1c5',
            },
            {
              label: 'Collège',
              color: '#51d1c5',
            },
            {
              label: 'Secondaire',
              color: '#51d1c5',
            },
            {
              label: 'Universiatire',
              color: '#51d1c5',
            },

          ]}
            //flexDirection='row'
            style={tailwind('')}
            onPress={handleNivEtude}

          />



        </View>

        <View style={styles.row}>

          <Text style={tailwind('text-gray-700 py-2')}>
            Marié ?
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
            {
              label: 'Autre',
              color: '#51d1c5',
            },
          ]}
            flexDirection='row'
            style={tailwind('')}
            onPress={handleMarieChange}
          />



        </View>

        <View style={styles.row}>

          <Text style={tailwind('text-gray-700 py-2')}>
            Vit seul ?
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
            flexDirection='row'
            style={tailwind('')}
            onPress={handleVitSeul}
          />



        </View>
        <FormInput
          placeholder="Nbre d'individus par famille"
          type="number-pad"
          onChangeText={handleNbIndivChange}
          maxLength={Number("2")}
        />

        <FormInput
          placeholder="Nbre d'enfants à cahrge"
          type="number-pad"
          onChangeText={handleNbEnf}
          maxLength={Number("2")}
        />

        <FormInput
          placeholder="Nbre de chambres dans la maison"
          type="number-pad"
          onChangeText={handleNbCham}
          maxLength={Number("2")}
        />
        <View style={styles.row}>
          <FormButton title="Annuler" onPress={handleExit} />
          <FormButton title="Ajouter" onPress={handleSubmit} />
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
  message: state.medicalService.message
});
const mapActionToProps = {
  cc: actions.addPatient
};

export default connect(mapStateToProps, mapActionToProps)(AddPatient);
