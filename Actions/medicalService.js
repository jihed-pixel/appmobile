import apiMedicalService from "./apiMedicalService";

export const ACTION_TYPES = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  ADD_PATIENT: "ADD_PATIENT",
  SEARCH_PATIENT: "SEARCH_PATIENT",
  HABITUDES_DE_VIE_PATIENT: "HABITUDES_DE_VIE_PATIENT",
  INFOS_GENERALES: "INFOS_GENERALES",
  ANTECEDENTS_MEDICAUX: "ANTECEDENTS_MEDICAUX",
  GET_ALL_ANTECEDENTS_MEDICAUX: "GET_ALL_ANTECEDENTS_MEDICAUX",
  REMOVE_ANTECEDENT_MEDICAL: "REMOVE_ANTECEDENT_MEDICAL",
  ADD_DIAGNOSTIC: "ADD_DIAGNOSTIC",
  ADD_EXPOSITION: "ADD_EXPOSITION",
  ADD_EXPOSITION1: "ADD_EXPOSITION1",
  GET_ALL_DIAGNOSTICS: "GET_ALL_DIAGNOSTICS",
  SEARCH_DIAGNOSTIC: "SEARCH_DIAGNOSTIC",
  ADD_CONF_DIAG: "ADD_CONF_DIAG",
  ADD_ADMISSION: "ADD_ADMISSION",
  ADD_CARAC_CLINIQUES: "ADD_CARAC_CLINIQUES",
  ADD_EXAM_CLI: "ADD_EXAM_CLI",
  ADD_EXAM_RADIO_PARA_CLI: "ADD_EXAM_RADIO_PARA_CLI",
  ADD_EVALUATION_FINALE: "ADD_EVALUATION_FINALE",
  ADD_EXAM_BIO: "ADD_EXAM_BIO",
  ADD_TRAITMENT:"ADD_TRAITMENT",
  GET_TRAITMENT:"GET_TRAITMENT",
  ADD_EVOLUTION:"ADD_EVOLUTION",
  GET_EVOLUTION:"GET_EVOLUTION"
};

export const getEvolution=(cin,values)=>(dispatch)=>{
  apiMedicalService
  .medicalService()
  .getEvolution(cin,values)
 . then(resposne=>{
    dispatch({
      type:ACTION_TYPES.GET_EVOLUTION,
      payload:resposne.data
    })
  })
  .catch(err=>console.log(err))
}

export const addEvolution=(cin,values)=>(dispatch)=>{
  apiMedicalService
  .medicalService()
  .addEvolution(cin,values)
  .then((response)=>{
    dispatch({
      type:ACTION_TYPES.ADD_EVOLUTION,
      payload:response.data
    })
  })
  .catch(err=>console.log(err))
}

export const getTraitment=(cin,values)=>(dispatch)=>{
  apiMedicalService
  .medicalService()
  .getTraitment(cin,values)
  .then((response)=>{
    dispatch({
      type:ACTION_TYPES.GET_TRAITMENT,
      payload:response.data
    })
  })
  .catch(err=>console.log(err))
}

export const addTraitment=(cin,values)=>(dispatch)=>{
  apiMedicalService
  .medicalService()
  .addTraitment(cin,values)
  .then((response)=>{
    dispatch({
      type:ACTION_TYPES.ADD_TRAITMENT,
      payload:response.data
    })
  })
  .catch(err=>console.log(err))
}

export const addExamBio = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .addExamBio(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_EXAM_BIO,
        payload: response.data

      })
    })
    .catch(err=>console.log(err))

}
export const addEvaluationFinale = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .addEvaluationFinale(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_EVALUATION_FINALE,
        payload: response.data
      })
    })
    .catch(err => console.log(err))

}

export const addExamRadioParaCli = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .addExamRadioParaCli(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_EXAM_RADIO_PARA_CLI,
        payload: response.data
      })
    })
    .catch(err => console.log(err))
}

export const addExamCli = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .addExamCli(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_EXAM_CLI,
        payload: response.data
      })
    })
    .catch(err => console.log(err))
}

export const addCaracCliniques = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .addCracCliniques(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_CARAC_CLINIQUES,
        payload: response.data

      })
    })
    .catch(err => console.log(err))
}

export const addAdmission = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .addAdmission(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_ADMISSION,
        payload: response.data
      })
    })
    .catch(err => console.log(err))
}

export const addConfDiag = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .addConfDiag(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_CONF_DIAG,
        payload: response.data
      })
    })
    .catch(err => console.log(err))
}

export const searchDiagnostic = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .searchDiagnostic(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.SEARCH_DIAGNOSTIC,
        payload: response.data
      })
    })
    .catch(err => console.log(err))
}

export const getAllDiagnostics = (cin) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .getAllDiagnostics(cin)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL_DIAGNOSTICS,
        payload: response.data
      })
    })
    .catch(err => { console.log(err) })
}

export const addExposition = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .addExposition(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_EXPOSITION,
        payload: response.data
      })
    })
    .catch(err => { console.log(err) })
}

export const addExposition1 = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .addExposition1(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_EXPOSITION1,
        payload: response.data
      })
    })
    .catch(err => { console.log(err) })
}

export const addDiagnostic = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .addDiagnostic(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_DIAGNOSTIC,
        payload: response.data
      })
      console.log(response.data)
      if (response.data == "You have already added a diagnostic in the same day")
        localStorage.setItem("addDiagnostic", response.data)
      else localStorage.setItem("addDiagnostic", JSON.stringify(null))

    })
    .catch((err) => { console.log(err) })
}
export const removeAntecedentMedical = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .removeAntecedentMedical(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.REMOVE_ANTECEDENT_MEDICAL,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}

export const getAllAntecedentsMedicaux = (cin) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .allAntecedentsMedicaux(cin)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL_ANTECEDENTS_MEDICAUX,
        payload: response.data
      })
      console.log(response.data)
    }
    )
    .catch((err) => console.log(err))
}
export const antecedentsMedicaux = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .antecedentsMedicaux(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ANTECEDENTS_MEDICAUX,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}

export const infosGenerales = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .infosGenerales(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.INFOS_GENERALES,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const habitudesDeViePatient = (cin, values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .habitudesDeViePatient(cin, values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.HABITUDES_DE_VIE_PATIENT,
        payload: response.data
      })
    })
    .catch((err) => console.log(err))
}
export const searchPatient = (search) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .searchPatient(search)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.SEARCH_PATIENT,
        payload: response.data
      });

    })
    .catch((err) => console.log(err))
}

export const login = (values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .login(values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.LOGIN,
        payload: response.data,
      });
      const loggedUser = response.data;
      if (loggedUser == "Please enter the password and the username") {
        localStorage.setItem("loggedUser", JSON.stringify(null))
      } else if (loggedUser == "Username or/and password is/are incorrect") {
        localStorage.setItem("loggedUser", JSON.stringify(null))

      } else {
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser))


      }
    })
    .catch((err) => console.log(err));
};


export const logout = () => (dispatch) => {
  apiMedicalService.medicalService().logout().
    then((response) => {
      localStorage.setItem("loggedUser", JSON.stringify("Try to login"))
      dispatch({
        type: ACTION_TYPES.LOGOUT,
        payload: JSON.stringify(null)
      });

    })
    .catch((err) => console.log(err));
};

export const addPatient = (values) => (dispatch) => {
  apiMedicalService
    .medicalService()
    .addPatient(values)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_PATIENT,
        payload: response.data,
      });
      const addPatientMessage = response.data
      if (addPatientMessage == "Cin or/and matricule already existed")
        localStorage.setItem("addPatientMessage", "Cin or/and matricule already existed")
      else {
        localStorage.setItem("addPatientMessage", JSON.stringify(null))

      };

    })
    .catch((err) => console.log(err));
};
