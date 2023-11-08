import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("request body", body);

  try {
    const signinResult = await fetch(
      `https://web-production-d139.up.railway.app/auth/signIn`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body),
      }
    )
      .then((response) => response.json())
      .then((data) => data);
    console.log("signinResult", signinResult);
    return NextResponse.json(signinResult);
  } catch (err) {
    console.error(err);
  }
}
