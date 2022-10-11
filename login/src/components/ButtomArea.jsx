import { AiFillFacebook } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import React from "react";
export default function ButtomArea() {
  return (
    <div className="flex flex-col gap-3 min-w-[450px]  ">
      <button className="bg-[#425a98] flex items-center justify-center gap-2 h-[47px] tracking-widest rounded-full font-medium hover:border hover:border-black text-white uppercase mt-10">
        <AiFillFacebook className=" w-5 h-8" />
        Continuar com o Facebook
      </button>
      <button className="bg-black flex items-center justify-center gap-2 h-[47px] tracking-widest font-medium rounded-full border hover:border-black text-white uppercase">
        <AiFillApple className=" w-5 h-8" />
        Continuar com a Apple
      </button>
      <button className="text-[#6a6a6a] flex items-center justify-center h-[47px] tracking-widest font-medium border border-[#878787] hover:border hover:border-black rounded-full uppercase">
        <img
          src="https://accounts.scdn.co/sso/images/google-icon.1cdc8fce9609d07f0e9d8d0bc4b61f8f.svg"
          alt=""
          className="h-10 w-10"
        />
        Continuar com o Google
      </button>
      <button className="text-[#6a6a6a] h-[47px] tracking-widest font-medium border border-[#878787] hover:border hover:border-black rounded-full uppercase">
        Continuar com um número de Telefone
      </button>
      <div className="flex w-[450px] gap-4 ">
        <div className="border-t border-[#d9dadc] w-[200px] mt-2"></div>

        <span className="uppercase font-medium text-center">ou</span>

        <div className="border-t border-[#d9dadc] w-[200px] mt-2"></div>
      </div>
    </div>
  );
}
