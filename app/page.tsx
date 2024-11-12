import { getData } from "@/actions/todoActions";
import { getAllUsers, getUser} from "@/actions/userActions";
import Todos from "@/components/todos";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  
  const user: any =  await currentUser();
  if(!user) return;
  const fetchedDetails = await getUser(user?.id);

  if (!fetchedDetails || fetchedDetails.length === 0) {
    console.log("User not found or no todos available.");
    return <div>No user data available</div>;
  }

  const userData = fetchedDetails[0];
  const todos = userData.todo || []; // default to an empty array if no todos

  return (
    <main className="flex items-center justify-between">
      <Todos todos={todos} user={userData} />
    </main>
  );
}