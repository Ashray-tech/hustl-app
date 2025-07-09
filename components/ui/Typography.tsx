import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'caption' | 'overline';
  color?: string;
  style?: TextStyle;
  numberOfLines?: number;
}

export function Typography({ 
  children, 
  variant = 'body1', 
  color, 
  style, 
  numberOfLines 
}: TypographyProps) {
  return (
    <Text 
      style={[
        styles[variant], 
        color && { color }, 
        style
      ]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: -0.5,
    color: '#1F2937',
  },
  h2: {
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.25,
    color: '#1F2937',
  },
  h3: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    color: '#1F2937',
  },
  h4: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 26,
    color: '#1F2937',
  },
  body1: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
  },
  body2: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#6B7280',
  },
  caption: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#6B7280',
  },
  overline: {
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: '#6B7280',
  },
});