'use client'
import Link from "next/link";
import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
const Home = () => {
  const documents=useQuery(api.documents.get)
  if(documents===undefined){
    return <div>...Loading</div>
  }
  return (
    <div className="flex min-h-screen flex-col p-4">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        {documents?.map((document)=>(
          <span key={document._id}>{document?.title}</span>
        ))}
      </div>
    </div>
  )
}
export default Home;