import React from "react";
import {
    Briefcase,
    BookOpen,
    Mail,
    Users,
    Mic,
    Bell,
    User,
    Settings,
    FileText,
    ChartNoAxesCombined,
    LogOut
}
    from "lucide-react";
import Link from "next/link";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";


export default function Navbar() {

    const navlst = [
        { name: 'Jobs', link: '/jobs', icon: Briefcase },
        { name: 'Learn', link: '/learn', icon: BookOpen },
        { name: 'Interview', link: '/interview', icon: Mic },
        { name: 'Connections', link: '/connections', icon: Users },
        { name: 'Messages', link: '/messages', icon: Mail },
    ]



    return (
        <nav className="flex h-[60px] w-full bg-transparent px-10 justify-between items-center border-1 border-b-accent/40">
            <div className="flex items-center cursor-pointer">
                <Link href="/protected" className="mr-10">
                    <h1 className="text-white text-2xl font-bold font-sans flex items-center">
                        Talent
                        <span className="text-accent text-4xl rotate-12">
                            X
                        </span>
                    </h1>
                </Link>

            </div>
            <div className="flex">
                {navlst.map((item) => {
                    const Icon = item.icon;
                    return (
                        <a key={item.name} href={item.link} className="text-text mx-4 text-sm flex items-center hover:text-accent">
                            <Icon className="mr-2 size-4" />
                            {item.name}
                        </a>
                    )
                })}

            </div>
            <div className="flex items-center">
                <Bell className="text-white mr-3 size-8 p-2 hover:text-accent cursor-pointer rounded-2xl hover:bg-gray-500/30" />
                <Menubar className="border-none">
                    <MenubarMenu>
                        <MenubarTrigger>
                            <User className="text-white size-8 hover:text-accent cursor-pointer rounded-2xl bg-gray-500/30 p-2" />
                        </MenubarTrigger>
                        <MenubarContent className="bg-background text-white border border-accent/30">
                            <MenubarItem>
                                <span>
                                    <User className="size-4 inline-block" />
                                </span>
                                <Link href="/profile">Profile</Link>
                            </MenubarItem>
                            <MenubarItem>
                                <span>
                                    <Settings className="size-4 inline-block" />
                                </span>
                                <Link href="/settings">Settings</Link>
                            </MenubarItem>
                            <MenubarItem>
                                <span>
                                    <FileText className="size-4 inline-block" />
                                </span>
                                <Link href="/resumemaker">Resume Maker</Link>
                            </MenubarItem>
                            <MenubarItem>
                                <span>
                                    <ChartNoAxesCombined className="size-4 inline-block" />
                                </span>
                                <Link href="/analytics">Analytics</Link>
                            </MenubarItem>
                            <MenubarSeparator className="bg-accent/20" />
                            <MenubarItem className="text-red-600">
                                 <span>
                                    <LogOut className="size-4 inline-block" />
                                </span>
                                <Link href="/lagout">Logout</Link>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>

            </div>
        </nav>
    )
}