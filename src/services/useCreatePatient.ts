import axios from '@/services/axios';

interface PatientData {
  lastName: string;
  firstName: string;
  middleName: string;
  gender: string;
  birthDate: string;
}

const useCreatePatient = () => {
  const createPatient = async ({ lastName, firstName, middleName, gender, birthDate }: PatientData) => {
    try {
      const patientData = {
        resourceType: "Patient",
        active: true,
        name: [
          {
            use: "official",
            family: lastName,
            given: [firstName, middleName],
          },
        ],
        telecom: [
          {
            system: "phone",
            value: "(11) 99988-7766",
            use: "mobile",
            rank: 1,
          },
        ],
        gender: gender.toLowerCase() === "masculino" ? "male" : "female",
        birthDate,
        address: [
          {
            use: "home",
            type: "both",
            text: "534 Erewhon St PeasantVille, Rainbow, Vic  3999",
            line: ["534 Erewhon St"],
            city: "PleasantVille",
            district: "Rainbow",
            state: "Vic",
            postalCode: "3999",
            period: {
              start: "1974-12-25",
            },
          },
        ],
      };
      const response = await axios.post("/patient", patientData);
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
