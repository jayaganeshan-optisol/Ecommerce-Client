import ChangePassword from "../components/ChangePassword";
import Header from "../components/Header";
import UpdateAddress from "../components/UpdateAddress";

function AccountSettings() {
  return (
    <div>
      <Header />
      <div className="content_wrapper">
        <div className="setting_box">
          <div className="setting_box_content">
            <UpdateAddress />
            <ChangePassword />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
