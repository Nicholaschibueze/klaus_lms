import { adminGetCourse } from "@/app/data/admin/admin-get-course"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EditCourseForm } from "./_component/EditCourseForm"
import { CourseStructure } from "./_component/CourseStructure"

type Params = Promise<{courseId: string}>
export default async function EditRoute({params} : {params: Params}) {
    const {courseId} = await params
    const data = await adminGetCourse(courseId)
    return(
        <div>
            <h1 className="text-3xl font-bold mb-8">Edit Course:<span className="text-primary underline">{data.title}</span></h1>
            <Tabs defaultValue="basic-info" className="w-full">
                <TabsList className="w-full grid grid-cols-2">
                    <TabsTrigger value="basic-info">Basic Info</TabsTrigger>
                    <TabsTrigger value="course-structure">Course Structure</TabsTrigger>
                </TabsList>

                <TabsContent value="basic-info">
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic Info</CardTitle>
                            <CardDescription>Provide basic information bout the course</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <EditCourseForm data={data}/>
                        </CardContent>
                    </Card>

                </TabsContent>

                 <TabsContent value="course-structure">
                    <Card>
                        <CardHeader>
                            <CardTitle>Course Structure</CardTitle>
                            <CardDescription>Here you can update your course structure</CardDescription>
                        </CardHeader>
                        <CardContent>
                        </CardContent>
                        <CourseStructure data={data}/>
                    </Card>

                </TabsContent>


            </Tabs>
        </div>
    )
}