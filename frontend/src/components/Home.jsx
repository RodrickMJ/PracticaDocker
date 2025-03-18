import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
          const response = await axios.get(`http://localhost:5000/api/users/${storedUser.id}`);
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h2>Bienvenido</h2>
      {user ? (
        <div>
          <p>Nombre: {user.name}</p>
          <p>Correo: {user.email}</p>
          <p>Edad: {user.age}</p>
          <p>Dirección: {user.address}</p>
        </div>
      ) : (
        <p>No has iniciado sesión</p>
      )}
    </div>
  );
};

export default Home;