"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export function useUtmUrl(baseUrl: string) {
  const searchParams = useSearchParams();

  const urlWithUtm = useMemo(() => {
    try {
      const url = new URL(baseUrl);
      
      const utmParams = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
      ];

      utmParams.forEach((param) => {
        const value = searchParams.get(param);
        if (value) {
          url.searchParams.set(param, value);
        }
      });

      return url.toString();
    } catch (error) {
      // If baseUrl is invalid or missing, just return the original string
      return baseUrl;
    }
  }, [baseUrl, searchParams]);

  return urlWithUtm;
}
