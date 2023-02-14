import { motion } from "framer-motion";
import React from "react";
import Button from "/components/button";
import ButtonMobile from "../components/buttonMobile";

function index() {
  return (
    <div className="">
    <div className="z-0 flex absolute top-0 right-px h-screen w-screen items-start justify-start px-36 py-28 flex-col mx-auto">
      <Button />
    </div>
    <div className="">
      Hey there
    </div>
    </div>
  );
}

export default index;
