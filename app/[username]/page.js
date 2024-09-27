import React from "react"
import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import connectDB from "@/db/connectDb";
import User from "../models/User";

const Username = async({params}) => {
  // if the username is not present in the database show a 404 page
  const checkUser = async()=>{

    let u = await User.findOne({username:params.username})
    await connectDB()
    if(!u){
      return notFound()
    }
  }
  await checkUser()

    return (
      <>
      <PaymentPage username={params.username}/>
    </>
  );
};

export default Username;

export async function generateMetadata({ params }) {
  return {
    title: `${params.username}-Get Me a Chai`,
  }
}