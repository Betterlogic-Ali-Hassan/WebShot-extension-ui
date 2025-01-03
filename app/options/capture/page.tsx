"use client";
import { Sidebar } from "@/components/optionPage/Sidebar";
import Capture2 from "@/components/optionPage/capture/Capture2";
import OptionPageCard from "@/components/optionPage/OptionPageCard";
import React from "react";

const page = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <OptionPageCard
          custom
          tabs
          logo
          title='Capture Tools'
          para=' Customize and manage screenshot options for your captures.'
        >
          <Capture2 />
        </OptionPageCard>
      </div>
    </div>
  );
};

export default page;
