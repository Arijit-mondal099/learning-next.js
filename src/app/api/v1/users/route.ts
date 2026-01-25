import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

interface IUserV1 {
  id: string;
  email: string;
  fullName: string;
  createdAt: Date;
}

export async function GET() {
  redirect("/api/v2/users"); // if user trying to access older version of api then it automaticaly redirect to new version

  try {
    const users: IUserV1[] = [
      {
        id: "781973636",
        fullName: "arijit mondal",
        email: "arijitm717@gmail.com",
        createdAt: new Date("2024-01-15"),
      },
      {
        id: "781973637",
        fullName: "john doe",
        email: "john.doe@example.com",
        createdAt: new Date("2024-01-16"),
      },
      {
        id: "781973638",
        fullName: "jane smith",
        email: "jane.smith@example.com",
        createdAt: new Date("2024-01-17"),
      },
      {
        id: "781973639",
        fullName: "michael johnson",
        email: "michael.j@example.com",
        createdAt: new Date("2024-01-18"),
      },
    ];

    return NextResponse.json({
      success: true,
      message: "Users fetched successfully",
      version: 1,
      totalusers: users.length,
      users,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error", error },
      { status: 500 },
    );
  }
}
