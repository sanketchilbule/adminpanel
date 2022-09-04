import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  InfoPage,
  Category,
  FAQ,
  InternalUser,
  PushNotification,
  ReportedContent,
  VideoClips,
  WowUser,
  Home
} from "../routes/routes";

const AppContent = () => {
  return (
    <div className="Main-container w-100">
      <Suspense fallback={"Loading..."}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
          <Route path="/dashboard/infopage" element={<InfoPage />} />
          <Route path="/dashboard/category" element={<Category />} />
          <Route path="/dashboard/faq" element={<FAQ />} />
          <Route path="/dashboard/internal-user" element={<InternalUser />} />
          <Route path="/dashboard/push-notification" element={<PushNotification />} />
          <Route path="/dashboard/reported-content" element={<ReportedContent />} />
          <Route path="/dashboard/video-clips" element={<VideoClips />} />
          <Route path="/dashboard/wowuser" element={<WowUser />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppContent;
