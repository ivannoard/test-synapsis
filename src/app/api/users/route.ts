import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/public/v2/users`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return Response.json(
      {
        message: "Successfully retrieved data!",
        data: response.data,
      },
      { status: 200 }
    );
  } catch (e) {
    return Response.json(
      { message: "An error occured!", error: e },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const formData = new FormData();
    formData.append("email", body.email);
    formData.append("name", body.name);
    formData.append("status", body.status);
    formData.append("gender", body.gender);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/public/v2/users`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return Response.json(
      {
        message: "Successfully add new user!",
      },
      { status: 200 }
    );
  } catch (e) {
    return Response.json(
      {
        message: "An error occured!",
        error: e,
      },
      {
        status: 500,
      }
    );
  }
}
