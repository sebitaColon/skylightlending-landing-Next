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

interface User {
  id: number;
  name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
}

export default function TableUsers() {
  const [data, setData] = useState<{ users: User[] }>({ users: [] });
  const router = useRouter();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userStatus, setUserStatus] = useState<boolean>();

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
      try {
        const resUsers = await fetch("/api/user");
        const usersData: User[] = await resUsers.json();
        setData({ users: usersData });
      } catch (error) {
        router.push("/Login");
      }
    };
    fetchData();
  }, [router, isModalOpen, userStatus]);

  function handleStatusUser(estus: boolean, id:number){
    const estado = (!estus);
    setUserStatus(!userStatus);
    updateState(estado,id)
  }

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
                    src: "",
                  }}
                />
              </TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                {" "}
                <div className="flex gap-2 items-center">
                  <Button
                    onClick={() => handleEditClick(user)}
                    className="bg-yellow-400 w-auto min-w-0"
                  >
                    <Image src={EditIcon} alt={"Edit Icon"}></Image>
                  </Button>
                </div>
              </TableCell>
              <TableCell>
                  <Button onClick={() => handleStatusUser(user.isActive,user.id)
                  } color={user.isActive? 'success':'danger'
                  }variant="flat">
                    {`${user.isActive}`}
                    </Button>
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
        />
      )}
    </>
  );
}
