import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ShieldXIcon } from "lucide-react";
import Link from "next/link";

export default function NotAdminPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card className="max-w-md w-full ">
                <CardHeader className="text-center">
                    <div className="bg-destructive/50 rounded-full p-4 w-fit mx-auto">
                         <ShieldXIcon className="size-16 text-destructive"/>
                    </div>
                    <CardTitle className="text-2xl">
                        Access Denied
                    </CardTitle>
                    <CardDescription className="max-w-xs mx-auto">
                        Hey! You are not an Admin, you cannot create any course
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="/" className={buttonVariants({
                        className: "w-full"
                    })}>
                    <ArrowLeft className="mr-1 size-4 "/>
                    Back to home
                    </Link>
                </CardContent>

            </Card>

        </div>
    );
}