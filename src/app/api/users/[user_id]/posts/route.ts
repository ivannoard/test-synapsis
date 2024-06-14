import axios from "axios";
import { error } from "console";

export async function GET(
  req: Request,
  { params: { user_id } }: { params: { user_id: string } }
) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/public/v2/users/${user_id}/posts`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return Response.json({
      message: "Successfully retrieved user posts!",
      data: response.data,
    });
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
