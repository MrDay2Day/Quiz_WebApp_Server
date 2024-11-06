export type QuestionType = {
  question: string;
  options: {
    value: string;
    answer?: boolean;
  }[];
};

export const questions: QuestionType[] = [
  {
    question:
      "What is the purpose of the 'use strict' directive in JavaScript?",
    options: [
      {
        value: "Enables strict mode, which helps catch common coding errors",
        answer: true,
      },
      { value: "Allows the use of newer syntax without warnings" },
      { value: "Disables the use of undefined variables" },
      { value: "Forces the code to run in modern browsers only" },
    ],
  },
  {
    question: "What does the acronym HTTP stand for?",
    options: [
      { value: "HyperText Transfer Protocol", answer: true },
      { value: "Hyperlink Transfer Protocol" },
      { value: "HyperText Transmission Protocol" },
      { value: "Hyperlink Transmission Protocol" },
    ],
  },
  {
    question: "In Git, what command would you use to clone a repository?",
    options: [
      { value: "git clone", answer: true },
      { value: "git init" },
      { value: "git fetch" },
      { value: "git pull" },
    ],
  },
  {
    question: "What is Docker primarily used for?",
    options: [
      { value: "Containerizing applications", answer: true },
      { value: "Managing databases" },
      { value: "Performing system updates" },
      { value: "Version control" },
    ],
  },
  {
    question: "Which of these is NOT a JavaScript framework?",
    options: [
      { value: "Laravel", answer: true },
      { value: "React" },
      { value: "Vue" },
      { value: "Angular" },
    ],
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: [
      { value: "<ul>", answer: true },
      { value: "<ol>" },
      { value: "<li>" },
      { value: "<list>" },
    ],
  },
  {
    question: "In Python, what is the output of 'print(type([1, 2, 3]))'?",
    options: [
      { value: "<class 'list'>", answer: true },
      { value: "<class 'tuple'>" },
      { value: "<class 'dictionary'>" },
      { value: "<class 'set'>" },
    ],
  },
  {
    question: "What is the primary purpose of CSS?",
    options: [
      { value: "Styling web pages", answer: true },
      { value: "Structuring HTML" },
      { value: "Adding interactivity to a webpage" },
      { value: "Connecting to a database" },
    ],
  },
  {
    question:
      "Which HTTP method is commonly used to update an existing resource?",
    options: [
      { value: "PUT", answer: true },
      { value: "POST" },
      { value: "GET" },
      { value: "DELETE" },
    ],
  },
  {
    question: "In MongoDB, what is a collection?",
    options: [
      { value: "A grouping of documents", answer: true },
      { value: "A field in a document" },
      { value: "An index for fast searching" },
      { value: "A method for querying data" },
    ],
  },
  {
    question: "Which symbol is used to denote an ID selector in CSS?",
    options: [
      { value: "#", answer: true },
      { value: "." },
      { value: "*" },
      { value: "$" },
    ],
  },
  {
    question: "What does SQL stand for?",
    options: [
      { value: "Structured Query Language", answer: true },
      { value: "Standard Query Logic" },
      { value: "Structured Query Logic" },
      { value: "Systematic Query Language" },
    ],
  },
  {
    question: "What is an API?",
    options: [
      { value: "Application Programming Interface", answer: true },
      { value: "Application Processing Interface" },
      { value: "Application Platform Interface" },
      { value: "Automated Programming Interface" },
    ],
  },
  {
    question: "Which language is primarily used for iOS development?",
    options: [
      { value: "Swift", answer: true },
      { value: "Java" },
      { value: "Python" },
      { value: "JavaScript" },
    ],
  },
  {
    question: "What is Kubernetes used for?",
    options: [
      { value: "Orchestrating containerized applications", answer: true },
      { value: "Building container images" },
      { value: "Developing mobile applications" },
      { value: "Managing serverless functions" },
    ],
  },
  {
    question: "Which command installs a package in npm?",
    options: [
      { value: "npm install", answer: true },
      { value: "npm create" },
      { value: "npm generate" },
      { value: "npm load" },
    ],
  },
  {
    question: "Which NoSQL database uses the BSON format?",
    options: [
      { value: "MongoDB", answer: true },
      { value: "Redis" },
      { value: "Cassandra" },
      { value: "CouchDB" },
    ],
  },
  {
    question: "Which HTTP status code represents 'Not Found'?",
    options: [
      { value: "404", answer: true },
      { value: "500" },
      { value: "403" },
      { value: "301" },
    ],
  },
  {
    question: "In React, which hook is used to manage state?",
    options: [
      { value: "useState", answer: true },
      { value: "useReducer" },
      { value: "useEffect" },
      { value: "useMemo" },
    ],
  },
  {
    question: "What is the purpose of TypeScript?",
    options: [
      { value: "To add static typing to JavaScript", answer: true },
      { value: "To run JavaScript faster" },
      { value: "To replace JavaScript" },
      { value: "To manage databases" },
    ],
  },
  {
    question: "Which cloud provider offers the 'Lambda' serverless service?",
    options: [
      { value: "AWS", answer: true },
      { value: "Google Cloud" },
      { value: "Microsoft Azure" },
      { value: "IBM Cloud" },
    ],
  },
  {
    question: "What does JSON stand for?",
    options: [
      { value: "JavaScript Object Notation", answer: true },
      { value: "JavaScript Over Network" },
      { value: "Java Standard Object Notation" },
      { value: "JavaScript Object Networking" },
    ],
  },
  {
    question: "What does SQL's JOIN operation do?",
    options: [
      { value: "Combines rows from two or more tables", answer: true },
      { value: "Deletes records from a table" },
      { value: "Creates a new database" },
      { value: "Renames a table" },
    ],
  },
  {
    question: "Which of the following is a relational database?",
    options: [
      { value: "MySQL", answer: true },
      { value: "MongoDB" },
      { value: "Redis" },
      { value: "Cassandra" },
    ],
  },
  {
    question: "What type of data structure is a stack?",
    options: [
      { value: "LIFO (Last In, First Out)", answer: true },
      { value: "FIFO (First In, First Out)" },
      { value: "Priority Queue" },
      { value: "Binary Tree" },
    ],
  },
  {
    question: "What is the main purpose of GraphQL?",
    options: [
      { value: "To query and manipulate data", answer: true },
      { value: "To format text in HTML" },
      { value: "To perform complex mathematical operations" },
      { value: "To manage state in a React app" },
    ],
  },
  {
    question: "Which tool is commonly used to bundle JavaScript modules?",
    options: [
      { value: "Webpack", answer: true },
      { value: "Docker" },
      { value: "Nginx" },
      { value: "Express" },
    ],
  },
  {
    question: "What is the main purpose of a firewall in network security?",
    options: [
      {
        value:
          "To block unauthorized access while permitting authorized communications",
        answer: true,
      },
      { value: "To monitor network traffic only" },
      { value: "To connect different networks together" },
      { value: "To provide internet access to a local network" },
    ],
  },
  {
    question: "What does VPN stand for?",
    options: [
      { value: "Virtual Private Network", answer: true },
      { value: "Virtual Public Network" },
      { value: "Verified Public Network" },
      { value: "Virtual Protected Network" },
    ],
  },
  {
    question: "Which protocol is commonly used for email transmission?",
    options: [
      { value: "SMTP", answer: true },
      { value: "FTP" },
      { value: "HTTP" },
      { value: "TCP" },
    ],
  },
  {
    question: "What is the primary function of RAID in data storage?",
    options: [
      {
        value: "To provide data redundancy and improve performance",
        answer: true,
      },
      { value: "To increase internet speed" },
      { value: "To protect against malware" },
      { value: "To compress data" },
    ],
  },
  {
    question: "What does DNS stand for?",
    options: [
      { value: "Domain Name System", answer: true },
      { value: "Data Network Service" },
      { value: "Domain Network Server" },
      { value: "Digital Name Server" },
    ],
  },
  {
    question:
      "Which device is commonly used to connect different network segments?",
    options: [
      { value: "Router", answer: true },
      { value: "Firewall" },
      { value: "Switch" },
      { value: "Repeater" },
    ],
  },
  {
    question: "In cybersecurity, what does the term 'phishing' refer to?",
    options: [
      {
        value: "A method of deceiving users to steal sensitive information",
        answer: true,
      },
      { value: "A technique to bypass firewalls" },
      { value: "An encryption method" },
      { value: "A type of firewall configuration" },
    ],
  },
  {
    question:
      "Which type of malware is designed to spread without user intervention?",
    options: [
      { value: "Worm", answer: true },
      { value: "Trojan" },
      { value: "Spyware" },
      { value: "Adware" },
    ],
  },
  {
    question: "What does HTTP stand for?",
    options: [
      { value: "HyperText Transfer Protocol", answer: true },
      { value: "HyperText Transmission Protocol" },
      { value: "HyperLink Transfer Protocol" },
      { value: "Hyperlink Transmission Protocol" },
    ],
  },
  {
    question: "What is the primary function of DHCP in networking?",
    options: [
      { value: "To assign IP addresses to devices on a network", answer: true },
      { value: "To route traffic between networks" },
      { value: "To provide data encryption" },
      { value: "To manage file storage" },
    ],
  },
  {
    question: "Which storage device uses magnetic storage technology?",
    options: [
      { value: "Hard Disk Drive (HDD)", answer: true },
      { value: "Solid State Drive (SSD)" },
      { value: "Flash Drive" },
      { value: "Optical Disk" },
    ],
  },
  {
    question: "Which of these is NOT an operating system?",
    options: [
      { value: "HTML", answer: true },
      { value: "Linux" },
      { value: "Windows" },
      { value: "macOS" },
    ],
  },
  {
    question: "What does LAN stand for?",
    options: [
      { value: "Local Area Network", answer: true },
      { value: "Large Access Network" },
      { value: "Limited Area Network" },
      { value: "Local Access Node" },
    ],
  },
  {
    question: "What is the main purpose of encryption?",
    options: [
      { value: "To secure data by converting it into a code", answer: true },
      { value: "To compress files for storage" },
      { value: "To create backups of data" },
      { value: "To manage server performance" },
    ],
  },
  {
    question: "Which device operates at the network layer of the OSI model?",
    options: [
      { value: "Router", answer: true },
      { value: "Switch" },
      { value: "Hub" },
      { value: "Repeater" },
    ],
  },
  {
    question: "Which type of software is used to detect and remove malware?",
    options: [
      { value: "Antivirus software", answer: true },
      { value: "Firewall software" },
      { value: "File management software" },
      { value: "Database software" },
    ],
  },
  {
    question: "In data centers, what does UPS stand for?",
    options: [
      { value: "Uninterruptible Power Supply", answer: true },
      { value: "Universal Power Source" },
      { value: "Unlimited Power Supply" },
      { value: "Unidirectional Power Source" },
    ],
  },
  {
    question: "What is the purpose of a proxy server?",
    options: [
      {
        value: "To act as an intermediary for requests from clients",
        answer: true,
      },
      { value: "To manage file transfers" },
      { value: "To connect devices within a LAN" },
      { value: "To block access to restricted websites" },
    ],
  },
  {
    question: "Which device uses MAC addresses to filter and forward data?",
    options: [
      { value: "Switch", answer: true },
      { value: "Router" },
      { value: "Firewall" },
      { value: "Modem" },
    ],
  },
  {
    question: "What does BYOD stand for in an enterprise setting?",
    options: [
      { value: "Bring Your Own Device", answer: true },
      { value: "Bring Your Own Data" },
      { value: "Backup Your Own Device" },
      { value: "Build Your Own Database" },
    ],
  },
  {
    question: "What does CPU stand for?",
    options: [
      { value: "Central Processing Unit", answer: true },
      { value: "Central Power Unit" },
      { value: "Computer Processing Unit" },
      { value: "Central Performance Unit" },
    ],
  },
  {
    question: "What type of device is a mouse?",
    options: [
      { value: "Input device", answer: true },
      { value: "Output device" },
      { value: "Storage device" },
      { value: "Networking device" },
    ],
  },
  {
    question: "Which company created the iPhone?",
    options: [
      { value: "Apple", answer: true },
      { value: "Samsung" },
      { value: "Google" },
      { value: "Microsoft" },
    ],
  },
  {
    question: "What does USB stand for?",
    options: [
      { value: "Universal Serial Bus", answer: true },
      { value: "Universal System Bus" },
      { value: "Universal Serial Board" },
      { value: "Unified Serial Bus" },
    ],
  },
  {
    question: "What is the main purpose of a keyboard?",
    options: [
      { value: "To input text and commands", answer: true },
      { value: "To display images" },
      { value: "To store data" },
      { value: "To provide internet access" },
    ],
  },
  {
    question: "Which device is commonly used to display output?",
    options: [
      { value: "Monitor", answer: true },
      { value: "Keyboard" },
      { value: "Mouse" },
      { value: "Router" },
    ],
  },
  {
    question: "What does Wi-Fi allow devices to do?",
    options: [
      { value: "Connect to a wireless network", answer: true },
      { value: "Store files" },
      { value: "Print documents" },
      { value: "Scan for viruses" },
    ],
  },
  {
    question: "What does RAM stand for?",
    options: [
      { value: "Random Access Memory", answer: true },
      { value: "Read Access Memory" },
      { value: "Real Access Memory" },
      { value: "Rapid Access Memory" },
    ],
  },
  {
    question: "Which software is commonly used to browse the internet?",
    options: [
      { value: "Web browser", answer: true },
      { value: "Spreadsheet" },
      { value: "Word processor" },
      { value: "Media player" },
    ],
  },
  {
    question: "What is the main function of a printer?",
    options: [
      { value: "To produce hard copies of documents", answer: true },
      { value: "To display images on a screen" },
      { value: "To store data" },
      { value: "To connect devices to a network" },
    ],
  },
  {
    question: "What is a smartphone?",
    options: [
      {
        value: "A mobile phone with advanced computing features",
        answer: true,
      },
      { value: "A laptop computer" },
      { value: "A desktop computer" },
      { value: "A wireless router" },
    ],
  },
  {
    question: "What type of battery is commonly used in smartphones?",
    options: [
      { value: "Lithium-ion", answer: true },
      { value: "Lead-acid" },
      { value: "Nickel-cadmium" },
      { value: "Alkaline" },
    ],
  },
  {
    question: "What does HDMI stand for?",
    options: [
      { value: "High Definition Multimedia Interface", answer: true },
      { value: "High Definition Multi Interface" },
      { value: "High Definition Monitor Interface" },
      { value: "High Definition Media Interface" },
    ],
  },
  {
    question: "What is an example of an operating system?",
    options: [
      { value: "Windows", answer: true },
      { value: "Google" },
      { value: "HTML" },
      { value: "USB" },
    ],
  },
  {
    question: "What is the purpose of antivirus software?",
    options: [
      { value: "To protect against malware", answer: true },
      { value: "To compress files" },
      { value: "To edit photos" },
      { value: "To play music" },
    ],
  },
  {
    question: "What type of device is a tablet?",
    options: [
      { value: "A portable computing device with a touchscreen", answer: true },
      { value: "A gaming console" },
      { value: "A wireless router" },
      { value: "A type of hard drive" },
    ],
  },
  {
    question: "Which device is used to capture photos and videos?",
    options: [
      { value: "Camera", answer: true },
      { value: "Printer" },
      { value: "Router" },
      { value: "Monitor" },
    ],
  },
  {
    question: "What does SSD stand for?",
    options: [
      { value: "Solid State Drive", answer: true },
      { value: "System Storage Drive" },
      { value: "Single Storage Device" },
      { value: "Secure State Drive" },
    ],
  },
  {
    question: "What is commonly used to connect a computer to the internet?",
    options: [
      { value: "Router", answer: true },
      { value: "Scanner" },
      { value: "Projector" },
      { value: "USB stick" },
    ],
  },
  {
    question: "What is the name of the search engine created by Google?",
    options: [
      { value: "Google Search", answer: true },
      { value: "Bing" },
      { value: "Yahoo" },
      { value: "Ask" },
    ],
  },
  {
    question: "Who is known as the father of the computer?",
    options: [
      { value: "Charles Babbage", answer: true },
      { value: "Albert Einstein" },
      { value: "Isaac Newton" },
      { value: "Nikola Tesla" },
    ],
  },
  {
    question: "Which company created the first iPhone?",
    options: [
      { value: "Apple", answer: true },
      { value: "Microsoft" },
      { value: "IBM" },
      { value: "Google" },
    ],
  },
  {
    question: "Who founded Microsoft?",
    options: [
      { value: "Bill Gates and Paul Allen", answer: true },
      { value: "Steve Jobs and Steve Wozniak" },
      { value: "Larry Page and Sergey Brin" },
      { value: "Mark Zuckerberg" },
    ],
  },
  {
    question: "What was the first widely used programming language?",
    options: [
      { value: "FORTRAN", answer: true },
      { value: "Python" },
      { value: "Java" },
      { value: "C++" },
    ],
  },
  {
    question: "In which year was the World Wide Web launched?",
    options: [
      { value: "1991", answer: true },
      { value: "1989" },
      { value: "1995" },
      { value: "2000" },
    ],
  },
  {
    question: "Which company created the first personal computer (PC)?",
    options: [
      { value: "IBM", answer: true },
      { value: "Apple" },
      { value: "Microsoft" },
      { value: "Google" },
    ],
  },
  {
    question: "Who invented the World Wide Web?",
    options: [
      { value: "Tim Berners-Lee", answer: true },
      { value: "Bill Gates" },
      { value: "Steve Jobs" },
      { value: "Mark Zuckerberg" },
    ],
  },
  {
    question: "What does the company IBM stand for?",
    options: [
      { value: "International Business Machines", answer: true },
      { value: "Internet Business Machines" },
      { value: "Intelligent Binary Machines" },
      { value: "Independent Business Machines" },
    ],
  },
  {
    question: "What year was Google founded?",
    options: [
      { value: "1998", answer: true },
      { value: "2000" },
      { value: "1995" },
      { value: "2004" },
    ],
  },
  {
    question:
      "What was the name of Apple's first successful personal computer?",
    options: [
      { value: "Apple II", answer: true },
      { value: "Macintosh" },
      { value: "iMac" },
      { value: "Apple Lisa" },
    ],
  },
  {
    question: "Who is credited with founding Facebook?",
    options: [
      { value: "Mark Zuckerberg", answer: true },
      { value: "Bill Gates" },
      { value: "Larry Page" },
      { value: "Elon Musk" },
    ],
  },
  {
    question: "Which company created the Windows operating system?",
    options: [
      { value: "Microsoft", answer: true },
      { value: "Apple" },
      { value: "Google" },
      { value: "IBM" },
    ],
  },
  {
    question:
      "Which early computer was famously known for codebreaking during WWII?",
    options: [
      { value: "Enigma", answer: true },
      { value: "UNIVAC" },
      { value: "Colossus" },
      { value: "Altair" },
    ],
  },
  {
    question: "What was the first search engine on the internet?",
    options: [
      { value: "Archie", answer: true },
      { value: "Yahoo" },
      { value: "Google" },
      { value: "Ask Jeeves" },
    ],
  },
  {
    question:
      "Which famous computer scientist developed the concept of the Turing Machine?",
    options: [
      { value: "Alan Turing", answer: true },
      { value: "Charles Babbage" },
      { value: "Grace Hopper" },
      { value: "John von Neumann" },
    ],
  },
  {
    question: "What does HTML stand for?",
    options: [
      { value: "HyperText Markup Language", answer: true },
      { value: "Hyperlink Text Markup Language" },
      { value: "Hyper Transfer Markup Language" },
      { value: "Hyper Transfer Module Language" },
    ],
  },
  {
    question: "Which company developed the Java programming language?",
    options: [
      { value: "Sun Microsystems", answer: true },
      { value: "Microsoft" },
      { value: "Apple" },
      { value: "IBM" },
    ],
  },
  {
    question:
      "Who is credited with inventing the first modern electronic computer?",
    options: [
      { value: "John Atanasoff and Clifford Berry", answer: true },
      { value: "Charles Babbage" },
      { value: "Alan Turing" },
      { value: "Steve Jobs" },
    ],
  },
  {
    question: "What year was the first email sent?",
    options: [
      { value: "1971", answer: true },
      { value: "1980" },
      { value: "1990" },
      { value: "1969" },
    ],
  },
  {
    question:
      "Which social media platform was launched in 2006 and became popular for its 140-character messages?",
    options: [
      { value: "Twitter", answer: true },
      { value: "Facebook" },
      { value: "Instagram" },
      { value: "Snapchat" },
    ],
  },

  {
    question: "What does 'USB' stand for?",
    options: [
      { value: "Universal Serial Bus", answer: true },
      { value: "Universal System Bus" },
      { value: "Universal Software Bus" },
      { value: "Unique Serial Bus" },
    ],
  },
  {
    question: "What does the 'S' in HTTPS stand for?",
    options: [
      { value: "Secure", answer: true },
      { value: "Server" },
      { value: "Standard" },
      { value: "Simple" },
    ],
  },
  {
    question: "What company developed the Android operating system?",
    options: [
      { value: "Google", answer: true },
      { value: "Microsoft" },
      { value: "Apple" },
      { value: "Samsung" },
    ],
  },
  {
    question: "Which social media platform is known for 'tweets'?",
    options: [
      { value: "Twitter", answer: true },
      { value: "Facebook" },
      { value: "Instagram" },
      { value: "Snapchat" },
    ],
  },
  {
    question: "What does the 'www' stand for in web addresses?",
    options: [
      { value: "World Wide Web", answer: true },
      { value: "Web Wide World" },
      { value: "World Web Wide" },
      { value: "Wide Web World" },
    ],
  },
  {
    question: "Which device is primarily used for printing documents?",
    options: [
      { value: "Printer", answer: true },
      { value: "Monitor" },
      { value: "Router" },
      { value: "Keyboard" },
    ],
  },
  {
    question: "Which type of device is a smartphone?",
    options: [
      { value: "Mobile device", answer: true },
      { value: "Desktop computer" },
      { value: "Mainframe" },
      { value: "Wearable" },
    ],
  },
  {
    question: "What does RAM stand for?",
    options: [
      { value: "Random Access Memory", answer: true },
      { value: "Read Access Memory" },
      { value: "Real Access Memory" },
      { value: "Remote Access Memory" },
    ],
  },
  {
    question: "Which key combination is commonly used to copy text?",
    options: [
      { value: "Ctrl + C", answer: true },
      { value: "Ctrl + V" },
      { value: "Ctrl + X" },
      { value: "Ctrl + Z" },
    ],
  },
  {
    question: "What does the 'i' stand for in iPhone?",
    options: [
      { value: "Internet", answer: true },
      { value: "Innovation" },
      { value: "Intelligence" },
      { value: "Interactive" },
    ],
  },
  {
    question: "What is the name of Apple's virtual assistant?",
    options: [
      { value: "Siri", answer: true },
      { value: "Alexa" },
      { value: "Google Assistant" },
      { value: "Cortana" },
    ],
  },
  {
    question: "Which company owns YouTube?",
    options: [
      { value: "Google", answer: true },
      { value: "Facebook" },
      { value: "Amazon" },
      { value: "Microsoft" },
    ],
  },
  {
    question: "What does VPN stand for?",
    options: [
      { value: "Virtual Private Network", answer: true },
      { value: "Visual Private Network" },
      { value: "Verified Private Network" },
      { value: "Virtual Public Network" },
    ],
  },
  {
    question: "What is the main purpose of antivirus software?",
    options: [
      { value: "To protect computers from viruses", answer: true },
      { value: "To increase battery life" },
      { value: "To make the internet faster" },
      { value: "To improve screen resolution" },
    ],
  },
  {
    question: "What does PDF stand for?",
    options: [
      { value: "Portable Document Format", answer: true },
      { value: "Public Data File" },
      { value: "Printable Document File" },
      { value: "Portable Data File" },
    ],
  },
  {
    question:
      "Which company is famous for its search engine and advertising services?",
    options: [
      { value: "Google", answer: true },
      { value: "Microsoft" },
      { value: "Apple" },
      { value: "IBM" },
    ],
  },
  {
    question: "What is the main purpose of a router in a network?",
    options: [
      { value: "To direct traffic between devices on a network", answer: true },
      { value: "To store data" },
      { value: "To create websites" },
      { value: "To print documents" },
    ],
  },
  {
    question: "Which of these is an example of cloud storage?",
    options: [
      { value: "Google Drive", answer: true },
      { value: "Windows" },
      { value: "Photoshop" },
      { value: "Microsoft Office" },
    ],
  },
  {
    question: "What does URL stand for?",
    options: [
      { value: "Uniform Resource Locator", answer: true },
      { value: "Universal Resource Link" },
      { value: "Unique Resource Locator" },
      { value: "Uniform Resource Link" },
    ],
  },
  {
    question: "What is the main function of a keyboard?",
    options: [
      { value: "To input text and commands", answer: true },
      { value: "To display images" },
      { value: "To control volume" },
      { value: "To charge devices" },
    ],
  },

  {
    question: "Which device is used to take photos and videos?",
    options: [
      { value: "Camera", answer: true },
      { value: "Printer" },
      { value: "Router" },
      { value: "Keyboard" },
    ],
  },
  {
    question:
      "Which company is known for creating the Windows operating system?",
    options: [
      { value: "Microsoft", answer: true },
      { value: "Apple" },
      { value: "Google" },
      { value: "IBM" },
    ],
  },
  {
    question: "What does AI stand for?",
    options: [
      { value: "Artificial Intelligence", answer: true },
      { value: "Automated Intelligence" },
      { value: "Advanced Internet" },
      { value: "Artificial Interface" },
    ],
  },
  {
    question: "Which device is used to display output from a computer?",
    options: [
      { value: "Monitor", answer: true },
      { value: "Keyboard" },
      { value: "Router" },
      { value: "Mouse" },
    ],
  },
  {
    question: "Which programming language is known for its snake logo?",
    options: [
      { value: "Python", answer: true },
      { value: "Java" },
      { value: "Ruby" },
      { value: "HTML" },
    ],
  },
  {
    question: "Which part of a computer is responsible for processing data?",
    options: [
      { value: "CPU", answer: true },
      { value: "RAM" },
      { value: "Hard Drive" },
      { value: "Mouse" },
    ],
  },
  {
    question: "What does GPU stand for?",
    options: [
      { value: "Graphics Processing Unit", answer: true },
      { value: "Global Processing Unit" },
      { value: "Graphical Peripheral Unit" },
      { value: "General Processing Unit" },
    ],
  },
  {
    question:
      "Which device allows a user to click and interact with items on a screen?",
    options: [
      { value: "Mouse", answer: true },
      { value: "Keyboard" },
      { value: "Router" },
      { value: "Monitor" },
    ],
  },
  {
    question: "Which company is known for making the iPhone?",
    options: [
      { value: "Apple", answer: true },
      { value: "Microsoft" },
      { value: "Google" },
      { value: "Samsung" },
    ],
  },
  {
    question: "What is the main purpose of an operating system?",
    options: [
      {
        value: "To manage computer hardware and software resources",
        answer: true,
      },
      { value: "To create websites" },
      { value: "To store photos" },
      { value: "To print documents" },
    ],
  },
  {
    question:
      "Which popular video conferencing app is often used for virtual meetings?",
    options: [
      { value: "Zoom", answer: true },
      { value: "Spotify" },
      { value: "YouTube" },
      { value: "Instagram" },
    ],
  },
  {
    question: "What does HTML stand for?",
    options: [
      { value: "HyperText Markup Language", answer: true },
      { value: "Hyperlink Text Management Language" },
      { value: "Hyper Transfer Meta Language" },
      { value: "HyperText Machine Language" },
    ],
  },
  {
    question: "Which search engine is most commonly used worldwide?",
    options: [
      { value: "Google", answer: true },
      { value: "Bing" },
      { value: "Yahoo" },
      { value: "DuckDuckGo" },
    ],
  },
  {
    question: "Which social media platform is known for photo sharing?",
    options: [
      { value: "Instagram", answer: true },
      { value: "LinkedIn" },
      { value: "Twitter" },
      { value: "Snapchat" },
    ],
  },
  {
    question: "What does URL stand for?",
    options: [
      { value: "Uniform Resource Locator", answer: true },
      { value: "Universal Resource Locator" },
      { value: "Unique Resource Link" },
      { value: "Uniform Resource Link" },
    ],
  },
  {
    question: "What does IoT stand for in technology?",
    options: [
      { value: "Internet of Things", answer: true },
      { value: "Internal Operating Technology" },
      { value: "Interactive Online Transfer" },
      { value: "Instant Online Transaction" },
    ],
  },
  {
    question: "Which tool is commonly used to connect devices to the internet?",
    options: [
      { value: "Router", answer: true },
      { value: "Monitor" },
      { value: "Keyboard" },
      { value: "Printer" },
    ],
  },
  {
    question: "What does HTTP stand for?",
    options: [
      { value: "HyperText Transfer Protocol", answer: true },
      { value: "Hyperlink Transfer Protocol" },
      { value: "HyperText Transport Platform" },
      { value: "HyperTool Transfer Process" },
    ],
  },
  {
    question: "Which company is the parent company of Instagram?",
    options: [
      { value: "Meta (Facebook)", answer: true },
      { value: "Google" },
      { value: "Apple" },
      { value: "Microsoft" },
    ],
  },
  {
    question: "What is commonly used to store files in the cloud?",
    options: [
      { value: "Cloud Storage", answer: true },
      { value: "Web Browser" },
      { value: "Desktop" },
      { value: "Firewall" },
    ],
  },

  {
    question: "Which device is used to type text on a computer?",
    options: [
      { value: "Keyboard", answer: true },
      { value: "Mouse" },
      { value: "Monitor" },
      { value: "Printer" },
    ],
  },
  {
    question: "Which company developed the iOS operating system?",
    options: [
      { value: "Apple", answer: true },
      { value: "Microsoft" },
      { value: "Google" },
      { value: "Samsung" },
    ],
  },
  {
    question: "What is Wi-Fi primarily used for?",
    options: [
      { value: "Wireless internet access", answer: true },
      { value: "Data storage" },
      { value: "Printing" },
      { value: "Battery charging" },
    ],
  },
  {
    question: "Which social media platform is known for 'likes' and 'friends'?",
    options: [
      { value: "Facebook", answer: true },
      { value: "LinkedIn" },
      { value: "Snapchat" },
      { value: "Twitter" },
    ],
  },
  {
    question: "What is the main purpose of an antivirus program?",
    options: [
      { value: "To protect from malware and viruses", answer: true },
      { value: "To play music" },
      { value: "To organize files" },
      { value: "To increase internet speed" },
    ],
  },
  {
    question: "What does SMS stand for?",
    options: [
      { value: "Short Message Service", answer: true },
      { value: "Simple Message System" },
      { value: "System Message Service" },
      { value: "Short Messaging System" },
    ],
  },
  {
    question: "Which company created the Chrome web browser?",
    options: [
      { value: "Google", answer: true },
      { value: "Microsoft" },
      { value: "Apple" },
      { value: "Mozilla" },
    ],
  },
  {
    question: "What type of device is an iPad?",
    options: [
      { value: "Tablet", answer: true },
      { value: "Smartphone" },
      { value: "Desktop" },
      { value: "Laptop" },
    ],
  },
  {
    question: "Which device is used to make phone calls?",
    options: [
      { value: "Smartphone", answer: true },
      { value: "Router" },
      { value: "Printer" },
      { value: "Keyboard" },
    ],
  },
  {
    question: "What does 'LAN' stand for in networking?",
    options: [
      { value: "Local Area Network", answer: true },
      { value: "Large Area Network" },
      { value: "Link Access Network" },
      { value: "Local Access Network" },
    ],
  },
  {
    question: "What is the purpose of a firewall?",
    options: [
      { value: "To protect a network from unauthorized access", answer: true },
      { value: "To increase battery life" },
      { value: "To improve video quality" },
      { value: "To store data" },
    ],
  },
  {
    question: "Which device helps improve internet signal in a large area?",
    options: [
      { value: "Wi-Fi extender", answer: true },
      { value: "Smartphone" },
      { value: "Keyboard" },
      { value: "Printer" },
    ],
  },
  {
    question: "Which email service is commonly associated with Google?",
    options: [
      { value: "Gmail", answer: true },
      { value: "Outlook" },
      { value: "Yahoo Mail" },
      { value: "ProtonMail" },
    ],
  },
  {
    question: "What does CPU stand for?",
    options: [
      { value: "Central Processing Unit", answer: true },
      { value: "Computer Processing Unit" },
      { value: "Central Performance Unit" },
      { value: "Core Processor Unit" },
    ],
  },
  {
    question: "Which app store is used for Android devices?",
    options: [
      { value: "Google Play Store", answer: true },
      { value: "Apple App Store" },
      { value: "Microsoft Store" },
      { value: "Samsung Galaxy Store" },
    ],
  },
  {
    question: "Which type of memory is erased when the computer is turned off?",
    options: [
      { value: "RAM", answer: true },
      { value: "Hard Drive" },
      { value: "SSD" },
      { value: "Flash Drive" },
    ],
  },
  {
    question:
      "Which device is used to scan paper documents into digital format?",
    options: [
      { value: "Scanner", answer: true },
      { value: "Printer" },
      { value: "Router" },
      { value: "Monitor" },
    ],
  },
  {
    question:
      "Which company is associated with the Galaxy line of smartphones?",
    options: [
      { value: "Samsung", answer: true },
      { value: "Apple" },
      { value: "Google" },
      { value: "Nokia" },
    ],
  },
  {
    question: "What is commonly used to view websites on a computer?",
    options: [
      { value: "Web browser", answer: true },
      { value: "Text editor" },
      { value: "File manager" },
      { value: "Media player" },
    ],
  },
  {
    question: "What type of device is a Fitbit?",
    options: [
      { value: "Wearable fitness tracker", answer: true },
      { value: "Tablet" },
      { value: "Smartphone" },
      { value: "Desktop computer" },
    ],
  },
];
