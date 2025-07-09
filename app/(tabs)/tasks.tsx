import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native';
import { Bell, User as UserIcon, Search, Filter, MapPin, Clock, TrendingUp } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { HustlLogo } from '@/components/HustlLogo';
import { Typography } from '@/components/ui/Typography';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { ModernCard } from '@/components/ui/ModernCard';
import { Badge } from '@/components/ui/Badge';

export default function TasksScreen() {
  const [activeTab, setActiveTab] = useState('Available Tasks');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['Available Tasks', 'Tasks You\'re Doing', 'Your Posts'];

  const tasks = [
    {
      id: 1,
      title: 'Workout Partner',
      price: 0,
      category: 'other',
      description: 'Find a gym or sports buddy for your next workout or pickup game',
      time: '30-60 min',
      location: '13379 Northern Dance...',
      distance: '14313.2 mi away',
      poster: {
        name: 'Prithvi Siva',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
        initial: 'P'
      },
      isLive: true,
    },
    {
      id: 2,
      title: 'Coffee Run - Starbucks',
      price: 12,
      category: 'coffee',
      description: 'Need a venti iced coffee with oat milk from Starbucks',
      time: '15-20 min',
      location: 'Reitz Union',
      distance: '0.2 mi away',
      poster: {
        name: 'Sarah M.',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
        initial: 'S'
      },
      isLive: true,
    },
    {
      id: 3,
      title: 'Print Assignment',
      price: 8,
      category: 'printing',
      description: 'Print 20 pages double-sided and deliver to Turlington Plaza',
      time: '25-30 min',
      location: 'Library West',
      distance: '0.5 mi away',
      poster: {
        name: 'Mike R.',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
        initial: 'M'
      },
      isLive: false,
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
            <TouchableOpacity style={styles.headerButton}>
              <Bell size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <UserIcon size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <Typography variant="body2" color="#FFFFFF">Exit</Typography>
          </View>
        </View>

        <View style={styles.trendingSection}>
          <View style={styles.trendingHeader}>
            <TrendingUp size={20} color="#F97316" />
            <Typography variant="h3" color="#FFFFFF" style={styles.trendingTitle}>
              Trending Near You
            </Typography>
          </View>
          <View style={styles.liveIndicator}>
            <View style={styles.liveDot} />
            <Typography variant="caption" color="#FFFFFF">Live</Typography>
          </View>
        </View>
      </LinearGradient>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabScroll}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Typography 
                variant="body2" 
                color={activeTab === tab ? "#4F46E5" : "#6B7280"}
                style={styles.tabText}
              >
                {tab}
              </Typography>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

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

      {/* Tasks List */}
      <ScrollView style={styles.tasksList} showsVerticalScrollIndicator={false}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </ScrollView>
    </View>
  );
}

function TaskCard({ task }: { task: any }) {
  return (
    <ModernCard style={styles.taskCard}>
      <View style={styles.taskHeader}>
        <View style={styles.taskCategory}>
          <Typography variant="caption" color="#6B7280">💪 {task.category}</Typography>
        </View>
        <Typography variant="h3" color={task.price === 0 ? "#10B981" : "#1F2937"}>
          {task.price === 0 ? '$0' : `$${task.price}`}
        </Typography>
      </View>

      <Typography variant="h4" style={styles.taskTitle}>{task.title}</Typography>
      <Typography variant="body2" color="#6B7280" style={styles.taskDescription}>
        {task.description}
      </Typography>

      <View style={styles.taskMeta}>
        <View style={styles.metaItem}>
          <Clock size={14} color="#6B7280" />
          <Typography variant="caption" color="#6B7280">{task.time}</Typography>
        </View>
        <View style={styles.metaItem}>
          <MapPin size={14} color="#6B7280" />
          <Typography variant="caption" color="#6B7280">{task.location}</Typography>
        </View>
      </View>

      <View style={styles.taskFooter}>
        <View style={styles.posterInfo}>
          <View style={styles.posterAvatar}>
            <Typography variant="body2" color="#FFFFFF">{task.poster.initial}</Typography>
          </View>
          <View style={styles.posterDetails}>
            <Typography variant="body2">{task.poster.name}</Typography>
            <Typography variant="caption" color="#6B7280">{task.distance}</Typography>
          </View>
        </View>

        <AnimatedButton
          title="Accept Task"
          onPress={() => {}}
          variant="primary"
          size="sm"
          style={styles.acceptButton}
        />
      </View>

      {task.isLive && (
        <View style={styles.liveIndicatorCard}>
          <View style={styles.liveDotSmall} />
          <Typography variant="caption" color="#10B981">Live</Typography>
        </View>
      )}
    </ModernCard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
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
  trendingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trendingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  trendingTitle: {
    fontWeight: '600',
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EF4444',
  },
  tabContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tabScroll: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 24,
  },
  tab: {
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4F46E5',
  },
  tabText: {
    fontWeight: '500',
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
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
  tasksList: {
    flex: 1,
    padding: 20,
  },
  taskCard: {
    marginBottom: 16,
    position: 'relative',
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  taskCategory: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  taskTitle: {
    marginBottom: 8,
    fontWeight: '600',
  },
  taskDescription: {
    marginBottom: 16,
    lineHeight: 20,
  },
  taskMeta: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  taskFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  posterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  posterAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  posterDetails: {
    gap: 2,
  },
  acceptButton: {
    paddingHorizontal: 16,
  },
  liveIndicatorCard: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 8,
  },
  liveDotSmall: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#10B981',
  },
});