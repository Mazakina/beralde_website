import MainHeader from "./MainHeader";
import { MobileHeader } from "./MobileHeader";

export function Header() {
    return (
        <>
            {/* MainHeader is visible on medium screens and above */}
            <div className="hidden md:block">
                <MainHeader />
            </div>

            {/* MobileHeader is visible on small screens */}
            <div className="block md:hidden">
                <MobileHeader />
            </div>
        </>
    );
}