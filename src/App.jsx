import { useTranslation } from "react-i18next";
import SpinnerLoading from "./components/ui/spinnerLoading/SpinnerLoading";

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <SpinnerLoading />
    </div>
  );
}
