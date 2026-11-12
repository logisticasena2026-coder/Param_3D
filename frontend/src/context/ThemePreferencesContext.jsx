import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiClient } from '../api/client';

const ThemePreferencesContext = createContext();

export const ThemePreferencesProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('mq3d_theme') || 'dark');
  const [palette, setPalette] = useState(() => localStorage.getItem('mq3d_palette') || 'cyan');
  const [fontSize, setFontSize] = useState(() => localStorage.getItem('mq3d_fontsize') || 'md');
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  // Aplicar cambios visuales en el DOM
  useEffect(() => {
    const root = document.documentElement;

    // Clase para modo claro/oscuro
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }

    // Atributos de paleta y tipografía
    root.setAttribute('data-palette', palette);
    root.setAttribute('data-fontsize', fontSize);

    // Persistir localmente
    localStorage.setItem('mq3d_theme', theme);
    localStorage.setItem('mq3d_palette', palette);
    localStorage.setItem('mq3d_fontsize', fontSize);
  }, [theme, palette, fontSize]);

  // Sincronizar con el servidor si hay sesión iniciada
  const savePreferences = async (newPrefs) => {
    if (newPrefs.theme) setTheme(newPrefs.theme);
    if (newPrefs.palette) setPalette(newPrefs.palette);
    if (newPrefs.fontSize) setFontSize(newPrefs.fontSize);

    const token = apiClient.getToken();
    if (token) {
      try {
        await apiClient.request('/preferences', {
          method: 'PUT',
          body: JSON.stringify(newPrefs)
        });
      } catch (err) {
        console.warn('No se pudo sincronizar preferencias con el servidor:', err);
      }
    }
  };

  const loadUserPreferences = async () => {
    const token = apiClient.getToken();
    if (!token) return;
    try {
      const prefs = await apiClient.request('/preferences');
      if (prefs.theme) setTheme(prefs.theme);
      if (prefs.palette) setPalette(prefs.palette);
      if (prefs.fontSize) setFontSize(prefs.fontSize);
    } catch (e) {
      // Usar locales
    }
  };

  return (
    <ThemePreferencesContext.Provider
      value={{
        theme,
        palette,
        fontSize,
        setTheme: (t) => savePreferences({ theme: t }),
        setPalette: (p) => savePreferences({ palette: p }),
        setFontSize: (s) => savePreferences({ fontSize: s }),
        isThemeModalOpen,
        setIsThemeModalOpen,
        loadUserPreferences
      }}
    >
      {children}
    </ThemePreferencesContext.Provider>
  );
};

export const useThemePreferences = () => useContext(ThemePreferencesContext);
