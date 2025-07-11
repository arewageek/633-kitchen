import Catalog from "@/components/catalog";
import Tabs from "@/components/layout/tabs";
import Search from "@/components/search";
import Image from "next/image";

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
