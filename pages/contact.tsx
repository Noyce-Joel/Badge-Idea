import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, MotionConfig } from "framer-motion";
import { transition2 } from "../lib/settings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:noyce.joel@gmail.comsubject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  }

  return (
    <MotionConfig transition={transition2}>
    <motion.div 
    initial={{
      opacity: 0,
      scale: 0,
      x:'95%',
      y: '100%'
    }}
    animate={{
      opacity: 1,
      scale: 1,
      x:'0%',
      y: '0%'
    }}
    exit={{
      opacity: 0,
      scale: 0,
      x:'95%',
      y: '100%'
    }}
    
    className="relative h-screen flex text-left px-10 justify-evenly items-center">
      
      <div className="relative grid-flow-row space-y-10">
        
        <div className="space-y-2 text-white tracking-widest">
        <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-yellow-200 h-7 w-7 animate-pulse" />
            <p className="text-xl">noyce.joel@gmail.com</p>
          </div>
          <div className="flex space-x-5 justify-center">
            <PhoneIcon className="text-yellow-200 h-7 w-7 animate-pulse items-left" />
            <p className="text-xl text-left">07535137261</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-yellow-200 h-7 w-7 animate-pulse" />
            <p className="text-xl">Sheffield</p>
          </div>
          
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="items-center grid grid-col space-y-4"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="  Name"
              className="contactInput rounded-xl"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="  Email"
              className="contactInput rounded-xl"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="  Subject"
            className="contactInput rounded-xl"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder=" Message"
            className="contactInput h-[150px] rounded-xl"
          />
          <button
            type="submit"
            className="bg-yellow-200 hover:scale-110 active:scale-100 transition-transform duration-[250ms] justify-center left-[122px] rounded-full w-[100px] h-[100px] text-[#374273] text-center font-bold text-lg object-cover"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
    </MotionConfig>
  );
}
