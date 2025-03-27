import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";
import Feeds from "@/components/feed/Feeds";
import fetchData from "@/utils/fetchData";
import SearchBar from "@/components/searchBar/SearchBar";
import { FiBell } from "react-icons/fi";

export default function Home() {

  const name = "Charlie"

  return (
     <div className="flex">   
       <Sidebar/>         
        <Feeds/>
      <SearchBar hr={name}/>  
      <FiBell style={{ width:'100px', height:'100px'}}/>          
     </div> 
  );
}



