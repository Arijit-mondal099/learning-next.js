import { NextResponse } from "next/server";

interface IUserV2 {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  avatar: string;
  role: "admin" | "user" | "moderator";
  isActive: boolean;
  createdAt: Date;
  updatedAt?: Date;
  bio: string;
  location: string;
  website: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
    github: string;
  };
  preferences: {
    emailNotifications: boolean;
    darkMode: boolean;
  };
  lastLogin: Date;
  status?: "active" | "inactive" | "suspended";
}

export async function GET() {
  try {
    const users: IUserV2[] = [
      {
        id: "781973636",
        fullName: "arijit mondal",
        email: "arijitm717@gmail.com",
        phone: "+91-9876543210",
        avatar: "https://example.com/avatars/arijit.jpg",
        role: "admin",
        isActive: true,
        createdAt: new Date("2024-01-15"),
        updatedAt: new Date("2024-01-20"),
        bio: "Full stack developer",
        location: "India",
        website: "https://arijit.dev",
        socialLinks: {
          twitter: "https://twitter.com/arijit",
          linkedin: "https://linkedin.com/in/arijit",
          github: "https://github.com/arijit",
        },
        preferences: {
          emailNotifications: true,
          darkMode: true,
        },
        lastLogin: new Date("2024-01-20"),
        status: "active",
      },
      {
        id: "781973637",
        fullName: "john doe",
        email: "john.doe@example.com",
        phone: "+1-5551234567",
        avatar: "https://example.com/avatars/john.jpg",
        role: "user",
        isActive: true,
        createdAt: new Date("2024-01-16"),
        bio: "Software engineer",
        location: "USA",
        website: "https://johndoe.dev",
        socialLinks: {
          twitter: "https://twitter.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
          github: "https://github.com/johndoe",
        },
        preferences: {
          emailNotifications: false,
          darkMode: false,
        },
        lastLogin: new Date("2024-01-19"),
        status: "active",
      },
      {
        id: "781973638",
        fullName: "jane smith",
        email: "jane.smith@example.com",
        phone: "+1-5559876543",
        avatar: "https://example.com/avatars/jane.jpg",
        role: "moderator",
        isActive: true,
        createdAt: new Date("2024-01-17"),
        bio: "Community manager",
        location: "Canada",
        website: "https://janesmith.dev",
        socialLinks: {
          twitter: "https://twitter.com/janesmith",
          linkedin: "https://linkedin.com/in/janesmith",
          github: "https://github.com/janesmith",
        },
        preferences: {
          emailNotifications: true,
          darkMode: false,
        },
        lastLogin: new Date("2024-01-18"),
        status: "active",
      },
      {
        id: "781973639",
        fullName: "michael johnson",
        email: "michael.j@example.com",
        phone: "+1-5555555555",
        avatar: "https://example.com/avatars/michael.jpg",
        role: "user",
        isActive: false,
        createdAt: new Date("2024-01-18"),
        bio: "Product designer",
        location: "UK",
        website: "https://michaeljohnson.dev",
        socialLinks: {
          twitter: "https://twitter.com/mjohnson",
          linkedin: "https://linkedin.com/in/mjohnson",
          github: "https://github.com/mjohnson",
        },
        preferences: {
          emailNotifications: false,
          darkMode: true,
        },
        lastLogin: new Date("2024-01-10"),
        status: "inactive",
      },
    ];

    return NextResponse.json({
      success: true,
      message: "Users fetched successfully",
      version: 2,
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
