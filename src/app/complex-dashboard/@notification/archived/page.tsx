import Link from "next/link";

export default function ArchivedNotification() {
  return (
    <section>
      <h2>Archived Notifications</h2>
      <Link href="/complex-dashboard" className="text-blue-500 underline">
        Show default notifications
      </Link>
    </section>
  );
}