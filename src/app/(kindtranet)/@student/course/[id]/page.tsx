import React from "react";
export default function CoursePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div className="card">{id}</div>;
}
