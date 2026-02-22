import Colors from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passFocused, setPassFocused] = useState(false);
    const router = useRouter();

    const handleLogin = () => {
        console.log('Login attempt with:', email, password);
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <Pressable onPress={Keyboard.dismiss} style={styles.inner}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => router.replace('/')}>
                        <Ionicons name="arrow-back" size={22} color={Colors.text} />
                    </TouchableOpacity>

                    <View style={styles.topSection}>
                        <Text style={styles.greeting}>Hey, welcome back</Text>
                        <Text style={styles.sub}>Log in to pick up where you left off</Text>
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.label}>Email</Text>
                        <View style={[styles.inputRow, emailFocused && styles.inputRowFocused]}>
                            <Ionicons name="mail-outline" size={18} color={emailFocused ? Colors.accent : '#aaa'} />
                            <TextInput
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onFocus={() => setEmailFocused(true)}
                                onBlur={() => setEmailFocused(false)}
                            />
                        </View>

                        <Text style={styles.label}>Password</Text>
                        <View style={[styles.inputRow, passFocused && styles.inputRowFocused]}>
                            <Ionicons name="lock-closed-outline" size={18} color={passFocused ? Colors.accent : '#aaa'} />
                            <TextInput
                                style={styles.input}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                                onFocus={() => setPassFocused(true)}
                                onBlur={() => setPassFocused(false)}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons
                                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                                    size={18}
                                    color="#aaa"
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} activeOpacity={0.85}>
                            <Text style={styles.loginBtnText}>Log in</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => router.push('/signup')}>
                            <Text style={styles.footerLink}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    inner: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 20,
        justifyContent: 'center',
    },
    backBtn: {
        position: 'absolute',
        top: 16,
        left: 24,
        width: 36,
        height: 36,
        justifyContent: 'center',
    },
    topSection: {
        marginBottom: 36,
    },
    greeting: {
        fontSize: 26,
        fontWeight: '700',
        color: Colors.text,
        marginBottom: 6,
        letterSpacing: -0.3,
    },
    sub: {
        fontSize: 14,
        color: Colors.textMuted,
        lineHeight: 20,
    },
    form: {
        marginBottom: 8,
    },
    label: {
        fontSize: 13,
        fontWeight: '600',
        color: Colors.textLight,
        marginBottom: 6,
        marginTop: 4,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: Colors.border,
        borderRadius: 10,
        paddingHorizontal: 14,
        height: 50,
        marginBottom: 16,
        backgroundColor: Colors.surface,
        gap: 10,
    },
    inputRowFocused: {
        borderColor: Colors.borderFocus,
        backgroundColor: Colors.background,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: '#222',
    },
    loginBtn: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 20,
    },
    loginBtnText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.3,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 28,
    },
    footerText: {
        fontSize: 14,
        color: Colors.textMuted,
    },
    footerLink: {
        fontSize: 14,
        color: Colors.accent,
        fontWeight: '600',
    },
});
