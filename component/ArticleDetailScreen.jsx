import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ArticleDetailScreen = () => {
  // Exemple de données d'article et de commentaires
  const article = {
    author: 'Absou Seck',
    date: 'Posté le 02/03/2020',
    authorImage: 'https://s3-alpha-sig.figma.com/img/7c8f/31ec/bacba68be47de5fdf7eaa17ce488ed11?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WQ7cRpv9X8dITBBq4aDOtaohtndc3QaxRQLEkVtg9fL09lKvBD0Mux2gBUt6261c-yn88GOOpTbj1EFkA-zOXVpoZunRJ5Dyv8h76g3AmJ5InkGSzcFjlP~6d~Z5TPMYiRVTqv7xNtSOLtgDYMFqQ27wM1Cr3C6slDL875anKMgVYKN2cdtWtynEcvnNyrUeOgoVwBUQxz1Bm8tAIYzeFZ0rWyzkqdoUHUbGcFmld4mbGvm0WZZm-0tB2ebOq1dpLugcry~7VUepl3Okl5vWgCP3gPXDMnvddyhPqOrbUGQ4lS~0ZQFPqUaPkKeS16JmOATjDVU5kRRRGd5oj-n0Vw__',
    title: 'Bonjour à tous',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh facilisi vestibulum eget augue. Et, faucibus tincidunt magna auctor. Morbi viverra risus aliquam in id. Cursus pellentesque euismod urna mattis tellus volutpat varius. Ultrices tristique habitant volutpat dui eget cursus potenti eleifend. Dui, quam condimentum nunc pellentesque molestie. Nulla viverra egestas vitae commodo pharetra. Ppellentesque molestie. Nulla viverra egestas vitae commodo pharetra. P',
  };

  const comments = [
    { commenterName: 'Jeanne DIOP', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus, tincidunt aliquam nulla. Neque ac sollicitudin ', commenterImage: 'https://s3-alpha-sig.figma.com/img/fae4/f821/22c6cd28ba95abd620917706370cd08f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y1wZDy-Dkq~ywdqkctX~VoQWcbf82R3aotxVTTPfDeKvtOedxDhG7wFZpUiHOmdfWaEWAJdaLCIdOpm2K8rzQTkhzUIu6zb801nRHiuqWRy40aFDRh3ng5v2JEqafLKe5EQfekdJqTjPl8PEMM8GxSmw437m6UBAgjg5f75YPwkC-wvvuaQivrCXNpnnGeuNhc3JtdrvZEkQSVz1l2QvqBjZp2uDtT02GLN~5PtAdWMv2oveZX3~U3CMm6Qa3PYylrTWg0OvD1V0sUWX3Q~eSYhgiJ9sqosqJ6IPDFyG0dJ8O9PDXiK4NQAE13Fx7QBwhH5nTjNV08lQQ2jj-mM1qA__' },
    { commenterName: 'Michael Jean', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus, tincidunt aliquam nulla. Neque ac sollicitudin ', commenterImage: 'https://s3-alpha-sig.figma.com/img/a2b8/73df/3b06ee4a1f36f238f897562cfc8a28c9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPKmw99DKtOzLSSZeQz45TRACiBXDGsQUpnIKzIfqIUCzd9HSMO-e6LUzj8Ztd4J8N0C2gfcgvUH01Jsuhkhj9TXRLeFjj1xnWdHH2mi2677ZCLRs8brQUbsKzn0q0eVJjJ7rkvO2tdKYiIeeAIO82END5P7MJfzMZjGxvh2hon4Sb39eVKTix~0fvI9zhjmbv0RjGs7ZD2Ha9rTs-1DOxGO94Fpn45RNgV095hwM28JsOd5JXxsB-6riwRzjmYvJWDLFPr2bLp2TdyXE8QqmygI7PpwrJNmkJmQA4ucFB-phmmoJMdbRDBT~j0dVI1pQf03XcndhPmFGOE-vkcy8w__' },
    // Ajoutez d'autres commentaires au besoin
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Première partie : Article */}
      <View style={styles.articleContainer}>
        <View style={styles.header}>
          <Text style={styles.author}>{article.author}</Text>
          <Text style={styles.date}>{article.date}</Text>
        </View>
        <Image source={{ uri: article.authorImage }} style={styles.authorImage} />
        <Text style={styles.articleTitle}>{article.title}</Text>
        <Text style={styles.articleContent}>{article.content}</Text>
      </View>

      {/* Deuxième partie : Commentaires */}
      <View style={styles.commentsContainer}>
        {comments.map((comment, index) => (
          <View key={index} style={styles.comment}>
            <Image source={{ uri: comment.commenterImage }} style={styles.commenterImage} />
            <View style={styles.commentContent}>
              <Text style={styles.commenterName}>{comment.commenterName}</Text>
              <Text>{comment.comment}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  articleContainer: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    margin: 10,
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#FDDA5A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  author: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  date: {
    color: '#888',
    fontSize: 12,
  },
  authorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 30,
  },
  articleTitle: {
    fontSize: 14,
    lineHeight: 20,
    // fontWeight: 'bold',
    marginBottom: 10,
  },
  articleContent: {
    fontSize: 12,
    textAlign: 'justify',
    lineHeight: 25,
  },
  commentsContainer: {
    marginBottom: 20,
  },
  comment: {
    flexDirection: 'row',
    marginBottom: 10,
    fontSize: 12,
  },
  commenterImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
    marginLeft: 10,
  },
  commentContent: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 15,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  commenterName: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 13,
  },
});

export default ArticleDetailScreen;