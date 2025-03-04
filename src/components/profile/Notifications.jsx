import { Bell } from "lucide-react";

import ProfileSection from "./ProfileSection.jsx";
import ToggleSwitch from "../common/ToggleSwitch.jsx";
import { useState } from "react";

export default function Notifications() {
  const [notify, setNotify] = useState({
    push: true,
    email: true,
    sms: false,
  });

  return (
    <ProfileSection icon={Bell} title="Notifications">
      <ToggleSwitch
        label={"Push notifications"}
        isOn={notify.push}
        onToggle={() => setNotify({ ...notify, push: !notify.push })}
      />
      <ToggleSwitch
        label={"Email notifications"}
        isOn={notify.email}
        onToggle={() => setNotify({ ...notify, email: !notify.email })}
      />
      <ToggleSwitch
        label={"SMS notifications"}
        isOn={notify.sms}
        onToggle={() => setNotify({ ...notify, sms: !notify.sms })}
      />
    </ProfileSection>
  );
}
