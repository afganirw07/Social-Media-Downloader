import ProfileSidebar from "./sidebar"
import DownloadHistory from "./history"
import AccountSettings from "./accountSett"
interface Props {
  user: any
  activeTab: "account" | "history"
  onTabChange: (tab: "account" | "history") => void
  historyData: any[]
}

export default function ProfileLayout({
  user,
  activeTab,
  onTabChange,
  historyData,
}: Props) {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <ProfileSidebar
          user={user}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />

        <div className="md:col-span-3">
          {activeTab === "account" && <AccountSettings user={user} historyData={historyData} />}
          {activeTab === "history" && <DownloadHistory historyData={historyData} />}
        </div>

      </div>
    </div>
  )
}