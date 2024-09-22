import { Package2, Home, ShoppingCart, Package, Users, LineChart } from "lucide-react";
import { NavigationLink } from "./NavigationLink";

export function Sidebar() {
    // @ts-ignore
    return (
        <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <a href="/facturacion-electronica-monorepo/frontend-app/public" className="flex items-center gap-2 font-semibold">
                        <Package2 className="h-6 w-6" />
                        <span>Acme Inc</span>
                    </a>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <NavigationLink icon={Home} label="Dashboard" />
                        <NavigationLink icon={ShoppingCart} label="Orders" badgeCount={6} />
                        <NavigationLink icon={Package} label="Products" />
                        <NavigationLink icon={Users} label="Customers" />
                        <NavigationLink icon={LineChart} label="Analytics" />
                    </nav>
                </div>
            </div>
        </div>
    );
}
