import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import AcmeLogo from "../../assets/logo/logo.png";
import Image from "next/image";
import TableUsers from "../../components/TableUsers";
import AdminData from "./AdminData";
import ThemeMode from "@/components/ThemeMode";

export default function Admin() {
  return (
    <div>
      <Navbar className="bg-blue-500">
        <NavbarBrand>
          <Image src={AcmeLogo} alt="" />
        </NavbarBrand>

        <NavbarContent className="dark hidden sm:flex gap-4" justify="center">
          <NavbarItem className="text-white font-bold">
              SKYLIGHT LENDING
          </NavbarItem>
        </NavbarContent>
        <NavbarContent as="div" justify="end">
          <ThemeMode/>
            <AdminData/>
        </NavbarContent>
      </Navbar>
      <TableUsers/>
    </div>
  );
}
