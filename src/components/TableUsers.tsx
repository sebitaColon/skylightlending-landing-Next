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
  User,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import ModalEdit from "../app/admin/ModalEdit";
import EditIcon from "@/assets/iconEdit.svg";
import { updateState } from "../app/admin/serviceAdmin";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface User {
  id: number;
  name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
  image_url: string;
}
interface DecodedToken {
  id: number;
  role: string;
}

interface TableUsersProps {
  currentPage: number; 
}

export default function TableUsers({ currentPage }: TableUsersProps) {
  const [data, setData] = useState<{ users: User[] }>({ users: [] });
  const router = useRouter();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userStatus, setUserStatus] = useState<boolean>();
  const [adminRole, setAdminRole] = useState("");

  const handleEditClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("myToken");
      try {
        if (token) {
          const decoded: DecodedToken = jwtDecode(token);
          setAdminRole(decoded.role);

          
          const resUsers = await fetch(`/api/user?page=${currentPage}`);
          const usersData: User[] = await resUsers.json();
          const filteredUsers = usersData.filter((user) => user.id !== decoded.id);
          setData({ users: filteredUsers });
        }
      } catch (error) {
        router.push("/Login");
      }
    };
    fetchData();
  }, [router, isModalOpen, userStatus, currentPage]);
  const handleStatusUser = async (status: boolean, id: number, adminRole: string) => {
    const estado = !status;
    setUserStatus(!userStatus);
    const result = await updateState(estado, id, adminRole);
    if (!result.success) {
      toast.error(`${result.message}`);
    } else {
      toast.success(`${result.message}`);
    }
  };

  return (
    <>
      <Table className="m-5 w-auto" aria-label="Users Table">
        <TableHeader>
          <TableColumn>id</TableColumn>
          <TableColumn>User</TableColumn>
          <TableColumn>Role</TableColumn>
          <TableColumn>Actions</TableColumn>
          <TableColumn>Active</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No rows to display.">
          {data.users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.id}</TableCell>
              <TableCell>
                <User
                  name={`${user.name} ${user.last_name}`}
                  description={user.email}
                  avatarProps={{
                    src: user.image_url,
                  }}
                />
              </TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  {adminRole === "MANAGER" && user.role === "ADMIN" ? (
                    <Button isDisabled className="bg-yellow-400 w-auto min-w-0">
                      <Image src={EditIcon} alt={"Edit Icon"} />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleEditClick(user)}
                      className="bg-yellow-400 w-auto min-w-0"
                    >
                      <Image src={EditIcon} alt={"Edit Icon"} />
                    </Button>
                  )}
                </div>
              </TableCell>
              <TableCell>
                {adminRole === "MANAGER" && user.role === "ADMIN" ? (
                  <Button isDisabled variant="flat" color={user.isActive ? "success" : "danger"}>
                    {`${user.isActive}`}
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleStatusUser(user.isActive, user.id, adminRole)}
                    color={user.isActive ? "success" : "danger"}
                    variant="flat"
                  >
                    {`${user.isActive}`}
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isModalOpen && selectedUser && (
        <ModalEdit
          user={selectedUser}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          adminRole={adminRole}
        />
      )}
    </>
  );
}
