import { Modal, Select, SelectItem, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  last_name: string;
  email: string;
  role: string;
}

interface ModalEditProps {
  user: User;
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalEdit({ user, isOpen, onClose }: ModalEditProps) {
  const [formData, setFormData] = useState({
    name: user.name,
    last_name: user.last_name,
    email: user.email,
    password: "",
    role: user.role,
  });

  useEffect(() => {
    setFormData({
      name: user.name,
      last_name: user.last_name,
      email: user.email,
      password: "",
      role: user.role,
    });
  }, [user]);

  const handleSave = () => {

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} placement="top-center">
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col items-center gap-1">Edit</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              label="Name"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
            />
            <Input
              label="Last Name"
              name="last_name"
              value={formData.last_name}
              placeholder="Enter your last name"
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="Enter your email"
            />
            <Select
              label="Select a role"
              value={formData.role}
              defaultSelectedKeys={[formData.role]}
            >
              <SelectItem key={"ADMIN"} value="1">
                ADMIN
              </SelectItem>
              <SelectItem key={"MANAGER"} value="2">
                MANAGER
              </SelectItem>
              <SelectItem key={"USER"} value="3">
                USER
              </SelectItem>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              Cancel
            </Button>
            <Button color="primary" onPress={handleSave}>
              Save
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
