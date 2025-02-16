export const templates = [
    {
      id: "blank",
      label: "Blank Document",
      imageUrl: "/blank-document.svg",
      initialContent: "<p></p>",
    },
    {
      id: "software-proposal",
      label: "Software Development Proposal",
      imageUrl: "/software-proposal.svg",
      initialContent: `
        <h1 style="text-align: center;">Software Development Proposal</h1>
        <p><strong>Prepared for:</strong> [Client Name]</p>
        <p><strong>Prepared by:</strong> [Your Company]</p>
        <p><strong>Date:</strong> [Date]</p>
  
        <h2>1. Introduction</h2>
        <p>We are pleased to present this software development proposal to address your business needs and deliver a high-quality, scalable, and efficient solution.</p>
  
        <h2>2. Project Overview</h2>
        <p>The purpose of this project is to develop a [Software Type] that will enable [Client’s Business Goal]. This solution will include [Core Features].</p>
  
        <h2>3. Scope of Work</h2>
        <p>This project includes the development of:</p>
        <ul>
          <li>User authentication and authorization</li>
          <li>Custom dashboard and reporting</li>
          <li>Integration with third-party APIs</li>
          <li>Mobile and web-friendly interface</li>
        </ul>
  
        <h2>4. Timeline</h2>
        <p>The estimated timeline for completion is [Project Duration] weeks.</p>
  
        <h2>5. Cost Estimate</h2>
        <p>The total project cost is estimated at $[Amount].</p>
  
        <h2>6. Conclusion</h2>
        <p>We look forward to collaborating with you on this exciting project. Please let us know if you have any questions.</p>
      `,
    },
    {
      id: "project-proposal",
      label: "Project Proposal",
      imageUrl: "/project-proposal.svg",
      initialContent: `
        <h1 style="text-align: center;">Project Proposal</h1>
        <p><strong>Project Title:</strong> [Project Name]</p>
        <p><strong>Submitted by:</strong> [Your Name / Organization]</p>
        <p><strong>Date:</strong> [Date]</p>
  
        <h2>1. Executive Summary</h2>
        <p>This proposal outlines the scope, objectives, and deliverables of the [Project Name] project. Our goal is to [Primary Goal of Project].</p>
  
        <h2>2. Background</h2>
        <p>The need for this project arises from [Explain the need or problem]. This proposal aims to address these challenges effectively.</p>
  
        <h2>3. Objectives</h2>
        <p>The primary objectives of this project are:</p>
        <ul>
          <li>Deliver [Feature 1]</li>
          <li>Improve [Feature 2]</li>
          <li>Enhance efficiency in [Process]</li>
        </ul>
  
        <h2>4. Budget & Resources</h2>
        <p>The estimated budget for this project is $[Amount]. Resources required include [Equipment, Manpower, Software].</p>
  
        <h2>5. Timeline</h2>
        <p>The project is expected to be completed within [Duration] weeks.</p>
  
        <h2>6. Conclusion</h2>
        <p>We appreciate your time reviewing this proposal and look forward to your feedback.</p>
      `,
    },
    {
      id: "business-letter",
      label: "Business Letter",
      imageUrl: "/business-letter.svg",
      initialContent: `
        <p>[Your Name]</p>
        <p>[Your Address]</p>
        <p>[City, State, ZIP]</p>
        <p>[Date]</p>
  
        <p>[Recipient Name]</p>
        <p>[Company Name]</p>
        <p>[Recipient Address]</p>
        <p>[City, State, ZIP]</p>
  
        <p>Dear [Recipient Name],</p>
  
        <p>I am writing to formally address [Purpose of Letter]. Over the past few weeks, we have been evaluating [Topic of Discussion] and would like to present our observations.</p>
  
        <p>Our team has identified key areas of improvement, including [Briefly Mention Areas]. We believe that by implementing [Proposed Solution], we can achieve [Desired Outcome].</p>
  
        <p>Please let me know a convenient time to discuss this matter further.</p>
  
        <p>Sincerely,</p>
        <p>[Your Name]</p>
        <p>[Your Position]</p>
      `,
    },
    {
      id: "resume",
      label: "Resume",
      imageUrl: "/resume.svg",
      initialContent: `
        <h1 style="text-align: center;">[Your Name]</h1>
        <p style="text-align: center;">[Your Contact Information] | [Your LinkedIn] | [Your Email]</p>
  
        <h2>Professional Summary</h2>
        <p>Highly motivated [Your Profession] with [X] years of experience in [Industry]. Skilled in [Key Skills], with a proven track record of delivering [Major Achievements].</p>
  
        <h2>Work Experience</h2>
        <p><strong>[Job Title]</strong> | [Company Name] | [Year - Year]</p>
        <ul>
          <li>Implemented [Major Accomplishment]</li>
          <li>Managed [Task or Project]</li>
          <li>Improved [Process or KPI] by X%</li>
        </ul>
  
        <h2>Education</h2>
        <p><strong>[Degree Name]</strong> | [University Name] | [Year]</p>
  
        <h2>Skills</h2>
        <ul>
          <li>[Skill 1]</li>
          <li>[Skill 2]</li>
          <li>[Skill 3]</li>
        </ul>
  
        <h2>Certifications</h2>
        <p>[Certification Name], [Issuing Organization], [Year]</p>
  
        <h2>References</h2>
        <p>Available upon request.</p>
      `,
    },
    {
        id: "cover-letter",
        label: "Cover Letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `
          <p>[Your Name]</p>
          <p>[Your Address]</p>
          <p>[City, State, ZIP]</p>
          <p>[Your Email] | [Your Phone Number]</p>
          <p>[Date]</p>
      
          <p>[Hiring Manager's Name]</p>
          <p>[Company Name]</p>
          <p>[Company Address]</p>
          <p>[City, State, ZIP]</p>
      
          <p>Dear [Hiring Manager's Name],</p>
      
          <p>I am excited to apply for the [Job Title] position at [Company Name]. With my background in [Your Field] and experience in [Relevant Experience], I am confident in my ability to contribute significantly to your team.</p>
      
          <p>During my time at [Previous Company], I [Briefly Mention Key Achievement]. My expertise in [Key Skill] has enabled me to [Impact or Contribution]. I am particularly drawn to this opportunity because of [Company’s Value or Project That Interests You].</p>
      
          <p>I would welcome the opportunity to discuss how my skills align with your needs. Please feel free to contact me at your earliest convenience.</p>
      
          <p>Thank you for your time and consideration.</p>
      
          <p>Sincerely,</p>
          <p>[Your Name]</p>
        `,
      },
      {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `
          <p>[Your Name]</p>
          <p>[Your Address]</p>
          <p>[City, State, ZIP]</p>
          <p>[Your Email] | [Your Phone Number]</p>
          <p>[Date]</p>
      
          <p>[Recipient's Name]</p>
          <p>[Recipient's Address]</p>
          <p>[City, State, ZIP]</p>
      
          <p>Dear [Recipient's Name],</p>
      
          <p>I am writing to formally address [Purpose of Letter]. Over the past few weeks, we have been evaluating [Subject of the Letter], and I wanted to share my thoughts.</p>
      
          <p>We have observed [Brief Explanation of the Issue or Topic] and believe that [Possible Solution or Outcome]. Given the significance of this matter, I would appreciate the opportunity to discuss this further at your earliest convenience.</p>
      
          <p>Thank you for your time and consideration. I look forward to your response.</p>
      
          <p>Sincerely,</p>
          <p>[Your Name]</p>
        `,
      },
      
  ];
  