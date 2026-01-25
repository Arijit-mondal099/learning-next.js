import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // get request header
    // const header = new Headers(req.headers);
    // const token = header.get("Authorization");

    const header = await headers();
    const token = header.get("Authorization");

    console.log(token);

    // return NextResponse.json(
    //   { success: true, message: "Everything working..." },
    //   { status: 200 },
    // );

    const res = NextResponse.json(
      { success: true, message: "Everything working..." },
      { status: 200 },
    );

    // set response header
    res.headers.set("X-Powered-By-XYZ", "Arijit Mondal");
    res.headers.set("Cache-Control", "no-store");

    return res;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error", error },
      { status: 500 },
    );
  }
}
