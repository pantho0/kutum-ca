import { LucideIcon, PackagePlus } from "lucide-react";
import {
  FileText,
  HelpCircle,
  BookCheck,
  User,
  Package,
  Settings,
  UserCog,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  badge?: string;
}

type NavSection = {
  [key: string]: NavItem[];
};

export const sidebarAdminNavItems: NavSection = {
  main: [
    {
      href: "/admin-management/all-items",
      label: "All Items",
      icon: Package,
    },
    {
      href: "/admin-management/add-item",
      label: "Add Item",
      icon: PackagePlus,
    },
  ],
  account: [
    {
      href: "/admin-management/profile",
      label: "Profile",
      icon: User,
    },
    {
      href: "/admin-management/user-management",
      label: "User Management",
      icon: UserCog,
    },
    {
      href: "/admin-management/settings",
      label: "Settings",
      icon: Settings,
    },
  ],
  reservations: [
    {
      href: "/admin-management/reservations",
      label: "Reservations",
      icon: BookCheck,
    },
  ],
  service: [
    {
      href: "/admin-management/help",
      label: "Help Center",
      icon: HelpCircle,
    },
    {
      href: "/admin-management/terms",
      label: "Terms & Conditions",
      icon: FileText,
    },
  ],
};

// export const sidebarUserNavItems: NavSection = {
//   main: [
//     {
//       href: "/user-management/my-orders",
//       label: "My Orders",
//       icon: Package,
//     },
//     {
//       href: "/user-management/reviews",
//       label: "My Reviews",
//       icon: LayoutDashboard,
//     },
//   ],
//   account: [
//     {
//       href: "/user-management/profile",
//       label: "Profile",
//       icon: User,
//     },
//     {
//       href: "/user-management/settings",
//       label: "Settings",
//       icon: Settings,
//     },
//   ],
//   service: [
//     {
//       href: "/user-management/help",
//       label: "Help Center",
//       icon: HelpCircle,
//     },
//     {
//       href: "/user-management/terms",

//       label: "Terms & Conditions",
//       icon: FileText,
//     },
//   ],
// };
