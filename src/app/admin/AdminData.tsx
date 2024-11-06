"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Spinner,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { fetchAdminData } from "./serviceAdmin";
import Cookies from 'js-cookie';

interface UserAdmin {
  id: number;
  email: string;
  role: string; 
}

interface AdminState {
  userAdmin: UserAdmin | null;
}

export default function AdminData() {
  const [data, setData] = useState<AdminState>({ userAdmin: null }); 
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminData = await fetchAdminData();
        if (!adminData.success) {
          router.push("/Login");
          return;
        }
        setData({ userAdmin: adminData.data }); 
      } catch (error) {
        console.error("Error fetching data", error);
        router.push("/Login");
      }
    };

    fetchData();
  }, [router]);

  const handleLogout = async () => {
    Cookies.remove('myToken');
    const cookieEliminada = Cookies.get('myToken');
    if (!cookieEliminada) {
      router.push('/Login')
    }
  };

  if (!data.userAdmin) { 
    return (
      <div className="flex gap-4 w-full h-screen justify-end items-center">
        <Spinner color="default" />
      </div>
    );
  }

  return (
    <>
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
            <p className="font-semibold text-center">Signed in as</p>
            <p className="font-semibold text-center">{data.userAdmin.email || ""}</p>
            <p className="font-semibold text-center">{data.userAdmin.role || "No Role"}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={handleLogout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
