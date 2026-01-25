import { users } from "@/constants/data";

// GET -> getting user by id
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    const user = users.find((u) => u.id === parseInt(slug));

    if (!user) {
      return Response.json({ success: false, message: "User not found" }, { status: 404 });
    }

    return Response.json({ success: true, message: "User fetched", user }, { status: 200 });
  } catch (error) {
    return Response.json({ success: false, message: "Internal server error", error }, { status: 500 });
  }
}

// PUT -> update user data
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const { name, email } = (await request.json()) as { name: string; email: string };

    if (!name || !email) {
      return Response.json({ success: false, message: "All filds are required" }, { status: 401 });
    }

    const userIndex = users.findIndex((u) => u.id === parseInt(slug));

    if (userIndex === -1) {
      return Response.json({ success: false, message: "User not found" }, { status: 404 });
    }

    users[userIndex] = { ...users[userIndex], name, email };

    return Response.json({ success: true, message: "User fetched", user: users[userIndex] }, { status: 200 });
  } catch (error) {
    return Response.json({ success: false, message: "Internal server error", error }, { status: 500 });
  }
}

// PATCH -> update user data
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const { name, email } = (await request.json()) as { name: string; email: string };

    const userIndex = users.findIndex((u) => u.id === parseInt(slug));

    if (userIndex === -1) {
      return Response.json({ success: false, message: "User not found" }, { status: 404 });
    }

    users[userIndex] = {
      ...users[userIndex],
      name: name || users[userIndex].name,
      email: email || users[userIndex].email,
    };

    return Response.json({ success: true, message: "User fetched", user: users[userIndex] }, { status: 200 });
  } catch (error) {
    return Response.json({ success: false, message: "Internal server error", error }, { status: 500 });
  }
}

// DELETE -> delete an user by id
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    const userIndex = users.findIndex((u) => u.id === parseInt(slug));

    if (userIndex === -1) {
      return Response.json({ success: false, message: "User not found" }, { status: 404 });
    }

    users.splice(userIndex, 1);

    return Response.json({ success: true, message: "User deleted" }, { status: 200 });
  } catch (error) {
    return Response.json({ success: false, message: "Internal server error", error }, { status: 500 });
  }
}
