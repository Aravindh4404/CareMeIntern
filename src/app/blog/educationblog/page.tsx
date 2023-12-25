import Header from "@/app/headfoot/Header";
import Footer from "@/app/headfoot/Footer";
import EducationBlogPage from "./educationblog";



export default function Page() {
    return (
        <>
        <Header auth={false}/>
        <EducationBlogPage/>
        <Footer/>
        </>
        
    )
}