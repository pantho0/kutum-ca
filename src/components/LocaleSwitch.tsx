import { useLocale } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcherSelect";
import { routing } from "@/i18n/routing";

const LocaleSwitch = () => {
  const locale = useLocale();
  return (
    <>
      <LanguageSwitcher defaultValue={locale} label="Select a locale">
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </LanguageSwitcher>
    </>
  );
};

export default LocaleSwitch;
