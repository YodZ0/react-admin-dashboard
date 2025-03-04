import Header from "../components/common/Header.jsx";
import Profile from "../components/profile/Profile.jsx";
import Notifications from "../components/profile/Notifications.jsx";
import SecuritySection from "../components/profile/SecuritySection.jsx";
import DangerZone from "../components/profile/DangerZone.jsx";

export default function ProfilePage() {
  return (
    <div className="relative flex-1 overflow-auto z-10">
      <Header title="Profile" />

      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <Profile />
        <Notifications />
        <SecuritySection />
        <DangerZone />
      </main>
    </div>
  );
}
