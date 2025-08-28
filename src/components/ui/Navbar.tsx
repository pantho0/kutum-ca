import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { useTranslations } from "next-intl";
import LocaleSwitch from "../LocaleSwitch";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const t = useTranslations("navigations");
  const navItems = [
    { key: "/", label: t("Home") },
    { key: "/menu", label: t("Menu") },
    { key: "/reservation", label: t("Reservation") },
    { key: "/about", label: t("About") },
    { key: "/contact", label: t("Contact") },
  ];

  return (
    <nav className="flex justify-between max-w-6xl mx-auto p-4 items-center">
      <div>
        <Image
          width={200}
          height={150}
          src={logo}
          alt="logo"
          className="md:w-[200px] w-[120px]"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-2 items-center">
        <ul className="flex gap-5 font-medium text-xl hover:cursor-pointer items-center">
          {navItems.map((item) => (
            <li key={item.key} className="hover:text-primary">
              <Link href={item.key}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div>
          <LocaleSwitch />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 bg-background border-border p-2"
          >
            {navItems.map((item) => (
              <DropdownMenuItem
                key={item.key}
                className="text-base cursor-pointer p-3 hover:bg-accent hover:text-accent-foreground text-foreground"
              >
                {item.label}
              </DropdownMenuItem>
            ))}
            <div className="border-t border-border mt-2 pt-2">
              <div className="flex text-foreground items-center justify-between px-3 py-2">
                <p>Language:</p>
                <LocaleSwitch />
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
