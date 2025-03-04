import { User } from "lucide-react";

import ProfileSection from "./ProfileSection.jsx";

export default function Profile() {
  return (
    <ProfileSection icon={User} title="User">
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          className="rounded-full size-15 object-cover mr-4 bg-white"
          src="https://icons.veryicon.com/png/o/system/ali-mom-icon-library/random-user.png"
          alt="user"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-100">John Doe</h3>
          <p className="text-gray-400">john-doe@example.com</p>
        </div>
      </div>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-gray-100 font-bold rounded px-4 py-2 transition duration-200 w-full sm:w-auto">
        Edit
      </button>
    </ProfileSection>
  );
}
