import React, { useState, createContext } from "react";

import { getAuthToken, getPatients, getPractitioners } from "../../api/api";
import * as firebaseAuth from "firebase/auth";
import { auth } from "../../../config/firebase";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);
  const [userType, setUserType] = useState("patient");

  const getUserData = async (emailToFind, profile) => {
    const accessToken = await getAuthToken();
    if (accessToken) {
      if (profile === "patient") {
        const result = await getPatients(accessToken);

        const foundPatient = result.entry.find((patient) => {
          const email = patient.resource.telecom.find(
            (contact) =>
              contact.system === "email" && contact.value === emailToFind
          );
          return email !== undefined;
        });

        if (foundPatient) {
          const { active, name, telecom, gender, birthDate, address, id } =
            foundPatient.resource;

          const data = {
            resourceType: "Patient",
            active,
            name,
            telecom,
            gender,
            birthDate,
            address,
            id,
          };

          setUserData(data);
        }
      } else if (profile === "practitioner") {
        const result = await getPractitioners(accessToken);

        const foundPractitioner = result.entry.find((patient) => {
          const email = patient.resource.telecom.find(
            (contact) =>
              contact.system === "email" && contact.value === emailToFind
          );
          return email !== undefined;
        });

        if (foundPractitioner) {
          const {
            active,
            name,
            telecom,
            qualification,
            gender,
            birthDate,
            address,
            id,
          } = foundPractitioner.resource;

          const data = {
            resourceType: "Practitioner",
            active,
            name,
            telecom,
            qualification,
            gender,
            birthDate,
            address,
            id,
          };

          setUserData(data);
        }
      }
    }
  };

  const onLogin = async (email, password, profile) => {
    setIsLoading(true);
    await firebaseAuth
      .signInWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setUserType(profile);
        getUserData(email, profile);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  // const onRegister = (email, password) => {
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((u) => {
  //       setUser(u);
  //       setIsLoading(false);
  //     })
  //     .catch((e) => {
  //       setIsLoading(false);
  //       setError(e.toString());
  //     });
  // };

  // const onLogout = () => {
  //   setUser(null);
  //   firebase.auth().signOut();
  // };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        userData,
        userType,
        isLoading,
        error,
        onLogin,
        // onRegister,
        // onLogout,
        setUserType,
        setUserData,
        getUserData,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
