import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { COLORS } from '@bug-free-fiesta/shared';
import { isEmail } from '@bug-free-fiesta/utils';

export default function AboutScreen() {
  const exampleEmail = 'hello@example.com';
  const isValidEmail = isEmail(exampleEmail);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shared Packages</Text>
        <Text style={styles.text}>
          This mobile app uses shared TypeScript packages from the monorepo:
        </Text>
        <Text style={styles.listItem}>• @bug-free-fiesta/shared - Constants & types</Text>
        <Text style={styles.listItem}>• @bug-free-fiesta/utils - Utility functions</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Example Validation</Text>
        <Text style={styles.text}>Email: {exampleEmail}</Text>
        <Text style={[styles.text, isValidEmail ? styles.valid : styles.invalid]}>
          {isValidEmail ? '✓ Valid email' : '✗ Invalid email'}
        </Text>
      </View>

      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>← Back to Home</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: COLORS.primary,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: '#666',
  },
  listItem: {
    fontSize: 14,
    marginVertical: 4,
    color: '#666',
  },
  valid: {
    color: COLORS.success,
    fontWeight: '600',
  },
  invalid: {
    color: COLORS.error,
    fontWeight: '600',
  },
  link: {
    marginTop: 'auto',
  },
  linkText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});
