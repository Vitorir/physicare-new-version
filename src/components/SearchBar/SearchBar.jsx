
import { useState, useEffect } from "react";
import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../../config/firebase";
import { Box, Text } from "@chakra-ui/react";

const SearcherBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [userList, setUserList] = useState([]);
    const [showUserCard, setShowUserCard] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const users = [];

    useEffect(() => {
        const handleSearch = async () => {
            const usersRef = collection(firestore, "users");
            const q = query(usersRef, where("nome", "==", searchValue));
            console.log(q);
            const querySnapshot = await getDocs(q);
            console.log(`querySnapshot: ${querySnapshot}`);

            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                console.log(userData);
                users.push(userData);
            });

            setUserList(users);
        };

        handleSearch();
    }, [searchValue]);

    const handleUserCardClick = (user) => {
        setSelectedUser(user);
        setShowUserCard(true);
    };

    return (
        <div>
            <InputGroup>
                <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
                <Input
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </InputGroup>

            {userList.map((user, index) => (
                <Box key={index} borderWidth="1px" borderRadius="md" p="4" onClick={() => handleUserCardClick(user)}>
                    <Text>{user.name}</Text>
                    <Text>{user.email}</Text>
                    {/* Add more user information here */}
                </Box>
            ))}

            {showUserCard && (
                <Box borderWidth="1px" borderRadius="md" p="4">
                    <Text>{selectedUser.name}</Text>
                    <Text>{selectedUser.email}</Text>
                    {/* Add more user information here */}
                </Box>
            )}
        </div>
    );
};

export default SearcherBar;
