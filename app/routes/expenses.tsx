import { Outlet } from "@remix-run/react";

export default function ExpensesLayout() {
  return (
    <>
      <h1>Shared element!</h1>
      <Outlet />
    </>
  )
}
