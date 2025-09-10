declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: {
        page_path?: string;
        page_title?: string;
        page_location?: string;
        send_to?: string;
        value?: number;
        currency?: string;
        event_category?: string;
        event_label?: string;
        [key: string]: string | number | boolean | undefined;
      }
    ) => void;
  }
}

export {};
