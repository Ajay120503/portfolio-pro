import React from 'react';
import { THEMES } from '../constants';
import { useThemeStore } from '../store/useThemeStore';
import {
    MoonIcon,
    Eclipse,
    SunIcon,
    SparklesIcon,
    FlameIcon,
    PaletteIcon,
    MountainIcon,
    CloudSunIcon,
    Sunset,
    Lightbulb,
    Ghost,
} from 'lucide-react';

const ICONS = {
    light: <SunIcon size={18} />,
    dark: <Eclipse size={18} />,
    forest: <MountainIcon size={18} />,
    synthwave: <SparklesIcon size={18} />,
    cyberpunk: <FlameIcon size={18} />,
    halloween: <Ghost size={18} />,
    dracula: <CloudSunIcon size={18} />,
    night: <MoonIcon size={18} />,
    dim: <Lightbulb size={18} />,
    sunset: <Sunset size={18} />,
};

const ThemeSelector = () => {
    const { theme, setTheme } = useThemeStore();

    const currentIndex = THEMES.findIndex((t) => t.name === theme);
    const total = THEMES.length;

    const visibleThemes = [
        THEMES[(currentIndex - 1 + total) % total],
        THEMES[currentIndex],
        THEMES[(currentIndex + 1) % total],
    ];

    const handleThemeClick = (selectedTheme) => {
        setTheme(selectedTheme.name);
    };

    return (
        <div className="flex gap-3 p-2 bg-base-300/60 backdrop-blur-md border border-base-content/10 rounded-full shadow-xl">
            {visibleThemes.map((t) => {
                const isActive = theme === t.name;
                return (
                    <button
                        key={t.name}
                        onClick={() => handleThemeClick(t)}
                        className={`btn btn-xs btn-circle border transition-all duration-300
              ${isActive
                                ? 'bg-primary text-primary-content hover:text-white ring-2 ring-primary scale-110 shadow-md'
                                : 'bg-base-100 text-pretty/80 hover:bg-base-200'
                            }`}
                        aria-label={`Switch to ${t.label}`}
                    >
                        {ICONS[t.name] || <PaletteIcon size={18} />}
                    </button>
                );
            })}
        </div>
    );
};

export default ThemeSelector;