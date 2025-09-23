import React, { useEffect } from "react";
import { KlfCalender } from "./KlfCalender";
import { KashmirLitFest } from "./KashmirLitFest";
import { QRCodeContribution } from "./QRCodeContribution";
import { ProgramSchedule } from "./Program";

const KLF2024 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <KlfCalender />
      <ProgramSchedule />

      <KashmirLitFest />

      <QRCodeContribution />
    </div>
  );
};

export default KLF2024;
