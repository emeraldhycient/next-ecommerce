'use client'
import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme/theme';

function AppLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
      <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
              {children}
          </ThemeProvider>
      </AppRouterCacheProvider>
  )
}

export default AppLayout