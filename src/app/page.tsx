import Image from "next/image";

const fakeQuery = async (): Promise<String> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅success");
    }, 3000);
  });
};

export default async function Home() {
  const data = await fakeQuery();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{data}</p>
    </main>
  );
}
