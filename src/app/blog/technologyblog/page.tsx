import Header from "@/app/headfoot/Header";
import Footer from "@/app/headfoot/Footer";
import TechnologyBlogPage from "./technologyblog";



export default function Page() {
    return (
        <>
        <Header auth={false}/>
        <TechnologyBlogPage/>
        <Footer/>
        </>
        
    )
}