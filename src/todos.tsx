import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Calendar, Search } from "lucide-react";

const todos = [
  {
    id: 1,
    title: "Todo 1",
    description: "Description 1",
    status: "todo",
  },
  {
    id: 2,
    title: "Todo 2",
    description: "Description 2",
    status: "in-progress",
  },
];

function Todos() {
  return (
    <>
      <div className=" flex justify-center px-5">
        <Card className="w-[700px] my-20 p-5">
          <CardHeader className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col gap-1">
                <CardTitle>Todos</CardTitle>
                <CardDescription>Manage your tasks</CardDescription>
              </div>
              <div className="flex flex-row items-center gap-1">
                <h3 className="mr-3 text-lg font-normal">Hi, User</h3>
                <p>[Avatar]</p>
              </div>
            </div>
            <div className="flex flex-row gap-8 justify-between">
              <Button>Add todo</Button>
            </div>
            <div className="flex flex-row gap-1">
              <Input
                type="text"
                value={"keyword"}
                placeholder="search"
                className="focus-visible:ring-1 focus-visible:ring-offset-1"
              />
              <Button className="max-w-[50px] flex justify-center items-center">
                <Search className="" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {todos.map((todo: any) => {
                return (
                  <div
                    key={todo.id}
                    className="flex flex-row justify-between border-2 p-3 rounded-xl"
                  >
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold">{todo.title}</h3>
                      <p className="text-sm">
                        {todo.description.substring(0, 40)}
                      </p>
                      <div className="flex flex-row items-center mt-5">
                        <Calendar className="h-4 w-5" />
                        <p className="text-sm">24/04/2024</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Button>Edit</Button>

                      <Button>Delete</Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3"></CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Todos;
