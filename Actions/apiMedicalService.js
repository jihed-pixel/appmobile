import axios from "axios";
const baseUrl = "https://dc44c02050f8.ngrok.io/";
export default {
  medicalService(url = baseUrl) {
    return {
      login: (values) => axios.post(url + "login", values),
      logout: () => axios.get(url + "logout"),
      addPatient: (values) => axios.post(url + "addPatient", values),
      searchPatient: (cin) => axios.get(url + "search/" + cin),
      habitudesDeViePatient: (cin, values) => axios.post(url + "add-habitudes-de-vie/" + cin, values),
      infosGenerales: (cin, values) => axios.post(url + "add-infos-generales/" + cin, values),
      antecedentsMedicaux: (cin, values) => axios.post(url + "add-antecedents-medicaux/" + cin, values),
      allAntecedentsMedicaux: (cin) => axios.get(url + "get-all-antecedents-medicaux/" + cin),
      removeAntecedentMedical: (cin, values) => axios.post(url + "remove-antecedent-medical/" + cin, values),
      addDiagnostic: (cin, values) => axios.post(url + "add-diagnostic/" + cin, values),
      addExposition: (cin, values) => axios.post(url + "add-exposition/" + cin, values),
      addExposition1: (cin, values) => axios.post(url + "add-exposition1/" + cin, values),
      getAllDiagnostics: (cin) => axios.get(url + "get-all-diagnostics/" + cin),
      searchDiagnostic: (cin, values) => axios.post(url + "search-diagnostic/" + cin, values),
      addConfDiag: (cin, values) => axios.post(url + "add-confDiag/" + cin, values),
      addAdmission: (cin, values) => axios.post(url + "add-admission/" + cin, values),
      addCracCliniques: (cin, values) => axios.post(url + "add-carac-cliniques/" + cin, values),
      addExamCli: (cin, values) => axios.post(url + "add-examen-cli/" + cin, values),
      addExamRadioParaCli: (cin, values) => axios.post(url + "add-examen-radio-paracli/" + cin, values),
      addEvaluationFinale: (cin, values) => axios.post(url + "add-evaluation-finale/" + cin, values),
      uploadFileExamBio: (cin, formdata) => axios.post(url + "add-examen-bio-image/" + cin, formdata),
      addExamBio: (cin, values) => axios.post(url + "add-examen-bio/" + cin, values),
      addTraitment:(cin,values)=>axios.post(url+"add-traitement/"+cin,values),
      getTraitment:(cin,values)=>axios.post(url+"get-traitment/"+cin,values),
      addEvolution:(cin,values)=>axios.post(url+"add-Evolution/"+cin,values),
      getEvolution:(cin,values)=>axios.post(url+"get-evolution/"+cin,values)
    };
  },
};
