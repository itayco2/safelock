import { useState, useEffect } from "react";

export type CookieCategory = "necessary" | "analytics" | "marketing";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "cookie_consent";
const COOKIE_PREFERENCES_KEY = "cookie_preferences";

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false,
};

export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettingsDialog, setShowSettingsDialog] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);

    if (consent === "true" && savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences({ ...defaultPreferences, ...parsed });
        setHasConsent(true);
        setShowBanner(false);
      } catch {
        setHasConsent(false);
        setShowBanner(true);
      }
    } else {
      setHasConsent(false);
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const rejectAll = () => {
    savePreferences(defaultPreferences);
  };

  const savePreferences = (newPreferences: CookiePreferences, closeDialog = true) => {
    // Ensure necessary cookies are always enabled
    const finalPreferences = {
      ...newPreferences,
      necessary: true,
    };
    
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(finalPreferences));
    setPreferences(finalPreferences);
    setHasConsent(true);
    setShowBanner(false);
    if (closeDialog) {
      setShowSettingsDialog(false);
    }
    
    // Trigger GTM load if analytics is enabled
    if (finalPreferences.analytics) {
      loadGTM();
    }
  };

  const updatePreference = (category: CookieCategory, value: boolean) => {
    if (category === "necessary") return; // Cannot disable necessary cookies
    
    const newPreferences = {
      ...preferences,
      [category]: value,
    };
    savePreferences(newPreferences);
  };

  const openSettings = () => {
    setShowSettingsDialog(true);
    setShowBanner(true); // Show banner if not already shown
  };

  const hasCategoryConsent = (category: CookieCategory): boolean => {
    return preferences[category] === true;
  };

  return {
    hasConsent,
    preferences,
    showBanner,
    showSettingsDialog,
    acceptAll,
    rejectAll,
    savePreferences,
    updatePreference,
    openSettings,
    hasCategoryConsent,
    setShowBanner,
    setShowSettingsDialog,
  };
};

// Function to load GTM script
export const loadGTM = () => {
  if (document.getElementById("gtm-script")) {
    return; // Already loaded
  }

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NWH86BJV');`;
  document.head.appendChild(script);
};

