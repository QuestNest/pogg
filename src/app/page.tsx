import Searchbar from "@/components/HomePage/Searchbar";
import Title from "@/components/HomePage/Title";
import SideNav from "@/components/SideNav";

export default function Home() {
  return (
    <div className="bg-home-bg bg-cover bg-center bg-no-repeat h-dvh relative">
      <div className="grid grid-cols-[auto,1fr] h-full">
        <SideNav />
        <div className="relative flex items-start justify-center">
          <div className="absolute top-[20%] w-[70%] max-w-[600px] text-center">
            <Title />
            <Searchbar />
          </div>
        </div>
      </div>
    </div>
  );
}
