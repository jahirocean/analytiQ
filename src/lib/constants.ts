import {
  Database,
  Cpu,
  Brain,
  CloudSun,
  Satellite,
  SearchCode,
  Map,
  ChartBar,
  GraduationCap,
  MonitorCog,
  ChartLine,
  Network,
  Users,
  Handshake,
  Rocket,
  UserStar,
} from "lucide-react";

export const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Business Intelligence & Strategic Insights",
        href: "/services/Business-Intelligence-&-Strategic-Insights",
      },
      { name: "Academic & Thesis Data Analysis", href: "/services/" },
      { name: "Analysis & Statistical Modeling", href: "/services/" },
      { name: "Geospatial Data Analysis", href: "/services/" },
      { name: "Remote Sensing & Oceanography", href: "/services/" },
      { name: "Climate & Environmental Data", href: "/services/" },
      { name: "Predictive Modeling & ML", href: "/services/" },
      { name: "Interactive Data Visualization", href: "/services/" },
      { name: "Automated Data Pipelines", href: "/services/" },
      { name: "Data Cleaning & Preprocessing", href: "/services/" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },

  { name: "Contact", href: "/contact" },
  { name: "About Us", href: "/about" },
];

export const tags = [
  {
    name: "SPSS",
    color:
      "bg-green-500/20 border-green-500 text-green-500 hover:bg-green-500/40",
    href: "/category/spss",
  },
  {
    name: "R",
    color: "bg-red-500/20 border-red-500 text-red-500 hover:bg-red-500/40",
    href: "/category/r",
  },
  {
    name: "Python",
    color: "bg-blue-500/20 border-blue-500 text-blue-500 hover:bg-blue-500/40",
    href: "/category/python",
  },
  {
    name: "Excel",
    color: "bg-cyan-500/20 border-cyan-500 text-cyan-500 hover:bg-cyan-500/40",
    href: "/category/excel",
  },
  {
    name: "Qualitative Data Analysis",
    color:
      "bg-yellow-500/20 border-yellow-500 text-yellow-500 hover:bg-yellow-500/40",
    href: "/category/qualitative-data-analysis",
  },
  {
    name: "Quantitative Data Analysis",
    color:
      "bg-indigo-500/20 border-indigo-500 text-indigo-500 hover:bg-indigo-500/40",
    href: "/category/quantitative-data-analysis",
  },
  {
    name: "Data Analytics",
    color:
      "bg-purple-500/20 border-purple-500 text-purple-500 hover:bg-purple-500/40",
    href: "/category/data-analytics",
  },
  {
    name: "Big data",
    color:
      "bg-orange-500/20 border-orange-500 text-orange-500 hover:bg-orange-500/40",
    href: "/category/big-data",
  },
  {
    name: "Machine Learning",
    color: "bg-rose-500/20 border-rose-500 text-rose-500 hover:bg-rose-500/40",
    href: "/category/machine-learning",
  },
];

export const features = [
  {
    name: "Business Intelligence & Strategic Insights",
    description:
      "Go beyond raw data. We create interactive dashboards, build key performance indicators (KPIs), and deliver actionable insights to support strategic decision-making in business.",
    icon: ChartLine,

    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Academic & Thesis Data Analysis",
    description:
      "We provide comprehensive data analysis for dissertations, theses, and research papers, ensuring robust statistical modeling and publication-ready results.",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Analysis & Statistical Modeling",
    description:
      "Leveraging the full power of Python & R to uncover trends, test hypotheses, and build robust statistical models from your data.",
    icon: Brain,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Geospatial Data Analysis",
    description:
      "Expert integration of GIS, remote sensing, and field data. We create unified geospatial datasets for powerful, location-based analysis.",
    icon: Map,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Remote Sensing & Oceanography",
    description:
      "Analyzing satellite imagery and oceanographic data (e.g., temperature, salinity, currents) to monitor environmental conditions.",
    icon: Satellite,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Climate & Environmental Data",
    description:
      "Analyzing long-term climate datasets and environmental variables to assess impacts, model scenarios, and inform policy.",
    icon: CloudSun,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Predictive Modeling & ML",
    description:
      "Building machine learning models to forecast environmental events, classify habitats, and predict species distribution patterns.",
    icon: Cpu,
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "Interactive Data Visualization",
    description:
      "Creating compelling charts, maps, and interactive dashboards (R Shiny, Dash) to make complex data accessible to all stakeholders.",
    icon: ChartBar,
    color: "from-teal-500 to-green-400",
  },
  {
    name: "Automated Data Pipelines",
    description:
      "Designing and implementing automated workflows (ETL) to efficiently process and update your data from various sources.",
    icon: Database,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Data Cleaning & Preprocessing",
    description:
      "The crucial first step. We handle missing values, correct errors, and structure your raw data for reliable, accurate analysis.",
    icon: SearchCode,
    color: "from-pink-500 to-purple-500",
  },
];

export const aboutFeatures = [
  {
    title: "Bespoke Analytics",
    description:
      "We create bespoke data solutions backed by top-level industry expertise to solve your unique challenges.",
    icon: MonitorCog,
    color: "bg-blue-500/20 text-blue-500",
  },
  {
    title: "A Data-Native Process",
    description:
      "Over a decade of operating with Agile teams in a genuine data-driven culture environment.",
    icon: Network,
    color: "bg-green-500/20 text-green-500",
  },
  {
    title: "Advanced Teams",
    description:
      "Our engineers have advanced degrees, ensuring strong development and analytical capabilities.",
    icon: Users,
    color: "bg-purple-500/20 text-purple-500",
  },
  {
    title: "Excellent Client Experiences",
    description:
      "Our deep technology and industry expertise enables co-development of superior customer experiences.",
    icon: Handshake,
    color: "bg-yellow-500/20 text-yellow-500",
  },
  {
    title: "Industry-Specific Accelerators",
    description:
      "We create accelerators that optimize time-to-market and drive industry innovation.",
    icon: Rocket,
    color: "bg-red-500/20 text-red-500",
  },
  {
    title: "Focused on Partnerships",
    description:
      "We commit to growing our partnership networks with market leaders to deliver a global positive outcome.",
    icon: UserStar,
    color: "bg-cyan-500/20 text-cyan-500",
  },
];

export const statistics = [
  { number: "+100", title: "Global Projects Completed" },
  { number: "95%", title: "Client Satisfaction Rate" },
  { number: "+50", title: "Advanced Analytics Specialists" },
  { number: "20+", title: "Industries Served" },
];

export const projects: {
  title: string;
  href: string;
  description: string;
  date: string;
  img: string;
  color: string;
}[] = [
  {
    title: "A Primary Investigation of Seasonal Upwelling Zone along the Exclusive Economic Zone of Bangladesh",
    description:
      "The Bay of Bengal, a tropical basin with strong monsoonal winds, significant freshwater influx, and pronounced surface stratification, presents complex upwelling dynamics influenced by seasonally reversing circulation.",
    img: "/Thesis-poster1.png",
    date: "Monday, July 14th 2025",
    color: "from-blue-500 to-cyan-500",
    href: "/projects/Seasonal-Upwelling-Zone",
  },
  {
    title: "Visualizing US Flight Routes with R",
    description:
      "Have you ever wondered what the entire US flight network looks like? Raw flight data",
    img: "/3d-forest-type-map.png",
    date: "Monday, July 14th 2025",
    color: "from-blue-500 to-cyan-500",
    href: "/projects",
  },
  {
    title: "Visualizing US Flight Routes with R",
    description:
      "Have you ever wondered what the entire US flight network looks like? Raw flight data can be",
    img: "/us-flight-routes.png",
    date: "Monday, July 14th 2025",
    color: "from-blue-500 to-cyan-500",
    href: "/projects",
  },
  {
    title: "Visualizing US Flight Routes with R",
    description:
      "Have you ever wondered what the entire US flight network looks like? Raw flight data can be overwhelming,",
    img: "/portugal-forest-height-2020.png",
    date: "Monday, July 14th 2025",
    color: "from-blue-500 to-cyan-500",
    href: "/projects",
  },
];
