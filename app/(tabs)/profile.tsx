import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Bell, User as UserIcon, Settings, MessageSquare, ChartBar as BarChart3, Zap, ChevronRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { HustlLogo } from '@/components/HustlLogo';
import { Typography } from '@/components/ui/Typography';
import { ModernCard } from '@/components/ui/ModernCard';

export default function ProfileScreen() {
  const menuItems = [
    {
      id: 1,
      icon: <UserIcon size={20} color="#4F46E5" />,
      title: 'Profile Information',
      hasChevron: true,
    },
    {
      id: 2,
      icon: <Settings size={20} color="#6B7280" />,
      title: 'My Tasks',
      hasChevron: true,
    },
    {
      id: 3,
      icon: <BarChart3 size={20} color="#6B7280" />,
      title: 'Task History',
      hasChevron: true,
    },
    {
      id: 4,
      icon: <MessageSquare size={20} color="#6B7280" />,
      title: 'Messages',
      hasChevron: true,
    },
    {
      id: 5,
      icon: <BarChart3 size={20} color="#6B7280" />,
      title: 'Stats & Achievements',
      hasChevron: true,
    },
    {
      id: 6,
      icon: <Zap size={20} color="#6B7280" />,
      title: 'Premium',
      hasChevron: true,
    },
  ];

  const bottomTabs = [
    { id: 'profile', title: 'Profile', active: true },
    { id: 'tasks', title: 'Tasks', active: false },
    { id: 'history', title: 'History', active: false },
    { id: 'messages', title: 'Messages', active: false },
    { id: 'stats', title: 'Stats', active: false },
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

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImagePlaceholder}>
              <UserIcon size={32} color="#9CA3AF" />
            </View>
            <TouchableOpacity style={styles.editProfileButton}>
              <Settings size={16} color="#4F46E5" />
            </TouchableOpacity>
          </View>
          
          <Typography variant="h2" color="#FFFFFF" style={styles.profileName}>
            Brad Williams
          </Typography>
          <Typography variant="body2" color="rgba(255,255,255,0.8)" style={styles.profileRole}>
            Finance
          </Typography>
        </View>
      </LinearGradient>

      {/* Menu Items */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  {item.icon}
                </View>
                <Typography variant="body1" style={styles.menuTitle}>
                  {item.title}
                </Typography>
              </View>
              {item.hasChevron && (
                <ChevronRight size={20} color="#9CA3AF" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Tab Indicators */}
        <View style={styles.bottomTabContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.bottomTabs}>
            {bottomTabs.map((tab) => (
              <TouchableOpacity
                key={tab.id}
                style={[styles.bottomTab, tab.active && styles.bottomTabActive]}
              >
                <Typography 
                  variant="body2" 
                  color={tab.active ? "#4F46E5" : "#9CA3AF"}
                  style={styles.bottomTabText}
                >
                  {tab.title}
                </Typography>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
    marginBottom: 32,
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
  profileSection: {
    alignItems: 'center',
    gap: 8,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  profileImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editProfileButton: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileName: {
    fontWeight: '700',
  },
  profileRole: {
    fontWeight: '500',
  },
  content: {
    flex: 1,
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTitle: {
    fontWeight: '500',
  },
  bottomTabContainer: {
    marginTop: 32,
    marginBottom: 20,
  },
  bottomTabs: {
    paddingHorizontal: 20,
    gap: 24,
  },
  bottomTab: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  bottomTabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#4F46E5',
  },
  bottomTabText: {
    fontWeight: '500',
  },
});