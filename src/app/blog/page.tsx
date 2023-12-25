import Footer from "../headfoot/Footer";
import Footertwo from "../headfoot/Footertwo";
import Header from "../headfoot/Header";
import Headertwo from "../headfoot/Headertwo";
import Blog from "./oldblog";
import NewBlog from "./blog";



export default function Page() {
    return (
        <>
        <Header auth={false}/>
        {/* <Headertwo/> */}
        <NewBlog/>
        {/* <Footertwo/> */}
        <Footer/>
        </>
        
    )
}