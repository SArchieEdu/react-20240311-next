/* eslint-disable react/jsx-key */
import { Headphone } from "@/components/headphone/component";
import { getHeadphoneById, getHeadphones } from "@/services/api";
import React from "react";

export async function generateStaticParams() {
  return (await getHeadphones()).map(({ id }) => ({ headphoneId: id }));
}

const HeadphonePage = async ({ params: { headphoneId } }) => {
  const headphone = await getHeadphoneById(headphoneId);

  return (
    <div>
      <Headphone headphone={headphone} />
    </div>
  );
};

export default HeadphonePage;
