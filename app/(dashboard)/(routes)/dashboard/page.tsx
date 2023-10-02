import { UserButton } from "@clerk/nextjs"

const DashboardPage = () => {
  return (
    <>
      <h1>Dashboard (protected)</h1>
      <UserButton afterSignOutUrl="/"/>
    </>
  )
}

export default DashboardPage