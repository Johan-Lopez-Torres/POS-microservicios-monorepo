import { Badge } from "@/components/ui/badge.tsx";
import * as react from "react";

export interface NavigationLinkProps {
    icon: react.ForwardRefExoticComponent<react.PropsWithoutRef<react.SVGProps<SVGSVGElement>> & react.RefAttributes<SVGSVGElement>>;
    label: string;
    badgeCount?: number;
}

export function NavigationLink({ icon: Icon, label, badgeCount }: NavigationLinkProps) {
    return (
        <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
            <Icon className="h-4 w-4" />
            {label}
            {badgeCount !== undefined && (
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">{badgeCount}</Badge>
            )}
        </a>
    );
}