import Searchbar from "@/components/HomePage/Searchbar";
import Title from "@/components/HomePage/Title";

export default function Home() {
  return (
    <div className="bg-home-bg bg-cover bg-left bg-no-repeat h-screen flex justify-center">
      <div className="absolute top-[20%] w-[90%] max-w-[600px] text-center">
        <Title />
        <Searchbar />
      </div>
    </div>
  );
}
