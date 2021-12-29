import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../components/ChangePassword";
import Header from "../components/Header";
import UpdateAddress from "../components/UpdateAddress";
import { RootState } from "../redux/store";
import ViewListIcon from "@mui/icons-material/ViewList";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";

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
                <button onClick={() => navigate("/wish-list")}>
                  <div className="icon_wrapper">
                    <ViewListIcon /> List
                  </div>
                </button>
                <button>
                  <div
                    className="icon_wrapper"
                    onClick={() => navigate("/orders")}
                  >
                    <LocalShippingSharpIcon /> Orders
                  </div>
                </button>{" "}
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
