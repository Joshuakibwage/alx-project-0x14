import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
                <div className="min-h-screen">{children}</div>
            <Footer />
        </>
    )
}


export default Layout;