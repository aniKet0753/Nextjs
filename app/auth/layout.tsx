import AuthNavebar from "../components/Navebar"
export default function authlayout({children}) {
  return<div>
    <AuthNavebar />
    {children}
  </div>
}