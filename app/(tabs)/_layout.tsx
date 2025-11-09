import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tabs } from 'expo-router';

interface TabBarIconProps {
    focused: boolean;
    color: string;
    size: number;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    const tabBarExploreIcon = ({ color }: TabBarIconProps) => (
        <IconSymbol size={28} name="paperplane.fill" color={color} />
    );

    const tabBarIconHome = ({ color }: TabBarIconProps) => (
        <IconSymbol size={28} name="house.fill" color={color} />
    );

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarButton: HapticTab,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: tabBarIconHome,
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: tabBarExploreIcon,
                }}
            />
        </Tabs>
    );
}
