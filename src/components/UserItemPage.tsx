import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

type UserItemPageParams = {
    id: string;
};

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);

    const params = useParams<UserItemPageParams>();
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const responce = await axios.get<IUser>(
                `https://jsonplaceholder.typicode.com/users/` + params?.id
            );

            setUser(responce.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <button onClick={() => navigate("/users")}>Back</button>
            <h1>Page user {user?.name}</h1>
            <div>Email: {user?.email}</div>
            <div>
                Adress: {user?.address.city}
                {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;
