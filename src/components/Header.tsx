import MainHeader from "./MainHeader";
import { MobileHeader } from "./MobileHeader";

export function Header() {
    return (
        <>
            {/* MainHeader is visible on medium screens and above */}
            <div className="hidden lg:block">
                <MainHeader />
            </div>

            {/* MobileHeader is visible on small screens */}
            <div className="block lg:hidden">
                <MobileHeader />
            </div>
        </>
    );
}