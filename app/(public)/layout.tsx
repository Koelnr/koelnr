import { AppFooter } from "@/components/app-footer";

export default function PublicLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      {children}
      <AppFooter />
    </>
  );
}
