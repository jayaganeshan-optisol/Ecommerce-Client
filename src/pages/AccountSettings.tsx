import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../components/ChangePassword";
import Header from "../components/Header";
import UpdateAddress from "../components/UpdateAddress";
import { RootState } from "../redux/store";

function AccountSettings() {
  const { role } = useSelector((state: RootState) => state.user.loggedInUser);
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="content_wrapper">
        <div className="setting_box">
          <div className="setting_box_content">
            {role === "seller" ? (
              ""
            ) : (
              <div className="account_buttons">
                <button onClick={() => navigate("/wish-list")}>List</button>
                <button>Orders</button>{" "}
              </div>
            )}

            <UpdateAddress />
            <ChangePassword />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
