import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Alert, Animated, Image, FlatList, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Coffee, Printer, Heart, ShoppingBag, MapPin, DollarSign, Clock, Camera, Star, UtensilsCrossed, Car, Dumbbell, X, ChevronDown } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { HustlLogo } from '@/components/HustlLogo';
import { ModernCard } from '@/components/ui/ModernCard';
import { Input } from '@/components/ui/Input';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Badge } from '@/components/ui/Badge';
import { Typography } from '@/components/ui/Typography';

export default function PostTaskScreen() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    location: '',
    budget: '',
    timeEstimate: '',
    urgency: 'normal',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showContactModal, setShowContactModal] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const categories = [
    { 
      id: 'coffee', 
      name: 'Coffee Run', 
      icon: <Coffee size={24} color="#FFFFFF" />, 
      gradient: ['#EA580C', '#DC2626']
    },
    { 
      id: 'food', 
      name: 'Food Pickup', 
      icon: <UtensilsCrossed size={24} color="#FFFFFF" />, 
      gradient: ['#1E40AF', '#1E3A8A']
    },
    { 
      id: 'printing', 
      name: 'Printing', 
      icon: <Printer size={24} color="#FFFFFF" />, 
      gradient: ['#EA580C', '#DC2626']
    },
    { 
      id: 'petcare', 
      name: 'Pet Care', 
      icon: <Heart size={24} color="#FFFFFF" />, 
      gradient: ['#1E40AF', '#1E3A8A']
    },
    { 
      id: 'rides', 
      name: 'Campus Rides', 
      icon: <Car size={24} color="#FFFFFF" />, 
      gradient: ['#EA580C', '#DC2626']
    },
    { 
      id: 'workout', 
      name: 'Workout Buddy', 
      icon: <Dumbbell size={24} color="#FFFFFF" />, 
      gradient: ['#1E40AF', '#1E3A8A']
    },
  ];

  const categoryTasks = [
    {
      id: 1,
      title: 'Starbucks Coffee Run',
      description: 'Need a venti iced coffee with oat milk from Starbucks at Reitz Union.',
      category: 'Coffee',
      price: 12,
      time: '15 min',
      location: 'Reitz Union',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
      urgent: true,
      distance: '0.2 mi',
      poster: {
        name: 'Sarah M.',
        rating: 4.9,
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
      }
    },
    {
      id: 2,
      title: 'Print Assignment',
      description: 'Print 20 pages double-sided and deliver to Turlington Plaza.',
      category: 'Printing',
      price: 8,
      time: '20 min',
      location: 'Library West',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400',
      urgent: false,
      distance: '0.5 mi',
      poster: {
        name: 'Mike R.',
        rating: 5.0,
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
      }
    },
    {
      id: 3,
      title: 'Chipotle Bowl Pickup',
      description: 'Pick up my usual bowl from Chipotle at Student Union and deliver to Broward Hall.',
      category: 'Food',
      price: 10,
      time: '25 min',
      location: 'Student Union',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      urgent: false,
      distance: '0.3 mi',
      poster: {
        name: 'Emma K.',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100'
      }
    }
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.title.trim()) newErrors.title = 'Task title is required';
    if (!formData.category) newErrors.category = 'Please select a category';
    if (!formData.description.trim()) newErrors.description = 'Task description is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.budget.trim()) newErrors.budget = 'Budget is required';
    if (!formData.timeEstimate.trim()) newErrors.timeEstimate = 'Time estimate is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert(
        'Task Posted Successfully! 🎉',
        'Your task is now live. Students nearby will be notified.',
        [{ text: 'Great!', onPress: () => {
          setFormData({
            title: '',
            category: '',
            description: '',
            location: '',
            budget: '',
            timeEstimate: '',
            urgency: 'normal',
          });
        }}]
      );
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <LinearGradient
        colors={['#1E40AF', '#1E3A8A']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Animated.View style={[styles.headerContent, { opacity: fadeAnim }]}>
          <View style={styles.headerTop}>
            <HustlLogo size={32} />
            <Typography variant="h2" color="#ffffff">Post Task</Typography>
            <TouchableOpacity onPress={() => setShowContactModal(true)} style={styles.contactButton}>
              <Typography variant="body2" color="#FFFFFF">Contact Us</Typography>
            </TouchableOpacity>
          </View>

          <Typography variant="body2" color="rgba(255,255,255,0.8)" style={styles.headerSubtitle}>
            Get help from fellow students • Avg response: 8min
          </Typography>
        </Animated.View>
      </LinearGradient>

      <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
        {/* Task Title */}
        <Animated.View style={[styles.inputSection, { opacity: fadeAnim }]}>
          <Input
            label="What do you need help with?"
            placeholder="e.g., Starbucks coffee run to Reitz Union"
            value={formData.title}
            onChangeText={(value) => updateFormData('title', value)}
            error={errors.title}
          />
        </Animated.View>

        {/* Category Selection */}
        <Animated.View style={[styles.inputGroup, { opacity: fadeAnim }]}>
          <Typography variant="h4" style={styles.inputLabel}>Category</Typography>
          <View style={styles.categoryGrid}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard,
                  formData.category === category.id && styles.categoryCardSelected
                ]}
                onPress={() => updateFormData('category', category.id)}
              >
                <LinearGradient
                  colors={category.gradient}
                  style={styles.categoryCardInner}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <View style={styles.categoryIcon}>{category.icon}</View>
                  <Typography variant="h4" color="#FFFFFF" style={styles.categoryTitle}>
                    {category.name}
                  </Typography>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
          {errors.category && <Typography variant="caption" color="#EF4444">{errors.category}</Typography>}
        </Animated.View>

        {/* Popular Tasks */}
        <Animated.View style={[styles.categoryTasksSection, { opacity: fadeAnim }]}>
          <View style={styles.sectionHeader}>
            <Typography variant="h3">Popular Tasks</Typography>
            <Badge variant="secondary" size="sm">
              <Typography variant="caption" color="#FFFFFF">Live</Typography>
            </Badge>
          </View>
          
          <FlatList
            data={categoryTasks}
            renderItem={({ item }) => <CategoryTaskCard task={item} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryTasksList}
          />
        </Animated.View>

        {/* Description */}
        <Animated.View style={[styles.inputSection, { opacity: fadeAnim }]}>
          <Input
            label="Task Details"
            placeholder="Provide specific details and instructions..."
            value={formData.description}
            onChangeText={(value) => updateFormData('description', value)}
            error={errors.description}
            multiline
            numberOfLines={4}
            style={styles.textArea}
          />
        </Animated.View>

        {/* Location */}
        <Animated.View style={[styles.inputSection, { opacity: fadeAnim }]}>
          <Input
            label="Location"
            placeholder="e.g., Turlington Plaza, Reitz Union"
            value={formData.location}
            onChangeText={(value) => updateFormData('location', value)}
            error={errors.location}
            icon={<MapPin size={20} color="#6B7280" />}
          />
        </Animated.View>

        {/* Budget and Time */}
        <Animated.View style={[styles.row, { opacity: fadeAnim }]}>
          <View style={styles.halfWidth}>
            <Input
              label="Budget ($)"
              placeholder="15"
              value={formData.budget}
              onChangeText={(value) => updateFormData('budget', value)}
              error={errors.budget}
              keyboardType="numeric"
              icon={<DollarSign size={20} color="#6B7280" />}
              containerStyle={styles.halfInput}
            />
          </View>

          <View style={styles.halfWidth}>
            <Input
              label="Time Estimate"
              placeholder="30 min"
              value={formData.timeEstimate}
              onChangeText={(value) => updateFormData('timeEstimate', value)}
              error={errors.timeEstimate}
              icon={<Clock size={20} color="#6B7280" />}
              containerStyle={styles.halfInput}
            />
          </View>
        </Animated.View>

        {/* Add Photo */}
        <Animated.View style={[styles.photoSection, { opacity: fadeAnim }]}>
          <ModernCard style={styles.photoCard}>
            <TouchableOpacity style={styles.photoButton}>
              <Camera size={24} color="#6B7280" />
              <Typography variant="h4" color="#6B7280" style={styles.photoButtonText}>
                Add Photo (Optional)
              </Typography>
            </TouchableOpacity>
          </ModernCard>
        </Animated.View>

        {/* Submit Button */}
        <Animated.View style={[styles.submitSection, { opacity: fadeAnim }]}>
          <AnimatedButton
            title="Post Task"
            onPress={handleSubmit}
            variant="primary"
            size="lg"
            gradient
            style={styles.submitButton}
          />

          <Typography variant="body2" color="#6B7280" style={styles.termsText}>
            By posting a task, you agree to our Terms of Service. 
            Payment will be held securely until completion.
          </Typography>
        </Animated.View>
      </ScrollView>

      {/* Contact Modal */}
      <Modal
        visible={showContactModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowContactModal(false)}
      >
        <ContactModal onClose={() => setShowContactModal(false)} />
      </Modal>
    </View>
  );
}

function CategoryTaskCard({ task }: { task: any }) {
  return (
    <ModernCard style={styles.categoryTaskCard} onPress={() => {}}>
      <View style={styles.taskHeader}>
        {task.urgent && (
          <Badge variant="secondary" size="sm">
            <Typography variant="caption" color="#FFFFFF">Urgent</Typography>
          </Badge>
        )}
        
        <View style={styles.categoryBadge}>
          {task.category === 'Coffee' && <Coffee size={14} color="#EA580C" />}
          {task.category === 'Printing' && <Printer size={14} color="#1E40AF" />}
          {task.category === 'Food' && <UtensilsCrossed size={14} color="#1E40AF" />}
          <Typography variant="caption" color="#6B7280" style={styles.categoryText}>
            {task.category}
          </Typography>
        </View>
        
        <Typography variant="h3" color="#1E40AF">${task.price}</Typography>
      </View>
      
      <Image source={{ uri: task.image }} style={styles.taskImage} />
      
      <View style={styles.taskContent}>
        <Typography variant="h4" style={styles.taskTitle}>{task.title}</Typography>
        <Typography variant="body2" numberOfLines={2} style={styles.taskDescription}>
          {task.description}
        </Typography>
        
        <View style={styles.taskMeta}>
          <View style={styles.metaItem}>
            <MapPin size={14} color="#6B7280" />
            <Typography variant="body2" color="#6B7280">{task.location}</Typography>
            <Typography variant="body2" color="#1E40AF">• {task.distance}</Typography>
          </View>
          <View style={styles.metaItem}>
            <Clock size={14} color="#6B7280" />
            <Typography variant="body2" color="#6B7280">{task.time}</Typography>
          </View>
        </View>
        
        <View style={styles.posterSection}>
          <Image source={{ uri: task.poster.image }} style={styles.posterImage} />
          <View style={styles.posterInfo}>
            <Typography variant="body2">{task.poster.name}</Typography>
            <View style={styles.posterRating}>
              <Star size={12} color="#EA580C" fill="#EA580C" />
              <Typography variant="caption" color="#6B7280">{task.poster.rating}</Typography>
            </View>
          </View>
          
          <AnimatedButton
            title="Accept"
            onPress={() => {}}
            variant="primary"
            size="sm"
            gradient
            style={styles.acceptButton}
          />
        </View>
      </View>
    </ModernCard>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const [selectedForm, setSelectedForm] = useState('general');

  return (
    <View style={styles.modalContainer}>
      <LinearGradient
        colors={['#1E40AF', '#1E3A8A']}
        style={styles.modalHeader}
      >
        <View style={styles.modalHeaderContent}>
          <Typography variant="h3" color="#FFFFFF">Contact Us</Typography>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <X size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      
      <ScrollView style={styles.modalContent}>
        <View style={styles.contactSection}>
          <Typography variant="h4" style={styles.contactLabel}>What can we help you with?</Typography>
          
          <View style={styles.formTypeSelector}>
            <TouchableOpacity
              style={[
                styles.formTypeButton,
                selectedForm === 'general' && styles.formTypeButtonActive
              ]}
              onPress={() => setSelectedForm('general')}
            >
              <Typography 
                variant="body2" 
                color={selectedForm === 'general' ? "#FFFFFF" : "#6B7280"}
              >
                General Inquiry
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.formTypeButton,
                selectedForm === 'support' && styles.formTypeButtonActive
              ]}
              onPress={() => setSelectedForm('support')}
            >
              <Typography 
                variant="body2" 
                color={selectedForm === 'support' ? "#FFFFFF" : "#6B7280"}
              >
                Technical Support
              </Typography>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contactForm}>
          <Input
            label="Name"
            placeholder="Your full name"
            containerStyle={styles.formInput}
          />
          
          <Input
            label="Email"
            placeholder="your.email@ufl.edu"
            keyboardType="email-address"
            containerStyle={styles.formInput}
          />
          
          <Input
            label="Subject"
            placeholder="Brief description of your inquiry"
            containerStyle={styles.formInput}
          />
          
          <Input
            label="Message"
            placeholder="Please provide details about your inquiry..."
            multiline
            numberOfLines={6}
            style={styles.messageArea}
            containerStyle={styles.formInput}
          />
        </View>

        <View style={styles.contactInfo}>
          <Typography variant="h4" style={styles.contactInfoTitle}>Other Ways to Reach Us</Typography>
          
          <View style={styles.contactMethods}>
            <View style={styles.contactMethod}>
              <Typography variant="body2" style={styles.contactMethodLabel}>Email Support</Typography>
              <Typography variant="body2" color="#1E40AF">support@hustl.app</Typography>
            </View>
            
            <View style={styles.contactMethod}>
              <Typography variant="body2" style={styles.contactMethodLabel}>Response Time</Typography>
              <Typography variant="body2" color="#6B7280">Usually within 24 hours</Typography>
            </View>
          </View>
        </View>

        <View style={styles.modalActions}>
          <AnimatedButton
            title="Send Message"
            onPress={() => {
              Alert.alert('Message Sent!', 'We\'ll get back to you within 24 hours.');
              onClose();
            }}
            variant="primary"
            size="lg"
            gradient
            style={styles.sendButton}
          />
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
    paddingTop: 60,
    paddingBottom: 32,
    paddingHorizontal: 24,
  },
  headerContent: {
    flex: 1,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  contactButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerSubtitle: {
    textAlign: 'center',
  },
  form: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  inputSection: {
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 32,
  },
  inputLabel: {
    marginBottom: 16,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  categoryCard: {
    width: '48%',
  },
  categoryCardSelected: {
    transform: [{ scale: 1.02 }],
  },
  categoryCardInner: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 16,
  },
  categoryIcon: {
    marginBottom: 12,
  },
  categoryTitle: {
    textAlign: 'center',
    fontSize: 16,
  },
  categoryTasksSection: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryTasksList: {
    paddingRight: 24,
  },
  categoryTaskCard: {
    marginRight: 16,
    width: 280,
    padding: 0,
    overflow: 'hidden',
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  categoryText: {
    fontFamily: 'Inter-SemiBold',
  },
  taskImage: {
    width: '100%',
    height: 160,
  },
  taskContent: {
    padding: 20,
  },
  taskTitle: {
    marginBottom: 8,
  },
  taskDescription: {
    marginBottom: 16,
    lineHeight: 20,
    color: '#6B7280',
  },
  taskMeta: {
    gap: 12,
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  posterSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  posterImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  posterInfo: {
    flex: 1,
  },
  posterRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  acceptButton: {
    paddingHorizontal: 20,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  halfWidth: {
    flex: 1,
  },
  halfInput: {
    marginBottom: 0,
  },
  photoSection: {
    marginBottom: 32,
  },
  photoCard: {
    padding: 0,
    backgroundColor: '#F9FAFB',
  },
  photoButton: {
    padding: 32,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
    borderRadius: 20,
  },
  photoButtonText: {
    marginTop: 12,
  },
  submitSection: {
    marginBottom: 40,
  },
  submitButton: {
    marginBottom: 24,
  },
  termsText: {
    textAlign: 'center',
    lineHeight: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalHeader: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 24,
  },
  modalHeaderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    padding: 8,
  },
  modalContent: {
    flex: 1,
  },
  contactSection: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  contactLabel: {
    marginBottom: 16,
  },
  formTypeSelector: {
    flexDirection: 'row',
    gap: 12,
  },
  formTypeButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },
  formTypeButtonActive: {
    backgroundColor: '#1E40AF',
  },
  contactForm: {
    paddingHorizontal: 24,
  },
  formInput: {
    marginBottom: 20,
  },
  messageArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  contactInfo: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: '#F9FAFB',
    marginTop: 20,
  },
  contactInfoTitle: {
    marginBottom: 16,
  },
  contactMethods: {
    gap: 12,
  },
  contactMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  contactMethodLabel: {
    fontFamily: 'Inter-SemiBold',
  },
  modalActions: {
    padding: 24,
  },
  sendButton: {
    width: '100%',
  },
});