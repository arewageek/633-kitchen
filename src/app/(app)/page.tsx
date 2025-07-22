import Catalog from "@/components/catalog";
import Tabs from "@/components/layout/tabs";
import Search from "@/components/search";

export default function Home() {

  return (
    <div className="">
      <Search />
      <div className="mt-4">
        <Tabs />
      </div>

      <Catalog />
    </div>
  );
}
