"use client";
import { Sidebar } from "@/components/optionPage/Sidebar";
import OptionPageCard from "@/components/optionPage/OptionPageCard";
import React from "react";
import Capture from "@/components/optionPage/capture/Capture";

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
          <Capture />
        </OptionPageCard>
      </div>
    </div>
  );
};

export default page;
