'use client'
import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme/theme';
import { Provider } from 'react-redux';
import { store } from '../store';

function AppLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Provider store={store}>
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </AppRouterCacheProvider>
        </Provider>
    )
}

export default AppLayout