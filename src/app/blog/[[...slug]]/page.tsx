import React from "react";
import { notFound } from "next/navigation";

const Slug = ({ params }: { params: { slug: string } }) => {
  if (params.slug?.length === 3) {
    return <div>{params.slug}</div>;
  } else if (params.slug?.length === 2) {
    return <div>{params.slug}</div>;
  } else if (params.slug?.length === 1) {
    return <div>{params.slug}</div>;
  } else {
    notFound();
  }

  return <div>hello world</div>;
};

export default Slug;
