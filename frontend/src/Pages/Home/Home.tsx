import Header from "../../Components/Header/Header";
import AsideNav from "../../Components/NavAside/NavAside";

export function Home() {
  
  return (
    <div>
      <AsideNav />
      <div className="flex">
        <div className="flex-grow">
          <Header />
          <main className="p-4">
            <h1 className="text-3xl font-bold">EU SOU A PÁGINA DE HOME</h1>
          </main>
        </div>
      </div>
    </div>
  );
}
