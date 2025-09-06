import type { Metadata } from "next";
import React from "react";
// Child layout: inherits providers and html/body from src/app/[locale]/layout.tsx

export const metadata: Metadata = {
  title: "Admin Management",
  description: "Admin management section layout",
};

export default function AdminManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-7xl p-4 md:p-6 lg:p-8">
      {/* Section header specific to Admin Management */}
      <header className="mb-6 border-b pb-4">
        <h1 className="text-2xl font-semibold">Admin Management</h1>
        <p className="text-sm text-muted-foreground">
          Manage admins, roles, and permissions
        </p>
      </header>

      {/* Content area for all admin-management pages */}
      <div className="min-h-[50vh]">{children}</div>
    </section>
  );
}
