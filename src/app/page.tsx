import Image from "next/image";
import "./styles/header.scss";

export default function Home() {
  return (
    <>
      <header className="header">
        <Image src="/logo.png" alt="Logo do site" width="150" height="36" />
        <h1>Bem-vindo de volta, Marcus</h1>
        <span>Segunda, 01 de dezembro de 2025</span>
      </header>
    </>
  );
}
