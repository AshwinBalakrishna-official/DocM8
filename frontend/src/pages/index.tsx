import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";
import CardCompoenent from "@/components/CardCompoenent";

const inter = Inter({ subsets: ["latin"] });
interface User{
  Id: number;
  name : String;
  email : String;
}



export default function Home() {
  const [updateUser,setUpdateUser] = useState<User[]>([])
  const user1 = {Id:1,name:"ashwin",email:"ashwin.prisma.com"}
  return (
    <>
     <CardCompoenent props={user1} />
    </>
  );
}
