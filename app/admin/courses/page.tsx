import { adminGetCourses } from "@/app/data/admin/admin-get-courses";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function CoursesPage(){
    const data = await adminGetCourses();
    return(

        <>
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Your Courses</h1>

            <Link className={buttonVariants()} href="/admin/courses/create">
            Create Courses
            </Link>
        </div>
        <div>
            {data.map ((course) =>(
                <p key={course.id}>{course.title}</p>
            ))}
        </div>
        </>
    )
}