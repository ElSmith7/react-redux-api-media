import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";

function UsersListItems({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 border rounded p-2">
      <div className="flex items-center cursor-pointer" />
      <div className="flex flex-row items-center">
        <Button loading={isLoading} onClick={handleClick} className="mx-3">
          <GoTrashcan />
        </Button>
        {error && <div>Error deleting user</div>}
        {user.name}
      </div>
    </div>
  );
}
export default UsersListItems;
