import Image from "next/image";
import logo from "../../../public/images/logo.png";

import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "../LanguageSwitcherSelect";

const Navbar = () => {
  const t = useTranslations("navigations");
  return (
    <nav className="flex justify-between max-w-6xl mx-auto p-4 items-center">
      <div>
        <Image width={200} height={150} src={logo} alt="logo" />
      </div>
      <div className="flex gap-2 items-center">
        <ul className="flex gap-5 fontl-medium text-xl hover:cursor-pointer items-center">
          <li className="hover:text-primary">{t("Home")}</li>
          <li className="hover:text-primary">{t("Menu")}</li>
          <li className="hover:text-primary">{t("Reservation")}</li>
          <li className="hover:text-primary">{t("About")}</li>
          <li className="hover:text-primary">{t("Contact")}</li>
        </ul>
        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
