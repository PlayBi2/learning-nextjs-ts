import Footer from "../Footer"
import Header from "../Header"


function DefaultLayout({ children }: any) {

    return (
        <div>
            <Header />
            <div className="min-h-screen min-h-[5000px] z-[-1]">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout

