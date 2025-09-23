import { AboutKLF } from "./AboutKLF";
import { CountDownTimer } from "./CountDownTimer";
import { DisplayPage } from "./DisplayPage";
import { GalleryPreview2024 } from "../Gallery/GalleryPreview2024";
import SpeakersPreview2025 from "../Speakers/SpeakersPreview2025";
import { InstagramReels } from "./InstagramReel";
import { MediaPreview2025 } from "../NewsMedia/MediaPreview2025";
import { PartnersPreview2025 } from "../Partners/PartnersPreview2025";
import leafsBg from "../../assets/klfBg.png";
import { useEffect } from "react";
import Performances2025 from "../Performance/Performances2025";
import PodcastPreview2025 from "../Podcast/PodcastPreview2025";
import { BooksPreview2025 } from "../Books/BooksPreview2025";

export function Hero() {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      {/* Fixed Background */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        {/* Background Image */}
        <div
          className="w-full h-full bg-cover bg-center  opacity-45"
          style={{ backgroundImage: `url(${leafsBg})` }}
        ></div>
        {/* Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10">
        <DisplayPage />
        <CountDownTimer />
        <AboutKLF />
        <div className="">
          <SpeakersPreview2025 />
        </div>
        <div className="">
          <PartnersPreview2025 />
        </div>
        <div className="">
          <Performances2025 />
        </div>
        <div className="">
          <GalleryPreview2024 />
        </div>
        <div className="">
          <BooksPreview2025 />
        </div>
        <div className="">
          <InstagramReels />
        </div>
        <div className="">
          <PodcastPreview2025 />
        </div>
        <div className="">
          <MediaPreview2025 />
        </div>
      </div>
    </div>
  );
}
