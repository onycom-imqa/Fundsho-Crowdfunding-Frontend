import { Link } from "react-router-dom";
import {useIMQA} from "imqa-react-sdk";

const AdminPanelNavigation = () => {
  const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
        <>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Admin Panel</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarBasic">
      <ul className="navbar-nav me-auto mb-2 mb-xl-0">
        <li className="nav-item">
          <Link to="/settings/admin/users" className="nav-link active" aria-current="page" href="#">Users</Link>
        </li>
        <li className="nav-item">
          <Link to="/settings/admin/fundraisers" className="nav-link" >Fundraises</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
        </div>
     );
}

export default AdminPanelNavigation;
