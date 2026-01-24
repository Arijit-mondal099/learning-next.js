/**
 * parallel route dosen't effect on route
 *
 * independent route handling
 *
 * 1. each slot in your layout, such as users, revenue and notification can handles its own loading and error states
 * 2. this granular control is particularly useful in scenarios where deff sections of the page loaded at varying or encounter unique errors
 *
 * sub-navigation in route
 *
 * 1. each slot can essentially fuction as a mini-application, complete with its own navigation and state management
 * 2. user can intreact with each section separately, applying filters, sorting data or navigation through pages whithout affection other parts
 */

/**
 * Unmatchedroutes
 * 
 * Navigation from UI
 * when navigation through the UI (like clicking links), next.js keeps showing whatever was in the unmatched slots before
 * 
 * Page reload
 * 
 * next.js looks for a 'default.tsx' file in each unmatched slot
 * 
 * this file is critical as it servers as a fallback to render content when the framework connot retrieve a slots active state from the curr URL
 * 
 * whithout default.tsx file in each unmatched routes we got 404 error
 */

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notification,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>Complex Dashboard header</h1>
      </header>

      {/* 
      <main>
        <div>{children}</div>
        <div>User analytics</div> think is a component for user analytics
        <div>Revenue metrics</div> think is a component for revenue metrics
        <div>Notification</div> think is a component for notification
      </main> 
      */}

      <main className="space-y-4 p-6">
        <div>{children}</div>

        <div className="grid grid-cols-2 gap-4">
          <div className="w-full h-48 bg-blue-400">{users}</div>
          <div className="row-span-2 bg-green-400">{notification}</div>
          <div className="w-full h-48 bg-yellow-400">{revenue}</div>
        </div>
      </main>

      <footer>
        <h1>Complex dashboard footer</h1>
      </footer>
    </div>
  );
}
