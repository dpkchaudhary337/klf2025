
const eventsData = [
  {
    day: "Saturday, 11th October 2025",
    events: [
      {
        time: "10:00-10:05",
        title: "Movie",
        venue: "KLF 2025",
        description:
          "Movie- Journey of Kashmir Literature Festival.",
      },
      {
        time: "10:05-10:10",
        title: "Address",
        venue: "KLF 2025",
        description: "Welcome address by Mrs. Usha pandey",
      },
      {
        time: "10:10-10:25",
        title: "Performance",
        venue: "KLF 2025",
        description:
          "Opening Bharatnatyam performance by Aishwarya Attri & Nandana Moulick",
      },
      {
        time: "10:25-10:30",
        title: "Ceremonial",
        venue: "KLF 2025",
        description:
          "Lighting the Lamp by Hon’ble LG Sri Manoj Sinha Ji",
      },
      {
        time: "10:30-11:05",
        title: "Conversation",
        venue: "KLF 2025",
        description:
          "Manthan in Srinagar. In Chair- Hon’ble LG Sri Manoj Sinha | Moderated by- Sri Kanchan Gupta & Ms Rami Desai",
      },
      {
        time: "11:05-11:15",
        title: "Book Launch & discussion",
        venue: "KLF 2025",
        description:
          "Book launch & discussion- Soldiering with passion+Strategic reflections + Leading from front In chair- Lt Gen DP Pandey, Col Ajay Raina. Moderated by- Amber Zaidi",
      },
      {
        time: "11:15-11:55",
        title: "Book Launch & discussion",
        venue: "KLF 2025",
        description:
          "Soldiering with Passion+ Startegic Reflections+Leading from Front | Participants: Lt Gen DPP, Col AJ | Moderator: Amber Zaidi | Remarks: Reserve: Raja Muneeb",
      },
      {
        time: "12:00-12:15",
        title: "Book Launches",
        venue: "KLF 2025",
        description:
          "3 selected authors | Participants: , , Vijay Dhar | Remarks: Authors to speak for 3 minutes each; will bring five gift wrapped books. Before this event, such authors wd hv given a 10 min video talk in front of another camera",
      },
      {
        time: "12:20-13:00",
        title: "Discussion",
        venue: "KLF 2025",
        description:
          "Flashpoint Kashmir: Is World's Obsession with Kashmir a positive? | Participants: Abhijeet Mitra, Rami Desai | Moderator: Raja Muneeb",
      },
      {
        time: "13:05-13:15",
        title: "Performance",
        venue: "KLF 2025",
        description: "Rouf Dance | Participants: Aspire school",
      },
      {
        time: "13:20-14:00",
        title: "Discussion",
        venue: "KLF 2025",
        description:
          "Ecology: Where did we go wrong? | Participants: Shiv Kunal, Guru Moksha | Moderator: Rouble Nagi",
      },
      {
        time: "14:00-14:15",
        title: "Book Launch",
        venue: "KLF 2025",
        description: "3 selected authors | Participants: , , Prof Andrabi",
      },
      {
        time: "14:20-15:00",
        title: "Book Session",
        venue: "KLF 2025",
        description:
          "Great Game & China | Participants: Col Sodhi, Arindam Mukherjee | Moderator: Raavya Sarda",
      },
      {
        time: "15:05-15:15",
        title: "Performance",
        venue: "KLF 2025",
        description: "NIFT Students | Participants: NIFT, NIFT, NIFT",
      },
      {
        time: "15:20-16:00",
        title: "Discussion",
        venue: "KLF 2025",
        description:
          "The shine of Feminine | Participants: Aarti Tikoo, Monika Gupta, Tehmeena Rizvi | Moderator: Damini Punia",
      },
      {
        time: "16:05-16:15",
        title: "Performance",
        venue: "KLF 2025",
        description: "Dogri Dance | Participants: Various artists",
      },
      {
        time: "16:20-17:00",
        title: "Book Session",
        venue: "KLF 2025",
        description:
          "Distorians/Kunan/Kashmir Insurgency | Participants: Utpal Kumar, Haroon Imtiyaaz, Col Yoginder | Moderator: Col AJ",
      },
      {
        time: "17:05",
        title: "Performance",
        venue: "KLF 2025",
        description: "Noor Mohammad & Band | Participants: Various artists",
      },
      // ... baaki events
    ],
  },
  {
    day: "Sunday, 12th October 2025",
    events: [
      {
        time: "10:00-10:05",
        title: "Movie",
        venue: "KLF 2025",
        description: "KLF 2024 | Moderator: TBN",
      },
      {
        time: "10:05-10:20",
        title: "Performance",
        venue: "KLF 2025",
        description: "Instrumental | Participants: ?",
      },
      {
        time: "10:25-11:05",
        title: "Book Session",
        venue: "KLF 2025",
        description:
          "Mukhbir+Gutless+Lalitaditya | Participants: Brig Sushil, Jash Dholani, Prashant | Moderator: Raavya",
      },
      {
        time: "11:10-11:50",
        title: "Discussion",
        venue: "KLF 2025",
        description:
          "Op Sindoor | Participants: Lt Gen DPP, Ravinder Robin, Col Sodhi | Moderator: Jayesh Gangan",
      },
      {
        time: "11:55-12:05",
        title: "Performance",
        venue: "KLF 2025",
        description: "Gojri Dance | Participants: Various artists",
      },
      {
        time: "12:10-13:00",
        title: "Book Session",
        venue: "KLF 2025",
        description:
          "Maj Shaitan+Aurangzeb | Participants: Jai Samota, Damini, Col AJ | Moderator: Amber Zaidi",
      },
      {
        time: "13:05-13:15",
        title: "Book Launch",
        venue: "KLF 2025",
        description: "3 selected authors | Participants: , ",
      },
      {
        time: "13:20-14:00",
        title: "Discussion",
        venue: "KLF 2025",
        description:
          "Asian Century | Participants: Chandachur Ghose, Abhijeet Mitra, Rami Desai | Moderator: Raja Muneeb | Remarks: Ghose's book launch",
      },
      {
        time: "14:05-14:25",
        title: "Performance",
        venue: "KLF 2025",
        description: "Play | Participants: DPS Srinagar",
      },
      {
        time: "14:30-15:10",
        title: "Book Session",
        venue: "KLF 2025",
        description:
          "Mountain Godesses+?? | Participants: Manu Khajuria, Tehmeena Rizvi, Gurunatha | Moderator: Naira Manzoor",
      },
      {
        time: "15:15-15:25",
        title: "Book Launch",
        venue: "KLF 2025",
        description: "3 selected authors | Participants: , , Neerja Mattoo",
      },
      {
        time: "15:30-16:10",
        title: "Discussion",
        venue: "KLF 2025",
        description:
          "Education | Participants: Khurshid Iqbal, Vijay Dhar, Neerja Mattoo | Moderator: Emaad Makhdoomi",
      },
      {
        time: "16:10-16:40",
        title: "Discussion",
        venue: "KLF 2025",
        description:
          "What is in store for Kashmir | Participants: Amitava Chatterjee, Kanchan Gupta, Lt Gen DPP/Atal Dulloo",
      },
      {
        time: "16:40-17:20",
        title:
          "Ceremonial & Discussion | Felicitations (felicitate the director or singer)",
        venue: "KLF 2025",
        description:
          "Welcome to Dr Karan Singh | India at 2037 | Moderator: Usha Pandey & Ravinder Robin",
      },
      {
        time: "17:20-17:50",
        title: "Performance",
        venue: "KLF 2025",
        description: "Songs of Paradise | Participants: Masrat un Nissa",
      },
      {
        time: "17:50-18:00",
        title: "Ceremonial",
        venue: "KLF 2025",
        description: "Vote of Thanks | Participants: Usha Pandey",
      },
      {
        time: "18:00",
        title: "Vande Mataram",
        venue: "KLF 2025",
        description: "School Kids",
      },
      // ... baaki events
    ],
  },
];

export default eventsData;