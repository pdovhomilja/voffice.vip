import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image
        src={"/images/voffice_logo.png"}
        width={500}
        height={500}
        alt="voffice.vip"
      />
    </main>
  );
}
