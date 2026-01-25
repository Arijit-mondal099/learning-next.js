export const dynamic = "force-dynamic"; // Ensure the route is always dynamic (cached per request)
export const revalidate = 10; // Revalidate the response every 10 seconds

export async function GET() {
    const now = new Date();
    return Response.json({
        success: true,
        message: "Time fetched successfully",
        time: now,
    });
}