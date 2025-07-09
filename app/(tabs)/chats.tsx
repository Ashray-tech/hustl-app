import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { Bell, User as UserIcon, Search, MoveHorizontal as MoreHorizontal } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { HustlLogo } from '@/components/HustlLogo';
import { Typography } from '@/components/ui/Typography';
import { ModernCard } from '@/components/ui/ModernCard';

export default function ChatsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const chats = [
    {
      id: 1,
      name: 'apoorva',
      message: 'hello',
      time: 'Jun 30',
      avatar: 'A',
      unread: false,
    },
    {
      id: 2,
      name: 'Aryan Sayini',
      message: 'hey',
      time: 'Jun 30',
      avatar: 'A',
      unread: false,
    },
    {
      id: 3,
      name: 'Ashray Sayini',
      message: 'No messages yet',
      time: '',
      avatar: 'A',
      unread: false,
    },
    {
      id: 4,
      name: 'Ashray Sayini',
      message: 'No messages yet',
      time: '',
      avatar: 'A',
      unread: false,
    },
    {
      id: 5,
      name: 'Chandrakala Thota',
      message: '',
      time: '',
      avatar: 'C',
      unread: false,
    },
    {
      id: 6,
      name: 'John Dove',
      message: 'No messages yet',
      time: '',
      avatar: 'J',
      unread: false,
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
      </LinearGradient>

      {/* Messages Title */}
      <View style={styles.titleContainer}>
        <Typography variant="h2" style={styles.title}>Messages</Typography>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#9CA3AF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search chats..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      {/* Chat List */}
      <ScrollView style={styles.chatsList} showsVerticalScrollIndicator={false}>
        {chats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </ScrollView>
    </View>
  );
}

function ChatItem({ chat }: { chat: any }) {
  return (
    <TouchableOpacity style={styles.chatItem}>
      <View style={styles.chatAvatar}>
        <Typography variant="body1" color="#FFFFFF" style={styles.avatarText}>
          {chat.avatar}
        </Typography>
      </View>
      
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Typography variant="h4" style={styles.chatName}>{chat.name}</Typography>
          {chat.time && (
            <Typography variant="caption" color="#9CA3AF" style={styles.chatTime}>
              {chat.time}
            </Typography>
          )}
        </View>
        
        <Typography 
          variant="body2" 
          color={chat.message === 'No messages yet' ? "#9CA3AF" : "#6B7280"}
          style={styles.chatMessage}
        >
          {chat.message || 'No messages yet'}
        </Typography>
      </View>
      
      <TouchableOpacity style={styles.moreButton}>
        <MoreHorizontal size={20} color="#9CA3AF" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  titleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontWeight: '700',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
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
  chatsList: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  chatAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#9CA3AF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontWeight: '600',
    fontSize: 18,
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatName: {
    fontWeight: '600',
  },
  chatTime: {
    fontSize: 12,
  },
  chatMessage: {
    fontSize: 14,
    lineHeight: 18,
  },
  moreButton: {
    padding: 8,
    marginLeft: 8,
  },
});