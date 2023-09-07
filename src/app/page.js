import React from "react";
import Flownav from "@/app/components/Flownav";
import Flowhero from "@/app/components/Flowhero";
import Flowdetails from "@/app/components/Flowdetails";
import Flowcompanydetails from "@/app/components/Flowcompanydetails";
import FLowform from "@/app/components/FLowform";
import Flowfooter from "@/app/components/Flowfooter";

const page = () => {
  return (
    <>
      <Flownav />
      <Flowhero />
      <Flowdetails />
      <Flowcompanydetails />
      <FLowform />
      <Flowfooter />
    </>
  );
};

export default page;
