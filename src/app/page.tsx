import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="bg-home-bg bg-cover bg-left bg-no-repeat h-screen">
      <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2">
        <Title />
      </div>
    </div>
  );
}
