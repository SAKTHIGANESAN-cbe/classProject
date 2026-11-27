import { Link, Outlet } from "react-router-dom";

function Admin() {
    return (  
        
<>
<nav>

    <Link to={"/admin/admindashboard"}>dashboard...........</Link>
    <Link to={"/admin/admindetails"}>admin details............</Link>
    <Link to={"/admin/settings"}>settings </Link>
    



</nav>
    <Outlet/>
      ok this admin layout  .....


</>

    );
}

export default Admin;