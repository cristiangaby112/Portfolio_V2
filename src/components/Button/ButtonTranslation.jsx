import { useTranslation } from "react-i18next";

const ButtonTranslation = ({idioma}) => {
  const { i18n } = useTranslation("translation");
  const TranslationES = () => i18n.changeLanguage("es");
  const TranslationEN = () => i18n.changeLanguage("en");
  const Translation = () => {
    idioma === "ES" ? TranslationES() : TranslationEN();
  };

  return (
    <button onClick={Translation}>{idioma}</button>
  )
}

export default ButtonTranslation;