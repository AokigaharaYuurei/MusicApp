import { Logo } from "../../shared/ui";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { Search } from "../../widgets/search";
import { Song } from "../../widgets/song";

export default function Home() {
  return (
    <div className="bg-[#B4B4B4]">
      <Header />
      <div className="flex justify-center items-center mx-60 flex-col">
        <Search/>
        <Song/>
      </div>
      <Footer />
    </div>
  );
}
