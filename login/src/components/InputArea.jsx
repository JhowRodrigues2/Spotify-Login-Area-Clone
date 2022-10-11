import React from "react";

export default function InputArea() {
  return (
    <div className="flex flex-col w-[450px] mt-3 gap-2 ">
      <label htmlFor="" className="font-semibold text-[14px]">
        Endereço de e-mail ou nome de usuário
      </label>
      <input
        type="text"
        placeholder="Endereço de e-mail ou nome de usuário"
        className="rounded border border-[#878787] h-12 pl-3 placeholder:text-[#878787]"
      />
      <label htmlFor="" className="font-semibold text-[14px] mt-3">
        Senha
      </label>
      <input
        type="text"
        placeholder="Senha"
        className="rounded border border-[#878787] h-12 pl-3 placeholder:text-[#878787]"
      />
      <div className="h-9 underline;">
        <a href="" className="cursor-auto ">
          <p className="hover:underline">Esqueceu a senha ?</p>
        </a>
      </div>
      <div
        className="sm:flex w-full flex-row  border-[#d9dadc] border-b justify-between 
    "
      >
        <div className="flex gap-2 mt-2 items-start w-40">
          <input type="checkbox" className="mt-2 " />
          <p>Lembrar de mim</p>
        </div>
        <div className="flex justify-end mt-4 sm:mt-0 sm:w-40 mb-6 w-[450px]">
          <button className="bg-[#68d361] w-full sm:w-32 h-12 rounded-full uppercase font-bold tracking-widest  hover:bg-[#6cdb65] sm:hover:w-[130px] ">
            Entrar
          </button>
        </div>
      </div>
      <div className="">
        <div className=" text-center m-5">
          <p className="font-bold">Não tem uma conta?</p>
        </div>
        <div>
          <button className="text-[#6a6a6a] h-[47px] w-full tracking-widest font-medium border border-[#878787] hover:border hover:border-black rounded-full uppercase">
            Inscrever-se no Spotify
          </button>
        </div>
      </div>
    </div>
  );
}
