// Comprehensive database of 30+ Microservices, AI Pipelines & Systems managed by Surjeet Singh

export const projectCategories = [
  { id: "all", label: "All Systems (30+)" },
  { id: "medical-ecg", label: "Medical & ECG APIs" },
  { id: "ai-vision", label: "AI & Computer Vision" },
  { id: "iot-telemetry", label: "IoT & Sensor Telemetry" },
  { id: "bms-infra", label: "BMS & Server Infra" },
];

export const projectsData = [
  // 1. FTP Server Setup
  {
    id: "spr138",
    packageId: "SPR138",
    projectId: "CT-PR-0038",
    title: "SFTP & FTP Medical Data Ingestion Server",
    category: "medical-ecg",
    status: "Running (Docker)",
    priority: "HIGH",
    migrationStatus: "Migrated to Docker",
    description: "Containerized high-security SFTP/FTP server setup designed to receive raw 12-Lead ECG telemetry directly from hospital equipment with automated directory watching and file validation.",
    architecture: "Docker Container -> FTP Port Monitor -> Security Layer -> Automated Storage Pipeline",
    tech: ["Docker", "FTP/SFTP", "Linux Security", "Network Engineering"],
    github: "https://github.com/CriterionWorks/SPR-138-FTP-Server-Data-Receiver",
    highlights: [
      "Automated directory polling for incoming binary/XML medical files",
      "Isolated container environment preventing host system vulnerability",
      "Zero-data-loss packet capture during peak hospital operations"
    ]
  },
  // 2. GE Machine ECG Report UI & API Integration
  {
    id: "spr139",
    packageId: "SPR139",
    projectId: "CT-PR-0038",
    title: "GE MAC 2000 ECG Dual API Integration & Parser",
    category: "medical-ecg",
    status: "Running (Docker + Flask)",
    priority: "HIGH",
    migrationStatus: "Migrated to Docker",
    description: "Automated real-time data pipeline monitoring FTP servers for new GE MAC 2000 12-lead ECG XML files, parsing waveform data into structured JSON, and uploading records to external hospital HIS APIs with fail-proof queueing.",
    architecture: "GE MAC 2000 -> FTP Server -> XML-to-JSON Parser -> DB Fallback Queue -> Hospital HIS API",
    tech: ["Docker", "Python", "Flask", "XML/JSON", "Database Queue", "REST API"],
    github: "https://github.com/CriterionWorks/SPR-139-XML-JSON-GE-ECG-Integration",
    highlights: [
      "100% automated real-time conversion from complex XML to JSON",
      "Debugged database queue & Docker networking for zero-downtime reliability",
      "Supports 3-in-1 format ingestion (GE, GE Process II Lead, Philips ECG)"
    ]
  },
  // 3. ECG Monitoring Dashboard
  {
    id: "spr141",
    packageId: "SPR141",
    projectId: "CT-PR-0038",
    title: "Real-Time ECG Monitoring Web Dashboard",
    category: "medical-ecg",
    status: "Running (Docker)",
    priority: "HIGH",
    migrationStatus: "Migrated",
    description: "Centralized web application providing live visualization of multi-lead ECG signals, historical report browsing, automated alert notifications, and PDF report downloads for ICU clinicians.",
    architecture: "ECG Telemetry -> WebSocket/REST Gateway -> Web Canvas Renderer -> Clinical UI",
    tech: ["Docker", "Flask", "JavaScript", "WebSockets", "Canvas API"],
    github: "https://github.com/CriterionWorks/SPR-141-ECG-Monitoring-Dashboard",
    highlights: [
      "Low-latency real-time waveform rendering",
      "Multi-patient concurrent status tracking",
      "Exportable patient report history"
    ]
  },
  // 4. Philips ECG & Dual API Integration
  {
    id: "spr140",
    packageId: "SPR140",
    projectId: "CT-PR-0185",
    title: "Philips ECG Dual API Data Pipeline",
    category: "medical-ecg",
    status: "Running (Docker)",
    priority: "HIGH",
    migrationStatus: "Migrated to Docker",
    description: "Automated ingestion pipeline continuously processing diagnostic JSON files from Philips ECG equipment, running quality validation algorithms, and transmitting structured records to external medical endpoints.",
    architecture: "Philips Hardware -> File Monitor -> Data Validation Microservice -> HIS API Gateway",
    tech: ["Docker", "Python", "REST API", "Microservices", "JSON Parsing"],
    github: "https://github.com/CriterionWorks/SPR-140-Philips-ECG-Dual-API-Integration",
    highlights: [
      "Automated file watch system with exponential backoff retries",
      "Seamless integration with legacy hospital backend infrastructure",
      "Containerized microservice deployed with health checks"
    ]
  },
  // 5. All Device Status Manager
  {
    id: "device-status-mgr",
    packageId: "AllDeviceStatusManager",
    projectId: "CT-PR-0185",
    title: "All Device Status Manager (15+ Hospital Devices)",
    category: "iot-telemetry",
    status: "Running (Docker + Flask)",
    priority: "HIGH",
    migrationStatus: "Migrated",
    description: "Comprehensive Docker-based web platform monitoring live connectivity, heartbeats, and telemetry across 15+ medical devices (Ventilators, Patient Monitors, Infusion/Urine Pumps, Radar Monitors, Radiometer ABG, BCG, Biometric Door, GPS).",
    architecture: "15+ Hardware Devices -> Socket/HTTP Collectors -> Flask Aggregator -> Web Control Dashboard",
    tech: ["Docker", "Flask", "Python", "REST APIs", "Telemetry", "WebSockets"],
    github: "",
    highlights: [
      "Monitors 15+ distinct medical & environmental hardware device types",
      "Real-time visual alerts for disconnected or malfunctioning equipment",
      "Centralized diagnostic portal for hospital biomedical engineering teams"
    ]
  },
  // 6. Audio Processing API
  {
    id: "spr147",
    packageId: "SPR147",
    projectId: "CT-PR-0050",
    title: "Acoustic & Vocal Speech Processing API",
    category: "ai-vision",
    status: "Running (Docker + Flask)",
    priority: "HIGH",
    migrationStatus: "Migrated to Docker",
    description: "Reverse proxy API microservice that receives audio files for acoustic and speech analysis, executes feature extraction algorithms, and returns structured JSON analysis along with generated PDF reports.",
    architecture: "Reverse Proxy -> Audio Ingestion API -> DSP Feature Extraction -> Report Generator",
    tech: ["Docker", "Python", "Flask", "Audio DSP", "PDF Generator", "Reverse Proxy"],
    github: "https://github.com/CriterionWorks/SPR-147-Audio-Processing-API",
    highlights: [
      "High-throughput reverse proxy handling concurrent voice uploads",
      "Automated acoustic spectrum analysis & metric calculation",
      "Generates downloadable, clinical-ready PDF diagnostic summaries"
    ]
  },
  // 7. ECG Image Processing Digitization API
  {
    id: "spr148",
    packageId: "SPR148",
    projectId: "CT-PR-0157",
    title: "ECG Paper Image Digitization & Progress Tracking API",
    category: "ai-vision",
    status: "Running (Docker + Flask)",
    priority: "HIGH",
    migrationStatus: "Migrated to Docker",
    description: "Computer Vision microservice that accepts paper ECG image scans (single or side-by-side comparison), extracts signal contours via grid calibration, and computes temporal progression metrics between historical scans.",
    architecture: "Image Upload -> OpenCV Grid Calibration -> Waveform Extraction -> Comparison Engine -> REST Response",
    tech: ["Docker", "Python", "OpenCV", "Flask", "Computer Vision", "Signal Digitization"],
    github: "https://github.com/CriterionWorks/SPR-148-ECG-Image-Digitization-API",
    highlights: [
      "Digitizes paper/scanned ECG prints into numerical vector signals",
      "Side-by-side comparative feature analysis for tracking patient improvement",
      "Containerized microservice architecture ready for cloud or edge"
    ]
  },
  // 8. Urine Measurements with Camera & Node-RED Pipeline
  {
    id: "urine-system",
    packageId: "Urine System",
    projectId: "CT-PR-0185",
    title: "AI Camera Urine Measurement & Data Pipeline",
    category: "iot-telemetry",
    status: "Running (Docker + Node-RED)",
    priority: "HIGH",
    migrationStatus: "Migrated",
    description: "End-to-end automated Urine Measurement System featuring camera-based fluid level estimation and a Node-RED pipeline calculating hourly patient outputs from hardware CSV logs, uploading increments securely to central HIS APIs while enforcing deduplication.",
    architecture: "Hardware Camera -> Vision Level API -> Node-RED Increment Calculator -> Hospital Central HIS",
    tech: ["Python", "Node-RED", "OpenCV", "REST API", "Deduplication Engine"],
    github: "",
    highlights: [
      "Automates fluid volume measurement via camera vision API",
      "Continuous Node-RED processing pipeline enforcing zero duplicate entries",
      "Generates hourly fluid balance charts for nursing dashboards"
    ]
  },
  // 9. IV-Fluid Data Handling & Server Synchronization
  {
    id: "iv-fluid-system",
    packageId: "IV Fluid Data",
    projectId: "CT-PR-0185",
    title: "Automated IV Fluid Monitoring & Medication Pipeline",
    category: "iot-telemetry",
    status: "Running (Docker)",
    priority: "HIGH",
    migrationStatus: "Migrated",
    description: "Automated IV fluid monitoring system processing sensor data streams to calculate exact medication dosages administered over time. Built with network timeout resilience, dynamic drug profile lookups, and duplicate suppression.",
    architecture: "Drip Sensors -> Hardware Gateway -> Rate Calculator -> Deduplication & Retry Layer -> Central API",
    tech: ["Docker", "Python", "Microservices", "Fault Tolerant Storage", "REST API"],
    github: "",
    highlights: [
      "Calculates precise cumulative dosage administered in real time",
      "Handles dynamic drug names, sensor drift, and intermittent connectivity",
      "Containerized architecture with automatic self-healing restarts"
    ]
  },
  // 10. Heart Sound & Lung Sound Analyzer API
  {
    id: "spr149",
    packageId: "SPR149",
    projectId: "CT-PR-0082",
    title: "Acoustic Heart & Lung Sound Analysis API",
    category: "ai-vision",
    status: "Running (Flask + Node-RED)",
    priority: "MEDIUM",
    migrationStatus: "Migrated",
    description: "Multi-endpoint microservice accepting digital stethoscope heart and lung audio recordings, applying bandpass filter DSP and acoustic feature extraction to generate comprehensive diagnostic reports.",
    architecture: "Audio File -> Flask API -> DSP Filter Bank -> Report Generator -> PDF / JSON Output",
    tech: ["Flask", "Node-RED", "Python", "DSP", "Audio Processing"],
    github: "",
    highlights: [
      "Distinguishes murmur patterns and respiratory crackles/wheezes",
      "Reverse proxy routing for seamless integration with mobile apps",
      "Automated structured report generation"
    ]
  },
  // 11. PPG Blood Glucose Analysis
  {
    id: "spr006",
    packageId: "SPR006",
    projectId: "CT-PR-0099",
    title: "PPG Signal Blood Glucose Analysis Engine",
    category: "ai-vision",
    status: "Running (Docker)",
    priority: "MEDIUM",
    migrationStatus: "Migrated",
    description: "Automated data analysis pipeline and API that processes raw optical Photoplethysmography (PPG) signals to non-invasively estimate blood glucose levels and cardiovascular metrics using regression models.",
    architecture: "Raw PPG Signal -> Noise Filtering -> Waveform Feature Extraction -> Regression Model -> API Endpoint",
    tech: ["Docker", "Python", "Machine Learning", "SciPy / Pandas", "REST API"],
    github: "https://github.com/CriterionWorks/SPR-006-PPG-Blood-Glucose-Analysis",
    highlights: [
      "Non-invasive glucose estimation from optical sensor data",
      "Daily automated regression statistics calculation",
      "Containerized and scheduled microservice via Cron & Flask"
    ]
  },
  // 12. Glucose Monitoring API
  {
    id: "spr150",
    packageId: "SPR150",
    projectId: "CT-PR-0099",
    title: "Continuous Glucose Monitoring Telemetry API",
    category: "iot-telemetry",
    status: "Running (Node-RED)",
    priority: "MEDIUM",
    migrationStatus: "Migrated",
    description: "Reverse proxy API endpoint accepting continuous glucose monitoring streams, validating payload parameters, parsing real-time metrics, and generating JSON analytical summaries.",
    architecture: "Sensor Input -> Node-RED Pipeline -> Validation Engine -> Database -> JSON Report",
    tech: ["Node-RED", "JSON Processing", "REST API", "Data Pipelines"],
    github: "https://github.com/CriterionWorks/SPR-150-Glucose-Monitoring-API",
    highlights: [
      "Real-time data streaming for glycemic variability analytics",
      "Lightweight Node-RED routing layer with low memory footprint",
      "Secure JSON endpoint API"
    ]
  },
  // 13. Pocket ECG API
  {
    id: "spr151",
    packageId: "SPR151",
    projectId: "CT-PR-0088",
    title: "Handheld Pocket ECG Signal Processor API",
    category: "medical-ecg",
    status: "Running (Node-RED)",
    priority: "MEDIUM",
    migrationStatus: "Migrated",
    description: "Microservice API tailored for portable handheld ECG devices, processing single-channel or 3-lead data packets into clean lead views and formatted PDF reports.",
    architecture: "Pocket Device -> Bluetooth/HTTP -> Node-RED Engine -> Signal Smoothing -> PDF Engine",
    tech: ["Node-RED", "Python", "Signal Processing", "PDF Generation"],
    github: "https://github.com/CriterionWorks/SPR-151-Pocket-ECG-API",
    highlights: [
      "Designed for low-power handheld point-of-care cardiac devices",
      "Fast signal noise removal and QRS complex identification",
      "Generates lightweight patient report files"
    ]
  },
  // 14. Wireless ECG API
  {
    id: "spr152",
    packageId: "SPR152",
    projectId: "CT-PR-0133",
    title: "Wireless Telemetry ECG Ingestion API",
    category: "medical-ecg",
    status: "Running (Node-RED)",
    priority: "MEDIUM",
    migrationStatus: "Migrated",
    description: "High-speed telemetry receiver endpoint accepting continuous wireless ECG streams over WiFi/Bluetooth, maintaining socket connections, and serving live diagnostic data.",
    architecture: "Wireless Sensor -> Node-RED WebSocket Server -> Stream Parser -> Central API",
    tech: ["Node-RED", "WebSockets", "Python", "IoT Telemetry"],
    github: "https://github.com/CriterionWorks/SPR-152-Wireless-ECG-API",
    highlights: [
      "Handles wireless packet loss recovery gracefully",
      "Real-time waveform streaming to mobile patient apps",
      "Seamless backend report compilation"
    ]
  },
  // 15. Fetal Doppler & dB Vocal Recorder API
  {
    id: "spr153",
    packageId: "SPR153",
    projectId: "CT-PR-0122",
    title: "Fetal Doppler Acoustic & dB Sound Recorder API",
    category: "ai-vision",
    status: "Running (Node-RED)",
    priority: "MEDIUM",
    migrationStatus: "Migrated",
    description: "Reverse proxy acoustic processing microservice for fetal heart sound monitors and ambient dB vocal recording devices, converting acoustic inputs into structured health indicators.",
    architecture: "Acoustic Sensor -> Node-RED Gateway -> Frequency Estimator -> JSON Report Engine",
    tech: ["Node-RED", "Audio DSP", "REST API", "JSON Processing"],
    github: "https://github.com/CriterionWorks/SPR-153-Fetal-Doppler-Vocal-Recorder-API",
    highlights: [
      "Extracts fetal heart rate (FHR) from doppler audio streams",
      "Ambient noise level logging and vocal intensity reporting",
      "Lightweight microservice deployment"
    ]
  },
  // 16. Real Time Sensor Monitoring
  {
    id: "rts-monitoring",
    packageId: "Sensor Monitoring",
    projectId: "CT-PR-0185",
    title: "Multi-Sensor IoT Telemetry & Dynamic SQL Pipeline",
    category: "iot-telemetry",
    status: "Running (Node-RED + MySQL)",
    priority: "MEDIUM",
    migrationStatus: "Migrated",
    description: "Comprehensive Node-RED workflow exposing multiple REST APIs (/api/v2/lpg, /api/v2/temperature, /api/v2/aqd) to ingest IoT sensor data into MySQL using dynamic query builders, coupled with a uibuilder dashboard.",
    architecture: "IoT Sensors -> Node-RED REST endpoints -> Dynamic SQL Builder -> MySQL -> uibuilder Dashboard",
    tech: ["Node-RED", "MySQL", "uibuilder", "Dynamic SQL", "IoT Dashboard"],
    github: "",
    highlights: [
      "Multi-parameter environmental tracking (LPG gas, Temp, Air Quality)",
      "Dynamic SQL injection protection & auto-table creation",
      "Interactive real-time web dashboard"
    ]
  },
  // 17. BMS Dashboard (Shelly)
  {
    id: "spr104",
    packageId: "SPR104",
    projectId: "CT-PR-0148",
    title: "Smart ICU Building Management System (Shelly & ESP32)",
    category: "bms-infra",
    status: "Running (Docker + Flask)",
    priority: "HIGH",
    migrationStatus: "Migrated",
    description: "Real-time IoT monitoring and hardware control system built with Python (Flask & WebSockets) and ESP32 microcontrollers, providing live ICU environment dashboards and dynamic hardware configuration dispatching.",
    architecture: "ESP32 Sensors -> WebSocket Server -> Flask Backend -> Real-Time Dashboard -> Hardware Actuators",
    tech: ["Docker", "Python", "Flask", "WebSockets", "ESP32", "IoT Control"],
    github: "https://github.com/CriterionWorks/SPR-104-BMS-Shelly",
    highlights: [
      "Zero-downtime multi-threaded TCP/Flask backend server",
      "Bi-directional WebSocket control for remote hardware switching",
      "Real-time data synchronization with central cloud APIs"
    ]
  },
  // 18. BMS Dashboard (IAQ & BIOX)
  {
    id: "spr105",
    packageId: "SPR105",
    projectId: "CT-PR-0148",
    title: "BMS Indoor Air Quality & BIOX Panel Dashboard",
    category: "bms-infra",
    status: "Running (Docker)",
    priority: "MEDIUM",
    migrationStatus: "Migrated",
    description: "Containerized environmental tracking dashboard gathering live parameters (temperature, humidity, air quality, lighting) from remote hardware panels (Raspberry Pi & BIOX panels) across hospital zones.",
    architecture: "Raspberry Pi & BIOX Panels -> Telemetry Gateway -> Dockerized Dashboard -> Web UI",
    tech: ["Docker", "Python", "Raspberry Pi", "Sensors", "Web UI"],
    github: "https://github.com/CriterionWorks/SPR-105-BMS-IAQ",
    highlights: [
      "Consolidates IAQ data across multiple hospital operating theaters",
      "Containerized microservice with fast client rendering",
      "Historical environmental trend visualization"
    ]
  },
  // 19. Philips TC35 ECG DICOM ORTHANC Setup
  {
    id: "spr109",
    packageId: "SPR109",
    projectId: "CT-PR-0185",
    title: "Philips TC35 ECG DICOM Orthanc Archive Setup",
    category: "medical-ecg",
    status: "Running (Systemd + DICOM)",
    priority: "HIGH",
    migrationStatus: "Configured & Running",
    description: "Enterprise DICOM (Orthanc) server setup and network bridge configured to receive, archive, and retrieve 12-lead ECG records directly from Philips TC35 machines across hospital networks.",
    architecture: "Philips TC35 Machine -> DICOM Protocol (C-STORE) -> Orthanc Server -> Web Explorer API",
    tech: ["Orthanc DICOM", "Systemd", "Linux Networking", "Medical PACS/DICOM"],
    github: "https://github.com/CriterionWorks/SPR-109-Philips-TC35-ECG-DICOM-Setup",
    highlights: [
      "Full compliance with DICOM imaging & waveform standards",
      "Automated storage management with web explorer preview",
      "Seamless integration with hospital PACS and HIS systems"
    ]
  },
  // 20. Baby Cry Analysis System
  {
    id: "spr106",
    packageId: "SPR106",
    projectId: "CT-PR-0190",
    title: "Baby Cry Deep Learning Acoustic Analyzer",
    category: "ai-vision",
    status: "Running (Docker + FastAPI)",
    priority: "MEDIUM",
    migrationStatus: "Migrated to Docker",
    description: "Containerized AI sound classification platform using deep acoustic neural networks to analyze infant cry audio, predict root causes (pain, hunger, discomfort), and log acoustic datasets for research.",
    architecture: "Audio File -> Mel-Spectrogram Engine -> Neural Classifier -> FastAPI Endpoint -> JSON Result",
    tech: ["Docker", "Python", "FastAPI / Flask", "Deep Learning", "PyTorch / TensorFlow", "OpenAPI"],
    github: "https://github.com/CriterionWorks/SPR-106-BabyCryAnalysisSystem",
    highlights: [
      "Acoustic spectrogram classification for infant distress reason prediction",
      "Interactive Swagger/OpenAPI documentation endpoint",
      "Dockerized microservice with SSL HTTPS deployment"
    ]
  },
  // 21. Three-Channel AC Device Status Monitor
  {
    id: "spr122",
    packageId: "SPR122",
    projectId: "CT-PR-0206",
    title: "Three-Channel AC Device Telemetry Monitor",
    category: "bms-infra",
    status: "Running (Docker + MQTT)",
    priority: "MEDIUM",
    migrationStatus: "Migrated",
    description: "IoT telemetry system providing real-time power and operational status tracking for industrial 3-phase AC hospital devices via MQTT message broker to a responsive web dashboard.",
    architecture: "Current Sensors -> ESP32 -> MQTT Broker -> Python Collector -> Real-Time Dashboard",
    tech: ["Docker", "MQTT", "Python", "IoT Telemetry", "Web Dashboards"],
    github: "https://github.com/CriterionWorks/SPR-122-Three-Channel-AC-Device-Status-Monitor",
    highlights: [
      "Real-time MQTT telemetry monitoring for high-voltage medical hardware",
      "Instant push notifications upon phase failure or power drop",
      "REST API `/api/latest` for external monitoring tool integration"
    ]
  },
  // 22. Water Level Sensor Monitor
  {
    id: "spr131",
    packageId: "SPR131",
    projectId: "CT-PR-0205",
    title: "Automated Water Reservoir Telemetry Monitor",
    category: "bms-infra",
    status: "Running (Docker)",
    priority: "MEDIUM",
    migrationStatus: "Migrated",
    description: "Dockerized IoT monitoring platform tracking real-time liquid reservoir tank levels across facility infrastructure with threshold alerts and REST API reporting.",
    architecture: "Ultrasonic Sensors -> Hardware Node -> Docker Microservice -> REST API & Dashboard",
    tech: ["Docker", "Python", "REST API", "IoT Monitoring"],
    github: "https://github.com/CriterionWorks/SPR-131-WaterLevelSensor-Integration.git",
    highlights: [
      "Continuous level monitoring preventing tank overflows or dry runs",
      "Clean REST endpoint `/api/data` for automated reporting",
      "Low resource container implementation"
    ]
  },
  // 23. Libre Glucose Data Backend API
  {
    id: "spr145",
    packageId: "SPR145",
    projectId: "CT-PR-0168",
    title: "Libre Continuous Glucose Telemetry Backend API",
    category: "medical-ecg",
    status: "Running (Docker)",
    priority: "MEDIUM",
    migrationStatus: "Migrated",
    description: "High-reliability Dockerized microservice endpoint handling Abbott Libre glucose sensor streams, parsing continuous blood sugar trends, and providing v1 REST endpoints.",
    architecture: "Continuous Sensor Stream -> REST Endpoint -> Schema Validation -> JSON Storage",
    tech: ["Docker", "Python", "REST API", "Health Telemetry"],
    github: "",
    highlights: [
      "Standardized `/api/v1/libre_glucose_data_api` response structure",
      "Containerized deployment with continuous health monitoring",
      "Secure payload validation"
    ]
  },
  // 24. PhysioSight rPPG
  {
    id: "spr107",
    packageId: "SPR107",
    projectId: "CT-PR-0187",
    title: "PhysioSight Contactless rPPG Vital Sign Estimator",
    category: "ai-vision",
    status: "Running (Python + Vision)",
    priority: "HIGH",
    migrationStatus: "Production Ready",
    description: "Contactless Remote Photoplethysmography (rPPG) Computer Vision application that estimates heart rate and respiratory vitals in real time using webcam video facial color variations.",
    architecture: "Webcam Stream -> Face Tracking (MediaPipe/OpenCV) -> Chrominance rPPG Filtering -> Heart Rate Output",
    tech: ["Python", "OpenCV", "rPPG", "MediaPipe", "Signal Processing", "Computer Vision"],
    github: "https://github.com/CriterionWorks/SPR-107-PhysioSight-rPPG",
    highlights: [
      "Contactless vital sign detection without physical skin sensors",
      "Advanced temporal chrominance signal filtering for motion artifact removal",
      "Real-time webcam inference pipeline"
    ]
  },
  // 25. FootSole Detection for GCS Measurement
  {
    id: "spr061",
    packageId: "SPR061",
    projectId: "CT-PR-0163",
    title: "Foot Sole Vision Detection for Neurological GCS Assessment",
    category: "ai-vision",
    status: "Running (YOLOv8)",
    priority: "MEDIUM",
    migrationStatus: "Production Ready",
    description: "Computer Vision pipeline utilizing trained YOLOv8 object detection models to identify foot sole reflex zones for automated Glasgow Coma Scale (GCS) clinical assessments.",
    architecture: "Camera Input -> YOLOv8 Detection -> Region-of-Interest Extraction -> Clinical Scoring Module",
    tech: ["YOLOv8", "OpenCV", "Python", "Computer Vision", "Medical AI"],
    github: "https://github.com/CriterionWorks/SPR-061-FootSoleDetectionForGCSMeasurement",
    highlights: [
      "Custom dataset training for precise anatomical foot sole localization",
      "Supports automated reflex assessment input for ICU coma scoring",
      "High accuracy under variable bed lighting conditions"
    ]
  },
  // 26. Bacterial Presence Detection using AI
  {
    id: "spr047",
    packageId: "SPR047",
    projectId: "CT-PR-0161",
    title: "Edge-AI Bacteria Colony Classification on Raspberry Pi",
    category: "ai-vision",
    status: "Running (Edge AI / Raspberry Pi)",
    priority: "HIGH",
    migrationStatus: "Deployed on Edge",
    description: "Edge AI microservice deployed on Raspberry Pi 4 that analyzes culture plate images via camera, detects bacterial growth using TensorFlow/YOLOv8, and triggers immediate audio-visual alerts.",
    architecture: "Pi Camera -> Lightweight YOLOv8 Model -> Inference Engine -> Buzzer & GPIO Alert",
    tech: ["TensorFlow", "YOLOv8", "Raspberry Pi", "Edge AI", "Python", "GPIO"],
    github: "https://github.com/Criterioninnovations/SPR047",
    highlights: [
      "Optimized INT8 quantized model for real-time edge inference on Raspberry Pi",
      "Automates microbiology culture plate growth monitoring",
      "Hardware buzzer and LED alert integration via GPIO"
    ]
  },
  // 27. Object & Coordinate Detection using Camera
  {
    id: "spr083-069",
    packageId: "SPR083 / SPR069",
    projectId: "CT-PR-0177 / CT-PR-0101",
    title: "Industrial Camera Object Detection & Spatial Coordinates",
    category: "ai-vision",
    status: "Running (OpenCV + YOLO)",
    priority: "MEDIUM",
    migrationStatus: "Production Ready",
    description: "High-precision vision system tracking physical objects via overhead camera and outputting real-time 2D/3D spatial coordinates for industrial automation.",
    architecture: "Camera Feed -> Distortion Correction -> YOLO Detection -> Coordinate Matrix Mapping",
    tech: ["OpenCV", "YOLO", "Python", "Geometry Math", "Spatial Tracking"],
    github: "https://github.com/Criterioninnovations/SPR083",
    highlights: [
      "Sub-millimeter spatial coordinate mapping from camera perspective",
      "Multi-object simultaneous tracking with low latency",
      "Integrated with hardware sorting mechanisms"
    ]
  },
  // 28. Edge-AI Medicine Strip & Pill Analyzer (Gemini Multimodal)
  {
    id: "med-strip-analyzer",
    packageId: "Pill Analyzer",
    projectId: "Personal / Criterion",
    title: "Multimodal AI Medicine Strip Analyzer (YOLOv8 + Gemini API)",
    category: "ai-vision",
    status: "Running (Generative AI)",
    priority: "HIGH",
    migrationStatus: "Production Ready",
    description: "Multimodal AI system combining YOLOv8 for pill object detection, EasyOCR for text extraction from foil strips, and Google Gemini Pro API for generating human-readable medical usage and dosage reports.",
    architecture: "Camera Image -> YOLOv8 Pill Detection -> EasyOCR Text Extraction -> Gemini Pro API -> Usage Summary",
    tech: ["YOLOv8", "EasyOCR", "Google Gemini API", "Python", "Computer Vision"],
    github: "",
    highlights: [
      "Generative AI integration transforming raw OCR into clinical summaries",
      "Detects pill counts, dosage schedules, and warning labels automatically",
      "Published showcase project highlighting modern GenAI capabilities"
    ]
  },
  // 29. Bio-X Panel Hardware Integration
  {
    id: "spr134",
    packageId: "SPR134",
    projectId: "CT-PR-0167",
    title: "Bio-X Medical Panel Integration & Gateway",
    category: "bms-infra",
    status: "Running (Docker)",
    priority: "MEDIUM",
    migrationStatus: "Migrated",
    description: "Custom protocol parser and hardware gateway converting raw serial telemetry from hospital Bio-X panels into standardized JSON payloads for central monitoring.",
    architecture: "Bio-X Hardware -> Protocol Parser -> Docker Microservice -> Central Server",
    tech: ["Docker", "Python", "Serial / Protocol Parser", "Microservices"],
    github: "https://github.com/CriterionWorks/SPR134-Bio-X-Panel-Integration",
    highlights: [
      "Decodes proprietary binary telemetry from hardware panels",
      "Containerized microservice with fault-tolerant serial connection handling",
      "Real-time event logging"
    ]
  },
  // 30. Reverse Proxy & Zero-Downtime Infrastructure Setup
  {
    id: "infra-devops",
    packageId: "Infrastructure",
    projectId: "Team Leadership",
    title: "Enterprise Reverse Proxy & Self-Healing Container Infrastructure",
    category: "bms-infra",
    status: "Running (Production Infra)",
    priority: "HIGH",
    migrationStatus: "Centralized Core",
    description: "Production infrastructure architecture engineered to host 28+ containerized medical microservices. Features Nginx reverse proxies, SSL management, automated Docker Compose auto-healers, and systemd service watchdogs.",
    architecture: "Nginx Gateway (Reverse Proxy + SSL) -> Docker Containers (28+ Microservices) -> Systemd Supervisor",
    tech: ["Docker", "Nginx", "Linux / Systemd", "DevOps", "MicroK8s", "Shell Automation"],
    github: "",
    highlights: [
      "Zero-downtime migration of 28+ legacy PHP/Flask services into Docker containers",
      "Automated container restart & health-check monitoring ensuring 99.9% uptime",
      "SSL reverse proxy termination handling secure hospital API calls"
    ]
  }
];

// Key stats counter data
export const statsData = [
  { value: "28+", label: "Medical Microservices Migrated" },
  { value: "99.9%", label: "System Uptime & Reliability" },
  { value: "25+", label: "GitHub Enterprise Repos" },
  { value: "8+ Yrs", label: "Tech & Leadership Experience" }
];
