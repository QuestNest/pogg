import Searchbar from "@/components/HomePage/Searchbar";
import Title from "@/components/HomePage/Title";

export default function Home() {
  return (
    <div className="bg-home-bg bg-cover bg-center bg-no-repeat h-dvh flex justify-center">
      <div className="absolute top-[20%] w-[70%] max-w-[600px] text-center">
        <Title />
        <Searchbar />
      </div>
    </div>
  );
}
