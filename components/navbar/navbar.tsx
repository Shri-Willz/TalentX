"use client";
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
} from "lucide-react";
import Link from "next/link";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "../ui/button";
import { supabase } from "@/lib/supabase/client"; // client-side Supabase
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();

    // Navigation links
    const navlst = [
        { name: 'Jobs', link: '/jobs', icon: Briefcase },
        { name: 'Learn', link: '/learn', icon: BookOpen },
        { name: 'Interview', link: '/interview', icon: Mic },
        { name: 'Connections', link: '/connections', icon: Users },
        { name: 'Messages', link: '/messages', icon: Mail },
    ];

    // Logout function
    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/"); // redirect to home after logout
    };

    return (
        <nav className="flex h-[60px] w-full bg-transparent px-10 justify-between items-center border border-b-accent/40">
            {/* Logo */}
            <div className="flex items-center cursor-pointer">
                <Link href="/protected" className="mr-10">
                    <h1 className="text-white text-2xl font-bold font-sans flex items-center">
                        Talent
                        <span className="text-accent text-4xl rotate-12">X</span>
                    </h1>
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex">
                {navlst.map((item) => {
                    const Icon = item.icon;
                    return (
                        <a
                            key={item.name}
                            href={item.link}
                            className="text-text mx-4 text-sm flex items-center hover:text-accent"
                        >
                            <Icon className="mr-2 size-4" />
                            {item.name}
                        </a>
                    );
                })}
            </div>

            {/* User Menu */}
            <div className="flex items-center">
                <Bell className="text-white mr-3 size-8 p-2 hover:text-accent cursor-pointer rounded-2xl hover:bg-gray-500/30" />
                <Menubar className="border-none">
                    <MenubarMenu>
                        <MenubarTrigger>
                            <User className="text-white size-8 hover:text-accent cursor-pointer rounded-2xl bg-gray-500/30 p-2" />
                        </MenubarTrigger>
                        <MenubarContent className="bg-background text-white border border-accent/30">
                            <MenubarItem>
                                <span><User className="size-4 inline-block" /></span>
                                <Link href="/profile">Profile</Link>
                            </MenubarItem>
                            <MenubarItem>
                                <span><Settings className="size-4 inline-block" /></span>
                                <Link href="/settings">Settings</Link>
                            </MenubarItem>
                            <MenubarItem>
                                <span><FileText className="size-4 inline-block" /></span>
                                <Link href="/resumemaker">Resume Maker</Link>
                            </MenubarItem>
                            <MenubarItem>
                                <span><ChartNoAxesCombined className="size-4 inline-block" /></span>
                                <Link href="/analytics">Analytics</Link>
                            </MenubarItem>
                            <MenubarSeparator className="bg-accent/20" />
                            <MenubarItem className="text-red-600 flex items-center">
                                <LogOut className="size-4 inline-block mr-2" />
                                <Button
                                    variant="link"
                                    className="text-red-600 p-0 m-0"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </nav>
    );
}
