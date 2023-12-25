import Header from "@/app/headfoot/Header";
import Footer from "@/app/headfoot/Footer";
import NewsBlogPage from "./newsblog";



export default function Page() {
    return (
        <>
        <Header auth={false}/>
        <NewsBlogPage/>
        <Footer/>
        </>
        
    )
}