import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlogCard from './BlogCard';

const BlogScreen = ({ navigation }) => {
  const blogs = [
    {
      id: 1,
      title: 'Comment apprendre efficacement ?',
      author: 'Par Abdou SECK',
      date: 'Le 02-03-2022',
      image: 'https://s3-alpha-sig.figma.com/img/7c8f/31ec/bacba68be47de5fdf7eaa17ce488ed11?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WQ7cRpv9X8dITBBq4aDOtaohtndc3QaxRQLEkVtg9fL09lKvBD0Mux2gBUt6261c-yn88GOOpTbj1EFkA-zOXVpoZunRJ5Dyv8h76g3AmJ5InkGSzcFjlP~6d~Z5TPMYiRVTqv7xNtSOLtgDYMFqQ27wM1Cr3C6slDL875anKMgVYKN2cdtWtynEcvnNyrUeOgoVwBUQxz1Bm8tAIYzeFZ0rWyzkqdoUHUbGcFmld4mbGvm0WZZm-0tB2ebOq1dpLugcry~7VUepl3Okl5vWgCP3gPXDMnvddyhPqOrbUGQ4lS~0ZQFPqUaPkKeS16JmOATjDVU5kRRRGd5oj-n0Vw__',
    },
    {
      id: 2,
      title: 'Comment apprendre efficacement ?',
      author: 'Par Abdou SECK',
      date: 'Le 02-03-2022',
      image: 'https://s3-alpha-sig.figma.com/img/7c8f/31ec/bacba68be47de5fdf7eaa17ce488ed11?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WQ7cRpv9X8dITBBq4aDOtaohtndc3QaxRQLEkVtg9fL09lKvBD0Mux2gBUt6261c-yn88GOOpTbj1EFkA-zOXVpoZunRJ5Dyv8h76g3AmJ5InkGSzcFjlP~6d~Z5TPMYiRVTqv7xNtSOLtgDYMFqQ27wM1Cr3C6slDL875anKMgVYKN2cdtWtynEcvnNyrUeOgoVwBUQxz1Bm8tAIYzeFZ0rWyzkqdoUHUbGcFmld4mbGvm0WZZm-0tB2ebOq1dpLugcry~7VUepl3Okl5vWgCP3gPXDMnvddyhPqOrbUGQ4lS~0ZQFPqUaPkKeS16JmOATjDVU5kRRRGd5oj-n0Vw__',
    },
    {
      id: 3,
      title: 'Comment apprendre efficacement ?',
      author: 'Par Abdou SECK',
      date: 'Le 02-03-2022',
      image: 'https://s3-alpha-sig.figma.com/img/7c8f/31ec/bacba68be47de5fdf7eaa17ce488ed11?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WQ7cRpv9X8dITBBq4aDOtaohtndc3QaxRQLEkVtg9fL09lKvBD0Mux2gBUt6261c-yn88GOOpTbj1EFkA-zOXVpoZunRJ5Dyv8h76g3AmJ5InkGSzcFjlP~6d~Z5TPMYiRVTqv7xNtSOLtgDYMFqQ27wM1Cr3C6slDL875anKMgVYKN2cdtWtynEcvnNyrUeOgoVwBUQxz1Bm8tAIYzeFZ0rWyzkqdoUHUbGcFmld4mbGvm0WZZm-0tB2ebOq1dpLugcry~7VUepl3Okl5vWgCP3gPXDMnvddyhPqOrbUGQ4lS~0ZQFPqUaPkKeS16JmOATjDVU5kRRRGd5oj-n0Vw__',
    },
    {
      id: 4,
      title: 'Comment apprendre efficacement ?',
      author: 'Par Abdou SECK',
      date: 'Le 02-03-2022',
      image: 'https://s3-alpha-sig.figma.com/img/7c8f/31ec/bacba68be47de5fdf7eaa17ce488ed11?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WQ7cRpv9X8dITBBq4aDOtaohtndc3QaxRQLEkVtg9fL09lKvBD0Mux2gBUt6261c-yn88GOOpTbj1EFkA-zOXVpoZunRJ5Dyv8h76g3AmJ5InkGSzcFjlP~6d~Z5TPMYiRVTqv7xNtSOLtgDYMFqQ27wM1Cr3C6slDL875anKMgVYKN2cdtWtynEcvnNyrUeOgoVwBUQxz1Bm8tAIYzeFZ0rWyzkqdoUHUbGcFmld4mbGvm0WZZm-0tB2ebOq1dpLugcry~7VUepl3Okl5vWgCP3gPXDMnvddyhPqOrbUGQ4lS~0ZQFPqUaPkKeS16JmOATjDVU5kRRRGd5oj-n0Vw__',
    },
  ];

  const handleCardPress = (blogId) => {
    navigation.navigate('ArticleDetail', { blogId });
  };

  return (
    <View style={styles.container}>
      {blogs.map(blog => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          author={blog.author}
          date={blog.date}
          image={blog.image}
          onPress={() => handleCardPress(blog.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fcfcfc',
  },
});

export default BlogScreen;
