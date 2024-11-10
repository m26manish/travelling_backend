const mongoose = require('mongoose');
const Package = require('./models/Package');

mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://Ecommerecenew:WMUOD7b3NynPjz81@cluster0.w1dp1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ',

    {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("MongoDB connection error:", error));

const samplePackages = [
    { name: "Heritage of Rajasthan", location: "Jaipur", price: 1500, description: "Experience the royal heritage of Jaipur with forts, palaces, and vibrant markets." },
    { name: "Goa Beach Paradise", location: "Goa", price: 1200, description: "Relax on the beaches of Goa, enjoy water sports, and explore the local nightlife." },
    { name: "Backwaters Bliss", location: "Kerala", price: 1400, description: "Cruise through the tranquil backwaters of Kerala and savor the unique local cuisine." },
    { name: "Mountain Retreat", location: "Manali", price: 1600, description: "Unwind in the serene hills of Manali, with breathtaking views and adventure activities." },
    { name: "Spiritual Varanasi", location: "Varanasi", price: 1000, description: "Immerse yourself in the spiritual essence of Varanasi along the banks of the Ganges." },
    { name: "Desert Safari", location: "Jaisalmer", price: 1300, description: "Explore the golden sands of Jaisalmer with a thrilling desert safari experience." },
    { name: "Tea Garden Trails", location: "Darjeeling", price: 1100, description: "Walk through the lush tea gardens of Darjeeling and enjoy scenic Himalayan views." },
    { name: "City of Lakes", location: "Udaipur", price: 1450, description: "Discover Udaipur's enchanting lakes, palaces, and rich cultural heritage." },
    { name: "Mysore Royal Journey", location: "Mysore", price: 1250, description: "Visit the grand Mysore Palace and explore the rich history and architecture of Mysore." },
    { name: "Island Getaway", location: "Andaman & Nicobar", price: 1800, description: "Experience the crystal-clear waters and pristine beaches of the Andaman Islands." }
  ];
  

Package.insertMany(samplePackages)
  .then(() => {
    console.log('Sample packages inserted');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error inserting sample packages:', err);
    mongoose.connection.close();
  });
