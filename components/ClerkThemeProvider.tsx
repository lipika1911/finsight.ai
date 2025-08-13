'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

interface ClerkThemeProviderProps {
  children: React.ReactNode;
}

export default function ClerkThemeProvider({ children }: ClerkThemeProviderProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <ClerkProvider
      key={theme} // forces remount on theme change
      appearance={{
        baseTheme: isDark ? dark : undefined, // undefined = default light
        variables: {
          colorPrimary: 'var(--primary)',
          colorBackground: 'var(--background)',
          colorInputBackground: 'var(--input)',
          colorInputText: 'var(--foreground)',
          borderRadius: 'var(--radius)',
        },
        elements: {
          formButtonPrimary: {
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            '&:hover': {
              opacity: 0.9,
            },
          },
          card: {
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--card)',
          },
          headerTitle: {
            color: 'var(--foreground)',
          },
          headerSubtitle: {
            color: 'var(--muted-foreground)',
          },
          socialButtonsBlockButton: {
            border: '1px solid var(--border)',
            backgroundColor: 'var(--card)',
            backdropFilter: 'blur(8px)',
          },
          dividerLine: {
            backgroundColor: 'var(--border)',
          },
          formFieldInput: {
            backgroundColor: 'var(--input)',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--border)',
            color: 'var(--foreground)',
          },
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
