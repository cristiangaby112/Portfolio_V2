import { useTranslation } from "react-i18next";
import s from "./ButtonTranslation.module.css";
import { IoLanguage } from "react-icons/io5"

const ButtonTranslation = ({idioma}) => {
  const { i18n } = useTranslation("translation");
  const TranslationES = () => i18n.changeLanguage("es");
  const TranslationEN = () => i18n.changeLanguage("en");
  const Translation = () => {
    idioma === "ES" ? TranslationES() : TranslationEN();
  };

  return (
    <button onClick={Translation} className={s.button}>
      <div className={s.icon_container}>
        <IoLanguage className={s.icon}/>
      </div>
      <div>
        {idioma}
      </div>
    </button>
  )
}

export default ButtonTranslation;