// Fix: Import React to make the JSX namespace available.
import React from 'react';

export interface SDGGoal {
  id: number;
  en: string;
  cn: string;
  color: string;
  icon: JSX.Element;
}

export interface CardState extends SDGGoal {
  instanceId: number; // Unique ID for each card instance, for React key
}