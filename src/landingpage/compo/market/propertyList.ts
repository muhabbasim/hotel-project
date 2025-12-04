interface TimeSlot {
  id: string;
  startDate: string;
  endDate: string;
  price: number;
  isAvailable: boolean;
  tokenId?: string;
}
export default function propertyList() {

  const propertiesData = [
    {
      id: 'prop-001',
      title: 'Luxury Villa - Jeddah Corniche',
      location: 'Jeddah, Saudi Arabia',
      description: 'Premium beachfront villa with 5 bedrooms, private pool',
      totalTimeSlots: 52,
      imgs: [],
      cover: "https://images.unsplash.com/photo-1723110994499-df46435aa4b3?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      availableSlots: 24,
      pricePerSlot: 8500,
      regulatoryStatus: 'approved',
      tokenized: true,
      ownerWallet: '0x742d35Cc6634C0532925a3b844Bc9e',
      deedNumber: '43-2024-001',
      timeSlots: generateTimeSlots()
    },
    {
      id: 'prop-002',
      title: 'Modern Apartment - Riyadh King Fahd District',
      location: 'Riyadh, Saudi Arabia',
      description: 'Fully furnished apartment with 3 bedrooms, smart home system',
      totalTimeSlots: 52,
      imgs: [],
      cover: "https://images.unsplash.com/photo-1685514823717-7e1ff6ee0563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      availableSlots: 31,
      pricePerSlot: 5600,
      regulatoryStatus: 'pending',
      tokenized: false,
      ownerWallet: '0x8fa5e521B8837F9a82C0D708923C1C93',
      deedNumber: '43-2024-045',
      timeSlots: generateTimeSlots()
    },
    {
      id: 'prop-003',
      title: 'Beach Chalet - Al Khobar',
      location: 'Al Khobar, Saudi Arabia',
      description: 'Cozy family chalet with private beach access and garden',
      totalTimeSlots: 52,
      imgs: [],
      cover: "https://images.unsplash.com/photo-1629236714692-9dddb8ebe990?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      availableSlots: 12,
      pricePerSlot: 7200,
      regulatoryStatus: 'approved',
      tokenized: true,
      ownerWallet: '0x3FfC3b27A1831A671fF87995697eeb33',
      deedNumber: '43-2024-078',
      timeSlots: generateTimeSlots()
    },
    {
      id: 'prop-004',
      title: 'Mountain Cabin - Taif Al Hada',
      location: 'Taif, Saudi Arabia',
      description: 'Quiet mountain cabin with stunning views and outdoor seating',
      totalTimeSlots: 52,
      imgs: [],
      cover: "https://images.unsplash.com/photo-1616774231126-96ad214ae697?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      availableSlots: 40,
      pricePerSlot: 4300,
      regulatoryStatus: 'approved',
      tokenized: false,
      ownerWallet: '0x99aBC8120A4fB792F3A829cFAe2E7D12',
      deedNumber: '43-2024-102',
      timeSlots: generateTimeSlots()
    }
  ];

  // Generate sample time slots
  function generateTimeSlots(): TimeSlot[] {
    const slots: TimeSlot[] = [];
    const startDate = new Date('2024-01-01');
    
    for (let i = 0; i < 12; i++) {
      const start = new Date(startDate);
      start.setMonth(start.getMonth() + i);
      const end = new Date(start);
      end.setDate(end.getDate() + 7);
      
      slots.push({
        id: `slot-${i}`,
        startDate: start.toISOString().split('T')[0],
        endDate: end.toISOString().split('T')[0],
        price: 8500 + (i * 500),
        isAvailable: i % 3 !== 0,
        tokenId: i % 3 !== 0 ? `token-${i}` : undefined
      });
    }
    return slots;
  }

  return propertiesData
}
