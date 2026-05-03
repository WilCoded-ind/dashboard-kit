import { Link } from '@inertiajs/react';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';

type SidebarMenuItem = {
    id: number;
    name: string;
    url: string | null;
    icon: string | null;
    children: SidebarMenuItem[];
};

function resolveIcon(name: string | null): LucideIcon | null {
    if (!name) return null;
    const Icon = (Icons as Record<string, unknown>)[name] as LucideIcon | undefined;
    return Icon ?? null;
}

export function NavMain({ menus }: { menus: SidebarMenuItem[] }) {
    const { isCurrentUrl } = useCurrentUrl();

    return (
        <>
            {menus.map((menu) => {
                // standalone — tidak punya children, punya url
                if (!menu.children?.length) {
                    const Icon = resolveIcon(menu.icon);
                    return (
                        <SidebarGroup key={menu.id} className="px-2 py-0">
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={isCurrentUrl(menu.url ?? '')}
                                        tooltip={{ children: menu.name }}
                                    >
                                        <Link href={menu.url ?? '#'} prefetch>
                                            {Icon && <Icon />}
                                            <span>{menu.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroup>
                    );
                }

                // group — parent jadi label, children jadi item
                return (
                    <SidebarGroup key={menu.id} className="px-2 py-0">
                        <SidebarGroupLabel>{menu.name}</SidebarGroupLabel>
                        <SidebarMenu>
                            {menu.children.map((child) => {
                                const Icon = resolveIcon(child.icon);
                                return (
                                    <SidebarMenuItem key={child.id}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isCurrentUrl(child.url ?? '')}
                                            tooltip={{ children: child.name }}
                                        >
                                            <Link href={child.url ?? '#'} prefetch>
                                                {Icon && <Icon />}
                                                <span>{child.name}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroup>
                );
            })}
        </>
    );
}