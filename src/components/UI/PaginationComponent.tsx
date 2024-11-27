"use client";
import { Pagination } from "@nextui-org/react";

interface PaginationComponent {
  currentPage: number;
  totalPages:number;
  handlePageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponent> = ({
  currentPage,
  handlePageChange,
  totalPages,
}) => {
  return (
    <Pagination
      className="flex justify-center fixed bottom-2 left-0 w-full"
      showControls
      total={totalPages}
      initialPage={1}
      page={currentPage}
      onChange={handlePageChange}
    />
  );
};

export default PaginationComponent;