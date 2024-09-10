import UsersTable from "@/UsersTable";
import TableSkeleton from "@/UsersTable/TableSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<TableSkeleton/>}>
      <UsersTable/>
      </Suspense>
  );
}
