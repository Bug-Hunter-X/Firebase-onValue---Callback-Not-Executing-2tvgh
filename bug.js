const query = ref(db, 'users');

const unsubscribe = onValue(query, (snapshot) => {
  const users = snapshot.val();
  // Access user data here
  console.log(users);

  // Error handling
  if (snapshot.exists()) {
    // Process user data
  } else {
    console.error('No data available');
  }
});