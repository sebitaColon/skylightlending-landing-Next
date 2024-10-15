import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import AcmeLogo from "../../assets/logo/logo.png";
import Image from "next/image";
import TableUsers from "@/components/UI/TableUsers";
import AdminData from "@/components/UI/AdminData";

export default function Admin() {
  return (
    <div>
      <Navbar className="bg-blue-500">
        <NavbarBrand>
          <Image src={AcmeLogo} alt="" />
        </NavbarBrand>

        <NavbarContent className="dark hidden sm:flex gap-4" justify="center">
          <NavbarItem className="text-white font-bold">
              SKYLENDING
          </NavbarItem>
        </NavbarContent>
        <NavbarContent as="div" justify="end">
            <AdminData/>
        </NavbarContent>
      </Navbar>
      <TableUsers/>
    </div>
  );
}
