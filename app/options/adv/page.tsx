"use client";
import { Sidebar } from "@/components/optionPage/Sidebar";
import OptionPageCard from "@/components/optionPage/OptionPageCard";
import React from "react";
import Setting from "@/components/optionPage/Settings/Setting";

const page = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <OptionPageCard
          custom
          tabs
          logo
          title='Advanced Options'
          para='Access additional settings and fine-tune advanced features.'
        >
          <Setting />
        </OptionPageCard>
      </div>
    </div>
  );
};

export default page;
