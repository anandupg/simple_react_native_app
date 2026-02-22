import Colors from '@/constants/colors';
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    label: string;
    variant?: 'filled' | 'outline';
}

export default function Button({ label, variant = 'filled', style, ...props }: ButtonProps) {
    return (
        <TouchableOpacity
            style={[styles.base, variant === 'outline' ? styles.outline : styles.filled, style]}
            activeOpacity={0.85}
            {...props}
        >
            <Text style={variant === 'outline' ? styles.outlineText : styles.filledText}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    base: {
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filled: {
        backgroundColor: Colors.primary,
    },
    outline: {
        borderWidth: 1.5,
        borderColor: Colors.border,
        backgroundColor: Colors.white,
    },
    filledText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.3,
    },
    outlineText: {
        color: '#333',
        fontSize: 16,
        fontWeight: '500',
    },
});
