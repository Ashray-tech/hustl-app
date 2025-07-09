import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Bell, User as UserIcon, Settings, HelpCircle, Shield, FileText, Star, LogOut, ChevronRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { HustlLogo } from '@/components/HustlLogo';
import { Typography } from '@/components/ui/Typography';
import { ModernCard } from '@/components/ui/ModernCard';

export default function MoreScreen() {
  const menuSections = [
    {
      title: 'Account',
      items: [
        {
          id: 1,
          icon: <Settings size={20} color="#4F46E5" />,
          title: 'Settings',
          subtitle: 'Notifications, privacy, security',
          hasChevron: true,
        },
        {
          id: 2,
          icon: <UserIcon size={20} color="#6B7280" />,
          title: 'Edit Profile',
          subtitle: 'Update your information',
          hasChevron: true,
        },
      ]
    },
    {
      title: 'Support',
      items: [
        {
          id: 3,
          icon: <HelpCircle size={20} color="#6B7280" />,
          title: 'Help Center',
          subtitle: 'FAQs and support articles',
          hasChevron: true,
        },
        {
          id: 4,
          icon: <Star size={20} color="#F59E0B" />,
          title: 'Rate Hustl',
          subtitle: 'Share your feedback',
          hasChevron: true,
        },
      ]
    },
    {
      title: 'Legal',
      items: [
        {
          id: 5,
          icon: <FileText size={20} color="#6B7280" />,
          title: 'Terms of Service',
          subtitle: 'User agreement and terms',
          hasChevron: true,
        },
        {
          id: 6,
          icon: <Shield size={20} color="#6B7280" />,
          title: 'Privacy Policy',
          subtitle: 'How we protect your data',
          hasChevron: true,
        },
      ]
    }
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />
      
      {/* Header */}
      <LinearGradient
        colors={['#4F46E5', '#3730A3']}
        style={styles.header}
      >
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <HustlLogo size={32} />
            <View style={styles.headerText}>
              <Typography variant="h4" color="#FFFFFF">Hustl</Typography>
              <Typography variant="caption" color="rgba(255,255,255,0.8)">Campus Gigs</Typography>
            </View>
          </View>
          
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.headerButton}>
              <Bell size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <UserIcon size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <Typography variant="body2" color="#FFFFFF">Exit</Typography>
          </View>
        </View>

        <Typography variant="h2" color="#FFFFFF" style={styles.headerTitle}>
          More
        </Typography>
        <Typography variant="body2" color="rgba(255,255,255,0.8)" style={styles.headerSubtitle}>
          Settings, help, and information
        </Typography>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {menuSections.map((section, sectionIndex) => (
          <View key={section.title} style={styles.section}>
            <Typography variant="h4" style={styles.sectionTitle}>{section.title}</Typography>
            
            <ModernCard style={styles.menuCard}>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity 
                  key={item.id} 
                  style={[
                    styles.menuItem,
                    itemIndex < section.items.length - 1 && styles.menuItemBorder
                  ]}
                >
                  <View style={styles.menuItemLeft}>
                    <View style={styles.menuIcon}>
                      {item.icon}
                    </View>
                    <View style={styles.menuContent}>
                      <Typography variant="h4" style={styles.menuTitle}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="#6B7280" style={styles.menuSubtitle}>
                        {item.subtitle}
                      </Typography>
                    </View>
                  </View>
                  {item.hasChevron && (
                    <ChevronRight size={20} color="#9CA3AF" />
                  )}
                </TouchableOpacity>
              ))}
            </ModernCard>
          </View>
        ))}

        {/* App Info */}
        <View style={styles.appInfoSection}>
          <ModernCard style={styles.appInfoCard}>
            <View style={styles.appInfoHeader}>
              <HustlLogo size={40} />
              <View style={styles.appInfoText}>
                <Typography variant="h4" style={styles.appName}>Hustl</Typography>
                <Typography variant="body2" color="#6B7280">Version 1.0.0</Typography>
              </View>
            </View>
            <Typography variant="body2" color="#6B7280" style={styles.appDescription}>
              Connecting University of Florida students for quick campus errands and tasks.
            </Typography>
          </ModernCard>
        </View>

        {/* Sign Out */}
        <View style={styles.signOutSection}>
          <TouchableOpacity style={styles.signOutButton}>
            <LogOut size={20} color="#EF4444" />
            <Typography variant="h4" color="#EF4444" style={styles.signOutText}>
              Sign Out
            </Typography>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 32,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerText: {
    gap: 2,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  headerButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: '700',
    marginBottom: 8,
  },
  headerSubtitle: {
    lineHeight: 20,
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  sectionTitle: {
    marginBottom: 16,
    fontWeight: '600',
    color: '#374151',
  },
  menuCard: {
    padding: 0,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontWeight: '500',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 13,
    lineHeight: 16,
  },
  appInfoSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  appInfoCard: {
    padding: 20,
  },
  appInfoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 16,
  },
  appInfoText: {
    flex: 1,
  },
  appName: {
    fontWeight: '600',
    marginBottom: 2,
  },
  appDescription: {
    lineHeight: 20,
  },
  signOutSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 32,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  signOutText: {
    fontWeight: '500',
  },
});