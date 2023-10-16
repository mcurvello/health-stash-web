import axios from '@/services/axios';

interface PatientData {
  lastName: string;
  firstName: string;
  middleName: string;
  gender: string;
  birthDate: string;
}

const useCreatePatient = () => {
  const createPatient = async (patientData: PatientData) => {
    const { data } = await axios.get('/access-token');
    const response = await axios.post("/patient", { ...patientData, accessToken: data });
    return response.data;
  };

  return {
    createPatient,
  }
}

export default useCreatePatient;
