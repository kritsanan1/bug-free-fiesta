import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { APP_NAME, COLORS } from '@bug-free-fiesta/shared';
import { capitalize } from '@bug-free-fiesta/utils';

export default function HomeScreen() {
  const welcomeText = capitalize('welcome to expo 54!');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>{APP_NAME}</Text>
        <Text style={styles.subtitle}>Mobile Application</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>{welcomeText}</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Modern Monorepo</Text>
          <Text style={styles.cardText}>
            This mobile app is part of a monorepo structure with:
          </Text>
          <Text style={styles.listItem}>• Expo 54 for mobile development</Text>
          <Text style={styles.listItem}>• Shared TypeScript packages</Text>
          <Text style={styles.listItem}>• Yarn 4 workspaces</Text>
          <Text style={styles.listItem}>• Cross-platform code sharing</Text>
        </View>

        <Link href="/about" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Learn More</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
    backgroundColor: COLORS.primary,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
    color: '#333',
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 12,
    color: '#666',
  },
  listItem: {
    fontSize: 14,
    marginVertical: 4,
    color: '#666',
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
