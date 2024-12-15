import Footer from "@/components/Footer";
import Searchbar from "@/components/HomePage/Searchbar";
import Title from "@/components/HomePage/Title";
import SideNav from "@/components/SideNav";

export default function Home() {
  return (
    <div className="bg-home-bg bg-cover bg-center bg-no-repeat h-dvh grid grid-cols-[auto,1fr] grid-rows-[1fr,auto]">
      <div className="row-span-2 h-full">
        <SideNav />
      </div>
      <div className="relative flex items-start justify-center row-span-1">
        <div className="mt-36 w-[70%] max-w-[600px] text-center">
          <Title />
          <Searchbar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

