import React, { useState, createContext, useEffect } from "react";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [registered, setRegistered] = useState(true);
  const [goAppoint, setGoAppoint] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userSelected, setUserSelected] = useState('');
  const [services, setServices] = useState([]);
  const [serviceSelected, setServiceSelected] = useState('');
  const [goService, setGoService] = useState(false);
  
  //Cargar los usuarios
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch('http://localhost:4000/users');
        const data = await res.json();
        setUsers(data.users);
        setLoading(true);
      })();
      } catch (e) {
    }
  }, []);

  //Cargar los servicios
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch('http://localhost:4000/services');
        const data = await res.json();
        setServices(data.services);
        setLoading(true);
      })();
      } catch (e) {
    }
  }, []);

  return (
    <GlobalContext.Provider value={ { registered, setRegistered, goAppoint, setGoAppoint, users, setUsers, loading, setLoading, userSelected, setUserSelected, services, setServices, serviceSelected, setServiceSelected, goService, setGoService } }>
      {children}
    </GlobalContext.Provider>
  );
}