import { Stack } from 'expo-router';
import "@/global.css"; //Import your CSS file


export default function RootLayout() {
    return <Stack screenOptions={{headerShown: false}} />
}