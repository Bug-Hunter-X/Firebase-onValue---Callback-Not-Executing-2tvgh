// ... other Firebase imports

// Get a reference to the database
const db = getFirestore();

const query = ref(db, 'users');

// Listen for changes in the database
onValue(query, (snapshot) => {
  // Check if data exists
  if (snapshot.exists()) {
    const users = snapshot.val();
    console.log('Data:', users);
  } else {
    console.log('No data available');
  }
}, (error) => {
  console.error('Error fetching data:', error);
});