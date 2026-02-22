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
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-3">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage your account and view your download history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          <ProfileSidebar
            user={user}
            activeTab={activeTab}
            onTabChange={onTabChange}
          />

          <div className="md:col-span-3 space-y-6">
            {activeTab === "account" && (
              <AccountSettings user={user} historyData={historyData} />
            )}
            {activeTab === "history" && (
              <DownloadHistory historyData={historyData} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}