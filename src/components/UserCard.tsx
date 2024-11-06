"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { fetchUserData } from "@/app/HomeUser/serviceHomeUser";
import Cookies from 'js-cookie';

const UserCard = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<{
    id: number;
    email: string;
    role: string;
  } | null>(null);

  const router = useRouter();
  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserData();
      if (data?.success) {
        setUser(data.data);
      } else {
        console.error("No user data found, redirecting to login");
        router.push("/Login");
      }
    };
    getUserData();
  }, [router]);

  const handleLogout = async () => {
    Cookies.remove('myToken');
    const cookieEliminada = Cookies.get('myToken');
    if (!cookieEliminada) {
      router.push('/Login')
    }
  };

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <p className="text-tiny uppercase font-bold">Welcome</p>
        <h4 className="font-bold text-large">{user?.email}</h4>
        <small className="text-default-500">{user?.role}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
        <Button
          className="mt-2"
          color="danger"
          onClick={handleLogout}
          disabled={loading}
        >
          Logout
        </Button>
      </CardBody>
    </Card>
  );
};

export default UserCard;
