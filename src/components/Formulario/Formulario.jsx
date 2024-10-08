import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import s from "./Formulario.module.css";
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Formulario = () => {
  const {t} = useTranslation("translation");
  const [state, handleSubmit] = useForm("xeqnrzqw");
  const id = "message";
  // const mensaje = () => {
  //   toast.success("Gracias por comunicar con cristian", {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };
  // useEffect(() =>{
  //   if(state.succeeded){
  //     mensaje();
  //   }
  // }, [state.succeeded]);

  if (state.succeeded) {
    // mensaje();
    return (
      <div className={s.saludo}>
        <h1>Gracias</h1>
        {/* <ToastContainer /> */}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={s.container_formulario}>
      <div className={s.container_input}>
        <input
          className={s.input}
          id="name"
          type="text"
          name="name"
          label="Nombre"
          placeholder={t('Placeholder.Nombre')}
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className={s.container_input}>
        <input
          className={s.input}
          id="email"
          type="email"
          name="email"
          label="Correo Electronico"
          placeholder={t('Placeholder.Correo_Electronico')}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className={s.container_input}>
        <input
          className={`${id === "message" ? s.input_mensaje : s.input} `}
          id="message"
          type="text"
          name="message"
          label="Mensaje"
          placeholder={t('Placeholder.Mensaje_')}
          required
        />
        <ValidationError
          prefix="Mensaje"
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting} className={s.button}>
        {t('Enviar_Mensaje')}
      </button>
      {/* <ToastContainer /> */}
    </form>
  );
};

export default Formulario;
