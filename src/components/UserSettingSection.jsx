import UserSettingIcon from "./UserSettingIcon";

const UserSettingSection = () => {
  return (
    <div className="user-setting-section">
      <h5 className="user-setting-section__heading">Settings</h5>
      <UserSettingIcon
        img="user.svg"
        title="Account"
        desc="Personal information"
      />
      <UserSettingIcon
        img="map.svg"
        title="Address"
        desc="Shipping Addresses"
      />

      <UserSettingIcon
        img="credit-card.svg"
        title="Payment method"
        desc="Connected credit cards"
      />

      <UserSettingIcon img="shield.svg" title="Security" desc="Password, 2FA" />
    </div>
  );
};

export default UserSettingSection;
