import { Dictionary } from '../types';

const dictionaries = {
    en: () => import('./en').then((module) => module.default as Dictionary),
    ja: () => import('./ja').then((module) => module.default as Dictionary),
};

export const getDictionary = async (locale: 'en' | 'ja'): Promise<Dictionary> => {
    return dictionaries[locale]();
};
