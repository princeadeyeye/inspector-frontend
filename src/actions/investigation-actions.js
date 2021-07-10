/* eslint-disable linebreak-style */
import { toast } from 'react-toastify';
import http from '../services/httpService';
import { loadStart, loadEnd } from './global-actions';
import { createInvestigationBlock, fetchAllInvestigationsfromBlockChain } from '../smartContractHelpers';

export const GET_ALL_INVESTIGATIONS = 'GET_ALL_INVESTIGATIONS';
export const LOADING_INVESUGATION = 'LOADING_INVESUGATION';
export const GET_PERSONAL_INVESTIGATIONS = 'GET_PERSONAL_INVESTIGATIONS';
export const CREATE_INVESTIGATION = 'CREATE_INVESTIGATION';
export const GET_AN_INVESTIGATION = 'GET_A_INVENSTIGATION';
export const UPDATE_AN_INVESTIGATION = 'UPDATE_A_NINVESTIGATION';
export const DELETE_AN_INVESTIGATION = 'DELETE_AN_INVESTIGATION';
export const INVESTIGATION_ERROR = 'INVESTIGATION_ERROR';

const loadingInv = () => ({
  type: LOADING_INVESUGATION
});

const getAllInvestigations = (data) => ({
  type: GET_ALL_INVESTIGATIONS,
  data
});

const getPersonalInvestigations = (data) => ({
  type: GET_PERSONAL_INVESTIGATIONS,
  data
});

const createInvestigation = (data) => ({
  type: CREATE_INVESTIGATION,
  data
});
const getAInvestigation = (data) => ({
  type: GET_AN_INVESTIGATION,
  data
});
const updateInvestigation = () => ({
  type: UPDATE_AN_INVESTIGATION
});

const deleteInvestigation = () => ({
  type: DELETE_AN_INVESTIGATION
});

const investigationError = (error) => ({
  type: INVESTIGATION_ERROR,
  error
});

export const fetchAllInvestigations = () => async (dispatch) => {
  if (!navigator.onLine) {
    return toast.error('Please check your internet connection');
  }
  try {
    dispatch(loadingInv());
    await fetchAllInvestigationsfromBlockChain()
    const { data } = await http.get('investigation/all');
    console.log(data);
    dispatch(getAllInvestigations(data));
    toast.success('Successfully Fetched All investigations');
    dispatch(loadEnd());
    return true;
  } catch (error) {
    dispatch(investigationError(error));
    dispatch(loadEnd());
    return false;
  }
};

export const fetchPersonalInvestigations = () => async (dispatch) => {
  if (!navigator.onLine) {
    return toast.error('Please check your internet connection');
  }
  try {
    dispatch(loadingInv());
    await fetchAllInvestigationsfromBlockChain()
    const { data } = await http.get('investigation/all');
    console.log(data);
    dispatch(getPersonalInvestigations(data));
    toast.success('Successfully Fetched All investigations');
    dispatch(loadEnd());
    return true;
  } catch (error) {
    dispatch(investigationError(error));
    dispatch(loadEnd());
    return false;
  }
};

export const fetchInvestigationById = (id) => async (dispatch) => {
  if (!navigator.onLine) {
    return toast.error('Please check your internet connection');
  }
  try {
    dispatch(loadingInv());
    const { data } = await http.get(`investigation/${id}`);
    dispatch(getAInvestigation(data));
    toast.success('Successfully fetch investigation by ID');
    dispatch(loadEnd());
    return true;
  } catch (error) {
    dispatch(investigationError(error));
    dispatch(loadEnd());
    return false;
  }
};

export const createNewInvestigation = (values) => async (dispatch) => {
  console.log(values);

  if (!navigator.onLine) {
    return toast.error('Please check your internet connection');
  }
  try {
    dispatch(loadingInv());
    await createInvestigationBlock(values);
    const { data } = await http.post('investigation/create', values);
    dispatch(createInvestigation(data));
    toast.success('Successfully create investigations');
    dispatch(loadEnd());
    return true;
  } catch (error) {
    dispatch(investigationError(error));
    dispatch(loadEnd());
    return false;
  }
};

export const updateInv = (id) => async (dispatch) => {
  if (!navigator.onLine) {
    return toast.error('Please check your internet connection');
  }
  try {
    dispatch(loadingInv());
    const { data } = await http.put(`investigation/${id}`);
    dispatch(updateInvestigation(data));
    toast.success('Successfully fetched blocked transactions');
    dispatch(loadEnd());
    return true;
  } catch (error) {
    dispatch(investigationError(error));
    dispatch(loadEnd());
    return false;
  }
};

export const deleteInv = (id) => async (dispatch) => {
  if (!navigator.onLine) {
    return toast.error('Please check your internet connection');
  }
  try {
    dispatch(loadStart());
    const { data } = await http.delete(`investigation/${id}`);
    dispatch(deleteInvestigation(data));
    toast.success(`Successfully delete ${id}`);
    dispatch(loadEnd());
    return true;
  } catch (error) {
    dispatch(investigationError(error));
    dispatch(loadEnd());
    return false;
  }
};
