import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native';
import { Bell, User as UserIcon, Search, Filter, Coffee, Dumbbell, Car, FileText, Heart, ShoppingBag, Star } from 'lucide-react-native';
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
      price: '$5-15',
      time: '15-30 min'
    },
    {
      id: 2,
      title: 'Workout Partner',
      description: 'Find a gym or sports buddy',
      icon: <Dumbbell size={24} color="#FFFFFF" />,
      gradient: ['#3B82F6', '#2563EB'],
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'Free',
      time: '1-2 hours'
    },
    {
      id: 3,
      title: 'Campus Rides',
      description: 'Safe transportation around campus',
      icon: <Car size={24} color="#FFFFFF" />,
      gradient: ['#10B981', '#059669'],
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$3-10',
      time: '10-20 min'
    },
    {
      id: 4,
      title: 'Printing',
      description: 'Print documents and assignments',
      icon: <FileText size={24} color="#FFFFFF" />,
      gradient: ['#8B5CF6', '#7C3AED'],
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$2-8',
      time: '15-25 min'
    },
    {
      id: 5,
      title: 'Pet Care',
      description: 'Pet sitting and walking services',
      icon: <Heart size={24} color="#FFFFFF" />,
      gradient: ['#EF4444', '#DC2626'],
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$10-25',
      time: '30-60 min'
    },
    {
      id: 6,
      title: 'Shopping',
      description: 'Grocery and item pickup',
      icon: <ShoppingBag size={24} color="#FFFFFF" />,
      gradient: ['#F59E0B', '#D97706'],
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$5-20',
      time: '20-45 min'
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      text: 'Hustl saved me so much time! Got my coffee delivered in 10 minutes.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Mike R.',
      rating: 5,
      text: 'Perfect for busy students. Quick, reliable, and affordable.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
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
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Popular Tasks Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Typography variant="h3" style={styles.sectionTitle}>⚡ Popular Tasks</Typography>
            <Typography variant="body2" color="#6B7280" style={styles.sectionSubtitle}>
              Choose from our most popular task templates or create your own
            </Typography>
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
                      <View style={styles.taskMeta}>
                        <Typography variant="caption" color="rgba(255,255,255,0.8)">
                          {task.price} • {task.time}
                        </Typography>
                      </View>
                    </View>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* How Hustl Works */}
        <View style={styles.howItWorksSection}>
          <Typography variant="h3" style={styles.sectionTitle}>🔥 How Hustl Works</Typography>
          <Typography variant="body2" color="#6B7280" style={styles.sectionSubtitle}>
            Get help in 3 easy steps
          </Typography>
          
          <View style={styles.stepsContainer}>
            <View style={styles.step}>
              <View style={styles.stepNumber}>
                <Typography variant="h4" color="#FFFFFF">1</Typography>
              </View>
              <View style={styles.stepContent}>
                <Typography variant="h4" style={styles.stepTitle}>Post Your Task</Typography>
                <Typography variant="body2" color="#6B7280">
                  Describe what you need help with and set your budget
                </Typography>
              </View>
            </View>
            
            <View style={styles.step}>
              <View style={[styles.stepNumber, { backgroundColor: '#F97316' }]}>
                <Typography variant="h4" color="#FFFFFF">2</Typography>
              </View>
              <View style={styles.stepContent}>
                <Typography variant="h4" style={styles.stepTitle}>Get Matched</Typography>
                <Typography variant="body2" color="#6B7280">
                  Connect with verified students who can help
                </Typography>
              </View>
            </View>
            
            <View style={styles.step}>
              <View style={[styles.stepNumber, { backgroundColor: '#10B981' }]}>
                <Typography variant="h4" color="#FFFFFF">3</Typography>
              </View>
              <View style={styles.stepContent}>
                <Typography variant="h4" style={styles.stepTitle}>Complete & Pay</Typography>
                <Typography variant="body2" color="#6B7280">
                  Task completed safely with secure payment
                </Typography>
              </View>
            </View>
          </View>
        </View>

        {/* Student Testimonials */}
        <View style={styles.testimonialsSection}>
          <Typography variant="h3" style={styles.sectionTitle}>💬 What Students Are Saying</Typography>
          <Typography variant="body2" color="#6B7280" style={styles.sectionSubtitle}>
            Real experiences from UF students using Hustl to get things done
          </Typography>
          
          <View style={styles.testimonialsList}>
            {testimonials.map((testimonial) => (
              <ModernCard key={testimonial.id} style={styles.testimonialCard}>
                <View style={styles.testimonialHeader}>
                  <Image source={{ uri: testimonial.avatar }} style={styles.testimonialAvatar} />
                  <View style={styles.testimonialInfo}>
                    <Typography variant="h4">{testimonial.name}</Typography>
                    <View style={styles.rating}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} color="#F59E0B" fill="#F59E0B" />
                      ))}
                    </View>
                  </View>
                </View>
                <Typography variant="body2" color="#6B7280" style={styles.testimonialText}>
                  "{testimonial.text}"
                </Typography>
              </ModernCard>
            ))}
          </View>
        </View>

        {/* Why Choose Hustl */}
        <View style={styles.whyChooseSection}>
          <Typography variant="h3" style={styles.sectionTitle}>⭐ Why Choose Hustl?</Typography>
          
          <View style={styles.featuresGrid}>
            <ModernCard style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <View style={[styles.iconCircle, { backgroundColor: '#4F46E5' }]}>
                  <Typography variant="h3" color="#FFFFFF">🔒</Typography>
                </View>
              </View>
              <Typography variant="h4" style={styles.featureTitle}>Safe & Secure</Typography>
              <Typography variant="body2" color="#6B7280" style={styles.featureDescription}>
                Verified students with secure payment and safety features
              </Typography>
            </ModernCard>

            <ModernCard style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <View style={[styles.iconCircle, { backgroundColor: '#F97316' }]}>
                  <Typography variant="h3" color="#FFFFFF">👥</Typography>
                </View>
              </View>
              <Typography variant="h4" style={styles.featureTitle}>Campus Community</Typography>
              <Typography variant="body2" color="#6B7280" style={styles.featureDescription}>
                Connect with fellow students in a trusted campus environment
              </Typography>
            </ModernCard>

            <ModernCard style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <View style={[styles.iconCircle, { backgroundColor: '#10B981' }]}>
                  <Typography variant="h3" color="#FFFFFF">💰</Typography>
                </View>
              </View>
              <Typography variant="h4" style={styles.featureTitle}>Flexible Earnings</Typography>
              <Typography variant="body2" color="#6B7280" style={styles.featureDescription}>
                Set your own rates and work when it fits your schedule
              </Typography>
            </ModernCard>
          </View>
        </View>

        {/* Final CTA */}
        <View style={styles.finalCTA}>
          <Typography variant="h3" style={styles.finalCTATitle}>Ready to Get Started?</Typography>
          <Typography variant="body2" color="#6B7280" style={styles.finalCTADescription}>
            Join thousands of UF students already using Hustl to connect and help each other succeed
          </Typography>
          <View style={styles.finalCTAButtons}>
            <AnimatedButton
              title="Start Using Hustl"
              onPress={() => {}}
              variant="primary"
              size="lg"
              style={styles.finalCTAButton}
            />
            <AnimatedButton
              title="Contact Support"
              onPress={() => {}}
              variant="outline"
              size="lg"
              style={styles.finalCTAButton}
            />
          </View>
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
  content: {
    flex: 1,
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    marginBottom: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '700',
  },
  sectionSubtitle: {
    textAlign: 'center',
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
    height: 200,
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
    marginBottom: 8,
  },
  taskMeta: {
    alignItems: 'center',
  },
  howItWorksSection: {
    padding: 20,
    backgroundColor: '#F8FAFC',
  },
  stepsContainer: {
    marginTop: 24,
    gap: 20,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    marginBottom: 4,
    fontWeight: '600',
  },
  testimonialsSection: {
    padding: 20,
  },
  testimonialsList: {
    marginTop: 20,
    gap: 16,
  },
  testimonialCard: {
    padding: 20,
  },
  testimonialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  testimonialAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  testimonialInfo: {
    flex: 1,
  },
  rating: {
    flexDirection: 'row',
    gap: 2,
    marginTop: 4,
  },
  testimonialText: {
    lineHeight: 20,
    fontStyle: 'italic',
  },
  whyChooseSection: {
    padding: 20,
    backgroundColor: '#F8FAFC',
  },
  featuresGrid: {
    marginTop: 20,
    gap: 16,
  },
  featureCard: {
    padding: 24,
    alignItems: 'center',
  },
  featureIcon: {
    marginBottom: 16,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureTitle: {
    marginBottom: 8,
    fontWeight: '600',
    textAlign: 'center',
  },
  featureDescription: {
    textAlign: 'center',
    lineHeight: 20,
  },
  finalCTA: {
    padding: 20,
    alignItems: 'center',
  },
  finalCTATitle: {
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '700',
  },
  finalCTADescription: {
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  finalCTAButtons: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  finalCTAButton: {
    minWidth: 140,
  },
});