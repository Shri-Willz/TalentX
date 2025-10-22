import React from "react";
import { Button } from "../../components/ui/button";
import {
    Plus,
    FileText,
    Share,
    TrendingUp,
    Sparkles,
    Clock

} from "lucide-react";
import Image from "next/image";

export default function ResumeMaker() {

    const features = [
        {
            id: 1,
            icon: TrendingUp,
            description: "More callbacks with AI-enhanced resumes",
            num: "3x"
        },
        {
            id: 2,
            icon: Sparkles,
            description: "More callbacks with AI-enhanced resumes",
            num: "27%"
        },
        {
            id: 3,
            icon: Clock,
            description: "More callbacks with AI-enhanced resumes",
            num: "10min"
        },
    ]

    return (
        <div className="min-h-screen flex items-center w-full py-20 flex-col gap-10">
            <div className="flex flex-col gap-10 items-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl font-bold text-white">
                        Bulid Your Prefect Resume
                    <br/> 
                        <span className="text-accent mx-auto justify-center flex mt-1">
                            With AI.
                        </span>
                    </h1>
                    <p className="text-text text-lg ">
                        Let AI enhance your resume and boost your job match score
                    </p>
                </div>
                <div className="flex gap-8 items-center ">
                    <Button className="bg-accent text-white flex items-center p-2 rounded-lg">
                    <span>
                        <Plus className="size-4 fill-white" />
                    </span>
                    Start Buliding
                </Button>
                <Button className="bg-transparent border border-white/15 text-white flex items-center hover:bg-accent p-2 rounded-lg">
                    <span>
                        <FileText className="size-4" />
                    </span>
                    Use Template
                </Button>
                <Button className="bg-transparent border border-white/15 text-white flex items-center hover:bg-accent p-2 rounded-lg">
                    <span>
                        <Share className="size-4" />
                    </span>
                    Upload Resume
                </Button>
                </div>
                <div className="flex items-center gap-8">
                    {
                        features.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <div key={feature.id} className="flex flex-col items-center bg-background/50 border-accent/15 border rounded-lg p-6">
                                    <div>
                                        <Icon className="size-10 text-accent mb-2"/>
                                    </div>
                                    <div className="text-white text-2xl font-bold ">
                                        {feature.num}
                                    </div>
                                    <div className="text-text w-[80%] text-center">
                                        {feature.description}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
           
        </div>
    )
}