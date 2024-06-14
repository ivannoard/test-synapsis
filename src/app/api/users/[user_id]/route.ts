import axios from "axios";

export async function PUT(
  req: Request,
  { params: { user_id } }: { params: { user_id: string } }
) {
  try {
    const data = await req.json();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("status", data.status);
    formData.append("gender", data.gender);

    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API}/public/v2/users/${user_id}`,
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
        message: "Successfully update user!",
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

export async function DELETE(
  req: Request,
  { params: { user_id } }: { params: { user_id: string } }
) {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API}/public/v2/users/${user_id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return Response.json(
      {
        message: "Successfully delete user!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return Response.json(
      { message: '"An error occured!', error: e },
      { status: 500 }
    );
  }
}
