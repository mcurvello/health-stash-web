import axios from "axios";

const baseUrl = "http://localhost:4000/";

const getAuthToken = async () => {
  try {
    const response = await axios.get(baseUrl + "auth/login");
    return response;
  } catch (error) {
    return null;
  }
};

async function getPatientById(accessToken, id) {
  try {
    const response = await axios.get(baseUrl + `patients/${id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });

    return response?.data;
  } catch (error) {
    throw error;
  }
}

async function getPatients(accessToken) {
  try {
    const response = await axios.get(baseUrl + "patients", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });

    return response?.data;
  } catch (error) {
    throw error;
  }
}

async function postPatient(accessToken, data) {
  try {
    const response = await axios.post(baseUrl + "patients", data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });
    const resourceId = response.data.id;

    return resourceId;
  } catch (error) {
    throw error;
  }
}

async function getPractitionerById(accessToken, id) {
  try {
    const response = await axios.get(baseUrl + `practitioners/${id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });

    return response?.data;
  } catch (error) {
    throw error;
  }
}

async function getPractitioners(accessToken) {
  try {
    const response = await axios.get(baseUrl + "practitioners", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: accessToken,
        "Content-Type": "application/json",
      },
    });

    return response?.data;
  } catch (error) {
    throw error;
  }
}

async function postPractitioner(accessToken, data) {
  try {
    const response = await axios.post(baseUrl + "practitioners", data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });
    const resourceId = response.data.id;

    return resourceId;
  } catch (error) {
    throw error;
  }
}

async function getAppointments(accessToken) {
  try {
    const response = await axios.get(baseUrl + "appointments", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });

    return response?.data;
  } catch (error) {
    throw error;
  }
}

async function postAppointment(accessToken, data) {
  try {
    const response = await axios.post(baseUrl + "appointments", data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });
    const resourceId = response.data.id;

    return resourceId;
  } catch (error) {
    throw error;
  }
}

async function postCondition(accessToken, data) {
  try {
    const response = await axios.post(baseUrl + "condition", data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });
    const resourceId = response.data.id;

    return resourceId;
  } catch (error) {
    throw error;
  }
}

async function getMedicationRequest(accessToken) {
  try {
    const response = await axios.get(baseUrl + "medication", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });

    return response?.data;
  } catch (error) {
    throw error;
  }
}

async function postMedicationRequest(accessToken, data) {
  try {
    const response = await axios.post(baseUrl + "medication", data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });
    const resourceId = response.data.id;

    return resourceId;
  } catch (error) {
    throw error;
  }
}

export {
  getAuthToken,
  getPatientById,
  getPatients,
  postPatient,
  getPractitionerById,
  getPractitioners,
  postPractitioner,
  getAppointments,
  postAppointment,
  postCondition,
  getMedicationRequest,
  postMedicationRequest,
};
