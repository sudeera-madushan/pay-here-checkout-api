"use client";
import React from "react";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMWFlYTA1Y2YtNTNlYS00N2JiLWJiNWYtZGRlYzNlODY1NTViIiwiZW1haWwiOiJkZXNpZ25lckBleGFtcGxlLmNvbSIsInVzZXJSb2xlIjoiREVTSUdORVIiLCJpYXQiOjE3MjU0MTM5ODEsImV4cCI6MTcyNTUwMDM4MX0.6Lyf4lD6GWE_6MkoiOFk4xVHryWcRbTBcMa9Cov5hkY";
const Test = () => {
  const [image, setImage] = React.useState<File | null>();
  const [image2, setImage2] = React.useState<File | null>();
  const [front, setFront] = React.useState<File | null>();
  const [back, setBack] = React.useState<File | null>();
  const [left, setLeft] = React.useState<File | null>();
  const [right, setRight] = React.useState<File | null>();
  const saveDesign = async () => {
    if (!image) {
      console.log("No image selected");
      return;
    }
    if (!image2) {
      console.log("No image selected");
      return;
    }
    if (!back) {
      console.log("No image selected");
      return;
    }
    if (!left) {
      console.log("No image selected");
      return;
    }
    if (!right) {
      console.log("No image selected");
      return;
    }
    const formData = new FormData();
    const design_materials = [{ position: "BACK" }];
    // const design_materials = [{ position: "RIGHT" } ];
    // formData.append("design", image);
    formData.append("materials", image);
    // formData.append("materials", image);
    // formData.append("materials", image);
    // formData.append("materials", image);
    // formData.append("materials", image);
    // formData.append("materials", image2);
    // formData.append("materials", image2);
    // formData.append("back_image", back);
    // formData.append("left_image", left);
    // formData.append("right_image", right);
    formData.append("design_materials", JSON.stringify(design_materials));
    // formData.append("sub_category_id", "9d3bb05a-a5ea-48d1-8df0-e299bb39a027");
    // formData.append("designer_price", "10000");
    formData.append("name", "New Design 6");
    await fetch(
      "http://localhost:3001/api/v1/design/22122ae7-273b-41fc-8b37-b1cc634304b4",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "PATCH",
        body: formData,
      }
    );
  };

  const checkout = async () => {
    await fetch(
      "http://localhost:3000/checkout",
      {
        method: "GET",
      }
    );
  }
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
          }
        }}
      />
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setImage2(e.target.files[0]);
          }
        }}
      />
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setBack(e.target.files[0]);
          }
        }}
      />
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setLeft(e.target.files[0]);
          }
        }}
      />
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setRight(e.target.files[0]);
          }
        }}
      />
      <button onClick={checkout}>Submit</button>
    </div>
  );
};

export default Test;
