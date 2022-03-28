import Input from "./common/Input";
import Button from "./common/Button";

const UserSettingForm = () => {
  return (
    <div className="user-setting-form-section">
      <h5 className="user-setting-form-section__heading">Account</h5>
      <form className="user-setting-form">
        <h6 className="user-setting-form__heading">Personal information</h6>
        <div className="form-group">
          <label htmlFor="avatar">Avatar</label>
          <div className="avatar-group">
            <img
              className="avatar-group__img"
              src="/assets/images/main-avatar.png"
              alt="girl"
            />
            <Button className="btn btn__outline-primary" label="Change" />
            <Button className="btn btn__remove-btn" label="Remove" />
          </div>
        </div>
        <div className="input-group">
          <Input type="text" label="First name" />
          <Input type="text" label="Last name" />
          <Input type="email" label="Email" />
          <Input type="number" label="Phone number" />
        </div>
        <h6 className="user-setting-form__heading">Email notifications</h6>
        <div className="checkbox-group">
          <Input type="checkbox" label="New deals" />
          <Input type="checkbox" label="Password changes" />
          <Input type="checkbox" label="New restaurants" />
          <Input type="checkbox" label="Special offers" />
          <Input type="checkbox" label="Order statuses" />
          <Input type="checkbox" label="Newsletter" />
        </div>
        <div className="btn-group">
          <Button
            className="btn btn__outline-secondary user-setting-form__logout-btn"
            label="Log out"
          />
          <div className="btn-group__group">
            <Button className="btn btn__outline-body" label="Discard changes" />
            <Button className="btn" label="Save changes" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserSettingForm;
