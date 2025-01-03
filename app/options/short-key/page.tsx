"use client";
import HotKeys from "@/components/optionPage/OptionsSetting/HotKeys";
import { Sidebar } from "@/components/optionPage/Sidebar";
import OptionPageCard from "@/components/optionPage/OptionPageCard";
import React from "react";

const page = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <OptionPageCard
          tabs
          logo
          title='Shortcut Keys'
          para='Set up and manage keyboard shortcuts for faster access.
'
        >
          <HotKeys />
        </OptionPageCard>
      </div>
    </div>
  );
};

export default page;
