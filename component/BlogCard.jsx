import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BlogCard = ({ title, author, date, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.cardContent}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.authorContent}>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100/2,
    marginLeft: 10, // Pour décaler l'image vers la droite
  },
  cardContent: {
    flexDirection: 'row',
    marginTop: 5, // Ajoutez un espace entre l'auteur et la date
  },
  authorContent: {
    marginLeft: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FDDA5A',
    marginBottom: 5, // Pour séparer le titre de l'image
  },
  author: {
    fontSize: 12,
    color: '#000000a6',
  },
  date: {
    fontSize: 10,
    color: '#0000005b',
  },
});

export default BlogCard;
