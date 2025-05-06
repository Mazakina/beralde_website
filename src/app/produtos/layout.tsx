import Footer from "@/components/Footer";

export default function ProdutosLayout({
        children
    }:Readonly<{
        children: React.ReactNode;}>
) {
    return (
        <main 
            className={` w-full overflow-x-hidden  antialiased`}
        >
            {children}
            <div className="w-full relative z-10 h-fit bg-white ">
                <Footer/>
            </div>
        </main>
    )
}