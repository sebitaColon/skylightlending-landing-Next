"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Spinner,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import AcmeLogo from "../../assets/logo/logo.png";
import Image from "next/image";

interface User {
  name: string;
  last_name: string;
  email: string;
  password: string;
  rol: number;
}

interface AdminState {
  users: User[];
  userAdmin: { id: number; email: string; role: number } | null;
}

export default function Admin() {
  const [data, setData] = useState<AdminState>({ users: [], userAdmin: null });
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resAdmin = await fetch("/api/logout", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const adminData = await resAdmin.json();
        if (!adminData.success) {
          router.push("/Login");
          return;
        }
        const resUsers = await fetch("/api/user");
        const usersData = await resUsers.json();

        setData({ userAdmin: adminData.data, users: usersData });
      } catch (error) {
        console.error("Error fetching data", error);
        router.push("/Login");
      }
    };

    fetchData();
  }, [router]);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        router.push("/Login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("An error occurred during logout", error);
    }
  };
  if (!data) {
    return (
      <div className="flex gap-4 w-full h-screen justify-center items-center">
        <Spinner label="Secondary" color="secondary" labelColor="secondary" />
      </div>
    );
  }
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
          <Dropdown placement="bottom">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{data.userAdmin?.email || ""}</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>

      <Table className="m-5 w-auto" aria-label="Users Table">
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Last Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Password</TableColumn>
          <TableColumn>Rol</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No rows to display.">
          {data.users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.last_name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell>{user.rol === 1 ? "usuario":"admin"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
