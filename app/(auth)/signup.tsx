import Colors from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUpScreen() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const router = useRouter();

    const handleSignUp = () => {
        console.log('Sign up attempt with:', { fullName, email, password, confirmPassword });
    };

    const inputStyle = (field: string) => [
        styles.inputRow,
        focusedField === field && styles.inputRowFocused,
    ];

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
                    <ScrollView
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                    >
                        <TouchableOpacity style={styles.backBtn} onPress={() => router.replace('/')}>
                            <Ionicons name="arrow-back" size={22} color={Colors.text} />
                        </TouchableOpacity>

                        <View style={styles.topSection}>
                            <Text style={styles.heading}>Create an account</Text>
                            <Text style={styles.sub}>Fill in your details to get started.</Text>
                        </View>

                        <View style={styles.form}>
                            <Text style={styles.label}>Full Name</Text>
                            <View style={inputStyle('name')}>
                                <Ionicons
                                    name="person-outline"
                                    size={18}
                                    color={focusedField === 'name' ? Colors.accent : '#aaa'}
                                />
                                <TextInput
                                    style={styles.input}
                                    value={fullName}
                                    onChangeText={setFullName}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                />
                            </View>

                            <Text style={styles.label}>Email</Text>
                            <View style={inputStyle('email')}>
                                <Ionicons
                                    name="mail-outline"
                                    size={18}
                                    color={focusedField === 'email' ? Colors.accent : '#aaa'}
                                />
                                <TextInput
                                    style={styles.input}
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                />
                            </View>

                            <Text style={styles.label}>Password</Text>
                            <View style={inputStyle('password')}>
                                <Ionicons
                                    name="lock-closed-outline"
                                    size={18}
                                    color={focusedField === 'password' ? Colors.accent : '#aaa'}
                                />
                                <TextInput
                                    style={styles.input}
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={!showPassword}
                                    onFocus={() => setFocusedField('password')}
                                    onBlur={() => setFocusedField(null)}
                                />
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                    <Ionicons
                                        name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                                        size={18}
                                        color="#aaa"
                                    />
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.label}>Confirm Password</Text>
                            <View style={inputStyle('confirm')}>
                                <Ionicons
                                    name="lock-closed-outline"
                                    size={18}
                                    color={focusedField === 'confirm' ? Colors.accent : '#aaa'}
                                />
                                <TextInput
                                    style={styles.input}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    secureTextEntry={!showPassword}
                                    onFocus={() => setFocusedField('confirm')}
                                    onBlur={() => setFocusedField(null)}
                                />
                            </View>

                            <TouchableOpacity style={styles.signUpBtn} onPress={handleSignUp} activeOpacity={0.85}>
                                <Text style={styles.signUpBtnText}>Create account</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.footer}>
                            <Text style={styles.footerText}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => router.push('/login')}>
                                <Text style={styles.footerLink}>Log in</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
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
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 32,
    },
    backBtn: {
        marginBottom: 24,
        width: 36,
        height: 36,
        justifyContent: 'center',
    },
    topSection: {
        marginBottom: 28,
    },
    heading: {
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
        marginBottom: 4,
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
    signUpBtn: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpBtnText: {
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
