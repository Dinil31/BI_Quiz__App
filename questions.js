const quizData = [
  {
    "id": 1,
    "question": "Which level of BI maturity relies primarily on manual processes and spreadsheet-based reporting?",
    "options": [
      "Level 2: Analytical Reporting",
      "Level 1: Operational Reporting",
      "Level 3: Business Insights",
      "Level 5: Strategic BI"
    ],
    "correctIndex": 1,
    "explanation": "Level 1 (Operational Reporting) is characterized by basic reports from transactional systems, often relying on manual processes."
  },
  {
    "id": 2,
    "question": "At which BI maturity level do users begin to perform trend analysis and use predefined dashboards?",
    "options": [
      "Level 1: Operational Reporting",
      "Level 2: Analytical Reporting",
      "Level 4: Predictive Analytics",
      "Level 5: Pervasive BI"
    ],
    "correctIndex": 1,
    "explanation": "Level 2 (Analytical Reporting) introduces trend analysis and the use of dashboards."
  },
  {
    "id": 3,
    "question": "What distinguishes \"Business Insights\" (Level 3) from lower maturity levels?",
    "options": [
      "The use of real-time data only",
      "Users begin asking \"why\" questions and doing ad hoc analysis",
      "The use of predictive AI models",
      "Reliance on manual data entry"
    ],
    "correctIndex": 1,
    "explanation": "Level 3 moves beyond 'what happened' to 'why it happened', involving ad hoc analysis."
  },
  {
    "id": 4,
    "question": "Which BI maturity level involves the integration of data science and statistical modeling?",
    "options": [
      "Analytical Reporting",
      "Business Insights",
      "Predictive Analytics",
      "Operational Reporting"
    ],
    "correctIndex": 2,
    "explanation": "Predictive Analytics (Level 4) is defined by the use of statistical models and data science to forecast future trends."
  },
  {
    "id": 5,
    "question": "What is the defining characteristic of \"Pervasive BI / Strategic BI\"?",
    "options": [
      "It is used only by top executives",
      "It is embedded across all departments with real-time data",
      "It relies on external data sources only",
      "It focuses on historical annual reports"
    ],
    "correctIndex": 1,
    "explanation": "Pervasive BI means intelligence is available to everyone in the organization, often in real-time."
  },
  {
    "id": 6,
    "question": "Which of the following is a key factor impacting BI maturity involving \"availability of modern tools\"?",
    "options": [
      "Data Quality",
      "Leadership Support",
      "Technology Infrastructure",
      "Organizational Strategy"
    ],
    "correctIndex": 2,
    "explanation": "Technology Infrastructure refers to the hardware and software tools available to support BI."
  },
  {
    "id": 7,
    "question": "How does \"Low Data Literacy\" significantly challenge BI maturity?",
    "options": [
      "It increases the cost of software",
      "It limits the adoption and trust in BI tools among staff",
      "It causes data security breaches",
      "It prevents the use of cloud storage"
    ],
    "correctIndex": 1,
    "explanation": "If staff cannot understand or interpret data (low literacy), they will not adopt or trust the BI tools."
  },
  {
    "id": 8,
    "question": "What is the consequence of \"Poor Data Governance\" in an organization?",
    "options": [
      "Slower internet speeds",
      "Inconsistent reporting and compliance issues",
      "Excessive executive buy-in",
      "Reduced software licensing costs"
    ],
    "correctIndex": 1,
    "explanation": "Poor governance leads to data that is not standardized or regulated, causing inconsistencies and compliance risks."
  },
  {
    "id": 9,
    "question": "Which solution is recommended to overcome \"Siloed Data Sources\"?",
    "options": [
      "Adopt a Unified Data Strategy (Data Lakes/Warehouses)",
      "Use spreadsheets for all departments",
      "Restrict data access to management",
      "Focus only on financial data"
    ],
    "correctIndex": 0,
    "explanation": "A Unified Data Strategy integrates disparate sources into a central repository like a Data Lake or Warehouse."
  },
  {
    "id": 10,
    "question": "To build a data-driven culture, what specific solution is suggested in the slides?",
    "options": [
      "Outsource all analytics",
      "Invest in Training and Change Management",
      "Reduce the number of data sources",
      "Buy the most expensive software"
    ],
    "correctIndex": 1,
    "explanation": "Culture is built through people; training and change management are essential to shift mindsets."
  },
  {
    "id": 11,
    "question": "What is the primary definition of a \"BI Strategy\"?",
    "options": [
      "A list of software to purchase",
      "An outline of how data will be collected, managed, and analyzed to drive decisions",
      "A plan to hire more IT staff",
      "A marketing campaign for data products"
    ],
    "correctIndex": 1,
    "explanation": "BI Strategy is the roadmap for leveraging data to achieve business goals."
  },
  {
    "id": 12,
    "question": "Which Critical Success Factor (CSF) ensures that BI efforts target measurable outcomes?",
    "options": [
      "Scalable Architecture",
      "Clear Business Objectives",
      "Skilled Team",
      "User Involvement"
    ],
    "correctIndex": 1,
    "explanation": "Clear Business Objectives ensure that BI initiatives are aligned with actual business needs and have measurable goals."
  },
  {
    "id": 13,
    "question": "Why is \"Executive Sponsorship\" considered a Critical Success Factor?",
    "options": [
      "Executives are the only users of BI",
      "It ensures alignment with strategic goals and secures necessary resources",
      "Executives have the most time to analyze data",
      "It is required by law"
    ],
    "correctIndex": 1,
    "explanation": "Executive sponsors provide the authority, budget, and strategic alignment needed for success."
  },
  {
    "id": 14,
    "question": "Which component of the BI Framework is responsible for \"cleansing, transforming, and loading data\"?",
    "options": [
      "Data Storage",
      "Data Modeling",
      "ETL",
      "Presentation Layer"
    ],
    "correctIndex": 2,
    "explanation": "ETL stands for Extract, Transform, Load."
  },
  {
    "id": 15,
    "question": "In the BI Framework, what acts as the central repository for structured and unstructured data?",
    "options": [
      "Operational Database",
      "Data Warehouse / Data Lake",
      "ETL Tool",
      "Presentation Layer"
    ],
    "correctIndex": 1,
    "explanation": "Data Warehouses and Data Lakes are designed to be the central repositories for analysis."
  },
  {
    "id": 16,
    "question": "Which layer of the BI Framework includes tools like Power BI and Tableau?",
    "options": [
      "Data Sources",
      "Data Storage",
      "BI Tools & Analytics",
      "ETL"
    ],
    "correctIndex": 2,
    "explanation": "These are visualization and analytics tools used in the presentation/analytics layer."
  },
  {
    "id": 17,
    "question": "Which BI implementation target aims to \"identify inefficiencies and optimize operations\"?",
    "options": [
      "Customer Insights",
      "Cost Reduction",
      "Regulatory Compliance",
      "Enhanced Reporting"
    ],
    "correctIndex": 1,
    "explanation": "Optimizing operations and identifying inefficiencies directly leads to Cost Reduction."
  },
  {
    "id": 18,
    "question": "What is the goal of \"Self-Service BI\"?",
    "options": [
      "To make users dependent on IT support",
      "To empower users with access to data without IT dependency",
      "To automate all decision-making",
      "To eliminate the need for data warehouses"
    ],
    "correctIndex": 1,
    "explanation": "Self-Service BI allows business users to generate their own reports and insights."
  },
  {
    "id": 19,
    "question": "Which BPM component tracks outcomes using metrics and KPIs?",
    "options": [
      "Strategic Planning",
      "Performance Measurement",
      "Business Modeling",
      "Forecasting"
    ],
    "correctIndex": 1,
    "explanation": "Performance Measurement is specifically about tracking progress using quantifiable metrics."
  },
  {
    "id": 20,
    "question": "Which BPM component is responsible for \"simulating scenarios and resource allocation\"?",
    "options": [
      "Monitoring and Reporting",
      "Business Modeling",
      "Strategic Planning",
      "Analytical Applications"
    ],
    "correctIndex": 1,
    "explanation": "Business Modeling involves creating models to simulate different business scenarios."
  },
  {
    "id": 21,
    "question": "What is the first step in typically deploying a BPM system?",
    "options": [
      "Identify KPIs",
      "Define strategic objectives",
      "Use dashboards",
      "Analyze data"
    ],
    "correctIndex": 1,
    "explanation": "You must define what you want to achieve (Strategic Objectives) before you can measure it."
  },
  {
    "id": 22,
    "question": "Which of the following is NOT a purpose of a performance measurement system?",
    "options": [
      "Provide accountability",
      "Align employee activities with strategy",
      "Increase data storage costs",
      "Identify areas for improvement"
    ],
    "correctIndex": 2,
    "explanation": "Increasing costs is never the purpose of a business system."
  },
  {
    "id": 23,
    "question": "\"Employee Training Hours\" and \"Turnover Rate\" are examples of which type of KPI?",
    "options": [
      "Financial KPIs",
      "Customer KPIs",
      "Learning & Growth KPIs",
      "Internal Process KPIs"
    ],
    "correctIndex": 2,
    "explanation": "These metrics relate to the workforce's capacity and development, which falls under Learning & Growth."
  },
  {
    "id": 24,
    "question": "Which Balanced Scorecard perspective focuses on satisfaction, loyalty, and market share?",
    "options": [
      "Financial Perspective",
      "Customer Perspective",
      "Internal Business Processes",
      "Learning and Growth"
    ],
    "correctIndex": 1,
    "explanation": "These are direct measures of the customer experience and market standing."
  },
  {
    "id": 25,
    "question": "Which Balanced Scorecard perspective is concerned with \"innovation and operational efficiency\"?",
    "options": [
      "Financial Perspective",
      "Customer Perspective",
      "Internal Business Processes",
      "Organization Capacity"
    ],
    "correctIndex": 2,
    "explanation": "Internal Business Processes focus on how well the business runs its operations."
  },
  {
    "id": 26,
    "question": "In the context of Dashboards vs. Scorecards, which tool focuses on \"Real-time monitoring\"?",
    "options": [
      "Scorecards",
      "Dashboards",
      "Both",
      "Neither"
    ],
    "correctIndex": 1,
    "explanation": "Dashboards are designed for at-a-glance, often real-time monitoring of current status."
  },
  {
    "id": 27,
    "question": "Who is the primary audience for a Balanced Scorecard?",
    "options": [
      "Operational staff",
      "Executives and managers",
      "IT support",
      "Customers"
    ],
    "correctIndex": 1,
    "explanation": "Scorecards are strategic management tools used by executives to track long-term goals."
  },
  {
    "id": 28,
    "question": "Which form of Business Analytics answers the question \"Why did sales drop?\"",
    "options": [
      "Descriptive Analytics",
      "Diagnostic Analytics",
      "Predictive Analytics",
      "Prescriptive Analytics"
    ],
    "correctIndex": 1,
    "explanation": "Diagnostic Analytics looks at past data to determine the cause of an event."
  },
  {
    "id": 29,
    "question": "Which form of Business Analytics involves \"forecasting using ML models\"?",
    "options": [
      "Descriptive Analytics",
      "Diagnostic Analytics",
      "Predictive Analytics",
      "Prescriptive Analytics"
    ],
    "correctIndex": 2,
    "explanation": "Predictive Analytics uses models to forecast future outcomes."
  },
  {
    "id": 30,
    "question": "Which of the following is an alternative name for Data Mining?",
    "options": [
      "Data Entry",
      "Knowledge Discovery in Databases (KDD)",
      "Data Storage",
      "Data Creation"
    ],
    "correctIndex": 1,
    "explanation": "KDD is the formal process of which Data Mining is a key step."
  },
  {
    "id": 31,
    "question": "In the KDD process, what step immediately follows \"Data Mining\"?",
    "options": [
      "Data Cleaning",
      "Pattern Evaluation/Presentation",
      "Data Selection",
      "Transformation"
    ],
    "correctIndex": 1,
    "explanation": "After mining patterns, you must evaluate and present them to make them useful."
  },
  {
    "id": 32,
    "question": "According to the \"Pyramid of Decision Making,\" what sits at the very base?",
    "options": [
      "Data Mining",
      "Data Sources",
      "Data Exploration",
      "Decision Making"
    ],
    "correctIndex": 1,
    "explanation": "Data Sources (Raw Data) form the foundation upon which everything else is built."
  },
  {
    "id": 33,
    "question": "Which of the following is considered an \"Advanced data set\" for mining?",
    "options": [
      "Relational database",
      "Data streams and sensor data",
      "Transactional database",
      "Data warehouse"
    ],
    "correctIndex": 1,
    "explanation": "Streams and sensor data are complex, high-velocity data types compared to traditional static databases."
  },
  {
    "id": 34,
    "question": "\"Finding models that describe and distinguish classes\" refers to which data mining functionality?",
    "options": [
      "Characterization",
      "Classification",
      "Association",
      "Clustering"
    ],
    "correctIndex": 1,
    "explanation": "Classification involves distinguishing between defined classes (e.g., 'Spam' vs 'Not Spam')."
  },
  {
    "id": 35,
    "question": "Which functionality identifies items that frequently appear together in a dataset?",
    "options": [
      "Prediction",
      "Association",
      "Clustering",
      "Regression"
    ],
    "correctIndex": 1,
    "explanation": "Association rules (like Market Basket Analysis) find relationships between items."
  },
  {
    "id": 36,
    "question": "\"Privacy-preserving data mining\" is a major challenge related to:",
    "options": [
      "Mining methodology",
      "User interaction",
      "Data Mining and Society",
      "Efficiency"
    ],
    "correctIndex": 2,
    "explanation": "This is a societal and ethical challenge regarding how personal data is used."
  },
  {
    "id": 37,
    "question": "Which technique assigns items to predefined categories?",
    "options": [
      "Clustering",
      "Classification",
      "Regression",
      "Association"
    ],
    "correctIndex": 1,
    "explanation": "Classification assigns data to known labels (categories)."
  },
  {
    "id": 38,
    "question": "Which technique is used to predict continuous numeric values?",
    "options": [
      "Classification",
      "Regression",
      "Clustering",
      "Anomaly Detection"
    ],
    "correctIndex": 1,
    "explanation": "Regression models predict numbers (e.g., price, temperature), whereas classification predicts categories."
  },
  {
    "id": 39,
    "question": "Which of the following is an Unsupervised Learning technique?",
    "options": [
      "Decision Trees",
      "Support Vector Machines",
      "Clustering",
      "Naïve Bayes"
    ],
    "correctIndex": 2,
    "explanation": "Clustering does not use labeled data; it finds natural groupings on its own."
  },
  {
    "id": 40,
    "question": "What is the primary goal of \"Dimensionality Reduction\"?",
    "options": [
      "To increase the number of data points",
      "To reduce data complexity while retaining patterns",
      "To label data manually",
      "To create more clusters"
    ],
    "correctIndex": 1,
    "explanation": "It simplifies the data by reducing the number of variables (dimensions) to make analysis easier."
  },
  {
    "id": 41,
    "question": "Which decision type is \"unique, complex, and unstructured\"?",
    "options": [
      "Programmed Decision",
      "Operational Decision",
      "Non-Programmed Decision",
      "Tactical Decision"
    ],
    "correctIndex": 2,
    "explanation": "Non-programmed decisions deal with novel, ill-defined problems."
  },
  {
    "id": 42,
    "question": "Operational decisions are typically:",
    "options": [
      "Long-term and unstructured",
      "Medium-term and semi-structured",
      "Short-term, routine, and structured",
      "Creative and complex"
    ],
    "correctIndex": 2,
    "explanation": "Operational decisions are day-to-day, repetitive tasks with clear rules."
  },
  {
    "id": 43,
    "question": "Which phase of decision-making involves \"identifying the problem\"?",
    "options": [
      "Intelligence Phase",
      "Design Phase",
      "Choice Phase",
      "Implementation Phase"
    ],
    "correctIndex": 0,
    "explanation": "The Intelligence phase involves searching the environment for conditions calling for a decision."
  },
  {
    "id": 44,
    "question": "Which phase of decision-making involves \"generating and simulating possible alternatives\"?",
    "options": [
      "Intelligence Phase",
      "Design Phase",
      "Choice Phase",
      "Feedback Phase"
    ],
    "correctIndex": 1,
    "explanation": "The Design phase is where you invent, develop, and analyze possible courses of action."
  },
  {
    "id": 45,
    "question": "Which strategy relies on \"personal judgment, experience, and intuition\"?",
    "options": [
      "Rational Decision-Making",
      "Intuitive Decision-Making",
      "Data-Driven Decision-Making",
      "Collaborative Decision-Making"
    ],
    "correctIndex": 1,
    "explanation": "Intuitive decision making relies on 'gut feel' and experience rather than data analysis."
  },
  {
    "id": 46,
    "question": "Which strategy focuses on \"small, step-by-step adjustments\" rather than risky decisions?",
    "options": [
      "Rational Approach",
      "Incremental (Adaptive) Decision-Making",
      "Heuristic Approach",
      "Collaborative Approach"
    ],
    "correctIndex": 1,
    "explanation": "Incrementalism (muddling through) involves making small changes to avoid major mistakes."
  },
  {
    "id": 47,
    "question": "Which type of DSS is driven by \"documents and unstructured text\"?",
    "options": [
      "Data-Driven DSS",
      "Model-Driven DSS",
      "Document-Driven DSS",
      "Communication-Driven DSS"
    ],
    "correctIndex": 2,
    "explanation": "Document-Driven DSS manages and retrieves unstructured information like reports and web pages."
  },
  {
    "id": 48,
    "question": "Early DSS in the 1970s were primarily:",
    "options": [
      "Web-based and collaborative",
      "Model-driven and spreadsheet-based",
      "AI-powered and real-time",
      "Data warehouse integrated"
    ],
    "correctIndex": 1,
    "explanation": "The 1970s era of DSS focused on financial models and early spreadsheet-like calculations."
  },
  {
    "id": 49,
    "question": "Modern DSS (2010s–Present) are characterized by:",
    "options": [
      "Basic spreadsheets",
      "AI-powered, predictive, and real-time capabilities",
      "Standalone databases",
      "Manual reporting"
    ],
    "correctIndex": 1,
    "explanation": "Modern DSS leverages Big Data, AI, and real-time analytics."
  },
  {
    "id": 50,
    "question": "How does DSS support the \"Choice Phase\" of decision-making?",
    "options": [
      "By identifying problems",
      "By evaluating and ranking alternatives using models",
      "By executing the decision",
      "By collecting raw data"
    ],
    "correctIndex": 1,
    "explanation": "In the Choice phase, DSS helps select the best option by ranking or optimizing alternatives."
  },
  {
    "id": 51,
    "question": "In BI Architecture, what captures day-to-day transactions (e.g., POS systems)?",
    "options": [
      "Data Warehouse",
      "Operational Data Sources",
      "OLAP Tools",
      "Dashboards"
    ],
    "correctIndex": 1,
    "explanation": "Operational Data Sources (OLTP) handle daily business transactions."
  },
  {
    "id": 52,
    "question": "Which tool is used to \"clean, transform, and load data\"?",
    "options": [
      "OLAP",
      "ETL",
      "Dashboard",
      "Data Mining"
    ],
    "correctIndex": 1,
    "explanation": "ETL tools are responsible for data integration and preparation."
  },
  {
    "id": 53,
    "question": "Which capability of a BI Platform allows non-technical users to explore data independently?",
    "options": [
      "Data Integration",
      "Self-Service BI",
      "Security Management",
      "Data Cleansing"
    ],
    "correctIndex": 1,
    "explanation": "Self-Service features are designed for business users, not IT staff."
  },
  {
    "id": 54,
    "question": "Which type of report is used for \"daily or weekly monitoring of activities\"?",
    "options": [
      "Strategic Report",
      "Tactical Report",
      "Operational Report",
      "External Report"
    ],
    "correctIndex": 2,
    "explanation": "Operational reports cover short-term, detailed activities."
  },
  {
    "id": 55,
    "question": "Which OLAP type stores pre-aggregated data in a multidimensional cube?",
    "options": [
      "ROLAP",
      "MOLAP",
      "HOLAP",
      "SOLAP"
    ],
    "correctIndex": 1,
    "explanation": "MOLAP (Multidimensional OLAP) uses specialized cube storage for speed."
  },
  {
    "id": 56,
    "question": "What is the main advantage of MOLAP?",
    "options": [
      "It handles unlimited data volumes",
      "It uses standard relational tables",
      "High query performance due to pre-calculation",
      "No storage overhead"
    ],
    "correctIndex": 2,
    "explanation": "Because data is pre-aggregated in the cube, retrieval is extremely fast."
  },
  {
    "id": 57,
    "question": "What is a disadvantage of ROLAP?",
    "options": [
      "It cannot handle large data",
      "It requires data duplication",
      "Slower query performance compared to MOLAP",
      "It uses cubes"
    ],
    "correctIndex": 2,
    "explanation": "ROLAP queries the relational database directly, which can be slower for complex aggregations."
  },
  {
    "id": 58,
    "question": "Which OLAP type is a \"Hybrid\" balancing speed and scalability?",
    "options": [
      "MOLAP",
      "ROLAP",
      "HOLAP",
      "DOLAP"
    ],
    "correctIndex": 2,
    "explanation": "HOLAP (Hybrid OLAP) combines the scalability of ROLAP with the speed of MOLAP."
  },
  {
    "id": 59,
    "question": "Which system is \"Write-heavy\" (insert, update, delete)?",
    "options": [
      "OLAP",
      "OLTP",
      "Data Warehouse",
      "Dashboard"
    ],
    "correctIndex": 1,
    "explanation": "OLTP (Online Transaction Processing) is designed for frequent data modifications."
  },
  {
    "id": 60,
    "question": "Which system is \"Read-heavy\" and used for analysis?",
    "options": [
      "OLAP",
      "OLTP",
      "POS System",
      "Order Entry System"
    ],
    "correctIndex": 0,
    "explanation": "OLAP (Online Analytical Processing) is optimized for reading and querying data."
  },
  {
    "id": 61,
    "question": "What is the definition of \"Mean\"?",
    "options": [
      "The middle value when sorted",
      "The total sum divided by the number of values",
      "The most frequent value",
      "The range of values"
    ],
    "correctIndex": 1,
    "explanation": "The Mean is the arithmetic average."
  },
  {
    "id": 62,
    "question": "Which descriptive statistic represents the \"most frequent value\"?",
    "options": [
      "Mean",
      "Median",
      "Mode",
      "Variance"
    ],
    "correctIndex": 2,
    "explanation": "The Mode is the value that appears most often in a dataset."
  },
  {
    "id": 63,
    "question": "The equation Y = a + bX + \u03b5 represents which model?",
    "options": [
      "Linear Regression",
      "Multiple Regression",
      "Logistic Regression",
      "K-Means Clustering"
    ],
    "correctIndex": 0,
    "explanation": "This is the standard formula for Simple Linear Regression."
  },
  {
    "id": 64,
    "question": "In the linear regression equation, what does 'b' represent?",
    "options": [
      "The intercept",
      "The error term",
      "The slope (change in Y per unit change in X)",
      "The dependent variable"
    ],
    "correctIndex": 2,
    "explanation": "b is the coefficient or slope, indicating the relationship strength."
  },
  {
    "id": 65,
    "question": "Which regression type is used when the outcome is binary (e.g., Yes/No)?",
    "options": [
      "Linear Regression",
      "Multiple Linear Regression",
      "Logistic Regression",
      "Polynomial Regression"
    ],
    "correctIndex": 2,
    "explanation": "Logistic Regression predicts the probability of a binary outcome."
  },
  {
    "id": 66,
    "question": "Which of the following is a step in the K-Means algorithm?",
    "options": [
      "Draw a line of best fit",
      "Assign every item to its nearest cluster center",
      "Calculate the regression slope",
      "Create a decision tree"
    ],
    "correctIndex": 1,
    "explanation": "The core step of K-Means is assigning points to the closest centroid."
  },
  {
    "id": 67,
    "question": "What is the Manhattan Distance formula between points A and B?",
    "options": [
      "((x1-x2)^2 + (y1-y2)^2)^(1/2)",
      "|x1 - x2| + |y1 - y2|",
      "(x1 * x2) + (y1 * y2)",
      "|x1 - x2| - |y1 - y2|"
    ],
    "correctIndex": 1,
    "explanation": "Manhattan Distance sums the absolute differences of the coordinates."
  },
  {
    "id": 68,
    "question": "If q=2 in the Minkowski distance formula, which distance is calculated?",
    "options": [
      "Manhattan Distance",
      "Euclidean Distance",
      "Hamming Distance",
      "Chebyshev Distance"
    ],
    "correctIndex": 1,
    "explanation": "Euclidean distance is the 'L2 norm', or Minkowski distance with q=2."
  },
  {
    "id": 69,
    "question": "In K-Means clustering, when do you stop the iterations?",
    "options": [
      "When the error term is zero",
      "When there are no more new cluster assignments or means stabilize",
      "After exactly 10 iterations",
      "When the user gets tired"
    ],
    "correctIndex": 1,
    "explanation": "Convergence occurs when centroids no longer move or assignments don't change."
  },
  {
    "id": 70,
    "question": "Quantitative analytics involves using which type of data?",
    "options": [
      "Text and images",
      "Numerical data",
      "Audio recordings",
      "Interview transcripts"
    ],
    "correctIndex": 1,
    "explanation": "Quantitative means measuring quantity, i.e., numbers."
  },
  {
    "id": 71,
    "question": "Qualitative analytics primarily analyzes:",
    "options": [
      "Numeric data",
      "Non-numeric data (text, audio, video)",
      "Spreadsheet formulas",
      "Binary code"
    ],
    "correctIndex": 1,
    "explanation": "Qualitative data is descriptive and non-numerical."
  },
  {
    "id": 72,
    "question": "Which of the following is an example of Structured Data?",
    "options": [
      "Social media comments",
      "Interview transcripts",
      "Sales records in a relational database",
      "Email body text"
    ],
    "correctIndex": 2,
    "explanation": "Sales records fit into defined rows and columns."
  },
  {
    "id": 73,
    "question": "What is a characteristic of Unstructured Data?",
    "options": [
      "Organized in rows and columns",
      "Easily searchable in SQL databases",
      "No predefined format (e.g., text, video)",
      "Primarily numeric"
    ],
    "correctIndex": 2,
    "explanation": "Unstructured data lacks a data model (e.g., free text)."
  },
  {
    "id": 74,
    "question": "What does \"Source Evaluation\" check for?",
    "options": [
      "Spelling mistakes",
      "Authenticity, accuracy, and bias",
      "Data file size",
      "Number of rows"
    ],
    "correctIndex": 1,
    "explanation": "Evaluating the source ensures the data is trustworthy and valid."
  },
  {
    "id": 75,
    "question": "What is the purpose of \"Normalization\" in data cleansing?",
    "options": [
      "To convert text to numbers",
      "To convert text to lowercase and remove punctuation",
      "To translate text to another language",
      "To delete the data"
    ],
    "correctIndex": 1,
    "explanation": "Normalization standardizes text (e.g., lowercasing) to make it consistent for analysis."
  },
  {
    "id": 76,
    "question": "Which term refers to the \"systematic classification of related terms\"?",
    "options": [
      "Taxonomy",
      "Regression",
      "Clustering",
      "ETL"
    ],
    "correctIndex": 0,
    "explanation": "Taxonomy is the science of classification (hierarchical grouping)."
  },
  {
    "id": 77,
    "question": "What does an \"Ontology\" define?",
    "options": [
      "A list of synonyms",
      "Richer structures defining concepts and their relationships in a domain",
      "A linear list of keywords",
      "A database schema"
    ],
    "correctIndex": 1,
    "explanation": "Ontologies map out complex relationships between concepts."
  },
  {
    "id": 78,
    "question": "\"If customer mentions delay \u2192 Then assign to shipping issue\" is an example of:",
    "options": [
      "Sentiment Analysis",
      "Conditional Logic",
      "Taxonomy",
      "Data Cleansing"
    ],
    "correctIndex": 1,
    "explanation": "This is a simple If-Then rule."
  },
  {
    "id": 79,
    "question": "Sentiment Analysis determines:",
    "options": [
      "The length of the text",
      "The emotional tone (positive, negative, neutral)",
      "The language of the text",
      "The author's age"
    ],
    "correctIndex": 1,
    "explanation": "It assesses the attitude or emotion behind the text."
  },
  {
    "id": 80,
    "question": "Which tool is mentioned for Qualitative Analysis interpretation?",
    "options": [
      "NVivo",
      "Excel",
      "SQL Server",
      "Oracle Essbase"
    ],
    "correctIndex": 0,
    "explanation": "NVivo is a specialized software for qualitative data analysis."
  },
  {
    "id": 81,
    "question": "Which BI Maturity level is characterized by \"Unified Data Strategy\"?",
    "options": [
      "It is a challenge, not a level",
      "It is a potential solution for achieving maturity",
      "Level 1",
      "Level 2"
    ],
    "correctIndex": 1,
    "explanation": "Unified Data Strategy is the solution to Siloed Data, not a level itself."
  },
  {
    "id": 82,
    "question": "What does \"KDD\" stand for?",
    "options": [
      "Key Data Discovery",
      "Knowledge Discovery in Databases",
      "Knowledge Data Design",
      "Key Decision Design"
    ],
    "correctIndex": 1,
    "explanation": "The standard acronym for the data mining process."
  },
  {
    "id": 83,
    "question": "In the \"Pyramid of Decision Making,\" what comes immediately after \"Data Exploration\"?",
    "options": [
      "Decision Making",
      "Data Mining",
      "Data Presentation",
      "Data Preprocessing"
    ],
    "correctIndex": 1,
    "explanation": "You explore data, then mine it for patterns."
  },
  {
    "id": 84,
    "question": "Which of the following is NOT a phase in the KDD process?",
    "options": [
      "Selection",
      "Transformation",
      "Data Mining",
      "Hardware Installation"
    ],
    "correctIndex": 3,
    "explanation": "Hardware installation is infrastructure, not part of the KDD analytics process."
  },
  {
    "id": 85,
    "question": "\"Market Basket Analysis\" is a typical application of:",
    "options": [
      "Regression",
      "Association Rule Mining",
      "Classification",
      "Anomaly Detection"
    ],
    "correctIndex": 1,
    "explanation": "It finds associations between products bought together."
  },
  {
    "id": 86,
    "question": "Which type of decision requires \"creativity, analysis of external factors, and forecasting\"?",
    "options": [
      "Operational Decision",
      "Strategic Decision",
      "Programmed Decision",
      "Tactical Decision"
    ],
    "correctIndex": 1,
    "explanation": "Strategic decisions are long-term, complex, and creative."
  },
  {
    "id": 87,
    "question": "Which decision-making approach involves \"multiple stakeholders or departments\"?",
    "options": [
      "Rational Approach",
      "Collaborative/Group Decision-Making",
      "Intuitive Approach",
      "Heuristic Approach"
    ],
    "correctIndex": 1,
    "explanation": "Collaborative decision making is defined by group involvement."
  },
  {
    "id": 88,
    "question": "\"What-if analysis\" is primarily used in which DSS phase?",
    "options": [
      "Intelligence Phase",
      "Design Phase",
      "Implementation Phase",
      "Feedback Phase"
    ],
    "correctIndex": 1,
    "explanation": "In the Design phase, you test different scenarios (What-If) to see outcomes."
  },
  {
    "id": 89,
    "question": "Which DSS type allows managers to conduct \"predictive modeling\"?",
    "options": [
      "Document-Driven",
      "Model-Driven",
      "Communication-Driven",
      "Passive DSS"
    ],
    "correctIndex": 1,
    "explanation": "Model-driven DSS uses statistical or financial models to predict outcomes."
  },
  {
    "id": 90,
    "question": "Which of the following represents a \"Tactical Report\"?",
    "options": [
      "Daily sales transaction list",
      "Mid-term budget and performance report",
      "5-year market share forecast",
      "Real-time server status"
    ],
    "correctIndex": 1,
    "explanation": "Tactical reports cover medium-term management issues like budgets."
  },
  {
    "id": 91,
    "question": "What is the main benefit of \"Mobile BI\"?",
    "options": [
      "Access insights anywhere, anytime",
      "Clean data automatically",
      "Create database schemas",
      "Write SQL queries"
    ],
    "correctIndex": 0,
    "explanation": "Mobile BI is about accessibility and portability."
  },
  {
    "id": 92,
    "question": "Which OLAP operation allows you to see \"detailed\" data from summary data?",
    "options": [
      "Roll-up",
      "Drill-down",
      "Slice",
      "Dice"
    ],
    "correctIndex": 1,
    "explanation": "Drill-down moves from summary to detail."
  },
  {
    "id": 93,
    "question": "Which database design is typical for OLAP systems?",
    "options": [
      "Normalized tables (3NF)",
      "Star schema or Snowflake schema",
      "Flat files",
      "Unstructured text"
    ],
    "correctIndex": 1,
    "explanation": "Star/Snowflake schemas are optimized for OLAP querying."
  },
  {
    "id": 94,
    "question": "Which distance metric is calculated as the sum of absolute differences?",
    "options": [
      "Euclidean Distance",
      "Manhattan Distance",
      "Correlation",
      "Regression"
    ],
    "correctIndex": 1,
    "explanation": "Manhattan distance is sum(|x1-x2| + ...)."
  },
  {
    "id": 95,
    "question": "In the linear regression equation Y = a + bX, what is a?",
    "options": [
      "Slope",
      "Intercept (value of Y when X=0)",
      "Error term",
      "The prediction"
    ],
    "correctIndex": 1,
    "explanation": "a is the Y-intercept."
  },
  {
    "id": 96,
    "question": "Which is a characteristic of \"High-Quality Clustering\"?",
    "options": [
      "High intra-class similarity and low inter-class similarity",
      "Low intra-class similarity and high inter-class similarity",
      "Random assignment of points",
      "All points in one cluster"
    ],
    "correctIndex": 0,
    "explanation": "Items inside a cluster should be similar (high intra) and different from other clusters (low inter)."
  },
  {
    "id": 97,
    "question": "\"Keyword spotting\" is a technique used in:",
    "options": [
      "Quantitative Analysis",
      "Data Cleansing/Interpretation of text",
      "Numerical Regression",
      "SQL Querying"
    ],
    "correctIndex": 1,
    "explanation": "Keyword spotting is a basic text analysis technique."
  },
  {
    "id": 98,
    "question": "Which relationship type indicates that \"one factor causes another\"?",
    "options": [
      "Correlational",
      "Causal",
      "Temporal",
      "Taxonomy"
    ],
    "correctIndex": 1,
    "explanation": "Causality implies a cause-and-effect relationship."
  },
  {
    "id": 99,
    "question": "Which tool is listed for \"Sentiment Analysis\"?",
    "options": [
      "MonkeyLearn",
      "Microsoft Word",
      "Calculator",
      "Paint"
    ],
    "correctIndex": 0,
    "explanation": "MonkeyLearn is a known NLP and sentiment analysis tool."
  },
  {
    "id": 100,
    "question": "\"Siloed Data Sources\" is listed as a challenge for:",
    "options": [
      "Creating simple spreadsheets",
      "Achieving Pervasive BI Maturity",
      "Writing emails",
      "Conducting interviews"
    ],
    "correctIndex": 1,
    "explanation": "Silos prevent the unified view needed for high BI maturity."
  },
  {
    "id": 101,
    "question": "\"Strategic Decisions\" are typically:",
    "options": [
      "Structured and routine",
      "Semi-structured",
      "Unstructured and long-term",
      "Automated"
    ],
    "correctIndex": 2,
    "explanation": "Strategic decisions deal with uncertain, long-term futures (unstructured)."
  },
  {
    "id": 102,
    "question": "Which BI platform capability \"connects data from internal and external sources\"?",
    "options": [
      "Data Integration",
      "Collaboration Tools",
      "Visualization",
      "Security"
    ],
    "correctIndex": 0,
    "explanation": "Integration combines data from different places."
  },
  {
    "id": 103,
    "question": "Which is an example of a \"Strategic Report\"?",
    "options": [
      "Daily attendance log",
      "Long-term planning and trend analysis",
      "Weekly sales summary",
      "Error log"
    ],
    "correctIndex": 1,
    "explanation": "Strategic reports support long-term planning."
  },
  {
    "id": 104,
    "question": "\"Data Accuracy & Quality\" is a key target for:",
    "options": [
      "Reducing internet usage",
      "BI Implementation",
      "Increasing manual work",
      "Ignoring customer feedback"
    ],
    "correctIndex": 1,
    "explanation": "High quality data is essential for successful BI."
  },
  {
    "id": 105,
    "question": "Which descriptive statistic is \"sensitive to outliers\"?",
    "options": [
      "Median",
      "Mode",
      "Mean",
      "Range"
    ],
    "correctIndex": 2,
    "explanation": "The Mean is easily pulled by extreme values (outliers)."
  },
  {
    "id": 106,
    "question": "In K-Means, the \"centroid\" represents:",
    "options": [
      "The outlier of the cluster",
      "The mean (center) of the assigned items",
      "The first point added",
      "The last point added"
    ],
    "correctIndex": 1,
    "explanation": "The centroid is the geometric center (mean) of the cluster."
  },
  {
    "id": 107,
    "question": "Which type of analytics is \"Rules-based\" or uses \"Machine learning\" to learn tone?",
    "options": [
      "Regression",
      "Sentiment Analysis",
      "Clustering",
      "ETL"
    ],
    "correctIndex": 1,
    "explanation": "Sentiment analysis uses ML or rules to detect tone."
  },
  {
    "id": 108,
    "question": "\"Operational Reporting\" (Level 1 BI Maturity) is characterized by:",
    "options": [
      "Real-time AI",
      "Basic reports from transactional systems",
      "Predictive modeling",
      "Strategic forecasting"
    ],
    "correctIndex": 1,
    "explanation": "Level 1 is the most basic form of reporting."
  },
  {
    "id": 109,
    "question": "What helps \"empower users with access to data without IT dependency\"?",
    "options": [
      "Data Governance",
      "Self-Service BI",
      "Data Silos",
      "Complex SQL"
    ],
    "correctIndex": 1,
    "explanation": "Self-Service removes the IT bottleneck."
  },
  {
    "id": 110,
    "question": "Which is NOT a component of the BI Framework?",
    "options": [
      "Data Sources",
      "ETL",
      "Data Storage",
      "Employee Cafeteria"
    ],
    "correctIndex": 3,
    "explanation": "The cafeteria is not part of the software/data architecture."
  }
];