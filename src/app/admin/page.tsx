"use client";
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
import { useState } from "react";
import PaginationComponent from "@/components/UI/PaginationComponent";


export default function Admin() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
          <AdminData />
        </NavbarContent>
      </Navbar>
      <TableUsers currentPage={currentPage} />
      <PaginationComponent 
        currentPage={currentPage} 
        handlePageChange={handlePageChange} 
      />
    </div>
  );
}

