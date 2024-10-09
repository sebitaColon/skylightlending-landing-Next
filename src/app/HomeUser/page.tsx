"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

const page = () => {
  const [user, setUser] = useState<{ id: number; email: string; role: number } | null>(null);
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
      const response = await fetch('./api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.success) {
        router.push('/Login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('An error occurred during logout', error);
    }
  };

  if (!user) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="w-full bg-slate-500 h-screen flex flex-col justify-center items-center">
      <h1>Bienvenido, {user.email}</h1>
      <p>Tu rol: {user.role === 1 ? "usuario":""}</p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default page;
