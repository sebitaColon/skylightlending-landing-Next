import { Input, Select, SelectItem } from "@nextui-org/react";
import { SearchIcon } from "./UI/SearchIcon";

interface FilterBarProps {
  onSearchChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export default function FilterBar({
  onSearchChange,
  onRoleChange,
  onStatusChange,
}: FilterBarProps) {
  const roles = [
    { key: "", label: "View All" },
    { key: "ADMIN", label: "Admin" },
    { key: "MANAGER", label: "Manager" },
    { key: "USER", label: "User" },
  ];

  const statuses = [
    { key: "", label: "View All" },
    { key: "true", label: "True" },
    { key: "false", label: "False" },
  ];

  return (
    <div className="w-full pt-5 px-5 flex justify-end gap-2">
      <Select
        variant="flat"
        className="max-w-xs"
        placeholder="Select Status"
        onChange={(e) => onStatusChange(e.target.value)}
      >
        {statuses.map((status) => (
          <SelectItem key={status.key}>{status.label}</SelectItem>
        ))}
      </Select>
      <Select
        variant="flat"
        placeholder="Select Role"
        className="max-w-xs"
        onChange={(e) => onRoleChange(e.target.value)}
      >
        {roles.map((role) => (
          <SelectItem key={role.key}>{role.label}</SelectItem>
        ))}
      </Select>
      <Input
        className="max-w-[300px]"
        placeholder="Search User"
        onChange={(e) => onSearchChange(e.target.value)}
        startContent={<SearchIcon />}
      />
    </div>
  );
}