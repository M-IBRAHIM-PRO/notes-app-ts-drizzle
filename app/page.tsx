import { getData } from "@/actions/todoActions";
import { getAllUsers, getUserData } from "@/actions/userActions";
import Todos from "@/components/todos";

export default async function Home() {
  const users=await getAllUsers();
  // // console.log(users); //Checking
  const data = await getData(users[0]?.id);
  // console.log(data);
  const user=getUserData(users[0]?.id);
  // console.log(user);

  return <Todos todos={data} user={users[0]} />; // 1 is the dummy value untill we done authentication
}