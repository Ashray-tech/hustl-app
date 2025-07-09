import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList, Animated, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Search, Filter, MapPin, Clock, Star, Coffee, Printer, Heart, ShoppingBag, X, Phone } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { HustlLogo } from '@/components/HustlLogo';
import { ModernCard } from '@/components/ui/ModernCard';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Typography } from '@/components/ui/Typography';

export default function BrowseScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showRequestModal, setShowRequestModal] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const categories = [
    { id: 'All', name: 'All Tasks', icon: null, count: 24 },
    { id: 'Coffee', name: 'Coffee', icon: <Coffee size={16} color="#EA580C" />, count: 8 },
    { id: 'Printing', name: 'Print', icon: <Printer size={16} color="#1E40AF" />, count: 5 },
    { id: 'Pet Care', name: 'Pets', icon: <Heart size={16} color="#EA580C" />, count: 3 },
    { id: 'Shopping', name: 'Shop', icon: <ShoppingBag size={16} color="#1E40AF" />, count: 6 },
  ];

  const tasks = [
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
      description: 'Pick up my usual bowl from Chipotle and deliver to my dorm.',
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

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || task.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <Typography variant="h2" color="#ffffff">Browse Tasks</Typography>
            <TouchableOpacity style={styles.filterButton}>
              <Filter size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>

          <View style={styles.liveStats}>
            <Typography variant="body2" color="rgba(255,255,255,0.8)">
              {filteredTasks.length} active tasks • Avg 8min response
            </Typography>
          </View>
        </Animated.View>
      </LinearGradient>

      {/* Search */}
      <View style={styles.searchSection}>
        <Input
          placeholder="Search tasks or locations..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          icon={<Search size={20} color="#6B7280" />}
          containerStyle={styles.searchContainer}
        />
      </View>

      {/* Categories */}
      <View style={styles.categoriesSection}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryChip,
                selectedCategory === category.id && styles.categoryChipActive
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              {category.icon}
              <Typography 
                variant="body2" 
                color={selectedCategory === category.id ? "#ffffff" : "#374151"}
                style={styles.categoryText}
              >
                {category.name}
              </Typography>
              <Badge 
                variant={selectedCategory === category.id ? "default" : "default"} 
                size="sm"
                style={[styles.categoryBadge, selectedCategory === category.id && { backgroundColor: 'rgba(255,255,255,0.2)' }]}
              >
                <Typography variant="caption" color={selectedCategory === category.id ? "#ffffff" : "#374151"}>
                  {category.count}
                </Typography>
              </Badge>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Tasks Header */}
      <View style={styles.tasksHeader}>
        <Typography variant="h4">{filteredTasks.length} tasks available</Typography>
        <TouchableOpacity>
          <Typography variant="body2" color="#1E40AF">Nearest first</Typography>
        </TouchableOpacity>
      </View>

      {/* Tasks List */}
      <FlatList
        data={filteredTasks}
        renderItem={({ item }) => <TaskCard task={item} onRequestTask={() => setShowRequestModal(true)} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.tasksList}
        showsVerticalScrollIndicator={false}
      />

      {/* Request Task Modal */}
      <Modal
        visible={showRequestModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowRequestModal(false)}
      >
        <RequestTaskModal onClose={() => setShowRequestModal(false)} />
      </Modal>
    </View>
  );
}

function TaskCard({ task, onRequestTask }: { task: any; onRequestTask: () => void }) {
  return (
    <ModernCard style={styles.taskCard} onPress={() => {}}>
      <View style={styles.taskHeader}>
        {task.urgent && (
          <Badge variant="secondary" size="sm">
            <Typography variant="caption" color="#FFFFFF">Urgent</Typography>
          </Badge>
        )}
        
        <View style={styles.categoryBadge}>
          {task.category === 'Coffee' && <Coffee size={14} color="#EA580C" />}
          {task.category === 'Printing' && <Printer size={14} color="#1E40AF" />}
          {task.category === 'Food' && <ShoppingBag size={14} color="#1E40AF" />}
          <Typography variant="caption" style={styles.categoryText}>{task.category}</Typography>
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
            onPress={onRequestTask}
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

function RequestTaskModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    currentLocation: 'Vadodara, Gujarat, India',
    destination: 'Reitz Student Union, Gainesville, FL 32603',
    departureTime: '2:25 AM',
    urgency: 'Medium',
    specialRequirements: ''
  });

  return (
    <View style={styles.modalContainer}>
      <LinearGradient
        colors={['#1E40AF', '#1E3A8A']}
        style={styles.modalHeader}
      >
        <View style={styles.modalHeaderContent}>
          <Typography variant="h3" color="#FFFFFF">Request Task</Typography>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <X size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      
      <ScrollView style={styles.modalContent}>
        <View style={styles.formSection}>
          <Typography variant="h4" style={styles.formLabel}>Current Location (Optional)</Typography>
          <View style={styles.locationInput}>
            <MapPin size={20} color="#1E40AF" />
            <Typography variant="body2" color="#374151" style={styles.locationText}>
              {formData.currentLocation}
            </Typography>
            <TouchableOpacity>
              <Typography variant="body2" color="#1E40AF">Refresh</Typography>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formSection}>
          <Typography variant="h4" style={styles.formLabel}>Destination (Required)</Typography>
          <View style={styles.locationInput}>
            <MapPin size={20} color="#1E40AF" />
            <Typography variant="body2" color="#374151" style={styles.locationText}>
              {formData.destination}
            </Typography>
          </View>
        </View>

        <View style={styles.formSection}>
          <Typography variant="h4" style={styles.formLabel}>Preferred Departure Time (Required)</Typography>
          <View style={styles.timeInput}>
            <Clock size={20} color="#1E40AF" />
            <Typography variant="body2" color="#374151" style={styles.timeText}>
              {formData.departureTime}
            </Typography>
          </View>
        </View>

        <View style={styles.formSection}>
          <Typography variant="h4" style={styles.formLabel}>Urgency Level</Typography>
          <View style={styles.urgencyButtons}>
            {['Low', 'Medium', 'High'].map((level) => (
              <TouchableOpacity
                key={level}
                style={[
                  styles.urgencyButton,
                  formData.urgency === level && styles.urgencyButtonActive
                ]}
                onPress={() => setFormData(prev => ({ ...prev, urgency: level }))}
              >
                <Typography 
                  variant="body2" 
                  color={formData.urgency === level ? "#FFFFFF" : "#374151"}
                >
                  {level}
                </Typography>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.formSection}>
          <Typography variant="h4" style={styles.formLabel}>Special Requirements (Optional)</Typography>
          <Input
            placeholder="Any special requirements or notes for the rideshare volunteer..."
            value={formData.specialRequirements}
            onChangeText={(value) => setFormData(prev => ({ ...prev, specialRequirements: value }))}
            multiline
            numberOfLines={4}
            style={styles.textArea}
          />
        </View>

        <View style={styles.importantInfo}>
          <Typography variant="body2" color="#EA580C" style={styles.infoTitle}>
            Important Information
          </Typography>
          <Typography variant="caption" color="#6B7280" style={styles.infoText}>
            • Your identity will remain anonymous throughout the process{'\n'}
            • You will be connected with verified volunteers only{'\n'}
            • For immediate emergencies, call Campus Police at (352) 392-1111{'\n'}
            • Your request will be posted as a high-priority task visible to all users
          </Typography>
        </View>

        <View style={styles.modalActions}>
          <AnimatedButton
            title="Submit Request"
            onPress={() => {
              // Handle submit
              onClose();
            }}
            variant="primary"
            size="lg"
            gradient
            style={styles.submitButton}
          />
          <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
            <Typography variant="body2" color="#6B7280">Cancel</Typography>
          </TouchableOpacity>
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
    gap: 16,
    marginBottom: 16,
  },
  filterButton: {
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
    marginLeft: 'auto',
  },
  liveStats: {
    alignItems: 'center',
  },
  searchSection: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    marginBottom: 0,
  },
  categoriesSection: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  categoriesContent: {
    paddingHorizontal: 24,
    gap: 12,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    gap: 8,
  },
  categoryChipActive: {
    backgroundColor: '#1E40AF',
  },
  categoryBadge: {
    marginLeft: 4,
  },
  categoryText: {
    fontFamily: 'Inter-SemiBold',
  },
  tasksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  tasksList: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  taskCard: {
    marginBottom: 20,
    padding: 0,
    overflow: 'hidden',
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
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
  formSection: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  formLabel: {
    marginBottom: 12,
  },
  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 12,
  },
  locationText: {
    flex: 1,
  },
  timeInput: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 12,
  },
  timeText: {
    flex: 1,
  },
  urgencyButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  urgencyButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },
  urgencyButtonActive: {
    backgroundColor: '#FCD34D',
    borderColor: '#F59E0B',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  importantInfo: {
    margin: 24,
    padding: 16,
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
  },
  infoTitle: {
    fontFamily: 'Inter-SemiBold',
    marginBottom: 8,
  },
  infoText: {
    lineHeight: 18,
  },
  modalActions: {
    padding: 24,
    gap: 16,
  },
  submitButton: {
    width: '100%',
  },
  cancelButton: {
    alignItems: 'center',
    paddingVertical: 12,
  },
});