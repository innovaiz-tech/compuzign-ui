
import useScrollToTop from "../../hooks/useScrollToTop";

export default function MigrationAsAService() {
    // Scroll to top when component mounts
    useScrollToTop();
    
    return (
        <div className="bg-gradient-to-b from-[#392e53] to-[#392e5e] text-white min-h-screen py-16 px-4">
            <div className="max-w-[1200px] mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Migration As A Service</h1>
                <p className="text-lg text-center mb-12">Seamless migration solutions for your business</p>
            </div>
        </div>
    );
}