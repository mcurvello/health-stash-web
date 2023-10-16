import axios from '@/services/axios';

interface PhysicianData {
  lastName: string;
  firstName: string;
  middleName: string;
  gender: string;
  birthDate: string;
  tel: string;
  speciality: string;
}

const useCreatePhysician = () => {
  const createPhysician = async (physicianData: PhysicianData) => {
    const { data } = await axios.get('/access-token');
    const response = await axios.post("/physician", { ...physicianData, accessToken: data });
    return response.data;
  };

  return {
    createPhysician,
  }
}

export default useCreatePhysician;
