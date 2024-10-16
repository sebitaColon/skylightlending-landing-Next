import {
  Modal,
  Select,
  SelectItem,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

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
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name,
      last_name: user.last_name,
      email: user.email,
      role: user.role,
    },
  });

  useEffect(() => {
    setValue("name", user.name);
    setValue("last_name", user.last_name);
    setValue("email", user.email);
    setValue("role", user.role);
  }, [user, setValue]);

  const handleSave = async (data: any) => {
    try {
      const response = await fetch(`./api/edit/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!result.success) {
        toast.error(`${result.message}`);
      } else {
        toast.error(`User updated`);
        onClose();
      }
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      alert("Error al actualizar el usuario");
    }
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <Modal isOpen={isOpen} onOpenChange={onClose} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col items-center gap-1">
            Edit
          </ModalHeader>
          <ModalBody>
            <form
              onSubmit={handleSubmit(handleSave)}
              className="flex flex-col gap-y-4"
            >
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    autoFocus
                    label="Name"
                    placeholder="Enter your name"
                  />
                )}
              />
              <Controller
                name="last_name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Last Name"
                    placeholder="Enter your last name"
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                  />
                )}
              />
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Select a role"
                    defaultSelectedKeys={[field.value]}
                  >
                    <SelectItem key={"ADMIN"} value="ADMIN">
                      ADMIN
                    </SelectItem>
                    <SelectItem key={"MANAGER"} value="MANAGER">
                      MANAGER
                    </SelectItem>
                    <SelectItem key={"USER"} value="USER">
                      USER
                    </SelectItem>
                  </Select>
                )}
              />
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" type="submit">
                  Save
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
