import Link from "next/link";

export default function NotificationPage() {
  return (
    <section>
      <h2>Default Notification</h2>
      <Link href="/complex-dashboard/archived" className="text-blue-500 underline">
        Show archived notifications
      </Link>
    </section>
  );
}