import { useState } from "react";
import { Lock } from "lucide-react";

import ProfileSection from "./ProfileSection.jsx";
import ToggleSwitch from "../common/ToggleSwitch.jsx";

export default function SecuritySection() {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  return (
    <ProfileSection icon={Lock} title={"Security"}>
      <ToggleSwitch
        label={"Two-Factor authentication"}
        isOn={twoFactorAuth}
        onToggle={() => setTwoFactorAuth(!twoFactorAuth)}
      />
      <div className="mt-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-gray-100 font-bold rounded px-4 py-2 transition duration-200 w-full sm:w-auto">
          Change password
        </button>
      </div>
    </ProfileSection>
  );
}
