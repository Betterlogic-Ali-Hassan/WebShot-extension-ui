"use client";
import { Sidebar } from "@/components/optionPage/Sidebar";
import OptionPageCard from "@/components/optionPage/OptionPageCard";
import React from "react";
import Saving from "@/components/optionPage/Saving/Saving";

const page = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <OptionPageCard
          custom
          tabs
          logo
          title='Saving Preferences'
          para='Choose where and how your captures are saved.'
        >
          <Saving />
        </OptionPageCard>
      </div>
    </div>
  );
};

export default page;
