import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ModernCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  gradient?: boolean;
  gradientColors?: string[];
  elevated?: boolean;
  onPress?: () => void;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
}

export function ModernCard({ 
  children, 
  style, 
  gradient = false, 
  gradientColors, 
  elevated = true,
  onPress,
  variant = 'default'
}: ModernCardProps) {
  const getGradientColors = () => {
    if (gradientColors) return gradientColors;
    
    switch (variant) {
      case 'primary':
        return ['#1E40AF', '#1E3A8A'];
      case 'secondary':
        return ['#EA580C', '#DC2626'];
      case 'accent':
        return ['#F3F4F6', '#ffffff'];
      default:
        return ['#ffffff', '#F9FAFB'];
    }
  };

  const cardStyle = [
    styles.card,
    styles[variant],
    elevated && styles.elevated,
    style
  ];

  const CardContent = () => (
    <View style={cardStyle}>
      {gradient ? (
        <LinearGradient 
          colors={getGradientColors()} 
          style={styles.gradientContent}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {children}
        </LinearGradient>
      ) : (
        children
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.95}>
        <CardContent />
      </TouchableOpacity>
    );
  }

  return <CardContent />;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 24,
    overflow: 'hidden',
  },
  default: {
    backgroundColor: '#ffffff',
  },
  primary: {
    backgroundColor: '#1E40AF',
  },
  secondary: {
    backgroundColor: '#EA580C',
  },
  accent: {
    backgroundColor: '#F3F4F6',
  },
  elevated: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  gradientContent: {
    flex: 1,
    margin: -24,
    padding: 24,
  },
});