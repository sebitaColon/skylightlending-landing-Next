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
  Link,
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
        // Fetch admin data
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

        // Fetch users data
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

  return (
    <div>
      <Navbar className="bg-blue-500">
        <NavbarBrand>
          <Image src={AcmeLogo} alt="" />
        </NavbarBrand>

        <NavbarContent className="dark hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
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
        </TableHeader>
        <TableBody emptyContent="No rows to display.">
          {data.users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.last_name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.password}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
