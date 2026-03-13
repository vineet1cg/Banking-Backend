<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Requirement Document - NeoBank Digital Banking Platform</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background: #fff; }
        .page { max-width: 900px; margin: 0 auto; padding: 40px; }
        .header { text-align: center; margin-bottom: 50px; padding-bottom: 30px; border-bottom: 3px solid #1e3a5f; }
        .header h1 { font-size: 36px; color: #1e3a5f; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 2px; }
        .header .subtitle { font-size: 20px; color: #4a6fa5; font-weight: 400; }
        .header .version { margin-top: 15px; font-size: 14px; color: #666; }
        .header .badge { display: inline-block; background: #e8f5e9; color: #2e7d32; padding: 5px 15px; border-radius: 20px; margin-top: 15px; font-weight: 600; }
        .section { margin-bottom: 45px; }
        .section-title { font-size: 22px; color: #1e3a5f; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #e0e0e0; text-transform: uppercase; letter-spacing: 1px; }
        .section-title::before { content: "►"; margin-right: 10px; color: #4a6fa5; }
        .problem-box { background: linear-gradient(135deg, #fff5f5 0%, #ffe0e0 100%); border-left: 5px solid #d32f2f; padding: 25px; margin: 20px 0; border-radius: 0 8px 8px 0; }
        .problem-box h3 { color: #c62828; margin-bottom: 15px; font-size: 18px; }
        .problem-box ul { list-style: none; padding-left: 0; }
        .problem-box li { padding: 8px 0; padding-left: 25px; position: relative; }
        .problem-box li::before { content: "✗"; position: absolute; left: 0; color: #d32f2f; font-weight: bold; }
        .solution-box { background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); border-left: 5px solid #2e7d32; padding: 25px; margin: 20px 0; border-radius: 0 8px 8px 0; }
        .solution-box h3 { color: #1b5e20; margin-bottom: 15px; font-size: 18px; }
        .solution-box ul { list-style: none; padding-left: 0; }
        .solution-box li { padding: 8px 0; padding-left: 25px; position: relative; }
        .solution-box li::before { content: "✓"; position: absolute; left: 0; color: #2e7d32; font-weight: bold; }
        .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0; }
        .feature-card { background: #f8f9fa; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; transition: all 0.3s ease; }
        .feature-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.15); transform: translateY(-2px); }
        .feature-card h4 { color: #1e3a5f; margin-bottom: 10px; font-size: 15px; display: flex; align-items: center; }
        .feature-card h4::before { content: "◆"; margin-right: 10px; color: #4a6fa5; font-size: 12px; }
        .feature-card p { font-size: 13px; color: #555; }
        .feature-card .feature-tag { display: inline-block; background: #e3f2fd; color: #1565c0; font-size: 11px; padding: 2px 8px; border-radius: 10px; margin-left: 8px; }
        .tech-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .tech-table th { background: #1e3a5f; color: white; padding: 12px; text-align: left; font-weight: 600; font-size: 14px; }
        .tech-table td { padding: 12px; border-bottom: 1px solid #e0e0e0; font-size: 14px; }
        .tech-table tr:nth-child(even) { background: #f8f9fa; }
        .tech-table tr:hover { background: #e3f2fd; }
        .tech-table .check { color: #2e7d32; font-weight: bold; }
        .req-badge { display: inline-block; padding: 4px 10px; border-radius: 15px; font-size: 11px; font-weight: 600; text-transform: uppercase; }
        .req-mandatory { background: #ffebee; color: #c62828; }
        .req-core { background: #e3f2fd; color: #1565c0; }
        .req-enhanced { background: #f3e5f5; color: #7b1fa2; }
        .phase-card { background: #fff; border: 2px solid #1e3a5f; border-radius: 12px; padding: 25px; margin-bottom: 20px; }
        .phase-card h3 { color: #1e3a5f; margin-bottom: 15px; font-size: 18px; display: flex; align-items: center; }
        .phase-number { background: #1e3a5f; color: white; width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 14px; }
        .highlight-box { background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); border: 2px solid #1e88e5; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .highlight-box h4 { color: #1565c0; margin-bottom: 10px; }
        .toc { background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 40px; }
        .toc h3 { color: #1e3a5f; margin-bottom: 15px; }
        .toc ul { list-style: none; columns: 2; }
        .toc li { padding: 6px 0; border-bottom: 1px solid #e0e0e0; font-size: 14px; }
        .bullet-list { list-style: none; padding-left: 0; }
        .bullet-list li { padding: 8px 0; padding-left: 25px; position: relative; }
        .bullet-list li::before { content: "•"; position: absolute; left: 8px; color: #1e3a5f; font-weight: bold; font-size: 18px; }
        .metric-box { display: inline-block; text-align: center; padding: 15px 25px; background: #f8f9fa; border-radius: 8px; margin: 5px; }
        .metric-box .num { font-size: 28px; font-weight: bold; color: #1e3a5f; }
        .metric-box .lbl { font-size: 12px; color: #666; }
        .footer { text-align: center; padding-top: 30px; border-top: 2px solid #e0e0e0; margin-top: 50px; color: #666; font-size: 14px; }
        .req-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
        .req-table th { background: #1e3a5f; color: white; padding: 10px; text-align: left; font-size: 13px; }
        .req-table td { padding: 10px; border-bottom: 1px solid #e0e0e0; font-size: 13px; vertical-align: top; }
        .req-table tr:nth-child(even) { background: #f8f9fa; }
        @media print { .page { padding: 20px; } .feature-card:hover { box-shadow: none; transform: none; } }
        @media (max-width: 768px) { .feature-grid, .toc ul { grid-template-columns: 1fr; columns: 1; } }
    </style>
</head>
<body>
    <div class="page">
        <div class="header">
            <h1>Product Requirement Document</h1>
            <div class="subtitle">NeoBank - Digital Banking Platform</div>
            <div class="version">Version 2.0 | Hackathon Edition | March 2026</div>
            <div class="badge">🎯 Full Stack Hackathon Project</div>
        </div>

        <div class="toc">
            <h3>📋 Table of Contents</h3>
            <ul>
                <li>1. Executive Summary</li>
                <li>2. Problem Statement</li>
                <li>3. Proposed Solution</li>
                <li>4. Tech Stack</li>
                <li>5. Hackathon Requirements</li>
                <li>6. Product Features</li>
                <li>7. Implementation Roadmap</li>
                <li>8. Conclusion</li>
            </ul>
        </div>

        <div class="section">
            <h2 class="section-title">1. Executive Summary</h2>
            <p><strong>NeoBank</strong> is a comprehensive digital banking platform designed to revolutionize how individuals manage their finances. In an era where traditional banking often falls short in delivering seamless, user-centric experiences, NeoBank emerges as a modern solution that combines cutting-edge technology with intuitive design.</p>
            <br>
            <p>This project is developed as a <strong>Full Stack Hackathon submission</strong>, implementing all mandatory hackathon requirements while solving real-world banking challenges. The application demonstrates proficiency in React, Tailwind CSS, Node.js, Express.js, and MongoDB.</p>
        </div>

        <div class="section">
            <h2 class="section-title">2. Problem Statement</h2>
            <div class="problem-box">
                <h3>Challenges in Traditional Banking</h3>
                <ul>
                    <li><strong>Complex User Interfaces</strong> - Legacy banking apps are cluttered and unintuitive</li>
                    <li><strong>Limited Accessibility</strong> - Traditional banks operate within restricted hours</li>
                    <li><strong>Slow Transactions</strong> - Fund transfers often take days to complete</li>
                    <li><strong>Poor Financial Visibility</strong> - Customers struggle to see complete financial health</li>
                    <li><strong>Security Concerns</strong> - Increasing cyber threats demand better protection</li>
                    <li><strong>Hidden Fees</strong> - Complicated fee structures confuse customers</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">3. Proposed Solution</h2>
            <div class="solution-box">
                <h3>How NeoBank Addresses These Challenges</h3>
                <ul>
                    <li>Modern, intuitive interface built with <strong>React & Tailwind CSS</strong></li>
                    <li>24/7 cloud-native accessibility</li>
                    <li>Real-time transactions with instant balance updates</li>
                    <li>Unified financial dashboard</li>
                    <li>Bank-grade security with JWT authentication</li>
                    <li>Transparent operations with clear fee structure</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">4. Technology Stack</h2>
            <p style="margin-bottom: 15px;"><strong>✅ Required Hackathon Tech Stack - Fully Implemented</strong></p>
            <table class="tech-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Technology</th>
                        <th>Implementation Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><strong>Frontend</strong></td><td>ReactJS</td><td class="check">✓ Implemented</td></tr>
                    <tr><td><strong>Styling</strong></td><td>Tailwind CSS</td><td class="check">✓ Implemented</td></tr>
                    <tr><td><strong>Backend</strong></td><td>Node.js</td><td class="check">✓ Implemented</td></tr>
                    <tr><td><strong>Framework</strong></td><td>Express.js</td><td class="check">✓ Implemented</td></tr>
                    <tr><td><strong>Database</strong></td><td>MongoDB</td><td class="check">✓ Implemented</td></tr>
                </tbody>
            </table>
            
            <div class="feature-grid" style="margin-top: 20px;">
                <div class="feature-card">
                    <h4>Frontend Architecture</h4>
                    <p>React 18+ with Hooks, React Router, Context API, Axios</p>
                </div>
                <div class="feature-card">
                    <h4>Backend Architecture</h4>
                    <p>Node.js + Express REST API, Mongoose ODM, JWT Auth</p>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">5. Hackathon Requirements Checklist</h2>
            <p style="margin-bottom: 15px;">All 13 mandatory requirements from the hackathon event:</p>
            
            <table class="req-table">
                <thead>
                    <tr>
                        <th style="width: 50px;">#</th>
                        <th style="width: 200px;">Requirement</th>
                        <th>Implementation Details</th>
                        <th style="width: 80px;">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><strong>Routing & Navigation</strong></td>
                        <td>React Router with pages: Home, Login, Signup, Dashboard, Profile</td>
                        <td><span class="req-badge req-mandatory">✓</span></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><strong>React Hooks</strong></td>
                        <td>useState, useEffect, useRef, useContext used throughout</td>
                        <td><span class="req-badge req-mandatory">✓</span></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><strong>State Management</strong></td>
                        <td>Context API for auth state, global settings, theme</td>
                        <td><span class="req-badge req-mandatory">✓</span></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td><strong>Authentication</strong></td>
                        <td>Signup, Login, JWT tokens, LocalStorage, Protected routes</td>
                        <td><span class="req-badge req-mandatory">✓</span></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td><strong>Theme Support</strong></td>
                        <td>Dark/Light mode toggle with persistence</td>
                        <td><span class="req-badge req-mandatory">✓</span></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td><strong>Search, Filter, Sort</strong></td>
                        <td>Transaction search, category filter, date sorting</td>
                        <td><span class="req-badge req-mandatory">✓</span></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td><strong>Debouncing</strong></td>
                        <td>Search bar with debounced API calls</td>
                        <td><span class="req-badge req-mandatory">✓</span></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td><strong>Pagination</strong></td>
                        <td>Backend pagination (limit/skip) with UI controls</td>
                        <td><span class="req-badge req-mandatory">✓</span></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td><strong>CRUD Operations</strong></td>
                        <td>Create, Read, Update, Delete for accounts & transactions</td>
                        <td><span class="req-badge req-mandatory">✓</span></td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td><strong>API Integration</strong></td>
                        <td>REST APIs with Express, error handling, loading states</td>
                        <td><span class="req-badge req-mandatory">✓</span></td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td><strong>Form Validation</strong></td>
                        <td>Input validation, error messages, controlled components</td>
                        <td><span class="req-badge req-mandatory">✓</span></td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td><strong>Responsive UI</strong></td>
                        <td>Tailwind CSS for mobile, tablet, desktop</td>
                        <td><span class="req-badge req-mandatory">✓</span></td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td><strong>Error Handling</strong></td>
                        <td>Backend error responses, frontend error display, try-catch</td>
                        <td><span class="req-badge req-mandatory">✓</span></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="section">
            <h2 class="section-title">6. Product Features</h2>
            
            <h3 style="color: #1e3a5f; margin: 20px 0 15px 0; font-size: 16px;">6.1 Authentication & Security <span class="req-badge req-core">Core</span></h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h4>User Registration <span class="feature-tag">useState</span></h4>
                    <p>Secure signup with email validation and password strength requirements.</p>
                </div>
                <div class="feature-card">
                    <h4>User Login <span class="feature-tag">useEffect</span></h4>
                    <p>Email/password authentication with JWT token generation.</p>
                </div>
                <div class="feature-card">
                    <h4>JWT Authentication <span class="feature-tag">Context API</span></h4>
                    <p>Stateless token-based auth with HTTP-only cookies & LocalStorage.</p>
                </div>
                <div class="feature-card">
                    <h4>Protected Routes <span class="feature-tag">React Router</span></h4>
                    <td>Private routes for Dashboard, Profile requiring authentication.</td>
                </div>
            </div>
            
            <h3 style="color: #1e3a5f; margin: 25px 0 15px 0; font-size: 16px;">6.2 Account Management <span class="req-badge req-core">Core</span></h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h4>Dashboard <span class="feature-tag">useContext</span></h4>
                    <p>Real-time account balance, recent transactions overview.</p>
                </div>
                <div class="feature-card">
                    <h4>Profile Management</h4>
                    <p>Update personal info, contact details, preferences.</p>
                </div>
                <div class="feature-card">
                    <h4>Account Statements</h4>
                    <p>View and filter transaction history.</p>
                </div>
                <div class="feature-card">
                    <h4>Settings</h4>
                    <p>Theme toggle, notification preferences.</p>
                </div>
            </div>
            
            <h3 style="color: #1e3a5f; margin: 25px 0 15px 0; font-size: 16px;">6.3 Transactions & Operations <span class="req-badge req-core">Core</span></h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h4>Fund Transfer <span class="feature-tag">CRUD</span></h4>
                    <p>Transfer funds between accounts (Create operation).</p>
                </div>
                <div class="feature-card">
                    <h4>Transaction History <span class="feature-tag">Read</span></h4>
                    <p>Paginated transaction list with filters (Read operation).</p>
                </div>
                <div class="feature-card">
                    <h4>Edit Transaction <span class="feature-tag">Update</span></h4>
                    <p>Modify transaction details (Update operation).</p>
                </div>
                <div class="feature-card">
                    <h4>Delete Transaction <span class="feature-tag">Delete</span></h4>
                    <p>Remove unwanted transactions (Delete operation).</p>
                </div>
            </div>
            
            <h3 style="color: #1e3a5f; margin: 25px 0 15px 0; font-size: 16px;">6.4 Search, Filter & Pagination <span class="req-badge req-enhanced">Enhanced</span></h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h4>Search <span class="feature-tag">Debounce</span></h4>
                    <p>Search transactions by description with 300ms debounce.</p>
                </div>
                <div class="feature-card">
                    <h4>Filter</h4>
                    <p>Filter by category, date range, transaction type.</p>
                </div>
                <div class="feature-card">
                    <h4>Sort</h4>
                    <p>Sort by amount, date (ascending/descending).</p>
                </div>
                <div class="feature-card">
                    <h4>Pagination</h4>
                    <p>Backend pagination with 10 items per page, page controls.</p>
                </div>
            </div>
            
            <h3 style="color: #1e3a5f; margin: 25px 0 15px 0; font-size: 16px;">6.5 UI/UX Features <span class="req-badge req-enhanced">Enhanced</span></h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <h4>Dark/Light Mode <span class="feature-tag">useState</span></h4>
                    <p>Theme toggle with localStorage persistence.</p>
                </div>
                <div class="feature-card">
                    <h4>Loading States <span class="feature-tag">API</span></h4>
                    <p>Skeleton loaders and spinners during API calls.</p>
                </div>
                <div class="feature-card">
                    <h4>Error Handling</h4>
                    <p>Toast notifications for success/error feedback.</p>
                </div>
                <div class="feature-card">
                    <h4>Responsive Design</h4>
                    <p>Mobile-first Tailwind CSS implementation.</p>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">7. Implementation Roadmap</h2>
            
            <div class="phase-card">
                <h3><span class="phase-number">1</span> Phase 1: Foundation (Day 1)</h3>
                <ul class="bullet-list">
                    <li>Project setup: React + Tailwind + Express + MongoDB</li>
                    <li>Backend: User model, Auth APIs (Register/Login)</li>
                    <li>JWT authentication with LocalStorage</li>
                    <li>Frontend: React Router, Auth pages, Protected routes</li>
                    <li><strong>Delivers:</strong> Requirements 1, 2, 3, 4, 11</li>
                </ul>
            </div>
            
            <div class="phase-card">
                <h3><span class="phase-number">2</span> Phase 2: Core Features (Day 2)</h3>
                <ul class="bullet-list">
                    <li>Dashboard with account overview</li>
                    <li>Transaction CRUD operations</li>
                    <li>Search, filter, sort functionality</li>
                    <li>Pagination implementation</li>
                    <li><strong>Delivers:</strong> Requirements 6, 7, 8, 9, 10, 13</li>
                </ul>
            </div>
            
            <div class="phase-card">
                <h3><span class="phase-number">3</span> Phase 3: UI Polish (Day 3)</h3>
                <ul class="bullet-list">
                    <li>Dark/Light mode toggle with localStorage</li>
                    <li>Responsive design optimization</li>
                    <li>Loading states & error handling</li>
                    <li>Final testing & presentation prep</li>
                    <li><strong>Delivers:</strong> Requirements 5, 12</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">8. Success Metrics</h2>
            <div style="text-align: center; margin: 20px 0;">
                <div class="metric-box"><div class="num">13/13</div><div class="lbl">Requirements Met</div></div>
                <div class="metric-box"><div class="num">100%</div><div class="lbl">Tech Stack Coverage</div></div>
                <div class="metric-box"><div class="num">100%</div><div class="lbl">Responsive</div></div>
                <div class="metric-box"><div class="num">3</div><div class="lbl">Day Timeline</div></div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">9. Conclusion</h2>
            <p>NeoBank is a complete full-stack banking application built for the Full Stack Hackathon. It demonstrates mastery of React, Tailwind CSS, Node.js, Express.js, and MongoDB while implementing all 13 mandatory hackathon requirements.</p>
            <br>
            <div class="highlight-box">
                <h4>🚀 Hackathon Readiness</h4>
                <ul class="bullet-list">
                    <li>✓ All required tech stack implemented</li>
                    <li>✓ All 13 mandatory features completed</li>
                    <li>✓ Real-world problem solved</li>
                    <li>✓ Production-ready code structure</li>
                </ul>
            </div>
        </div>

        <div class="footer">
            <p><strong>NeoBank Digital Banking Platform</strong></p>
            <p>Product Requirement Document | Version 2.0 | Hackathon Edition</p>
            <p>Built with ❤️ using React, Tailwind, Node.js, Express, MongoDB</p>
        </div>
    </div>
</body>
</html>
