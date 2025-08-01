import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import SubNavbar from "@/components/shared/subnavbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <SubNavbar/>
      {children}
      <Footer />
    </main>
  );
}