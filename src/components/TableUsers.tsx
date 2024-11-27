"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import FilterBar from "./FilterBar";
import UserTable from "./UserTable";
import ModalEdit from "../app/admin/ModalEdit";
import { updateState } from "../app/admin/serviceAdmin";
import toast from "react-hot-toast";
import PaginationComponent from "./UI/PaginationComponent";
import { user } from "@nextui-org/react";

interface User {
  id: number;
  name: string;
  last_name: string;
  email: string;
  role: string;
  isActive: boolean;
  image_url:  string;
}
interface DecodedToken {
  id:  number;
  role: string;
}

export default function TableUsers() {
  const [data, setData] = useState<User[]>([]);
  const [adminRole, setAdminRole] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchUser, setSearchUser] = useState<string>('')
  const [filterRole, setFilterRole] = useState<string>('')
  const [filterIsActive, setFilterIsActive] = useState<string>('')
  const [totalPages, setTotalPages] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const router = useRouter();
  const fetchData = async () => {
    const token = Cookies.get("myToken");
    try {
      if (token) {
        const decoded: DecodedToken = jwtDecode(token);
        setAdminRole(decoded.role);
        const filterUser = { filter: searchUser, filterRole: filterRole, filterIsActive:filterIsActive };
        const query = new URLSearchParams(filterUser).toString();
        const res = await fetch(`/api/user/?${query}&page=${currentPage}&id=${decoded.id}`);
        const { usuarios, totalPages } = await res.json();
        setData(usuarios);
        setTotalPages(totalPages); 
      }
    } catch (error) {
      router.push("/login");
    }
  };

  useEffect(() => {
    fetchData();
  }, [isModalOpen, searchUser, filterRole, filterIsActive, currentPage]);

  const handleStatusToggle = async (id: number, isActive: boolean) => {
    const result = await updateState(!isActive, id, adminRole);
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
    fetchData();
  };

  const handleSearchChange = (value: string) => {
    setSearchUser(value);
  };
  const handleRoleChange = (value: string) => {
    setFilterRole(value);
  };
  const handleStatusChange = (value: string) => {
    setFilterIsActive(value);
  };

  return (
    <>
      <FilterBar
        onSearchChange={handleSearchChange}
        onRoleChange={handleRoleChange}
        onStatusChange={handleStatusChange}
      />
      <UserTable
        users={data}
        adminRole={adminRole}
        onEditClick={(user) => {
          setSelectedUser(user);
          setIsModalOpen(true);
        }}
        onStatusToggle={handleStatusToggle}
      />
       <PaginationComponent 
        currentPage={currentPage} 
        totalPages={totalPages}
        handlePageChange={handlePageChange} 
      />
      {isModalOpen && selectedUser && (
        <ModalEdit
          user={selectedUser}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          adminRole={adminRole}
        />
      )}
    </>
  );
}
