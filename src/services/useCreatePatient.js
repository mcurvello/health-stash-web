import axios from "./axios";

const useCreatePatient = () => {
  const createPatient = async (patient) => {
    try {
      const response = await axios.post("/patient", patient);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    createPatient,
  }
}

export default useCreatePatient;
