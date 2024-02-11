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
            // console.log("Contactos obtenidos exitosamente:", data);
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
      updateContact: async (contact, id) => {
        try {
          const response = await fetch(
            `https://playground.4geeks.com/apis/fake/contact/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                full_name: contact.full_name,
                email: contact.email,
                agenda_slug: "heysonb-agenda", // Asegúrate de reemplazar esto con el valor correcto
                address: contact.address,
                phone: contact.phone,
              }),
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();

          setStore((prevState) => {
            const updatedContacts = prevState.contacts.map((c) =>
              c.id === id ? data : c
            );
            return { ...prevState, contacts: updatedContacts };
          });
        } catch (error) {
          console.error("Error:", error);
        }
      },

      //
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
          // alert("The contact is saved. If you want to do more, use again."); LO he cambiado por un toast
        } catch (error) {
          console.error("Error al realizar la solicitud:", error);
        }
      },
      createRandomContact: async () => {
        fetch("https://randomuser.me/api/")
          .then((response) => response.json())
          .then((data) => {
            const { name, phone, email, location } = data.results[0];

            const postData = {
              full_name: `${name.first} ${name.last}`,
              phone: phone,
              email: email,
              address: `${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country}`,
              agenda_slug: "heysonb-agenda", // Asegúrate de que este es el slug correcto de la agenda
            };

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: JSON.stringify(postData),
              redirect: "follow",
            };

            fetch(
              "https://playground.4geeks.com/apis/fake/contact/",
              requestOptions
            )
              .then((response) => response.text())
              .then((result) => console.log(result))
              .catch((error) => console.log("error", error));
          })
          .catch((error) => {
            console.error("Error al obtener el perfil aleatorio:", error);
          });
      },
    },
  };
};

export default getState;
