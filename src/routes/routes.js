import React from 'react';

export const Dashboard = React.lazy(() => import("../views/Homepage/Dashboard"));
export const Category = React.lazy(() => import("../views/Category"));
export const FAQ = React.lazy(() => import("../views/FAQ"))
export const InfoPage = React.lazy(() => import("../views/InfoPage"));
export const InternalUser = React.lazy(() => import("../views/InternalUser"))
export const PushNotification = React.lazy(() => import("../views/PushNotification"))
export const ReportedContent = React.lazy(() => import("../views/ReportedContent"))
export const VideoClips = React.lazy(() => import("../views/VideoClips"))
export const WowUser = React.lazy(() => import("../views/WowUser"))
export const Home = React.lazy(() => import("../views/Home"))