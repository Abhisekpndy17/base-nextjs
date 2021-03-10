import Footer from "./Footer"
import Navbar from "./Navbar"
import Style from '../styles/Home.module.css'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className={Style.main}>
            {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout