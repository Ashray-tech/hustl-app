import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput, StatusBar, Alert, Image } from 'react-native';
import { Bell, User as UserIcon, MapPin, DollarSign, Clock, Camera, Coffee, Dumbbell, Car, FileText, Heart, ShoppingBag } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { HustlLogo } from '@/components/HustlLogo';
import { Typography } from '@/components/ui/Typography';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { ModernCard } from '@/components/ui/ModernCard';
import { Input } from '@/components/ui/Input';

export default function PostScreen() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    location: '',
    budget: '',
    timeEstimate: '',
  });

  const categories = [
    { 
      id: 'coffee', 
      name: 'Coffee Run', 
      icon: <Coffee size={20} color="#FFFFFF" />, 
      gradient: ['#F97316', '#EA580C'],
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    { 
      id: 'workout', 
      name: 'Workout Partner', 
      icon: <Dumbbell size={20} color="#FFFFFF" />, 
      gradient: ['#3B82F6', '#2563EB'],
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    { 
      id: 'rides', 
      name: 'Campus Rides', 
      icon: <Car size={20} color="#FFFFFF" />, 
      gradient: ['#10B981', '#059669'],
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    { 
      id: 'printing', 
      name: 'Printing', 
      icon: <FileText size={20} color="#FFFFFF" />, 
      gradient: ['#8B5CF6', '#7C3AED'],
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    { 
      id: 'petcare', 
      name: 'Pet Care', 
      icon: <Heart size={20} color="#FFFFFF" />, 
      gradient: ['#EF4444', '#DC2626'],
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    { 
      id: 'shopping', 
      name: 'Shopping', 
      icon: <ShoppingBag size={20} color="#FFFFFF" />, 
      gradient: ['#F59E0B', '#D97706'],
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
  ];

  const handleSubmit = () => {
    if (!formData.title || !formData.category || !formData.description) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    
    Alert.alert('Success', 'Task posted successfully!', [
      { text: 'OK', onPress: () => {
        setFormData({
          title: '',
          category: '',
          description: '',
          location: '',
          budget: '',
          timeEstimate: '',
        });
      }}
    ]);
  };

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
          Post a Task
        </Typography>
        <Typography variant="body2" color="rgba(255,255,255,0.8)" style={styles.headerSubtitle}>
          Get help from fellow students around campus
        </Typography>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Task Title */}
        <View style={styles.section}>
          <Input
            label="What do you need help with? *"
            placeholder="e.g., Starbucks coffee run to Reitz Union"
            value={formData.title}
            onChangeText={(value) => setFormData(prev => ({ ...prev, title: value }))}
          />
        </View>

        {/* Category Selection */}
        <View style={styles.section}>
          <Typography variant="h4" style={styles.sectionTitle}>Choose Category *</Typography>
          <View style={styles.categoryGrid}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard,
                  formData.category === category.id && styles.categoryCardSelected
                ]}
                onPress={() => setFormData(prev => ({ ...prev, category: category.id }))}
              >
                <View style={styles.categoryCardContent}>
                  <Image 
                    source={{ uri: category.image }} 
                    style={styles.categoryImage}
                    accessibilityLabel={`${category.name} category image`}
                  />
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.7)']}
                    style={styles.categoryOverlay}
                  >
                    <View style={styles.categoryInfo}>
                      <View style={styles.categoryIcon}>
                        {category.icon}
                      </View>
                      <Typography variant="body2" color="#FFFFFF" style={styles.categoryText}>
                        {category.name}
                      </Typography>
                    </View>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Input
            label="Task Details *"
            placeholder="Provide specific details and instructions..."
            value={formData.description}
            onChangeText={(value) => setFormData(prev => ({ ...prev, description: value }))}
            multiline
            numberOfLines={4}
            style={styles.textArea}
          />
        </View>

        {/* Location */}
        <View style={styles.section}>
          <Input
            label="Location"
            placeholder="e.g., Turlington Plaza, Reitz Union"
            value={formData.location}
            onChangeText={(value) => setFormData(prev => ({ ...prev, location: value }))}
            icon={<MapPin size={20} color="#9CA3AF" />}
          />
        </View>

        {/* Budget and Time */}
        <View style={styles.row}>
          <View style={styles.halfWidth}>
            <Input
              label="Budget ($)"
              placeholder="15"
              value={formData.budget}
              onChangeText={(value) => setFormData(prev => ({ ...prev, budget: value }))}
              keyboardType="numeric"
              icon={<DollarSign size={20} color="#9CA3AF" />}
              containerStyle={styles.halfInput}
            />
          </View>
          <View style={styles.halfWidth}>
            <Input
              label="Time Estimate"
              placeholder="30 min"
              value={formData.timeEstimate}
              onChangeText={(value) => setFormData(prev => ({ ...prev, timeEstimate: value }))}
              icon={<Clock size={20} color="#9CA3AF" />}
              containerStyle={styles.halfInput}
            />
          </View>
        </View>

        {/* Add Photo */}
        <View style={styles.section}>
          <ModernCard style={styles.photoCard}>
            <TouchableOpacity style={styles.photoButton}>
              <Camera size={24} color="#9CA3AF" />
              <Typography variant="h4" color="#9CA3AF" style={styles.photoButtonText}>
                Add Photo (Optional)
              </Typography>
            </TouchableOpacity>
          </ModernCard>
        </View>

        {/* Submit Button */}
        <View style={styles.submitSection}>
          <AnimatedButton
            title="Post Task"
            onPress={handleSubmit}
            variant="primary"
            size="lg"
            style={styles.submitButton}
          />
          
          <Typography variant="body2" color="#6B7280" style={styles.termsText}>
            By posting a task, you agree to our Terms of Service. Payment will be held securely until completion.
          </Typography>
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
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '47%',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryCardSelected: {
    transform: [{ scale: 1.02 }],
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  categoryCardContent: {
    position: 'relative',
    height: 100,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    justifyContent: 'flex-end',
  },
  categoryInfo: {
    padding: 12,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  categoryText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 16,
  },
  halfWidth: {
    flex: 1,
  },
  halfInput: {
    marginBottom: 0,
  },
  photoCard: {
    backgroundColor: '#FFFFFF',
    padding: 0,
  },
  photoButton: {
    padding: 32,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
    borderRadius: 12,
    gap: 12,
  },
  photoButtonText: {
    fontWeight: '500',
  },
  submitSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    gap: 16,
  },
  submitButton: {
    width: '100%',
  },
  termsText: {
    textAlign: 'center',
    lineHeight: 20,
  },
});