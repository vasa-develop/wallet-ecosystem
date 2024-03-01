import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Page({ params }: { params: { name: string } }) {
  return (
    <>
      <div className="container flex gap-2 m-auto">
        <div className="w-64 p-2 sticky">
          <Card className="sticky top-4">
            {Array(10)
              .fill(1)
              .map((i, index) => (
                <CardContent key={index}>
                  <Link href={`#section-${index}`}>Card Content {index}</Link>
                </CardContent>
              ))}
          </Card>
        </div>
        <div className="flex-1 gap-8 flex flex-col p-2">
          <Card>
            <CardHeader>
              <CardTitle>{params.name}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          {Array(10)
            .fill(1)
            .map((i, index) => (
              <Card key={index} id={`section-${index}`}>
                <CardHeader>
                  <CardTitle>{index}</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
}
