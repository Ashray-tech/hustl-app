import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native';
import { Bell, User as UserIcon, Search, Filter, Coffee, Dumbbell, Car, FileText, Heart, ShoppingBag } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { HustlLogo } from '@/components/HustlLogo';
import { Typography } from '@/components/ui/Typography';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { ModernCard } from '@/components/ui/ModernCard';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const popularTasks = [
    {
      id: 1,
      title: 'Coffee Run',
      description: 'Get coffee delivered right to you',
      icon: <Coffee size={24} color="#FFFFFF" />,
      gradient: ['#F97316', '#EA580C'],
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      title: 'Workout Partner',
      description: 'Find a gym or sports buddy',
      icon: <Dumbbell size={24} color="#FFFFFF" />,
      gradient: ['#3B82F6', '#2563EB'],
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      title: 'Campus Rides',
      description: 'Safe transportation around campus',
      icon: <Car size={24} color="#FFFFFF" />,
      gradient: ['#10B981', '#059669'],
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 4,
      title: 'Printing',
      description: 'Print documents and assignments',
      icon: <FileText size={24} color="#FFFFFF" />,
      gradient: ['#8B5CF6', '#7C3AED'],
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 5,
      title: 'Pet Care',
      description: 'Pet sitting and walking services',
      icon: <Heart size={24} color="#FFFFFF" />,
      gradient: ['#EF4444', '#DC2626'],
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 6,
      title: 'Shopping',
      description: 'Grocery and item pickup',
      icon: <ShoppingBag size={24} color="#FFFFFF" />,
      gradient: ['#F59E0B', '#D97706'],
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
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
            <AnimatedButton
              title="Sign In"
              onPress={() => {}}
              variant="outline"
              size="sm"
              style={styles.signInButton}
              textStyle={{ color: '#FFFFFF', fontSize: 14 }}
            />
            <TouchableOpacity style={styles.profileButton}>
              <UserIcon size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.heroSection}>
          <Typography variant="h2" color="#FFFFFF" style={styles.heroTitle}>
            Running late for class?
          </Typography>
          <Typography variant="body1" color="rgba(255,255,255,0.9)" style={styles.heroSubtitle}>
            Get coffee delivered right to you
          </Typography>
          <Typography variant="body2" color="rgba(255,255,255,0.8)" style={styles.heroDescription}>
            Campus errands, covered. Coffee runs, printing, pet care — Hustl connects Gators in minutes.
          </Typography>
          
          <View style={styles.heroButtons}>
            <AnimatedButton
              title="Post a Task"
              onPress={() => {}}
              variant="secondary"
              size="md"
              style={styles.postButton}
            />
            <AnimatedButton
              title="Coffee Run"
              onPress={() => {}}
              variant="outline"
              size="md"
              style={styles.coffeeButton}
              textStyle={{ color: '#FFFFFF' }}
            />
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Popular Tasks Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Typography variant="h3" style={styles.sectionTitle}>⚡ Popular Tasks</Typography>
          </View>
          <Typography variant="body2" color="#6B7280" style={styles.sectionSubtitle}>
            Choose from our most popular task templates or create your own
          </Typography>
          
          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Search size={20} color="#9CA3AF" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search tasks..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholderTextColor="#9CA3AF"
              />
              <TouchableOpacity style={styles.filterButton}>
                <Filter size={20} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Task Grid */}
          <View style={styles.taskGrid}>
            {popularTasks.map((task) => (
              <TouchableOpacity key={task.id} style={styles.taskCard}>
                <View style={styles.taskCardContent}>
                  <Image 
                    source={{ uri: task.image }} 
                    style={styles.taskImage}
                    accessibilityLabel={`${task.title} task category image`}
                  />
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={styles.taskOverlay}
                  >
                    <View style={styles.taskInfo}>
                      <View style={styles.taskIcon}>
                        {task.icon}
                      </View>
                      <Typography variant="h4" color="#FFFFFF" style={styles.taskTitle}>
                        {task.title}
                      </Typography>
                      <Typography variant="body2" color="rgba(255,255,255,0.9)" style={styles.taskDescription}>
                        {task.description}
                      </Typography>
                    </View>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <ModernCard style={styles.quickActionCard}>
            <Typography variant="h4" style={styles.quickActionTitle}>Need something else?</Typography>
            <Typography variant="body2" color="#6B7280" style={styles.quickActionDescription}>
              Post a custom task and get matched with nearby students
            </Typography>
            <AnimatedButton
              title="Create Custom Task"
              onPress={() => {}}
              variant="primary"
              size="md"
              style={styles.customTaskButton}
            />
          </ModernCard>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    gap: 12,
  },
  signInButton: {
    borderColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  profileButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroSection: {
    alignItems: 'center',
    gap: 12,
  },
  heroTitle: {
    textAlign: 'center',
    fontWeight: '700',
  },
  heroSubtitle: {
    textAlign: 'center',
    fontWeight: '500',
  },
  heroDescription: {
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 8,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  postButton: {
    backgroundColor: '#F97316',
    paddingHorizontal: 20,
  },
  coffeeButton: {
    borderColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontWeight: '700',
  },
  sectionSubtitle: {
    marginBottom: 20,
    lineHeight: 20,
  },
  searchContainer: {
    marginBottom: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  filterButton: {
    padding: 4,
  },
  taskGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  taskCard: {
    width: '47%',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  taskCardContent: {
    position: 'relative',
    height: 180,
  },
  taskImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  taskOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    justifyContent: 'flex-end',
  },
  taskInfo: {
    padding: 16,
    alignItems: 'center',
  },
  taskIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskTitle: {
    textAlign: 'center',
    marginBottom: 4,
    fontWeight: '600',
    fontSize: 16,
  },
  taskDescription: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 16,
  },
  quickActions: {
    padding: 20,
    paddingTop: 0,
  },
  quickActionCard: {
    alignItems: 'center',
    padding: 24,
  },
  quickActionTitle: {
    marginBottom: 8,
    textAlign: 'center',
  },
  quickActionDescription: {
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  customTaskButton: {
    width: '100%',
  },
});