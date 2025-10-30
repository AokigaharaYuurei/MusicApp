import { Logo } from "../../shared/ui";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { MainScreen } from "../../widgets/mainscreen";
import { BeTurtle } from "../../widgets/beturtle";
import { Button } from "../../shared/ui";
import { BeTurtle2 } from "../../widgets/beturtle2";
import { BeTurtle3 } from "../../widgets/beturtle3";
import { AllVillians } from "../../widgets/allvillains";


export default function Home() {
  return (
    <div className="bg-[#1D1D1D]">
      <header>
        <Header />
      </header>
      <main>
        <div>
          <MainScreen/>
          <BeTurtle/>
          <BeTurtle2/>
          <BeTurtle3/>
          <AllVillians/>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
