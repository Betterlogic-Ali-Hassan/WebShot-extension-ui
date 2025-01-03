"use client";
import ActionMenu from "@/components/optionPage/OptionsSetting/ActionMenu";
import { Sidebar } from "@/components/optionPage/Sidebar";
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
          title='Action Menu Settings'
          para='Enable or disable tools such as screen capture, video recording,
              and more.'
        >
          <ActionMenu />
        </OptionPageCard>
      </div>
    </div>
  );
};

export default page;
