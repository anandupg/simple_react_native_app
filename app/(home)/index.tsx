import Colors from '@/constants/colors';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            {/* Navbar */}
            <View style={styles.navbar}>
                <Text style={styles.logo}>Anandu</Text>
                <View style={styles.navActions}>
                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={() => router.push('/login')}
                        activeOpacity={0.75}
                    >
                        <Text style={styles.loginBtnText}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.signupBtn}
                        onPress={() => router.push('/signup')}
                        activeOpacity={0.85}
                    >
                        <Text style={styles.signupBtnText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Body */}
            <View style={styles.body}>
                <Text style={styles.headline}>Home{'\n'}Page</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    logo: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.text,
        letterSpacing: -0.3,
    },
    navActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    loginBtn: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: Colors.border,
    },
    loginBtnText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    signupBtn: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: Colors.primary,
    },
    signupBtnText: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.white,
    },
    body: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    headline: {
        fontSize: 36,
        fontWeight: '700',
        color: Colors.text,
        lineHeight: 44,
        letterSpacing: -0.5,
    },
});
