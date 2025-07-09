import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions, Animated, FlatList, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Coffee, UtensilsCrossed, FileText, Heart, Car, Dumbbell, Search, MapPin, Star, Clock, TrendingUp, X, Phone, Shield, Users, Award } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { HustlLogo } from '@/components/HustlLogo';
import { ModernCard } from '@/components/ui/ModernCard';
import { Input } from '@/components/ui/Input';
import { Typography } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';
import { AnimatedButton } from '@/components/ui/AnimatedButton';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showSafetyModal, setSafetyModal] = useState(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const services = [
    {
      id: 'coffee',
      title: 'Coffee Runs',
      description: 'Get your favorite coffee delivered from campus cafes',
      emoji: '☕️',
      icon: <Coffee size={32} color="#FFFFFF" />,
      gradient: ['#1E40AF', '#1E3A8A'],
      count: 12,
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'food',
      title: 'Food Delivery',
      description: 'Quick food pickup and delivery around campus',
      emoji: '🍔',
      icon: <UtensilsCrossed size={32} color="#FFFFFF" />,
      gradient: ['#EA580C', '#DC2626'],
      count: 8,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'print',
      title: 'Print & Study',
      description: 'Printing services and study material delivery',
      emoji: '📄',
      icon: <FileText size={32} color="#FFFFFF" />,
      gradient: ['#1E40AF', '#1E3A8A'],
      count: 15,
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'pets',
      title: 'Pet Care',
      description: 'Pet sitting and walking services',
      emoji: '🐶',
      icon: <Heart size={32} color="#FFFFFF" />,
      gradient: ['#EA580C', '#DC2626'],
      count: 6,
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'rides',
      title: 'Campus Rides',
      description: 'Safe transportation around campus',
      emoji: '🚗',
      icon: <Car size={32} color="#FFFFFF" />,
      gradient: ['#1E40AF', '#1E3A8A'],
      count: 4,
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'workout',
      title: 'Fitness Buddy',
      description: 'Find workout partners and fitness support',
      emoji: '💪',
      icon: <Dumbbell size={32} color="#FFFFFF" />,
      gradient: ['#EA580C', '#DC2626'],
      count: 9,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const featuredTasks = [
    {
      id: 1,
      title: 'Starbucks Venti Iced Coffee',
      location: 'Reitz Union',
      price: 12,
      time: '15 min',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Coffee',
      urgent: true,
      poster: {
        name: 'Sarah M.',
        rating: 4.9,
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
      }
    },
    {
      id: 2,
      title: 'Chipotle Bowl Pickup',
      location: 'Student Union',
      price: 8,
      time: '20 min',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Food',
      urgent: false,
      poster: {
        name: 'Mike R.',
        rating: 5.0,
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
      }
    },
    {
      id: 3,
      title: 'Print 50 Pages Double-Sided',
      location: 'Library West',
      price: 10,
      time: '25 min',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Print',
      urgent: false,
      poster: {
        name: 'Emma K.',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100'
      }
    }
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Hero Header */}
      <LinearGradient
        colors={['#1E40AF', '#1E3A8A']}
        style={styles.heroHeader}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Animated.View style={[styles.heroContent, { opacity: fadeAnim }]}>
          <View style={styles.headerTop}>
            <HustlLogo size={40} />
            <View style={styles.headerActions}>
              <TouchableOpacity onPress={() => setShowAboutModal(true)} style={styles.headerButton}>
                <Typography variant="body2" color="#FFFFFF">About</Typography>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerButton}>
                <Typography variant="body2" color="#FFFFFF">Sign In</Typography>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.heroText}>
            <Typography variant="h1" color="#FFFFFF" style={styles.heroTitle}>
              Looking help for class?
            </Typography>
            <Typography variant="body1" color="rgba(255,255,255,0.9)" style={styles.heroSubtitle}>
              Connect with fellow students for quick campus errands, study help, and more
            </Typography>
            
            <View style={styles.heroButtons}>
              <AnimatedButton
                title="Post Task"
                onPress={() => {}}
                variant="secondary"
                size="lg"
                style={styles.heroButton}
              />
              <AnimatedButton
                title="Browse Tasks"
                onPress={() => {}}
                variant="outline"
                size="lg"
                style={[styles.heroButton, { borderColor: '#FFFFFF' }]}
                textStyle={{ color: '#FFFFFF' }}
              />
            </View>
          </View>
        </Animated.View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <Animated.View style={[styles.searchSection, { opacity: fadeAnim }]}>
          <Input
            placeholder="What do you need help with?"
            icon={<Search size={20} color="#6B7280" />}
            containerStyle={styles.searchContainer}
          />
        </Animated.View>

        {/* Popular Categories */}
        <Animated.View style={[styles.categoriesSection, { opacity: fadeAnim }]}>
          <Typography variant="h2" style={styles.sectionTitle}>Popular Categories</Typography>
          <View style={styles.categoriesGrid}>
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onPress={() => {}}
              />
            ))}
          </View>
        </Animated.View>

        {/* Need Something Else CTA */}
        <Animated.View style={[styles.ctaSection, { opacity: fadeAnim }]}>
          <LinearGradient
            colors={['#1E40AF', '#1E3A8A']}
            style={styles.ctaCard}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Typography variant="h3" color="#FFFFFF" style={styles.ctaTitle}>
              Need Something Else?
            </Typography>
            <Typography variant="body1" color="rgba(255,255,255,0.9)" style={styles.ctaDescription}>
              Post your custom task and get matched with nearby students
            </Typography>
            <AnimatedButton
              title="Post Custom Task"
              onPress={() => {}}
              variant="secondary"
              size="md"
              style={styles.ctaButton}
            />
          </LinearGradient>
        </Animated.View>

        {/* How Hustl Works */}
        <Animated.View style={[styles.howItWorksSection, { opacity: fadeAnim }]}>
          <Typography variant="h2" style={styles.sectionTitle}>How Hustl Works</Typography>
          <View style={styles.stepsContainer}>
            <StepCard
              icon={<FileText size={32} color="#1E40AF" />}
              title="Post Your Task"
              description="Describe what you need help with and set your budget"
              step="1"
            />
            <StepCard
              icon={<Users size={32} color="#1E40AF" />}
              title="Get Matched"
              description="Connect with verified students who can help"
              step="2"
            />
            <StepCard
              icon={<Star size={32} color="#1E40AF" />}
              title="Complete & Pay"
              description="Task completed safely with secure payment"
              step="3"
            />
          </View>
        </Animated.View>

        {/* Safety Section */}
        <Animated.View style={[styles.safetySection, { opacity: fadeAnim }]}>
          <ModernCard style={styles.safetyCard}>
            <View style={styles.safetyHeader}>
              <Shield size={32} color="#EA580C" />
              <Typography variant="h3" style={styles.safetyTitle}>Your Safety Matters</Typography>
            </View>
            <Typography variant="body1" color="#6B7280" style={styles.safetyDescription}>
              All users are verified students. We provide safety guidelines and 24/7 support.
            </Typography>
            <TouchableOpacity onPress={() => setSafetyModal(true)} style={styles.safetyButton}>
              <Typography variant="body2" color="#1E40AF">Learn More About Safety</Typography>
            </TouchableOpacity>
          </ModernCard>
        </Animated.View>

        {/* Join Community CTA */}
        <Animated.View style={[styles.joinSection, { opacity: fadeAnim }]}>
          <Typography variant="h2" style={styles.sectionTitle}>Join the Hustl Community</Typography>
          <Typography variant="body1" color="#6B7280" style={styles.joinDescription}>
            Connect with thousands of students and start earning or getting help today
          </Typography>
          <View style={styles.joinButtons}>
            <AnimatedButton
              title="Start Using Hustl"
              onPress={() => {}}
              variant="primary"
              size="lg"
              gradient
              style={styles.joinButton}
            />
            <AnimatedButton
              title="Contact Us"
              onPress={() => {}}
              variant="outline"
              size="lg"
              style={styles.joinButton}
            />
          </View>
        </Animated.View>
      </ScrollView>

      {/* About Modal */}
      <Modal
        visible={showAboutModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowAboutModal(false)}
      >
        <AboutModal onClose={() => setShowAboutModal(false)} />
      </Modal>

      {/* Safety Modal */}
      <Modal
        visible={showSafetyModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setSafetyModal(false)}
      >
        <SafetyModal onClose={() => setSafetyModal(false)} />
      </Modal>
    </View>
  );
}

function ServiceCard({ service, index, onPress }: {
  service: any;
  index: number;
  onPress: () => void;
}) {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 600,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, []);

  const animatedStyle = {
    opacity: animatedValue,
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0],
        }),
      },
    ],
  };

  return (
    <Animated.View style={[styles.serviceCardContainer, animatedStyle]}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <ModernCard style={styles.serviceCard}>
          <Image source={{ uri: service.image }} style={styles.serviceImage} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={styles.serviceOverlay}
          >
            <View style={styles.serviceContent}>
              <View style={styles.serviceIcon}>
                {service.icon}
              </View>
              <Typography variant="h4" color="#FFFFFF" style={styles.serviceTitle}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.9)" style={styles.serviceDescription}>
                {service.description}
              </Typography>
              <Badge variant="secondary" size="sm" style={styles.serviceCount}>
                <Typography variant="caption" color="#FFFFFF">{service.count} available</Typography>
              </Badge>
            </View>
          </LinearGradient>
        </ModernCard>
      </TouchableOpacity>
    </Animated.View>
  );
}

function StepCard({ icon, title, description, step }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: string;
}) {
  return (
    <ModernCard style={styles.stepCard}>
      <View style={styles.stepHeader}>
        <View style={styles.stepNumber}>
          <Typography variant="h4" color="#FFFFFF">{step}</Typography>
        </View>
        <View style={styles.stepIcon}>{icon}</View>
      </View>
      <Typography variant="h4" style={styles.stepTitle}>{title}</Typography>
      <Typography variant="body2" color="#6B7280" style={styles.stepDescription}>
        {description}
      </Typography>
    </ModernCard>
  );
}

function AboutModal({ onClose }: { onClose: () => void }) {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalHeader}>
        <Typography variant="h2">About Us</Typography>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <X size={24} color="#6B7280" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.modalContent}>
        <View style={styles.aboutContent}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600' }}
            style={styles.aboutImage}
          />
          
          <Typography variant="h3" style={styles.aboutTitle}>About Us</Typography>
          <Typography variant="body1" color="#6B7280" style={styles.aboutText}>
            Hustl is a platform connecting students for quick campus errands and tasks. 
            From coffee runs to printing services, we make campus life easier for everyone.
          </Typography>

          <View style={styles.founderSection}>
            <Typography variant="h4" style={styles.founderTitle}>Founded by Students for Students</Typography>
            <View style={styles.founders}>
              <View style={styles.founder}>
                <View style={styles.founderAvatar}>
                  <Typography variant="h3" color="#FFFFFF">R</Typography>
                </View>
                <Typography variant="h4">Rashid</Typography>
                <Typography variant="body2" color="#6B7280">Co-Founder & CEO</Typography>
              </View>
              <View style={styles.founder}>
                <View style={[styles.founderAvatar, { backgroundColor: '#EA580C' }]}>
                  <Typography variant="h3" color="#FFFFFF">A</Typography>
                </View>
                <Typography variant="h4">Aryan</Typography>
                <Typography variant="body2" color="#6B7280">Co-Founder & CTO</Typography>
              </View>
            </View>
          </View>

          <View style={styles.missionSection}>
            <Typography variant="h4" style={styles.missionTitle}>Our Mission</Typography>
            <Typography variant="body1" color="#6B7280" style={styles.missionText}>
              We believe in the power of community and connection. Hustl was created to solve everyday 
              challenges that students face on campus by bringing together a trusted network of peers.
            </Typography>
          </View>

          <View style={styles.statsSection}>
            <View style={styles.statItem}>
              <Typography variant="h2" color="#1E40AF">12K+</Typography>
              <Typography variant="body2" color="#6B7280">Active Students</Typography>
            </View>
            <View style={styles.statItem}>
              <Typography variant="h2" color="#EA580C">50K+</Typography>
              <Typography variant="body2" color="#6B7280">Tasks Completed</Typography>
            </View>
            <View style={styles.statItem}>
              <Typography variant="h2" color="#1E40AF">4.9★</Typography>
              <Typography variant="body2" color="#6B7280">Average Rating</Typography>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function SafetyModal({ onClose }: { onClose: () => void }) {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalHeader}>
        <Typography variant="h2">Safety Information</Typography>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <X size={24} color="#6B7280" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.modalContent}>
        <View style={styles.safetyContent}>
          <View style={styles.emergencyContacts}>
            <Typography variant="h3" style={styles.safetySubtitle}>Emergency Contacts</Typography>
            <View style={styles.contactItem}>
              <Phone size={20} color="#1E40AF" />
              <View style={styles.contactInfo}>
                <Typography variant="h4">Campus Police</Typography>
                <Typography variant="body2" color="#1E40AF">(352) 392-1111</Typography>
              </View>
            </View>
            <View style={styles.contactItem}>
              <Phone size={20} color="#1E40AF" />
              <View style={styles.contactInfo}>
                <Typography variant="h4">UFPD Non-Emergency</Typography>
                <Typography variant="body2" color="#1E40AF">(352) 392-1409</Typography>
              </View>
            </View>
            <View style={styles.contactItem}>
              <Phone size={20} color="#1E40AF" />
              <View style={styles.contactInfo}>
                <Typography variant="h4">Student Nighttime Auxiliary Patrol</Typography>
                <Typography variant="body2" color="#1E40AF">(352) 392-SNAP</Typography>
              </View>
            </View>
          </View>

          <View style={styles.safetyTips}>
            <Typography variant="h3" style={styles.safetySubtitle}>Safety Tips</Typography>
            <View style={styles.tipsList}>
              <View style={styles.tipItem}>
                <View style={styles.tipBullet} />
                <Typography variant="body2" color="#6B7280">Always meet in public, well-lit areas on campus</Typography>
              </View>
              <View style={styles.tipItem}>
                <View style={styles.tipBullet} />
                <Typography variant="body2" color="#6B7280">Share your task details and location with a friend</Typography>
              </View>
              <View style={styles.tipItem}>
                <View style={styles.tipBullet} />
                <Typography variant="body2" color="#6B7280">Trust your instincts - if something feels off, report it</Typography>
              </View>
              <View style={styles.tipItem}>
                <View style={styles.tipBullet} />
                <Typography variant="body2" color="#6B7280">Keep your personal information private</Typography>
              </View>
            </View>
          </View>

          <View style={styles.reportSection}>
            <Typography variant="h4" style={styles.reportTitle}>Have Safety Questions?</Typography>
            <Typography variant="body2" color="#6B7280" style={styles.reportText}>
              Our safety team is available 24/7 to assist you
            </Typography>
            <AnimatedButton
              title="Contact Safety Team"
              onPress={() => {}}
              variant="primary"
              size="md"
              style={styles.reportButton}
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
  heroHeader: {
    paddingTop: 60,
    paddingBottom: 60,
    paddingHorizontal: 24,
  },
  heroContent: {
    flex: 1,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 20,
  },
  headerButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  heroText: {
    alignItems: 'center',
  },
  heroTitle: {
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 48,
  },
  heroSubtitle: {
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
    maxWidth: 320,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  heroButton: {
    minWidth: 140,
  },
  content: {
    flex: 1,
  },
  searchSection: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    backgroundColor: '#F8FAFC',
  },
  searchContainer: {
    marginBottom: 0,
  },
  categoriesSection: {
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: 32,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
  },
  serviceCardContainer: {
    width: (width - 80) / 2,
    marginBottom: 16,
  },
  serviceCard: {
    padding: 0,
    height: 200,
    overflow: 'hidden',
  },
  serviceImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  serviceOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    justifyContent: 'flex-end',
  },
  serviceContent: {
    padding: 16,
    alignItems: 'center',
  },
  serviceIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceTitle: {
    textAlign: 'center',
    marginBottom: 4,
    fontSize: 16,
  },
  serviceDescription: {
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 12,
    lineHeight: 16,
  },
  serviceCount: {
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  ctaSection: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    backgroundColor: '#F8FAFC',
  },
  ctaCard: {
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
  },
  ctaTitle: {
    textAlign: 'center',
    marginBottom: 12,
  },
  ctaDescription: {
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  ctaButton: {
    minWidth: 180,
  },
  howItWorksSection: {
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  stepsContainer: {
    gap: 20,
  },
  stepCard: {
    padding: 24,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 16,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1E40AF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  stepTitle: {
    marginBottom: 8,
  },
  stepDescription: {
    lineHeight: 20,
  },
  safetySection: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    backgroundColor: '#F8FAFC',
  },
  safetyCard: {
    padding: 24,
  },
  safetyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  safetyTitle: {
    flex: 1,
  },
  safetyDescription: {
    marginBottom: 16,
    lineHeight: 24,
  },
  safetyButton: {
    alignSelf: 'flex-start',
  },
  joinSection: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    alignItems: 'center',
  },
  joinDescription: {
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
    maxWidth: 320,
  },
  joinButtons: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  joinButton: {
    minWidth: 140,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  closeButton: {
    padding: 8,
  },
  modalContent: {
    flex: 1,
  },
  aboutContent: {
    padding: 24,
  },
  aboutImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 24,
  },
  aboutTitle: {
    marginBottom: 16,
  },
  aboutText: {
    lineHeight: 24,
    marginBottom: 32,
  },
  founderSection: {
    marginBottom: 32,
  },
  founderTitle: {
    marginBottom: 20,
  },
  founders: {
    flexDirection: 'row',
    gap: 32,
    justifyContent: 'center',
  },
  founder: {
    alignItems: 'center',
  },
  founderAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1E40AF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  missionSection: {
    marginBottom: 32,
  },
  missionTitle: {
    marginBottom: 16,
  },
  missionText: {
    lineHeight: 24,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 24,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  statItem: {
    alignItems: 'center',
  },
  safetyContent: {
    padding: 24,
  },
  emergencyContacts: {
    marginBottom: 32,
  },
  safetySubtitle: {
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  contactInfo: {
    flex: 1,
  },
  safetyTips: {
    marginBottom: 32,
  },
  tipsList: {
    gap: 12,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  tipBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#1E40AF',
    marginTop: 8,
  },
  reportSection: {
    alignItems: 'center',
    paddingVertical: 24,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  reportTitle: {
    marginBottom: 8,
  },
  reportText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  reportButton: {
    minWidth: 180,
  },
});