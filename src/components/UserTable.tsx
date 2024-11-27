import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    User,
    Button,
} from "@nextui-org/react";
import Image from "next/image";
import EditIcon from "@/assets/iconEdit.svg";

interface User {
    id: number;
    name: string;
    last_name: string;
    email: string;
    role: string;
    isActive: boolean;
    image_url: string;
}

interface UserTableProps {
    users: User[];
    adminRole: string;
    onEditClick: (user: User) => void;
    onStatusToggle: (id: number, isActive: boolean) => void;
}

export default function UserTable({
    users,
    adminRole,
    onEditClick,
    onStatusToggle,
}: UserTableProps) {
    return (
        <Table className="m-5 w-auto" aria-label="Users Table">
            <TableHeader>
                <TableColumn>ID</TableColumn>
                <TableColumn>User</TableColumn>
                <TableColumn>Role</TableColumn>
                <TableColumn>Actions</TableColumn>
                <TableColumn>Active</TableColumn>
            </TableHeader>
            <TableBody emptyContent="No rows to display.">
                {users.map((user) => (
                    <TableRow key={user.id} className="hover:bg-gray-200/75" href={`/profile/${user.id}`}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>
                            <User
                                name={`${user.name} ${user.last_name}`}
                                description={user.email}
                                avatarProps={{ src: user.image_url }}
                            />
                        </TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                            <Button
                                onClick={() => onEditClick(user)}
                                className="bg-yellow-400 w-auto min-w-0"
                                isDisabled={adminRole === "MANAGER" && user.role === "ADMIN"}
                            >
                                <Image src={EditIcon} alt="Edit Icon" />
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button
                                onClick={() => onStatusToggle(user.id, user.isActive)}
                                color={user.isActive ? "success" : "danger"}
                                variant="flat"
                                isDisabled={adminRole === "MANAGER" && user.role === "ADMIN"}
                            >
                                {`${user.isActive}`}
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
