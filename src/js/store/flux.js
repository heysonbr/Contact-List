const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      getContacts: async () => {
        try {
          const requestOptions = {
            method: "GET",
            redirect: "follow",
          };

          const response = await fetch(
            "https://playground.4geeks.com/apis/fake/contact/agenda/heysonb-agenda",
            requestOptions
          );

          if (response.ok) {
            const data = await response.json();
            setStore({ contacts: data });
            console.log("Contactos obtenidos exitosamente:", data);
          } else {
            console.error("Error al obtener los contactos");
          }
        } catch (error) {
          console.error("Error al realizar la solicitud:", error);
        }
      },
      addContact: async (contact) => {
        try {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact),
            redirect: "follow",
          };

          const response = await fetch(
            "https://playground.4geeks.com/apis/fake/contact/",
            requestOptions
          );

          if (response.ok) {
            const data = await response.json();
            console.log("Contacto agregado exitosamente:", data);
          } else {
            console.error("Error al agregar el contacto");
          }
        } catch (error) {
          console.error("Error al realizar la solicitud:", error);
        }
      },
      deleteContact: async (id) => {
        try {
          const requestOptions = {
            method: "DELETE",
            redirect: "follow",
          };

          const response = await fetch(
            `https://playground.4geeks.com/apis/fake/contact/${id}`,
            requestOptions
          );

          if (response.ok) {
            console.log("Contacto eliminado exitosamente");
            getActions().getContacts(); // Actualizar la lista de contactos después de eliminar un contacto
          } else {
            console.error("Error al eliminar el contacto");
          }
        } catch (error) {
          console.error("Error al realizar la solicitud:", error);
        }
      },
    },
  };
};

export default getState;
