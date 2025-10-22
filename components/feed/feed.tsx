'use client';

import {useState} from "react";
import {
    Input
} from "@/components/ui/input";
import{
    Zap,
    SendHorizontal,
    ThumbsUp,
    ThumbsDown,
    Share,
} from "lucide-react";
import { Label } from "../ui/label";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Feed() {

    const [sendIcon, setSendIcon] = useState(false);

    const feedData = [
        {
            id: 1,
            name: "AI Career Agent",
            descripiton: "We just discovered 15 new job openings that match your profile perfectly! Our AI analysis shows these positions align with your React and TypeScript expertise. Top matches include Senior Frontend Developer roles at fast-growing tech companies with competitive salaries ranging $120k-160k.",
            type: "Job Opportunites",
            postage: "2h",
            Hastags: ["#JobMatch","#Frontend","#React"]
        },
         {
            id: 2,
            name: "TalentX Learning",
            descripiton: "Congratulations! You've completed the Advanced React Patterns course and achieved a 95% score. Your learning velocity has increased by 40% this month. Based on current job market trends, we recommend exploring Next.js and serverless architecture next to boost your profile competitiveness by 30%.",
            type: "Skill Development",
            postage: "2h",
            Hastags: ["#Learning","#Achievement","#React"]
        },
         {
            id: 3,
            name: "Interview Coach AI",
            descripiton: "Your recent mock interview performance scored 92/100 - excellent work! You demonstrated strong technical knowledge and communication skills. Areas for improvement: Practice explaining time complexity more concisely. You're now ready for senior-level technical interviews at FAANG companies.",
            type: "Interview Insights",
            postage: "1d",
            Hastags: ["#Interview","#Performance","#Growth"]
        },  
         {
            id: 4,
            name: "Career Tracker",
            descripiton: "Your application to Senior React Developer at TechCorp moved to the interview stage! Your AI-optimized resume had a 95% match score. The company typically responds within 5-7 days. We've prepared custom interview materials based on their technical assessment patterns.",
            type: "Analytics",
            postage: "2d",
            Hastags: ["#Application","#Success","#Interview"]
        },
    ]


    return (
        <div className="px-10 py-10 flex w-[70%] flex-col items-center">
            <div className="w-full">
                <Label className="w-full h-[60px] bg-background/50 border-accent/30 border-1 rounded-lg flex items-center text-text placeholder:text-text focus-within:border-accent">
                    <span className="ml-3 bg-accent/20 p-2 rounded-lg">
                        <Zap className="inline-block size-4 text-accent"/>
                    </span>
                    <Input placeholder="Share your career journay, milestone, or insights" className="w-full pl-0 h-[60px] text-text placeholder:text-text focus:border-accent border-none" onClick={() => setSendIcon(true)} />
                    {
                        sendIcon && 
                        ( 
                            <span className="mr-3 bg-accent/20 p-2 rounded-lg cursor-pointer hover:bg-accent/40">
                                <SendHorizontal className="inline-block size-4 text-accent"/>
                            </span> 
                        )
                    }
                </Label>  
            </div>
            <div>
                {feedData.map((feed) => (
                    <Card key={feed.id} className="mt-6 bg-background/50 border-2 border-accent/20 w-full">
                        <CardHeader>
                            <CardTitle className="text-white text-2xl flex justify-between items-center">
                                <span>{feed.name}</span>
                            </CardTitle>
                            <CardDescription className="flex text-text">{feed.type}
                                <span className="ml-2">
                                    {feed.postage}
                                </span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-text">{feed.descripiton}</p>
                            <div className="mt-4">
                                {feed.Hastags.map((tag, i) => (
                                    <span key={i} className="mr-2 text-accent bg-accent/20 rounded-2xl p-2">{tag}</span>
                                ))}
                            </div>
                        </CardContent>
                        <hr className="text-accent/30 mx-auto w-[95%]"/>
                        <CardFooter className="flex text-text items-center">
                            <div>
                                <ThumbsUp className="size-5 mr-2 hover:fill-accent hover:text-white"/>
                            </div>
                            <div>
                                <ThumbsDown className="size-5 hover:fill-red-500 relative top-[2px] hover:text-white"/>
                            </div>
                            <div className="justify-end w-full flex">
                                <Share className="size-5 ml-4 "/>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
