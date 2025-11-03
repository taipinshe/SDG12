
import React from 'react';
import { SDGGoal } from './types';

export const SDGS_DATA: SDGGoal[] = [
  {
    id: 1,
    en: "NO POVERTY",
    cn: "无贫穷",
    color: "bg-red-500",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12.5 4.6a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zM7.7 6.1a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM10 10.75a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5zM12.5 10a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5a.75.75 0 01.75-.75zM6 10.75a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zM19.5 10.75a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zM4.5 17.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zM.7 19a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM20.5 17.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zm-4.2.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"></path></svg>,
  },
  {
    id: 2,
    en: "ZERO HUNGER",
    cn: "零饥饿",
    color: "bg-yellow-500",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M21.18 17H2.82C2.37 17 2 16.63 2 16.18V15.5c0-1.02.77-2.12 2-2.38V12c0-4.41 3.59-8 8-8s8 3.59 8 8v1.12c1.23.26 2 1.36 2 2.38v.68c0 .45-.37.82-.82.82zM12 6c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6zm-7.69 3.5c-.32 0-.6.1-.84.26.47-.4.99-.76 1.53-.76.55 0 1.05.36 1.53.76-.24-.16-.52-.26-.84-.26zM12 9.5c-.9 0-1.7.35-2.29.9.55-.4 1.2-.64 1.94-.64.74 0 1.39.24 1.94.64-.6-.55-1.4-.9-2.3-.9zM15.48 9.5c-.32 0-.6.1-.84.26.47-.4.99-.76 1.53-.76.55 0 1.05.36 1.53.76-.24-.16-.52-.26-.84-.26z"></path></svg>,
  },
  {
    id: 3,
    en: "GOOD HEALTH AND WELL-BEING",
    cn: "良好健康与福祉",
    color: "bg-green-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M2 13h4l2-6 3 10 3-7 2 3h4M17.8 19.3c-1.5 1.5-3.8 1.8-5.7 0.9-1.9-.9-3-2.8-3-4.8 0-2 .9-3.9 2.5-5.3 1.6-1.4 3.9-1.8 5.7-.9 1.9.9 3 2.8 3 4.8 0 2.1-.9 4-2.5 5.3z"></path></svg>,
  },
  {
    id: 4,
    en: "QUALITY EDUCATION",
    cn: "优质教育",
    color: "bg-red-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 18H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1z"></path></svg>,
  },
  {
    id: 5,
    en: "GENDER EQUALITY",
    cn: "性别平等",
    color: "bg-orange-500",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5h4v2H10v-2zm0-4h4v2H10V9zm0-4h4v2H10V5z"></path><path d="M14 9V5h-4v4H8l4 4 4-4h-2zM10 15v4h4v-4h2l-4-4-4 4h2z"></path></svg>,
  },
  {
    id: 6,
    en: "CLEAN WATER AND SANITATION",
    cn: "清洁饮水和卫生设施",
    color: "bg-cyan-500",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2L1 9l4 2.18V15h14v-3.82L23 9 12 2zm-1 16h2v3h-2v-3zm5.79-4.88c-.97.52-2.1.88-3.29.88s-2.32-.36-3.29-.88L12 11l-1.5 2.5-2.21-1.22c-.97.52-2.1.88-3.29.88s-2.32-.36-3.29-.88L12 5l9 4.9V13.12z"></path><path d="M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path></svg>,
  },
  {
    id: 7,
    en: "AFFORDABLE AND CLEAN ENERGY",
    cn: "廉价和清洁能源",
    color: "bg-yellow-400",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM5.636 5.636a1 1 0 011.414 0l1.414 1.414a1 1 0 01-1.414 1.414L5.636 7.05A1 1 0 015.636 5.636zm12.728 12.728a1 1 0 011.414 0l1.414 1.414a1 1 0 01-1.414 1.414l-1.414-1.414a1 1 0 010-1.414zM2 12a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zm18 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM5.636 18.364a1 1 0 010-1.414l1.414-1.414a1 1 0 011.414 1.414l-1.414 1.414a1 1 0 01-1.414 0zm12.728-12.728a1 1 0 010-1.414l1.414-1.414a1 1 0 111.414 1.414l-1.414 1.414a1 1 0 01-1.414 0zM12 7a5 5 0 100 10 5 5 0 000-10zm-1 3v4a1 1 0 11-2 0v-1.172a3 3 0 01-.879-1.11l-1.742-.871a1 1 0 11.894-1.789l1.742.871A3 3 0 0111 10z"></path></svg>,
  },
  {
    id: 8,
    en: "DECENT WORK AND ECONOMIC GROWTH",
    cn: "体面工作和经济增长",
    color: "bg-rose-800",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.09-4-4L2 17.08l1.5 1.41z"></path><path d="M3 3h18v2H3zm0 4h18v2H3zm0 4h18v2H3zm0 4h18v2H3zm0 4h18v2H3z"></path></svg>,
  },
  {
    id: 9,
    en: "INDUSTRY, INNOVATION AND INFRASTRUCTURE",
    cn: "工业、创新和基础设施",
    color: "bg-orange-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5zm10-5.5L4.44 8 12 4.5 19.56 8 12 11.5z"></path><path d="M12 13l-10-5v6.5l10 5 10-5V8l-10 5z"></path></svg>,
  },
  {
    id: 10,
    en: "REDUCED INEQUALITIES",
    cn: "减少不平等",
    color: "bg-fuchsia-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2l-10 10 10 10 10-10L12 2zm0 18l-8-8 8-8 8 8-8 8zM8 11h8v2H8zm-2-4h12v2H6zm4 8h4v2h-4z"></path></svg>,
  },
  {
    id: 11,
    en: "SUSTAINABLE CITIES AND COMMUNITIES",
    cn: "可持续城市和社区",
    color: "bg-orange-400",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5zM7 18v-6.33L12 7l5 4.67V18H7z"></path><path d="M4 10.5V18h1.5V9.5zM18.5 9.5V18H20v-7.5z"></path></svg>,
  },
  {
    id: 12,
    en: "RESPONSIBLE CONSUMPTION AND PRODUCTION",
    cn: "负责任消费和生产",
    color: "bg-amber-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M13 3.06C8.84 3.55 5.55 6.84 5.06 11H3.04C3.55 5.84 7.84 1.55 13 1.04V3.06zm0 17.88c-4.16-.49-7.45-3.78-7.94-7.94H3.04c.51 5.16 4.8 9.45 10 9.96v-2.02zM19.95 11H22c-.51-5.16-4.8-9.45-10-9.96v2.02c4.16.49 7.45 3.78 7.94 7.94zm-1.01 2c-.49 4.16-3.78 7.45-7.94 7.94v2.02c5.16-.51 9.45-4.8 9.96-10h-2.02z"></path><path d="M12 10l4 4-4 4-4-4 4-4z"></path></svg>,
  },
  {
    id: 13,
    en: "CLIMATE ACTION",
    cn: "气候行动",
    color: "bg-green-700",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-3.2 4.21c-.4.4-.4 1.02 0 1.41s1.02.4 1.41 0l1.79-1.79 1.79 1.79c.4.4 1.02.4 1.41 0s.4-1.02 0-1.41L13.41 12l1.79-1.79c.4-.4.4-1.02 0-1.41s-1.02-.4-1.41 0L12 10.59l-1.79-1.79c-.4-.4-1.02-.4-1.41 0s-.4 1.02 0 1.41l1.79 1.79-1.79 1.79z"></path></svg>,
  },
  {
    id: 14,
    en: "LIFE BELOW WATER",
    cn: "水下生物",
    color: "bg-blue-600",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M2.2 13.8s2.5-1.5 5.3-1.5S13 13.8 13 13.8s-2.5 1.5-5.3 1.5S2.2 13.8 2.2 13.8zm11.6-4.6s2.5-1.5 5.3-1.5 5.3 1.5 5.3 1.5-2.5 1.5-5.3 1.5-5.3-1.5-5.3-1.5zM2.2 8.2s2.5-1.5 5.3-1.5S13 8.2 13 8.2s-2.5 1.5-5.3 1.5S2.2 8.2 2.2 8.2z"></path><path d="M21.8 15.2c-2.8 0-5.3 1.5-5.3 1.5s2.5 1.5 5.3 1.5 5.3-1.5 5.3-1.5-2.5-1.5-5.3-1.5z" opacity=".3"></path><path d="M19 14c-4 0-7 2-7 2s3 2 7 2 7-2 7-2-3-2-7-2zm-9 6c-3 0-5 1-5 1s2 1 5 1 5-1 5-1-2-1-5-1z"></path></svg>,
  },
  {
    id: 15,
    en: "LIFE ON LAND",
    cn: "陆地生物",
    color: "bg-lime-500",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2C8.69 2 6 4.69 6 8c0 3.31 2.69 6 6 6s6-2.69 6-6c0-3.31-2.69-6-6-6zm-1 14h2v6h-2v-6zm-4-2H5v6h2v-6zm8 0h-2v6h2v-6z"></path><path d="M2 20h20v2H2z"></path></svg>,
  },
  {
    id: 16,
    en: "PEACE, JUSTICE AND STRONG INSTITUTIONS",
    cn: "和平、正义与强大机构",
    color: "bg-blue-800",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.03 16.2c-.39.39-1.02.39-1.41 0l-4.24-4.24c-.39-.39-.39-1.02 0-1.41l1.41-1.41c.39-.39 1.02-.39 1.41 0L9.5 14.09l4.59-4.59c.39-.39 1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41L10.97 18.2z"></path><path d="M21.1 12.5c0 .8-.6 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.9 1-1.6 1.5-1.6.5 0 1.5.7 1.5 1.6zM4.4 12.5c0 .8-.6 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.9 1-1.6 1.5-1.6.5 0 1.5.7 1.5 1.6z"></path></svg>,
  },
  {
    id: 17,
    en: "PARTNERSHIPS FOR THE GOALS",
    cn: "促进目标实现的伙伴关系",
    color: "bg-blue-900",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path><circle cx="12" cy="12" r="5"></circle></svg>,
  },
];

export const SDG_WHEEL_ICON = (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="10" />
    <path d="M 50 5 A 45 45 0 0 1 89.3 25.8" fill="none" stroke="#E5243B" strokeWidth="10" />
    <path d="M 89.3 25.8 A 45 45 0 0 1 99.5 60.7" fill="none" stroke="#DDA63A" strokeWidth="10" />
    <path d="M 99.5 60.7 A 45 45 0 0 1 79.2 89.3" fill="none" stroke="#4C9F38" strokeWidth="10" />
    <path d="M 79.2 89.3 A 45 45 0 0 1 39.3 99.5" fill="none" stroke="#C5192D" strokeWidth="10" />
    <path d="M 39.3 99.5 A 45 45 0 0 1 10.7 79.2" fill="none" stroke="#FF3A21" strokeWidth="10" />
    <path d="M 10.7 79.2 A 45 45 0 0 1 0.5 39.3" fill="none" stroke="#26BDE2" strokeWidth="10" />
    <path d="M 0.5 39.3 A 45 45 0 0 1 20.8 10.7" fill="none" stroke="#FCC30B" strokeWidth="10" />
    <path d="M 20.8 10.7 A 45 45 0 0 1 50 5" fill="none" stroke="#A21942" strokeWidth="10" />
  </svg>
);
