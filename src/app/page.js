import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";
import Feeds from "@/components/feed/Feeds";
import fetchData from "@/utils/fetchData";
import SearchBar from "@/components/searchBar/SearchBar";

export default function Home() {

  return (
     <div className="flex">   
       <Sidebar/>         
        <Feeds/>
      <SearchBar/>  
     </div> 
  );
}



