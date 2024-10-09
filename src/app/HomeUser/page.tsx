"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Image, Spinner } from "@nextui-org/react";

const page = () => {
  const [user, setUser] = useState<{
    id: number;
    email: string;
    role: number;
  } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("./api/logout", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (!data.success) {
          router.push("/Login");
        } else {
          setUser(data.data);
        }
      } catch (error) {
        console.error("Error fetching user data", error);
        router.push("/Login");
      }
    };
    fetchUserData();
  }, [router]);

  const handleLogout = async () => {
    try {
      const response = await fetch("./api/logout", {
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

  if (!user) {
    return (
      <div className="flex gap-4 w-full h-screen justify-center items-center">
        <Spinner label="Secondary" color="secondary" labelColor="secondary" />
      </div>
    );
  }

  return (
    <div className="w-full bg-blue-600 h-screen flex flex-col justify-center items-center">
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <p className="text-tiny uppercase font-bold">Welcome</p>
          <h4 className="font-bold text-large">{user.email}</h4>
          <small className="text-default-500">
            {user.role === 1 ? "usuario" : ""}
          </small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
          <Button className="mt-2" color="danger" onClick={handleLogout}>
            Logout
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default page;
