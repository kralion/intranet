import React from "react";
// DOCS: https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention
import { Modal } from "./modal";

export default function CourseModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <Modal>{photoId}</Modal>;
}
