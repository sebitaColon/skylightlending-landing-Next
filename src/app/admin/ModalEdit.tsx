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
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { updateUser } from "./serviceAdmin";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalEditValition } from "@/validation/modalEdit";

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
  adminRole: string;
}


export default function ModalEdit({ user, isOpen, onClose, adminRole }: ModalEditProps) {
  const [id, setId] = useState(user.id)

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(modalEditValition),
    defaultValues: {
      name: user.name,
      last_name: user.last_name,
      email: user.email,
      role: user.role,
    },
  });

  useEffect(() => {
    setId(user.id)
    setValue("name", user.name);
    setValue("last_name", user.last_name);
    setValue("email", user.email);
    setValue("role", user.role);
  }, [user, setValue]);

  const handleSave = async (data: any) => {
    try {
      const result = await updateUser({ ...data, id, adminRole });
      if (!result.success) {
        toast.error(`${result.message}`);
      } else {
        toast.success(`User updated`);
        onClose();
      }
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };

  type UserField = "name" | "last_name" | "email";
  interface InputField {
    name: UserField;
    label: string;
    placeholder: string;
    type: string;
    autoFocus: boolean;
  }
  const inputFields: InputField[] = [
    {
      name: "name",
      label: "Name",
      placeholder: "Enter your name",
      type: "text",
      autoFocus: true,
    },
    {
      name: "last_name",
      label: "Last Name",
      placeholder: "Enter your last name",
      type: "text",
      autoFocus: true,
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
      autoFocus: true,
    },
  ];

  return (
    <>
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
              {inputFields.map((field, index) => (
               <div key={index} className="flex flex-col gap-2">
                <Controller
                  key={index}
                  name={field.name}
                  control={control}
                  render={({ field: inputField }) => (
                    <Input
                      {...inputField}
                      label={field.label}
                      placeholder={field.placeholder}
                      type={field.type}
                      autoFocus={field.autoFocus}
                    />
                  )}
                />
                {errors[field.name] && (
                    <p className="text-red-500">
                      {errors[field.name]?.message}
                    </p>
                )}
                </div>
              ))}
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Select a role"
                    defaultSelectedKeys={[field.value]}
                  >
                    <SelectItem className={`${adminRole === 'MANAGER' ? 'hidden' : ''}`} key={"ADMIN"} value="ADMIN">
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
              {errors.role && (
                <p className="text-red-500">
                  {errors.role?.message}
                </p>
              )}
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
