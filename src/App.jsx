import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] p-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <header className="text-center mb-6 pb-4 border-b-2 border-gray-200">
          <h1 className="text-4xl font-bold text-black mb-2">John Doe</h1>
          <p className="text-lg text-gray-600 mb-3">Solution Architect & Systems Engineer</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:john.doe@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-[#87CEEB] transition-colors text-sm">
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/johndoe" className="flex items-center gap-2 text-gray-600 hover:text-[#87CEEB] transition-colors text-sm">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/johndoe" className="flex items-center gap-2 text-gray-600 hover:text-[#87CEEB] transition-colors text-sm">
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-5 flex flex-col">
            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-bold text-[#87CEEB] mb-2">Skills</h2>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Enterprise Architecture Design</li>
                  <li>• Cloud Infrastructure (AWS, Azure, GCP)</li>
                  <li>• System Integration & Migration</li>
                  <li>• DevOps & CI/CD Pipeline Implementation</li>
                  <li>• Microservices Architecture</li>
                  <li>• Security & Compliance</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
            </section>

            {/* Technologies Section */}
            <section>
              <h2 className="text-2xl font-bold text-[#87CEEB] mb-2">Technologies</h2>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="space-y-2 text-sm text-gray-600">
                  <div>
                    <h3 className="font-bold text-black mb-1">Cloud Platforms</h3>
                    <p>AWS, Azure, Google Cloud, Kubernetes, Docker</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Programming</h3>
                    <p>Python, JavaScript, Go, Bash</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Infrastructure</h3>
                    <p>Terraform, Ansible, Jenkins, GitLab CI</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Databases</h3>
                    <p>PostgreSQL, MongoDB, Redis, DynamoDB</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Monitoring</h3>
                    <p>Prometheus, Grafana, ELK Stack, DataDog</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section>
              <h2 className="text-2xl font-bold text-[#87CEEB] mb-2">Languages</h2>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• <span className="font-bold text-black">English</span> - Native/Fluent</li>
                  <li>• <span className="font-bold text-black">Swahili</span> - Professional Working Proficiency</li>
                </ul>
              </div>
            </section>

            {/* Certifications Section */}
            <section>
              <h2 className="text-2xl font-bold text-[#87CEEB] mb-2">Certifications</h2>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• AWS Certified Solutions Architect - Associate</li>
                  <li>• Microsoft Certified: Github Copilot</li>
                  <li>• ITILv4 Certified</li>
                  <li>• Certified Kubernetes & Cloud Native Associate (KCNA)</li>
                  <li>• PRINCE2 Foundation</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-5 flex flex-col">
            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-bold text-[#87CEEB] mb-2">Experience</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-black">Systems Engineer</h3>
                  <p className="text-sm text-gray-500 mb-2">Kenya Revenue Authority | January 2023 - Present</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Designed and maintained high-availability infrastructure for critical business systems</li>
                    <li>• Implemented automated deployment of VMs across citrix and huawei environments reducing deployment time by 60%</li>
                    <li>• Managed 25+ Cirtrix servers spanning two different regions by monitoring availability and optimization</li>
                    <li>• Maintained and managed Active directory by administering user accounts, Group policies and printer server for 2000+ users</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-black">IT Support Engineer</h3>
                  <p className="text-sm text-gray-500 mb-2">Mercy Corps Kenya | September 2021 - December 2022</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Overseeing the maintenance, support, and optimization of IT infrastructure and systems across on premises and cloud.</li>
                    <li>• Deployed, configured and monitored Cisco meraki device and UniFi WiFi access points across field offices.</li>
                    <li>• Managed Microsoft 365 environment, configuring services like exchange online, Microsoft Intune, Sharepoint and Teams to enhance 100% productivity</li>
                    <li>• Collaborated with cross-functional teams to deliver 20+ successful projects</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-black">IT Operations Associate</h3>
                  <p className="text-sm text-gray-500 mb-2">Andela | August 2019 - April 2020</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Provided 2, & 3rd level remote support to over 1000+ users across different time zones </li>
                    <li>• Implemented monitoring solutions improving system uptime to 99.9%</li>
                    <li>• Automated routine maintenance tasks saving 20 hours per week</li>
                    <li>• Provided technical support and troubleshooting for production systems</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-bold text-[#87CEEB] mb-2">Education</h2>
              <div className="space-y-4">
                {/* <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-black">Master of Science in Computer Science</h3>
                  <p className="text-sm text-gray-500 mb-1">Stanford University | 2014 - 2016</p>
                  <p className="text-sm text-gray-600">Specialization: Distributed Systems and Cloud Computing</p>
                </div> */}

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-black">Bachelor of Business Information Technology</h3>
                  <p className="text-sm text-gray-500 mb-1">Jomo Kenyatta University of Agriculture & Technology, Kenya | September 2014 - June 2018</p>
                  <p className="text-sm text-gray-600">Second Class Honors: Upper Division</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}