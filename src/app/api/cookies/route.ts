import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // read cookies
    const myCookie = request.cookies.get("my-cookie");
    console.log(myCookie)

    const cookieStore = await cookies();
    cookieStore.set("app-theme", "dark-mode", { expires: 1 * 60, httpOnly: true, sameSite: "strict", maxAge: 1 * 60 });
    console.log(cookieStore.get("app-theme"));

    // console.log(cookieStore.delete("app-theme")); // delete cookie
    // console.log(cookieStore.getAll()); // get all cookies [{...}, {...}]
    // console.log(cookieStore.has("my-cookie")); // get boolean value
    
    return NextResponse.json(
      { success: true, message: "Everything working..." },
      { status: 200, headers: { "Set-Cookie": "my-cookie=arijit mondal; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600" } },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error", error },
      { status: 500 },
    );
  }
}
