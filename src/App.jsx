import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] p-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12 pb-8 border-b-2 border-gray-200">
          <h1 className="text-5xl font-bold text-black mb-4">Simeon Kanani</h1>
          <p className="text-xl text-gray-600 mb-6">Solution Architect & Systems Engineer</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:simeonkanani@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-[#87CEEB] transition-colors">
              <Mail size={24} />
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/simeon-kanani-b42761124" className="flex items-center gap-2 text-gray-600 hover:text-[#87CEEB] transition-colors">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/simeonkanani" className="flex items-center gap-2 text-gray-600 hover:text-[#87CEEB] transition-colors">
              <Github size={24} />
              <span>GitHub</span>
            </a>
          </div>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8 flex flex-col">
            {/* Skills Section */}
            <section>
              <h2 className="text-3xl font-bold text-[#87CEEB] mb-4">Skills</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="space-y-2 text-gray-600">
                  <li>• Enterprise Architecture Design</li>
                  <li>• Cloud Infrastructure (AWS, Azure, GCP)</li>
                  <li>• System Integration & Migration</li>
                  <li>• DevOps & CI/CD Pipeline Implementation</li>
                  <li>• Microservices Architecture</li>
                  <li>• Automation & Scripting</li>
                  <li>• Security & Compliance</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
            </section>

            {/* Technologies Section */}
            <section>
              <h2 className="text-3xl font-bold text-[#87CEEB] mb-4">Technologies</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h3 className="font-bold text-black mb-2">Cloud Platforms</h3>
                    <p>AWS, Azure, Google Cloud, Kubernetes, Docker</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Programming</h3>
                    <p>Python, JavaScript, Bash</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Infrastructure</h3>
                    <p>Terraform, Ansible, Jenkins, GitLab CI</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Databases</h3>
                    <p>PostgreSQL, MongoDB, Redis, DynamoDB</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Monitoring</h3>
                    <p>Prometheus, Grafana, ELK Stack, DataDog</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section>
              <h2 className="text-3xl font-bold text-[#87CEEB] mb-4">Languages</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="space-y-2 text-gray-600">
                  <li>• <span className="font-bold text-black">English</span> - Fluent</li>
                  <li>• <span className="font-bold text-black">Swahili</span> - Professional Working Proficiency</li>
                </ul>
              </div>
            </section>

            {/* Certifications Section */}
            <section>
              <h2 className="text-3xl font-bold text-[#87CEEB] mb-4">Certifications</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="space-y-2 text-gray-600">
                  <li>• AWS Certified Solutions Architect - Associate </li>
                  <li>• Microsoft Certified: Github Copilot</li>
                  <li>• ITILv4 Certified</li>
                  <li>• Certified Kubernetes & Cloud Native - Associate (CKA)</li>
                  <li>• PRINCE2 Foundation</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8 flex flex-col">
            {/* Experience Section */}
            <section>
              <h2 className="text-3xl font-bold text-[#87CEEB] mb-4">Experience</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-black">Systems Engineer</h3>
                  <p className="text-gray-500 mb-2">Kenya Revenue Authority | January 2023 - Present (On-site)</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Provided 2nd-Line Remote Support for 1500+ Citrix and Huawei virtual desktops, maintaining 100% resource availability and achieving 99% SLA compliance on ticket resolution</li>
                    <li>• Managed VM lifecycle and compute resource availability by utilizing Python scripts for monitoring and optimization.</li>
                    <li>• Provided technical hardware and software troubleshooting for network and windows server environments.</li>
                    <li>• Supported large-scale IT projects, including implementation of FortiEDR solution, FortiNAC, and Windows 11 Upgrades</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-black">IT Support Specialist</h3>
                  <p className="text-gray-500 mb-2">Mercy Corps Kenya | September 2021 - December 2022 (On-site)</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Designed and maintained high-availability infrastructure for critical business systems</li>
                    <li>• Deployed, configured and monitored Cisco meraki device and UniFi WiFi access points to support the LAN and WAN need for both head office and remote offices</li>
                    <li>• Supported and managed Microsoft 365 environment, configuring services like exchange online, Microsoft Intune, Sharepoint and Teams</li>
                    <li>• Collaborated with cross-functional teams to deliver 10+ successful projects</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-black">IT Operations Associate</h3>
                  <p className="text-gray-500 mb-2">Andela | August 2019 - April 2020 (Hybrid)</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Provided 2, & 3rd level remote support to over 1000+ users across different time zones and utilized Slack/Email for prompt resolution, driving customer satisfaction</li>
                    <li>• Implemented monitoring solutions improving system uptime to 99.9%</li>
                    <li>• Automated routine maintenance tasks saving 20 hours per week</li>
                    <li>• Provided technical support and troubleshooting for production systems</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-3xl font-bold text-[#87CEEB] mb-4">Education</h2>
              <div className="space-y-6">
                {/* <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-black">Master of Science in </h3>
                  <p className="text-gray-500 mb-2"></p>
                  <p className="text-gray-600">Specialization: </p>
                </div> */}

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-black">Bachelor of Business Information Technology</h3>
                  <p className="text-gray-500 mb-2">Jomo Kenyatta University of Agriculture & Technology, Kenya | 2014 - 2018</p>
                  <p className="text-gray-600"> Second Class Honors - Upper Division</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}