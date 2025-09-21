import Link from "next/link";
import {
  Brain,
  Database,
  Target,
  BarChart3,
  CheckCircle,
  Cpu,
  MessageSquare,
} from "lucide-react";

export default function MachineLearningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient-foreground opacity-90"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Machine Learning
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Build and deploy ML models that drive business value
            </p>
            <p className="text-lg mb-8 text-blue-200">
              Transform your data into actionable insights with our
              comprehensive machine learning solutions
            </p>
            <Link
              href="/contact-form"
              className="btn-primary bg-white text-blue-600 hover:bg-gray-100"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/services"
              className="text-blue-600 hover:text-blue-800"
            >
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600">Machine Learning</span>
          </nav>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              Harness the power of machine learning to unlock insights from your
              data and drive intelligent decision-making. Our comprehensive ML
              services help you build, deploy, and maintain production-ready
              machine learning models that deliver real business value across
              all industries.
            </p>
          </div>
        </div>
      </section>

      {/* ML Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Machine Learning Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Computer Vision</h3>
              <p className="text-gray-600 mb-6">
                Develop image recognition, object detection, and visual analysis
                solutions for various business applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Image classification and recognition</li>
                <li>• Object detection and tracking</li>
                <li>• Facial recognition systems</li>
                <li>• Medical image analysis</li>
                <li>• Quality control automation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Natural Language Processing
              </h3>
              <p className="text-gray-600 mb-6">
                Build intelligent text analysis, language understanding, and
                conversational AI solutions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Text classification and sentiment analysis</li>
                <li>• Named entity recognition</li>
                <li>• Language translation</li>
                <li>• Chatbots and virtual assistants</li>
                <li>• Document processing automation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Predictive Analytics</h3>
              <p className="text-gray-600 mb-6">
                Create forecasting models and predictive insights to optimize
                business decisions and outcomes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Demand forecasting</li>
                <li>• Risk assessment and modeling</li>
                <li>• Customer behavior prediction</li>
                <li>• Financial market analysis</li>
                <li>• Maintenance scheduling</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Recommendation Systems</h3>
              <p className="text-gray-600 mb-6">
                Develop personalized recommendation engines to enhance customer
                experience and drive engagement.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Product recommendations</li>
                <li>• Content personalization</li>
                <li>• Collaborative filtering</li>
                <li>• Cross-selling optimization</li>
                <li>• Dynamic pricing models</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Deep Learning</h3>
              <p className="text-gray-600 mb-6">
                Implement advanced neural networks and deep learning models for
                complex pattern recognition tasks.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Convolutional Neural Networks (CNN)</li>
                <li>• Recurrent Neural Networks (RNN)</li>
                <li>• Transformer models</li>
                <li>• Generative Adversarial Networks (GAN)</li>
                <li>• Transfer learning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">MLOps & Deployment</h3>
              <p className="text-gray-600 mb-6">
                Deploy, monitor, and maintain machine learning models in
                production environments.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Model deployment and serving</li>
                <li>• A/B testing frameworks</li>
                <li>• Model monitoring and drift detection</li>
                <li>• Automated retraining pipelines</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ML Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Machine Learning Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Discovery</h3>
              <p className="text-gray-600">
                Analyze your data sources, quality, and structure to understand
                what's available for ML model development.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Model Development</h3>
              <p className="text-gray-600">
                Design, train, and validate machine learning models using
                state-of-the-art algorithms and frameworks.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Deployment</h3>
              <p className="text-gray-600">
                Deploy models to production environments with proper monitoring,
                scaling, and security measures.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimization</h3>
              <p className="text-gray-600">
                Continuously monitor, evaluate, and improve model performance to
                ensure optimal business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Industry Applications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Financial Services</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Fraud Detection</h4>
                    <p className="text-sm text-gray-600">
                      Real-time transaction monitoring and anomaly detection
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Credit Scoring</h4>
                    <p className="text-sm text-gray-600">
                      Advanced risk assessment and loan approval automation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Algorithmic Trading</h4>
                    <p className="text-sm text-gray-600">
                      Automated trading strategies and market prediction
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Healthcare</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Medical Imaging</h4>
                    <p className="text-sm text-gray-600">
                      Radiology image analysis and disease detection
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Drug Discovery</h4>
                    <p className="text-sm text-gray-600">
                      Molecular analysis and compound optimization
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Patient Monitoring</h4>
                    <p className="text-sm text-gray-600">
                      Predictive health analytics and early warning systems
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Retail & E-commerce</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Personalization</h4>
                    <p className="text-sm text-gray-600">
                      Customer behavior analysis and product recommendations
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Inventory Management</h4>
                    <p className="text-sm text-gray-600">
                      Demand forecasting and supply chain optimization
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Price Optimization</h4>
                    <p className="text-sm text-gray-600">
                      Dynamic pricing strategies and competitive analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Manufacturing</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Predictive Maintenance</h4>
                    <p className="text-sm text-gray-600">
                      Equipment failure prediction and maintenance scheduling
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Quality Control</h4>
                    <p className="text-sm text-gray-600">
                      Automated defect detection and quality assurance
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Process Optimization</h4>
                    <p className="text-sm text-gray-600">
                      Production line efficiency and resource utilization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technology Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-3">Frameworks</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>Scikit-learn</li>
                <li>Keras</li>
                <li>XGBoost</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-3">Languages</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Python</li>
                <li>R</li>
                <li>Scala</li>
                <li>Java</li>
                <li>SQL</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-3">Cloud Platforms</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>AWS SageMaker</li>
                <li>Azure ML</li>
                <li>Google AI Platform</li>
                <li>Databricks</li>
                <li>Kubernetes</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-3">Tools & Libraries</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Pandas</li>
                <li>NumPy</li>
                <li>Matplotlib</li>
                <li>MLflow</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Proven Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-lg font-semibold mb-2">Model Accuracy</div>
              <div className="text-gray-600">
                Average prediction accuracy across projects
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
              <div className="text-lg font-semibold mb-2">Cost Reduction</div>
              <div className="text-gray-600">
                Operational cost savings through automation
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3x</div>
              <div className="text-lg font-semibold mb-2">Faster Insights</div>
              <div className="text-gray-600">
                Speed of data analysis and decision making
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-lg font-semibold mb-2">Models Deployed</div>
              <div className="text-gray-600">
                Production-ready ML models delivered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Harness the Power of Machine Learning?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how machine learning can transform your business and
            unlock new opportunities for growth.
          </p>
          <Link
            href="/contact-form"
            className="btn-primary bg-white text-blue-600 hover:bg-gray-100"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
