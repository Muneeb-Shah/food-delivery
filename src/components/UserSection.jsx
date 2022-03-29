import UserSettingSection from "./UserSettingSection";
import UserSettingForm from "./UserSettingForm";

const UserSection = () => {
  return (
    <section className="user-section">
      <div className="container">
        <div className="user-section__content">
          <UserSettingSection />
          <UserSettingForm />
        </div>
      </div>
    </section>
  );
};

export default UserSection;
