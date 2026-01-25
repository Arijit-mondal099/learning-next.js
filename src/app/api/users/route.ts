import { users } from "@/constants/data";
import { NextRequest } from "next/server";

// GET -> request to getting all users
export async function GET(request: NextRequest) {
  try {
    // all about queary/search params
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("name");

    const filteredUsers = query ? (users.filter((u) => u.name.toLowerCase().includes(query.trim().toLowerCase()))) : (users)

    return Response.json({ success: true, message: "Users fetched", users: filteredUsers }, { status: 200 });
  } catch (error: unknown) {
    return Response.json({ success: false, message: "Internal server error", error }, { status: 500 });
  }
}

// POST -> request to create new user
export async function POST(request: Request) {
  try {
    const body = await request.json(); // getting req body

    if (!body) {
      return Response.json({ success: false, message: "Req body not found" }, { status: 400 });   
    }

    const isUserExist = users.find(u => u.email === body?.email);
    
    if (isUserExist) {
      return Response.json({ success: false, message: "User alredy exist" }, { status: 400 });      
    }

    const newUser = { ...body, id: Date.now(), createdAt: new Date(Date.now()), role: "user" }
    users.push(newUser);

    return Response.json({ success: true, message: "User created", newUser }, { status: 201 });
  } catch (error) {
    return Response.json({ success: false, message: "Internal server error", error }, { status: 500 });
  }
}
