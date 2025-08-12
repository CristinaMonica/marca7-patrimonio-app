import React, { ReactNode } from "react";
import Image from "next/image";

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-black bg-opacity-100 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/logo.jpg')",
        }}
      ></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-sm bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="text-center">
            <Image
              src="/images/icon.png"
              alt="Logo"
              width={60}
              height={60}
              className="mx-auto"
            />
            <span className="text-lg font-bold">Marca7 - Patrimônio</span>
          </div>
          {children}
        </div>
      </div>
      <footer className="absolute bottom-0 right-0 p-4 text-white"></footer>
    </div>
  );
};

export default LoginLayout;
