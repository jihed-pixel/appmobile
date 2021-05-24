import { ACTION_TYPES } from "../Actions/medicalService";
const initialState = {
  loggedUser: null,
  message: "" , 
  patientList:[],
  antecedentList:[],
  diagnosticList:[],
  diagnostics:[],
  traitmentList:null,
  evolutionList:null
};

export const medicalService = (state = initialState, action) => {
  switch (action.type) {

    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        loggedUser: action.payload,
        //message:action.payload
      };
      case ACTION_TYPES.LOGOUT:
        return{
          ...state,
          loggedUser:null
      }
      case ACTION_TYPES.ADD_PATIENT:
        return {
          ...state,
          message:action.payload
        }
      case ACTION_TYPES.SEARCH_PATIENT:
        return {
          ...state,
          patientList:action.payload
        }
      case ACTION_TYPES.HABITUDES_DE_VIE_PATIENT:
        return{
          ...state,
          patientList:action.payload
        }
      
      case ACTION_TYPES.INFOS_GENERALES:
        return{
          ...state,
          patientList:action.payload
        }
      case ACTION_TYPES.ANTECEDENTS_MEDICAUX:
        return{
          ...state,
          patientList:action.payload
        }
      case ACTION_TYPES.GET_ALL_ANTECEDENTS_MEDICAUX:
        return{
          ...state,
          antecedentList:action.payload
        }
      
    case ACTION_TYPES.REMOVE_ANTECEDENT_MEDICAL:
      return{
        ...state,
        antecedentList:action.payload
      }
    case ACTION_TYPES.ADD_DIAGNOSTIC:
      return{
        ...state,
        message:action.payload,
        diagnosticList:action.payload
      }
    case ACTION_TYPES.ADD_EXPOSITION:
      return {
        ...state,
        diagnosticList:action.payload
      }
    case ACTION_TYPES.GET_ALL_DIAGNOSTICS:
      return{
        ...state,
        diagnostics:action.payload
      }
    case ACTION_TYPES.SEARCH_DIAGNOSTIC:
      return{
        ...state,
        diagnosticList:action.payload
      }
    case ACTION_TYPES.ADD_CONF_DIAG:
      return {
        ...state,
        diagnosticList:action.payload
      }
    case ACTION_TYPES.ADD_ADMISSION:
      return {
        ...state,
        diagnosticList:action.payload
      }
    case ACTION_TYPES.ADD_CARAC_CLINIQUES:
      return {
        ...state,
        message:action.payload
      }
    case ACTION_TYPES.ADD_EXAM_RADIO_PARA_CLI:
      return{
        ...state,
        diagnosticList:action.payload
      }

    case ACTION_TYPES.ADD_EVALUATION_FINALE:
      return{
        ...state,
        diagnosticList:action.payload
      }
      case ACTION_TYPES.GET_TRAITMENT:
        return{
          ...state,
          traitmentList:action.payload
        }
      case ACTION_TYPES.ADD_TRAITMENT:
        return {
          ...state
        }
      case ACTION_TYPES.ADD_EVOLUTION:
        return{
          ...state,
         // evolutionList:action.payload
        }
      case ACTION_TYPES.GET_EVOLUTION:
        return {
          ...state,
          evolutionList:action.payload
        }
       
      
    
    default:
      return state;
  }
};        
        